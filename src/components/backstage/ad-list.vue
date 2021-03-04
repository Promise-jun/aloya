<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column prop="Id" label="广告ID"></el-table-column>
      <el-table-column label="广告图片">
        <template slot-scope="scope">
          <el-image style="width: 200px" :src="scope.row.ImgUrl"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="ShowTime" label="修改时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-popconfirm title="确定删除吗？" icon-color="red">
            <el-button slot="reference" type="text" size="small" class="red">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="mt20 fix">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="r"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "adList",
  data() {
    return {
      tableData: [
        {
          Id: 1,
          ImgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2503641334,4133361482&fm=26&gp=0.jpg",
          ShowTime: "2016-05-02",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>