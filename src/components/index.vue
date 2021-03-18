<template>
  <div class="bg-white">
    <el-carousel trigger="click" height="500px" :interval="5000" arrow="never">
      <el-carousel-item
        v-for="item in picList"
        :key="item"
        :style="{ background: 'url(' + item + ') no-repeat center' }"
      ></el-carousel-item>
    </el-carousel>

    <div class="container">
      <el-tabs v-model="activeIndex">
        <el-tab-pane v-for="(tabItem, index) in tabList" :key="index" :label="tabItem.label" :name="index.toString()">
          <ul class="product-list fix">
            <li v-for="item in tabList[index].list" :key="item.pic">
              <div class="pic">
                <a href="javascript:;" :style="{background: 'url('+item.pic+') no-repeat center', backgroundSize: 'contain'}"></a>
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
        </el-tab-pane>
      </el-tabs>

      <div class="product-box">
        <div class="title">益智拼图<a href="javascript:;">更多产品></a></div>
        <ul class="product-list fix">
          <li v-for="item in list" :key="item.pic">
            <div class="pic">
              <a href="javascript:;" :style="{background: 'url('+item.pic+') no-repeat center', backgroundSize: 'contain'}"></a>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      picList: [
        require("../assets/images/test/banner1.jpg"),
        require("../assets/images/test/banner2.jpg"),
        require("../assets/images/test/banner3.jpg"),
      ],
      activeIndex: 0,
      tabList: [
        {
          label: "益智游戏",
          list: [
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
          ],
        },
        {
          label: "桌游",
          list: [
            {
              pic: require("../assets/images/test/pic9.jpg"),
              title: "TOI图益-头脑风暴-逻辑款 6973434125028",
              price: "￥199.90",
              newPrice: "￥299.90",
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
          ],
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
      ],
    };
  }
};
</script>

<style scoped>
.el-carousel__item {
  cursor: pointer;
}

.el-tabs {
  padding: 20px 0;
}
.el-tabs .product-list {
  padding-top: 0;
}
.el-tabs .product-list li {
  width: 300px;
}
.el-tabs .product-list li .pic {
    width: 280px;
    height: 280px;
    border: 1px solid #eeeeee;
    overflow: hidden;
}
</style>