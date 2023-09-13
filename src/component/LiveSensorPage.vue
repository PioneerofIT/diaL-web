<template>
  <div class="sensor-page">
    <iframe src="http://35.91.41.146:3000/d-solo/ENk1jS84k/test?orgId=1&from=1694571454281&to=1694593054281&refresh=5s&panelId=8" width="450" height="200" frameborder="0"></iframe>
<!-- DHT 습도 -->
<iframe src="http://35.91.41.146:3000/d-solo/ENk1jS84k/test?orgId=1&refresh=5s&from=1694573083866&to=1694594683866&panelId=6" width="450" height="200" frameborder="0"></iframe>
<!-- DHT 온도  -->
<iframe src="http://35.91.41.146:3000/d-solo/ENk1jS84k/test?orgId=1&refresh=5s&from=1694573098947&to=1694594698947&panelId=4" width="450" height="200" frameborder="0"></iframe>
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
