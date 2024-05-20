<template>
  <div class="body">
    <div class="body--container">
      Body from Vue.js
    </div>
  </div>
</template>
<style scoped lang="scss">
.body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &--container {
    width: 100%;
    height: 300px;
    display: flex;
    padding: 1rem;
    color: white;
    align-items: center;
    background: #42b983;
  }
}

</style>
