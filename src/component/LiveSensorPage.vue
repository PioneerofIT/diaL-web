<template>
  <div>
    <nav class="button-container">
      <menu-button class="button" @click="navigateToTemperature"> 온도 데이터 </menu-button>
      <menu-button class="button" @click="navigateToHumidity"> 습도 데이터 </menu-button>
      <menu-button class="button" @click="navigateToCO"> CO 데이터 </menu-button>
    </nav>
  </div>
</template>



<script>

export default {
  methods: {
    navigateToTemperature() {
      this.$router.push('/LiveSensorPage/temperature');  // '/temperature-route'는 원하는 경로로 변경하세요.
    },
    navigateToHumidity() {
      this.$router.push('/humidity-route');  // '/humidity-route'는 원하는 경로로 변경하세요.
    },
    navigateToCO() {
      this.$router.push('/co-route');  // '/co-route'는 원하는 경로로 변경하세요.
    }
  }
}
</script>


<style scoped>
.button-container {
  display: flex;         /* flexbox를 사용하여 버튼을 가로로 배치 */
  flex-direction: row;   /* 가로 방향으로 요소 배치 */
  justify-content: center;  /* 중앙에 버튼을 정렬 */
  flex-wrap: wrap;          /* 요소가 너무 많으면 다음 줄로 이동 */
}

.button {
  padding: 10px 20px;       /* 버튼 내부의 여백 */
  background-color: blue;   /* 배경색 */
  color: white;             /* 텍스트 색상 */
  margin: 5px;              /* 버튼 간의 간격 */
  border-radius: 5px;       /* 버튼 모서리 둥글게 */
  text-align: center;       /* 텍스트를 버튼 중앙에 정렬 */
  flex: 1;                  /* 가용 공간에 따라 요소의 크기 조절 */
  min-width: 100px;         /* 최소 너비 설정 */
}
</style>
