  <!-- 모든 컴포넌트의 집합  -->
  <template>
    <div >
      <div class="title-container">
        <h1 class="main-title">diaL Lab 관리자 페이지 </h1>
        <p class="sub-title">타겟 장소: 한밭대학교 N5 302호</p>
      </div>
      <nav>
        <router-link to ="/" class="menu-button"> Home</router-link>
        <router-link to ="/LiveSensorPage" class="menu-button"> 실시간 데이터 </router-link>
        <router-link to ="/MLPage" class="menu-button"> 실시간 화재 판단 </router-link>
        <router-link to ="/LiveCCTV" class="menu-button"> 실시간 CCTV </router-link>
        <router-link to ="/TwinPage" class="menu-button"> 3D 가상 건물 </router-link> 
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  

  <script>
  export default {
    data() {
      return {
        message: 'diaL-Web 공사중'
      };
    },
    methods: {
    onMenuClick(menuItem) {
      if(menuItem == 'Menu 1') {
        this.$router.push('/LiveSensorPage');
      }
    }
  }
  
  }
  </script>
  
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
  }
  
  .main-title {
    color: #42b983; /* 초록색 */
    margin: 0;
    font-size: 24px;
  }
  
  .sub-title {
    color: #42b983; /* 초록색 */
    margin: 5px 0;
    font-size: 16px;
  }
 

  
  </style>