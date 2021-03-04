<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.el-table__header{
    width: 100% !important;
}
.el-table__body{
    width: 100% !important;
}

.el-popconfirm__main {
  margin: 8px 0;
}
</style>
