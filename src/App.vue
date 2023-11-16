  <!-- 모든 컴포넌트의 집합  -->
  <script>
  import axios from 'axios';
  import { RouterLink } from 'vue-router';
  import LiveSensorPageVue from './component/LiveSensorPage.vue';

  export default {
    data() {
        return {
          src: 'http://52.36.71.154:3000/d-solo/ENk1jS84k/test?orgId=1&panelId=',
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
          isSidebarOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        navigateHome() {
            const currentPath = this.$route.path;
            if (currentPath !== '/LiveSensorPage') {
              this.$router.push('/LiveSensorPage');
            }
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
          if(this.currentId == 4) {
            this.tmp = "현재 온도 :" + this.apiData.doubleValues[0] + "°C";
          } else if (this.currentId == 6) {
            this.tmp = "현재 습도 :" + this.apiData.doubleValues[2] + "%";
          } else if (this.currentId == 8) {
            this.tmp = "현재 CO농도 :" + this.apiData.doubleValues[1] + "ppm";
          }
          this.final_prediction = this.apiData.doubleValues[4];
          if (this.final_prediction == -1) {
              this.final_prediction_str = "화재";
              document.getElementById("final").classList.add("blink");
          }
          else {
              this.final_prediction_str = "정상";
          }
        },
        chpannel(id) {
          this.currentId = id;  // 현재 선택된 ID를 저장
          this.panelSrc = this.src + id;
          this.fetchAssetData();
          this.intervalForChpannel = setInterval(() => {
            this.fetchAssetData();
      }, 3000);
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
        document.title = "diaL 화재 관리자 페이지";
    },
    components: { RouterLink, LiveSensorPageVue }
}
  </script>

  <template>
      <body>
        <div class="title-container">
          <table border="0" style="width: 100%; margin-right: 5px; margin-left: 5px; margin-bottom: 0px;">
            <tr>
              <td class="sidebar-container">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-sidebar id="nav-collapse" title="MENU" shadow :visible.sync="isSidebarOpen" width="60%" style="padding: 10PX; font-weight: 500;">
                  <div class="b-nav">
                    <router-link class="menu-button" to="/LiveSensorPage" style="color: #181a18; font-weight: bold; text-align: center;">실시간 측정 데이터</router-link>
                    <router-link class="menu-button" to="/MLPage"  style="color: #181a18; font-weight: bold; text-align: center;">실시간 센서 데이터</router-link>
                    <router-link class="menu-button" to="/LiveCCTV"  style="color: #181a18; font-weight: bold; text-align: center;">실시간 내부 카메라</router-link>
                    <router-link class="menu-button" to="/TwinPage"  style="color: #181a18; font-weight: bold; text-align: center;">디지털 트윈</router-link>
                  </div>
                </b-sidebar>

                <div style="margin-left: 5%;">
                  <img src="../public/static/Dial-icon.jpg" alt="Icon Description" class="icon" @click="navigateHome">
                </div>
              </td>

              <td style="width: 50%; text-align: right;">
                <div>
                  <h1 class="main-title" style="font-size: 110%; padding-right: 3%;" >화재 관리자 페이지</h1>
                  <h2 class="sub-title" style="font-size: 90%; padding-right: 3%;">한밭대학교 자동화관 302호</h2>
                </div>

              </td>

            </tr>
          </table>
        </div>

        <table style="width: 100%; height: 100%; margin-top: -10px;">
          <tr>

            <td style="width: 50%; height: 50%; text-align: center; vertical-align: middle;">

              <div class="weather-info"  style="width: 150px; height: 150px; margin-left: auto;margin">
                <div style="margin: 10% 10% 10% 10%; display: block ">
                  <h1 style="display: flex; align-items: center; margin-bottom:0% margin-top:0%">
                    <img src="../public/static/gps-icon.png" width="30pt" height="30pt" style="padding-right: 0px;">{{city}}
                  </h1>
                  <h2 style="font-size: 120%; font-style: italic;">{{weather}}</h2>
                  <h2 style="font-size: 120%;">{{temperature}} °C</h2>
                  <h2 style="font-size: 120%;">{{humidity}} %</h2>
                </div>
              </div>

            </td>

            <td style="width: 50%; height: 50%; text-align: center; vertical-align: middle;">
              <div class="weather-info" :class="{ 'fire': final_prediction_str === '화재' }" style="width: 150px; height: 150px; background-color: mediumseagreen; ">
                <div style="padding: 0pt; color: #ffffff;">현재 상태</div>
                <div :class="{ 'blink': final_prediction_str === '화재' }">
                  <h2 style="font-size: 250%; font-weight: bold; color: #ffffff;">{{final_prediction_str}}</h2>
                </div>
              </div>
            </td>
          </tr>
        </table>

        <div style="margin: 13px"></div>

        <div><router-view></router-view></div>

      </body>
  </template>

  <style scoped>
  html{
    background-color: #efefef;
  }
  body{
    min-height: 100vh;
    background-color: #efefef;
    margin: 0;
  }

.sidebar-container.show {
  background-color: transparent /* 뒷배경색을 원하는 색상으로 설정 */
}

  .default {
    background-color: #454648;
  }

  .divider {
    border-top: 1px solid #ffffff48;
    margin: 5%;
    width: 80%;
  }

  nav {
    text-align: center; /* 가운데 배치 */
  }

  .hr2 {
    color: #181B1F;
    margin-top: 0%;
    margin-bottom: 5%;
  }

  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
  }

  .title-container {
    margin-bottom: 0%;
    display: flex;
  }
  .icon {

  width: 65px;
  height: 20px;
  margin-right: 0px;
  float: right;
}

h1 {
    color: #181B1F;
    font-size: 150%;
    font-weight: bold;
    text-align: center;
    margin: 5pt;
    transition: all 0.3s ease;
}

h2 {
    color: #181B1F;
    font-size: 1em;
    text-align: center;
    margin: 5pt;
    transition: all 0.3s ease;
}

  .main-title {
    color: #181B1F;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    text-align: right;
  }

  .sub-title {
    color: #181B1F;
    margin: 0px;
    font-size: 17px;
    text-align: right;
  }

  .weather-info {
    position: relative;
    overflow: hidden;
    padding-top: 100%;
    margin: 5% 5% 5% 5%;
    background-color: #F8F8F8;
    border-radius: 30px;
    box-shadow: -6px -6px 5px rgba(228, 226, 226, 0.8), 6px 6px 5px rgba(0,0,0,0.2);

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 180px;
    padding: 5%;
}

.fire {
  background-color: red !important;
}

.weather-info p {
    font-size: 15px;
    margin-bottom: 15px;
    font-weight: bold;
}

.final-prediction {
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 40px;
  transition: all 0.3s ease;
}
.blink {
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


/* navbar-toggler 관련 스타일 */
::v-deep .navbar-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23181B1F' stroke-width='5' stroke-linecap='round' stroke-miterlimit='10' d='M4 15h8M14 15h2M18 15h8M4 30h8M14 30h2M18 30h8M4 45h8M14 45h2M18 45h8'/%3E%3C/svg%3E");
  height: 60px; /* 토글 아이콘의 높이 설정 */
  border-radius: 30px; /* 토글 아이콘의 모서리를 둥글게 설정 */
  width: 22px; /* 토글 아이콘의 너비 설정 */
  background-color: transparent;
}

/* 펼쳐진 상태의 토글 아이콘 스타일 */
.navbar-toggler:not(.collapsed) {
  background-color: transparent;
}

/* 사이드바가 열렸을 때의 배경색 스타일 */
.sidebar-container.show {
  background-color: transparent; /* 사이드바가 열렸을 때의 배경 색상을 설정 */
}

.sidebar-container {
  display: flex; /* flexbox를 활성화합니다 */
  align-items: center; /* 세로축을 중심으로 가운데 정렬합니다 */
  background-color: transparent;
}

.b-nav {
  background-color:transparent;
  padding-right: 10px;
  padding-left: 10px;
  margin: 10px 10px 10px 10px;

}

/* menu-button 클래스에 대한 스타일 수정 */
.menu-button {
  margin-bottom: 5%;
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box !important;
  text-decoration: none;
  border-radius: 20px;
  font-size: 18px; /* 메뉴 버튼의 글자 크기를 설정 */
  background-color: #F8F8F8; /* 메뉴 버튼의 배경 색상을 설정 */
  box-shadow: -6px -6px 5px rgba(228, 226, 226, 0.8), 6px 6px 5px rgba(0,0,0,0.2);
  padding: 0.5rem 1rem;
  margin-top: 15px;
  border: none;
}
</style>