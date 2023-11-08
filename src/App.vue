  <!-- 모든 컴포넌트의 집합  -->
  <script>
  import axios from 'axios';
import { RouterLink } from 'vue-router';

  export default {
    data() {
        return {
            expanded: false,
            data: null,
            loading: false,
            error: null,
            assetId: '83ecd1bb-0edb-4b38-9d45-667ac1a500e2',
            view: true,
            city: '',
            temperature: '',
            humidity: '',
            weather: '',
            final_prediction: '',
            final_prediction_str: '',
            apiData: null,
            isSidebarOpen: false //사이드바 상태
        };
    },
    methods: {
        toggleMenu() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        navigateHome() {
          this.$router.push('/');
        },
        async fetchAssetData() {
            this.loading = true;
            this.error = null;
            try {
                const API_URL = `https://p3j7hfgon0.execute-api.us-west-2.amazonaws.com/`;
                const response = await axios.get(API_URL);
                this.apiData = response.data;
                this.updateTmpData(); // apiData가 업데이트되면 updateTmpData 호출
            }
            catch (error) {
                console.error('Error fetching asset data:', error);
                this.error = error.message || 'Error fetching data';
            }
            finally {
                this.loading = false;
            }
        },
        updateTmpData() {
            this.final_prediction = this.apiData.doubleValues[4];
            if (this.final_prediction == -1) {
                this.final_prediction_str = "화재";
                document.getElementById("final").classList.add("blink");
            }
            else {
                this.final_prediction_str = "정상 상태";
            }
        },
        onMenuClick(menuItem) {
            if (menuItem == 'Menu 1') {
                this.$router.push('/LiveSensorPage');
            }
        },
        toggleExpanded() {
            this.expanded = !this.expanded;
        },
        searchWeather() {
            const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=36.34&lon=127.28&appid=66642b3fa015dc2047aff31ed3ff29e4&units=metric';
            axios.get(BASE_URL)
                .then((result) => {
                this.city = result.data.name;
                this.temperature = result.data.main.temp;
                this.humidity = result.data.main.humidity;
                this.weather = result.data.weather[0].main;
                this.view = true;
            })
                .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
        },
    },
    created() {
        this.fetchAssetData();
        this.searchWeather();
        document.title = "diaL 화재 관리 관리자";
    },
    components: { RouterLink }
}
  </script>
  
  
  <template>
      <body>
        <div class="title-container">
          <table border="0" style="width: 100%; margin: 5px;">
            <tr>
              <td rowspan="2">
                <img src = "../public/static/Dial-icon.jpg" alt="Icon Description" class="icon"  @click="navigateHome">
              </td>
              <td>
                <h1 class="main-title">화재 관리자 페이지 </h1>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p class="sub-title">한밭대학교 N5 302호</p>
              </td>
            </tr>
          </table>           
        </div>
       
          <div class ="sidebar-container">
          <div>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>   
            <b-sidebar class="bar" id="nav-collapse" title="DIAL 관리자 메뉴" shadow :visible.sync="isSidebarOpen">
              <b-nav vertical>
                <b-nav-item class="menu-button" to="/LiveSensorPage">실시간 데이터</b-nav-item>
                <b-nav-item class="menu-button" to="/MLPage">실시간 화재 판단</b-nav-item>
                <b-nav-item class="menu-button" to="/LiveCCTV">실시간 CCTV</b-nav-item>
                <b-nav-item class="menu-button" to="/TwinPage">3D 가상 건물</b-nav-item>
      
              </b-nav>
            </b-sidebar>
          </div>
          <h1 id="final" class="final-prediction">최종 감지 : {{ final_prediction_str }}</h1>
        </div>

          
       
       
        
        <!-- 메인 화면-->
        <div>
          <router-view></router-view>
        </div>
       
          <!--
          <div>
            <nav v-show="isSidebarOpen">
              <router-link to="/" class="menu-button">Home</router-link>
              <router-link to="/LiveSensorPage" class="menu-button">실시간 데이터</router-link>
              <router-link to="/MLPage" class="menu-button">실시간 화재 판단</router-link>
              <router-link to="/LiveCCTV" class="menu-button">실시간 CCTV</router-link>
              <router-link to="/TwinPage" class="menu-button">3D 가상 건물</router-link> 
            </nav>
            <router-view></router-view>
         </div>
        -->
    

       
        <div class="weather-info">
          <table align="center">
            <tr>
              <td>
                <p class="weather" style="font-size: large;">지역 </p>
              </td>
              <td>
                <p class="weather"> {{ city }}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p style="font-size: large;">날씨 </p>
              </td>
              <td>
                <p> {{ weather }}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p style="font-size: large;">온도 </p>
              </td>
              <td>
                <p> {{ temperature }}°C</p>
              </td>
            </tr>

            <tr>
              <td>
                <p style="font-size: large;">습도 </p>
              </td>
              <td>
                <p> {{ humidity }}%</p>
              </td>
            </tr>

        </table>
        </div>
      </body>
      

  </template>

  <style>


  @media (max-width: 768px) { /* 768px 이하의 화면 너비에 대한 스타일 적용 */
  body{
    margin: 0px;
    background: #1b1e22;
    background-clip: border-box;
    padding-bottom: 10px;
    border: 0;
  }
  
 .menu-button {
    display: block;
    text-decoration-color: aliceblue;
    width: 100%;
    background-color: #454648; 
    text-align: left;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid black;
  }

  .defalut {
    background-color: #454648; 
  }
  

  
  nav {
    text-align: center; /* 가운데 배치 */
  }
}
  .title-container {
    text-align: left;
    margin-bottom: 20px; /* 제목과 <nav> 사이의 간격 추가 */
    display: flex;
  }
  .icon {
  width: 70px;  /* 원하는 크기로 설정 */
  height: 40px; /* 원하는 크기로 설정 */
  float: left;
}
  
  .main-title {
    color: #42b983; /* 초록색 */
    margin: 0;
    font-size: 18px;
  }

  .main-title .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px; 
    vertical-align: middle; 
}

  
  .sub-title {
    color: white; /* 초록색 */
    margin: 0px;
    font-size: 15px;
  }

  /* 감싸는 div 스타일링 */
