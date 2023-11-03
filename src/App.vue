  <!-- 모든 컴포넌트의 집합  -->
  <script>
  import axios from 'axios';

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
        weather:'',
        final_prediction: '',
        final_prediction_str: '',
        apiData:null
      };
    },
    methods: {
    async fetchAssetData() {
      this.loading = true;
      this.error = null;
      try {
        const API_URL = `https://p3j7hfgon0.execute-api.us-west-2.amazonaws.com/`;
        const response = await axios.get(API_URL);
        this.apiData = response.data;
        this.updateTmpData();  // apiData가 업데이트되면 updateTmpData 호출
      } catch (error) {
        console.error('Error fetching asset data:', error);
        this.error = error.message || 'Error fetching data';
      } finally {
        this.loading = false;
      }
    },
    updateTmpData() {
      this.final_prediction = this.apiData.doubleValues[4];

      if(this.final_prediction == -1) {
        this.final_prediction_str = "화재"
        document.getElementById("final").classList.add("blink");
      }
      else {
        this.final_prediction_str = "정상 상태"
      }
    },
    onMenuClick(menuItem) {
      if(menuItem == 'Menu 1') {
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
      document.title = "diaL 화재 관리 관리자"
    }      
}
  </script>
  
  
  <template>
      <body>
        <div class="title-container">
          <table border="0" style="width: 100%; margin: 5px;">
            <tr>
              <td rowspan="2">
                <img src = "../public/static/Dial-icon.jpg" alt="Icon Description" class="icon">
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
        <div >
          <h1 id="final" class="final-prediction">최종 감지 : {{ final_prediction_str }}</h1>
        </div>
        <nav>
          <router-link to ="/" class="menu-button"> Home</router-link>
          <router-link to ="/LiveSensorPage" class="menu-button"> 실시간 데이터 </router-link>
          <router-link to ="/MLPage" class="menu-button"> 실시간 화재 판단 </router-link>
          <router-link to ="/LiveCCTV" class="menu-button"> 실시간 CCTV </router-link>
          <router-link to ="/TwinPage" class="menu-button"> 3D 가상 건물 </router-link> 
        </nav>
        <router-view></router-view>
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

  <style scoped>
  @media (max-width: 768px) { /* 768px 이하의 화면 너비에 대한 스타일 적용 */
  body{
    margin: 0px;
    background: #1b1e22;
    background-clip: border-box;
    padding-bottom: 10px;
    border: 0;
  }
  .menu-button {
    display: block; /* 세로 배치를 위해 block으로 설정 */
    margin: 10px auto; /* 좌우 중앙 정렬과 위아래 간격 추가 */
    padding: 5px;
    width: 80%; /* 버튼 너비 설정 */
    border-radius: 5px; 
    background-color: #42b983;
    text-decoration-line: none;
    color: aliceblue;
    font-size: 20px;
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
  color: aliceblue;
  margin: 50px;
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
  </style>