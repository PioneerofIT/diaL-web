<template>
    <div>
      <div class="menu">
        
        <button @click="onMenuClick('Menu 1')">실시간 데이터</button>
        <!-- 다른 메뉴 항목들도 여기에 추가 -->
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainLayout'
  }
  </script>
  
  <style scoped>
 .menu {
  display: flex;
  flex-direction: column;  /* 세로 배열 */
  align-items: center;     /* 가운데 정렬 */
  gap: 20px;
}

  </style>