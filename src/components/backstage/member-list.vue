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
    <el-table v-loading="loading" :data="tableData" border class="mt20">
      <el-table-column prop="Id" label="用户ID"> </el-table-column>
      <el-table-column prop="UserName" label="用户名"> </el-table-column>
      <el-table-column prop="ShowTime" label="创建时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="resetPass(scope.row)"
            >重置密码</el-button
          >
          <el-popconfirm title="确定删除吗？" icon-color="red" class="ml10">
            <el-button slot="reference" type="text" size="small" class="red"
              >删除</el-button
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="mt20">
      <el-button icon="el-icon-plus" @click="createMember">创建会员</el-button>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="pageChange"
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
      tableData: [],
      total: 0, //总个数
      start: 0,
      pageSize: 10,
      loading: false,
    };
  },
  created() {
    this.getList();
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
    },
    // 页码改变
    pageChange(page) {
      this.start = this.pageSize * (page - 1);
      this.getList();
    },
    getList() {
      // 获取用户列表
      this.loading = true;
      this.$api.backstage
        .userListApi({
          KeyWord: this.keyword,
          Start: this.start,
          PageSize: this.pageSize,
        })
        .then((res) => {
          this.loading = false;
          if (res.Code == 0) {
            if (this.start == 0) {
              this.total = res.Data.Total;
            }
            this.tableData = res.Data.Items ? res.Data.Items : [];
          }
        });
    },
  },
};
</script>

<style scoped>
.el-pagination {
  float: right;
  margin-top: 4px;
}
</style>
