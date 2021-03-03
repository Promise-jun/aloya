<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container class="main-box">
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "bsMain",
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-aside {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  width: 200px;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.el-header {
  height: 50px;
  overflow: hidden;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-main {
  padding: 32px;
}

.main-box {
  min-height: 100%;
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.28s;
  margin-left: 200px;
  position: relative;
}
</style>
