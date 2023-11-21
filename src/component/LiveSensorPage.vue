<script>
import axios from 'axios';

export default {
  data() {
    return {
      src: 'http://52.36.71.154:3000/d-solo/ENk1jS84k/test?orgId=1&refresh=5m&panelId=', 
      apiData: null,
      loading: false,
      error: null,
      panelSrc: '',
      tmp: null,
      selectedToggle: 0,
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
      } finally {
        this.loading = false;
      }
    },
    updateTmpData() {
      if(this.currentId == 4) {
        this.tmp = this.apiData.doubleValues[0] + "°C";
      } else if (this.currentId == 6) {
        this.tmp = this.apiData.doubleValues[2] + "%";
      } else if (this.currentId == 8) {
        this.tmp =  this.apiData.doubleValues[1] + "ppm";
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
    selectToggle(index) {
      // 토글 선택 시 해당 인덱스를 업데이트하고 데이터를 가져오도록 함
      this.selectedToggle = index;
      this.chpannel(this.currentId); // 선택된 토글에 맞게 데이터를 가져옴
    },
  },
  mounted() {
    this.chpannel(4)
    this.fetchAssetData(); 
    this.interval = setInterval(this.fetchAssetData, 3000); 
  },

  beforeDestroy() {
    clearInterval(this.interval); // 컴포넌트가 파괴되기 전에 setInterval을 정지합니다.
  },
};
</script>

<template>
  <body>
      <div class="small-letter" style= "text-align: left; padding-bottom: 10px; width: 85%; height: 80%;  ">
      <div style="width: 100%; padding: 15px; padding-left: 15px; position: relative; margin:0 auto;">
        <h5 style="text-align: left; padding-top: 5px; margin-bottom: -5px;">현재</h5>
        <div class = "tmp" style="padding-bottom: 10px; font-weight: 350;"> {{ tmp }}</div>

        <div style="text-align: right; width: 100%;">
          <nav class="button-container">
          <button class="button" @click="chpannel(4)"> 온도 </button>
          <button class="button" @click="chpannel(13)"> 습도 </button>
          <button class="button" @click="chpannel(8)"> CO </button>
          </nav>
        </div>
        
        <iframe :src="panelSrc"  frameborder="0" width="100%" height="200px"></iframe>
        </div>
      </div>
  </body>
</template>

<style scoped>
.button-container {
  display: flex;
  flex-direction: row;
}
.button {
  padding: auto;
  background-color: #181B1F;   /* 배경색 */
  color: #F8F8F8;             /* 텍스트 색상 */
  text-align: center;       /* 텍스트를 버튼 중앙에 정렬 */
  flex: 1;                  /* 가용 공간에 따라 요소의 크기 조절 */
  font-size: 17px;
  border: #181B1F;
}
.tmp {
  color: #181B1F; 
  font-size: 250%;
  text-transform: uppercase;  
  font-weight: lighter;  
}

.small-letter {
    background-color: #F8F8F8; /* 배경색 설정 */
    border-radius: 30px;
    box-shadow: -6px -6px 5px rgba(228, 226, 226, 0.8), 6px 6px 5px rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
    margin: 0 auto; /* 수평 가운데 정렬을 위한 margin 추가 */
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 수직 가운데 정렬을 위한 justify-content 추가 */
  }

h1 {
    color: #262F5A; /* 글자 색상을 흰색으로 설정 */
    font-size: 150%;
    font-weight: bold; /* 글자를 굵게 설정 */
    text-align: center; /* 텍스트를 중앙 정렬 */
    margin: 5pt;
    transition: all 0.3s ease; /* 부드러운 전환 효과 */
}

h2 {
    color: #262F5A; /* 글자 색상을 흰색으로 설정 */
    font-size: 1em;
    text-align: center;
    margin: 5pt;
    transition: all 0.3s ease;
}

h4 {
    display: block;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    text-align: left;
}

h5 {
    color:#262F5A ;
    display: block;
    font-size: 1.5em;
    font-weight: lighter;
}

.hr1 {
    margin-top: 3pt;
    margin-bottom: 3pt;
  }


</style>
