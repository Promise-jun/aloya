<template>
  <div id="wangeditor">
    <div ref="editorElem"></div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "Editor",
  data() {
    return {
      editor: null,
      editorContent: "",
    };
  },
  // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
  props: ["catchData"], // 接收父组件的方法
  mounted() {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.config.onchange = (html) => {
      this.editorContent = html;
      //   this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
    };
    // 自定义图片上传
    this.editor.config.customUploadImg = function (resultFiles, insertImgFn) {
      // resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法

      // 上传图片，返回结果，将图片插入到编辑器中
      // insertImgFn(imgUrl);
    };
    this.editor.create(); // 创建富文本实例
  },
};
</script>