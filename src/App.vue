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

.el-alert__content {
  line-height: normal;
}

.list-page {
  padding: 30px 0;
  text-align: center;
}
.list-page .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #d1394c;
}
.list-page .el-pager li:hover {
  color: #d1394c !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
