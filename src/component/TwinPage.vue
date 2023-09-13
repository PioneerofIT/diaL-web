<template>
    <div class="sensor-page">
      <iframe class="sensor-iframe" src="http://35.91.41.146:3000/d-solo/ENk1jS84k/test?orgId=1&refresh=5s&from=1694571261713&to=1694592861713&panelId=2" frameborder="0"></iframe>
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
  