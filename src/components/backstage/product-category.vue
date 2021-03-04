<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column prop="Id" label="类别ID"> </el-table-column>
      <el-table-column prop="name" label="类别名称"> </el-table-column>
      <el-table-column prop="ShowTime" label="创建时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-popconfirm title="确定删除吗？" icon-color="red" class="ml10">
            <el-button slot="reference" type="text" size="small" class="red"
              >删除</el-button
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="mt20">
      <el-button icon="el-icon-plus" @click="createCategory"
        >创建类别</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "productCategory",
  data() {
    return {
      tableData: [
        {
          Id: 1,
          ShowTime: "2016-05-02",
          name: "益智玩具",
        },
      ],
    };
  },
  methods: {
    //   创建类别
    createCategory() {
      this.$prompt("请输入类别名称", "创建类别", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的类别是: " + value,
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
</style>