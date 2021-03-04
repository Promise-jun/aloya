<template>
  <div>
    <el-alert title="图片尺寸：1920*500，图片格式：jpg，建议图片大小不要超过200kb" type="warning" show-icon :closable="false"> </el-alert>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm mt20"
    >
      <el-form-item label="链接地址" prop="linkUrl">
        <el-col :span="12">
          <el-input
            type="text"
            v-model="ruleForm.linkUrl"
            autocomplete="off"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="选择图片" prop="imgUrl">
        <el-upload class="avatar-uploader" action="" :show-file-list="false">
          <img v-if="ruleForm.imgUrl" :src="ruleForm.imgUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "adAdd",
  data() {
    return {
      ruleForm: {
        linkUrl: "",
        imgUrl: "",
      },
      rules: {
        linkUrl: [
          { required: true, message: "请输入链接地址", trigger: "blur" },
        ],
        imgUrl: [{ required: true, message: "请选择图片" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.avatar-uploader {
  width: 362px;
  height: 96px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 360px;
  height: 94px;
  line-height: 94px;
  text-align: center;
}
.avatar {
  width: 360px;
  display: block;
}
</style>