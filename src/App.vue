<template>
  <div class="app-container">
    <div class="hello">
      <h1>{{ message }}</h1>
      <div class="menu">
        <!-- 다른 메뉴 항목들을 여기에 넣어주세요. -->
      </div>
    </div>
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
.hello {
  color: #42b983;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

</style>
