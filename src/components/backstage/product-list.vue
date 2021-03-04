<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input v-model="keyword" placeholder="请输入关键词"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="category" placeholder="请选择类别">
          <el-option
            v-for="item in categorys"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-date-picker
          v-model="dateTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="4">
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "productList",
  data() {
    return {
      keyword: "",
      dateTime: "",
      category: "",
      categorys: [
        {
          value: 1,
          label: "益智拼图",
        },
        {
          value: 2,
          label: "桌游",
        },
        {
          value: 3,
          label: "磁性玩具",
        },
        {
          value: 4,
          label: "玩教具",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-date-editor,
.el-select {
  width: 100% !important;
}
</style>