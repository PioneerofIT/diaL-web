<template>
    <div class="sensor-page">
        <iframe src="http://35.91.41.146:3000/d-solo/ENk1jS84k/test?orgId=1&refresh=5s&from=1694573107918&to=1694594707918&panelId=10" width="450" height="200" frameborder="0"></iframe>
    </div>
  </template>
  
  <style scoped>
  .sensor-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  }
  
  .sensor-iframe {
  width: 450px;
  height: 200px;
  border: none; /* 이 부분은 frameborder="0"와 같은 효과를 줍니다. */
  }
  </style>
  