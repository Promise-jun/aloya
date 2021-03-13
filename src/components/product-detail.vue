<template>
  <div class="bg-white">
    <div class="container ptb20">
      <!-- 产品信息 -->
      <div class="product-info fix">
        <div class="product-pic l">
          <div
            class="pic"
            @mouseover="handOver"
            @mousemove="handMove"
            @mouseout="handOut"
          >
            <img :src="pic" alt="" />
            <div
              class="magnifier-zoom"
              v-show="showMask"
              :style="{
                background: configs.maskColor,
                height: configs.maskWidth + 'px',
                width: configs.maskHeight + 'px',
                opacity: configs.maskOpacity,
                transform: transformMask,
              }"
            ></div>
          </div>
          <!-- 大图, 注意误差 -->
          <transition name="fade">
            <div
              class="magnifier-layer"
              v-show="showMagnifier"
              :style="{
                width: configs.width + 'px',
                height: configs.height + 'px',
                left: configs.width + 20 + 'px',
              }"
            >
              <div
                class="big-box"
                :style="{
                  width: bigWidth + 'px',
                  height: bigHeight + 'px',
                  left: moveLeft,
                  top: moveTop,
                }"
              >
                <div
                  class="big-box-img"
                  :style="{
                    width: bigWidth - 2 + 'px',
                    height: bigHeight - 2 + 'px',
                  }"
                >
                  <img
                    :src="pic"
                    :style="{
                      maxWidth: bigWidth - 2 + 'px',
                      maxHeight: bigHeight - 2 + 'px',
                    }"
                  />
                </div>
              </div>
            </div>
          </transition>
          <ul class="small-pic fix mt10">
            <li
              v-for="item in smallPicList"
              :key="item"
              :class="{ active: pic == item }"
              @click="pic = item"
            >
              <img :src="item" alt="" />
            </li>
          </ul>
        </div>
        <div class="product-text">
          <p class="title">
            TOI图益 逻辑箱子—我的小小旅行箱逻辑箱子 6973434124038
          </p>
          <p class="describe">
            1、逻辑思维游戏 策略规划系列：小小玩具屋、小企鹅滑梯、星际穿梭
            空间规划系列：动物逻辑小镇、小恐龙捉迷藏、我的小小旅行箱
            有效锻炼孩子的推理能力，空间想象能力，同时提高视觉技巧、激发创造力
            2、由简入难，层层关卡，智慧挑战
            五级进阶，题卡难度循序渐进，让孩子享受逐级闯关的乐趣。
            3、童趣主题场景 六大主题场景，萌趣可爱，趣味十足，孩子玩乐不枯燥
            4、玩法简单 变化无穷
            简单易懂的游戏规则，多样的独立房间数量大幅都是垃圾分类算法但是房价来说的身份家乐福是独立房间数量大幅减少了送到房间里点十分激烈上的飞机垃圾的时间发链接啊点击发送连接方式等级分类数据的房间里涉及到了附件点十六分经济复苏使得房价是
          </p>
          <p class="price-box">
            售价：<span class="price">￥98.00</span
            ><span class="old-price">￥198.00</span>
          </p>
        </div>
      </div>

      <!-- 产品详情 -->
      <div class="product-detail">
        这是是产品的详细信息哦
        <img src="../assets/images/logo.jpg" alt="" />
        <img src="../assets/images/test/banner3.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productDetail",
  data() {
    return {
      pic: require("../assets/images/test/pic0.jpg"),
      smallPicList: [
        require("../assets/images/test/pic0.jpg"),
        require("../assets/images/test/detail1.jpg"),
        require("../assets/images/test/detail2.jpg"),
        require("../assets/images/test/detail3.jpg"),
        require("../assets/images/test/detail4.jpg"),
      ],
      showMask: false,
      showMagnifier: false,
      configs: {
        width: 360, //放大区域
        height: 360, //放大区域
        maskWidth: 180, //遮罩
        maskHeight: 180, //遮罩
        maskColor: "rgba(25,122,255,0.5)", //遮罩样式
        maskOpacity: 0.6,
        scale: 2, //放大比例
      },
      transformMask: `translate(0px, 0px)`,
      moveLeft: 0,
      moveTop: 0,
      init: false,
      imgObj: {},
    };
  },
  computed: {
    bigWidth() {
      return this.configs.scale * this.configs.width;
    },
    bigHeight() {
      return this.configs.scale * this.configs.height;
    },
  },
  methods: {
    handOver() {
      if (!this.init) {
        this.init = true;
        this.imgObj = this.$el.getElementsByClassName("pic")[0];
      }
      this.showMagnifier = true;
      this.showMask = true;
    },
    handMove(e) {
      // 动态获取小图的位置（或者监听 scroll ）
      let imgRectNow = this.imgObj.getBoundingClientRect();
      let objX = e.clientX - imgRectNow.left;
      let objY = e.clientY - imgRectNow.top;

      // 计算初始的遮罩左上角的坐标
      let maskX = objX - this.configs.maskWidth / 2;
      let maskY = objY - this.configs.maskHeight / 2;

      // 判断是否超出界限,并纠正
      maskY = maskY < 0 ? 0 : maskY;
      maskX = maskX < 0 ? 0 : maskX;
      if (maskY + this.configs.maskHeight >= imgRectNow.height) {
        maskY = imgRectNow.height - this.configs.maskHeight;
      }
      if (maskX + this.configs.maskWidth >= imgRectNow.width) {
        maskX = imgRectNow.width - this.configs.maskWidth;
      }

      // 遮罩移动
      this.transformMask = `translate(${maskX}px, ${maskY}px)`;

      // 背景图移动
      this.moveLeft = -maskX * this.configs.scale + "px";
      this.moveTop = -maskY * this.configs.scale + "px";
    },
    handOut() {
      this.showMagnifier = false;
      this.showMask = false;
    },
  },
};
</script>

<style scoped>
.product-pic {
  position: relative;
}
.product-pic .pic {
  width: 360px;
  height: 360px;
  border: 1px solid #eeeeee;
  background: #fff;
  cursor: move;
}
.product-pic .pic img {
  max-width: 100%;
  max-height: 100%;
}
.product-pic .pic .magnifier-zoom {
  position: absolute;
  top: 0;
  left: 0;
}
.small-pic li {
  float: left;
  width: 60px;
  height: 60px;
  border: 1px solid #eeeeee;
  margin-right: 12px;
  cursor: pointer;
}
.small-pic li.active {
  border-color: #d1394c;
}
.small-pic li img {
  max-width: 100%;
  max-height: 100%;
}
.product-pic .magnifier-layer {
  position: absolute;
  top: 0;
  left: 350px;
  overflow: hidden;
  border: 1px solid #eeeeee;
}
.product-pic .magnifier-layer .big-box {
  position: absolute;
}

.product-text {
  margin: 0 100px 0 380px;
}
.product-text .title {
  padding: 20px 0 15px;
  font-size: 18px;
  line-height: 28px;
  color: #333333;
}
.product-text .describe {
  font-size: 14px;
  line-height: 24px;
  color: #bfbfbf;
}

.price-box {
  padding-top: 15px;
  font-size: 14px;
  color: #333333;
}
.price-box .price {
  font-size: 30px;
  color: #ff5417;
}
.price-box .old-price {
  margin-left: 10px;
  font-size: 14px;
  color: #c9c9c9;
  text-decoration: line-through;
}

.product-detail {
  padding-top: 80px;
  font-size: 16px;
  color: #333;
  line-height: 28px;
}
.product-detail img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
</style>