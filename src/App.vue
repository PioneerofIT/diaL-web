
<!-- 모든 컴포넌트의 집합  -->
<template>
  <div class="app-container">
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
.menu-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b983; /* 그린색 */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin: 0 10px; /* 좌우 간격 추가 */
}

nav {
  text-align: center; /* 가운데 배치 */
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
