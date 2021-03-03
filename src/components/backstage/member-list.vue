<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="keywords" placeholder="请输入关键词"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" class="mt20">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <div class="mt20">
      <el-button icon="el-icon-plus">创建会员</el-button>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "memberList",
  data() {
    return {
      keywords: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-pagination {
  float: right;
  margin-top: 4px;
}
</style>
