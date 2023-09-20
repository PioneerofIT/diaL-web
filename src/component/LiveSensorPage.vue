<script>
export default {
  data() {
    return {
      src: 'http://52.36.71.154:3000/d-solo/ENk1jS84k/test?orgId=1&refresh=5s&from=1694573098947&to=1694594698947&panelId=',
      panelSrc: ''
    };
  },
  methods: {
    chpannel(id){
      this.panelSrc = this.src + id;
    }
  }
};
</script>

<template>
  <div>
    <nav class="button-container">
      <button class="button" @click="chpannel(4)"> 온도 데이터 </button>
      <button class="button" @click="chpannel(6)"> 습도 데이터 </button>
      <button class="button" @click="chpannel(8)"> CO 데이터 </button>
    </nav>
    <iframe :src="panelSrc" width="100%" height="400" frameborder="0"></iframe>
  </div>
</template>


<style scoped>
.button-container {
  display: flex;         /* flexbox를 사용하여 버튼을 가로로 배치 */
  flex-direction: row;   /* 가로 방향으로 요소 배치 */
  justify-content: center;  /* 중앙에 버튼을 정렬 */
  flex-wrap: wrap;          /* 요소가 너무 많으면 다음 줄로 이동 */
}

.button {
  padding: 10px 20px;       /* 버튼 내부의 여백 */
  background-color: rgb(109, 109, 243);   /* 배경색 */
  color: white;             /* 텍스트 색상 */
  margin: 5px;              /* 버튼 간의 간격 */
  border-radius: 5px;       /* 버튼 모서리 둥글게 */
  text-align: center;       /* 텍스트를 버튼 중앙에 정렬 */
  flex: 1;                  /* 가용 공간에 따라 요소의 크기 조절 */
  min-width: 100px;         /* 최소 너비 설정 */
  border: 0px;
}
</style>
