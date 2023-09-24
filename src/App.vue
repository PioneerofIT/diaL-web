  <!-- 모든 컴포넌트의 집합  -->
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        message: 'diaL-Web 공사중',
        data: null,
        loading: false,
        error: null,
        assetId: '83ecd1bb-0edb-4b38-9d45-667ac1a500e2',
        view: true,
        city: '',
        temperature: '',
        humidity: '',
        weather:''
      };
    },
    methods: {
    onMenuClick(menuItem) {
      if(menuItem == 'Menu 1') {
        this.$router.push('/LiveSensorPage');
      }
    },
    searchWeather() {
      const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=36.34&lon=127.28&appid=66642b3fa015dc2047aff31ed3ff29e4&units=metric';
;
      axios.get(BASE_URL)
      .then((result) => {
        console.log(result.data);
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
      this.searchWeather();
    }      
}
  
  </script>
  
  
  <template>
    <div >
      <div class="title-container">
        <img src = "../public/static/Dial-icon.jpg" alt="Icon Description" class="icon">
        <h1 class="main-title">diaL 화재 관리자 페이지 </h1>
      </div>
      <p class="sub-title">타겟 장소: 한밭대학교 N5 302호</p>

      <nav>
        <router-link to ="/" class="menu-button"> Home</router-link>
        <router-link to ="/LiveSensorPage" class="menu-button"> 실시간 데이터 </router-link>
        <router-link to ="/MLPage" class="menu-button"> 실시간 화재 판단 </router-link>
        <router-link to ="/LiveCCTV" class="menu-button"> 실시간 CCTV </router-link>
        <router-link to ="/TwinPage" class="menu-button"> 3D 가상 건물 </router-link> 
      </nav>
      <router-view></router-view>
      <div>
        <p> 지역 : {{ city  }}</p>
        <p> 날씨 : {{ weather }}</p>
        <p> 온도 : {{ temperature }}</p>
        <p> 습도 {{ humidity  }}%</p>
      </div>
    </div>
  </template>
    
  <style scoped>
  @media (max-width: 768px) { /* 768px 이하의 화면 너비에 대한 스타일 적용 */
  .menu-button {
    display: block; /* 세로 배치를 위해 block으로 설정 */
    margin: 10px auto; /* 좌우 중앙 정렬과 위아래 간격 추가 */
    width: 80%; /* 버튼 너비 설정 */
    border-radius: 5px; 
    background-color: #42b983;
    text-decoration-line: none;
    color: aliceblue;
  }
  
  nav {
    text-align: center; /* 가운데 배치 */
  }
}
  .title-container {
    text-align: left;
    padding-left: 20px; /* 왼쪽 간격 추가 */
    margin-bottom: 20px; /* 제목과 <nav> 사이의 간격 추가 */
    display: flex;
  }
  .icon {
  width: 50px;  /* 원하는 크기로 설정 */
  height: 40px; /* 원하는 크기로 설정 */
  margin-right: 5px; /* 텍스트와의 간격 조정 */
}
  
  .main-title {
    color: #42b983; /* 초록색 */
    margin: 0;
    font-size: 24px;
  }

  .main-title .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px; 
    vertical-align: middle; 
}

  
  .sub-title {
    color: #42b983; /* 초록색 */
    margin-left: 60px;
    font-size: 16px;
  }
  
  </style>