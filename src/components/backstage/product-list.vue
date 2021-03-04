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

    <el-table :data="tableData" border class="mt20">
      <el-table-column prop="Id" label="产品ID"> </el-table-column>
      <el-table-column prop="name" label="产品名称" width="380">
      </el-table-column>
      <el-table-column prop="price" label="原价（元）"> </el-table-column>
      <el-table-column prop="newPrice" label="活动价（元）"> </el-table-column>
      <el-table-column prop="ShowTime" label="修改时间"> </el-table-column>
      <el-table-column label="操作" width="120"
        >>
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑</el-button>
          <el-popconfirm title="确定删除吗？" icon-color="red" class="ml10">
            <el-button slot="reference" type="text" size="small" class="red"
              >删除</el-button
            >
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
      tableData: [
        {
          Id: 1,
          ShowTime: "2016-05-02",
          name: "TOI图益 逻辑箱子—我的小小旅行箱 6973434124038",
          price: "198.00",
          newPrice: "99.00",
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