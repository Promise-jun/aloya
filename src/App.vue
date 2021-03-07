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

.el-tabs .el-tabs__item {
  padding: 0 30px;
}
.el-tabs .el-tabs__item:hover,
.el-tabs .el-tabs__item.is-active {
  color: #D1394C;
}
.el-tabs .el-tabs__active-bar {
  background-color: #D1394C;
}
</style>
