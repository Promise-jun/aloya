<template>
  <div class="bg-white">
    <div class="container">
      <el-row :gutter="20" class="ptb20">
        <el-col :span="24">
          <label>产品类别：</label>
          <el-select
            v-model="category"
            placeholder="请选择类别"
            class="main-color"
          >
            <el-option
              v-for="item in categorys"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <label class="ml20">价格区间：</label>
          <el-input
            v-model="minPrice"
            placeholder="请输入"
            oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
            @blur="minPriceChange"
          ></el-input>
          <span>-</span>
          <el-input
            v-model="maxPrice"
            placeholder="请输入"
            oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
            @blur="maxPriceChange"
          ></el-input>
          <el-button type="primary" class="ml20">查询</el-button>
        </el-col>
      </el-row>

      <ul class="product-list fix">
        <li v-for="(item, index) in list" :key="index">
          <div class="pic">
            <a
              href="javascript:;"
              :style="{
                background: 'url(' + item.pic + ') no-repeat center',
                backgroundSize: 'contain',
              }"
            ></a>
          </div>
          <div class="tit">
            <a href="javascript:;">{{ item.title }}</a>
          </div>
          <div class="price">
            <span class="big">{{ item.newPrice }}</span>
            <span class="small">{{ item.price }}</span>
          </div>
        </li>
      </ul>
      <div class="list-page">
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      minPrice: "",
      maxPrice: "",
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
      list: [
        {
          pic: require("../assets/images/test/pic0.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic1.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic2.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
        {
          pic: require("../assets/images/test/pic3.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic4.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
        {
          pic: require("../assets/images/test/pic5.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic6.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
        {
          pic: require("../assets/images/test/pic7.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic8.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
        {
          pic: require("../assets/images/test/pic9.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
        {
          pic: require("../assets/images/test/pic0.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic1.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic2.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
        {
          pic: require("../assets/images/test/pic3.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic4.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
        {
          pic: require("../assets/images/test/pic5.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic6.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
        {
          pic: require("../assets/images/test/pic7.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥29.90",
          newPrice: "￥9.90",
        },
        {
          pic: require("../assets/images/test/pic8.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
        {
          pic: require("../assets/images/test/pic9.jpg"),
          title: "TOI图益-头脑风暴-逻辑款 6973434125028",
          price: "￥199.90",
          newPrice: "￥299.90",
        },
      ],
    };
  },
  methods: {
    minPriceChange(e) {
      this.minPrice = e.target.value;
    },
    maxPriceChange(e) {
      this.maxPrice = e.target.value;
    },
  },
};
</script>

<style scoped>
.el-button--primary {
  background-color: #d1394c;
  border-color: #d1394c;
}
.el-input {
  width: 80px;
}
</style>