.weather-info {
    background-color: #22252b; /* 배경색 설정 */
    padding: 20px; /* 내부 여백 설정 */
    border-radius: 10px; /* 모서리 둥글게 */
    margin: 15px auto; /* 중앙 정렬 */
    margin: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    text-align: center; /* 텍스트 중앙 정렬 */
    color: white;
}

/* 각 p 태그 스타일링 */
.weather-info p {
    font-size: 15px; /* 글자 크기 */
    margin-bottom: 15px; /* 각 p 태그 사이의 간격 설정 */
    font-weight: bold; /* 볼드체 */
}

/* 특정 텍스트에만 색상을 적용하고 싶다면, 클래스를 추가하여 스타일링 */
p.weather {
    color: #3498db; /* 특정 색상 */
    font-size: large;
}
  
.final-prediction {
  color: #ffffff; /* 글자 색상을 흰색으로 설정 */
  font-size: 2rem; /* 글자 크기를 2rem으로 설정 */
  font-weight: bold; /* 글자를 굵게 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  margin: 40px;
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
}


.blink {
  color:red;
  -webkit-animation: blink 0.5s ease-in-out infinite alternate;
  -moz-animation: blink 0.5s ease-in-out infinite alternate;
  animation: blink 0.5s ease-in-out infinite alternate;
}

@-webkit-keyframes blink{
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@-moz-keyframes blink{
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes blink{
  0% {opacity: 0;}
  100% {opacity: 1;}
}


 .navbar-toggler {
  background-color: rgba(195, 189, 189, 0.13); /* 흰색 바탕 */
  
}


 .navbar-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='black' stroke-width='5' stroke-linecap='round' stroke-miterlimit='10' d='M4 15h22M4 30h22M4 45h22'/%3E%3C/svg%3E");
  height: 60px;
  background-size: contain;
  background-color: darkgrey;
}


/* 활성화됐을 때의 스타일 */
 .navbar-toggler:not(.collapsed) {
  background-color: rgb(207, 195, 195); /* 활성화됐을 때도 흰색 바탕 유지 */
}

.sidebar-container {
  display: flex; /* flexbox를 활성화합니다 */
  align-items: center; /* 세로축을 중심으로 가운데 정렬합니다 */
}

.nav-link {
  color: white;
}



  </style>