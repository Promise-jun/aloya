<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="keyword" placeholder="请输入关键词"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border class="mt20">
      <el-table-column prop="Id" label="用户ID"> </el-table-column>
      <el-table-column prop="UserName" label="用户名"> </el-table-column>
      <el-table-column prop="ShowTime" label="创建时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="resetPass(scope.row)">重置密码</el-button>
          <el-popconfirm title="确定删除吗？" icon-color="red" class="ml10">
            <el-button slot="reference" type="text" size="small" class="red">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="mt20">
      <el-button icon="el-icon-plus" @click="createMember">创建会员</el-button>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "memberList",
  data() {
    return {
      keyword: "",
      tableData: [
        {
          Id: 1,
          ShowTime: "2016-05-02",
          UserName: "a123456789",
        },
      ],
    };
  },
  methods: {
    // 创建会员
    createMember() {
      this.$alert("用户名：a123456<br/>密码：123456", "会员创建成功", {
        dangerouslyUseHTMLString: true,
        callback: (action) => {},
      });
    },
    // 重置密码
    resetPass(item) {
      this.$alert("新密码：123456", "密码重置成功", {
        callback: (action) => {},
      });
    }
  },
};
</script>

<style scoped>
.el-pagination {
  float: right;
  margin-top: 4px;
}
</style>
