<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm mt20"
    >
      <el-form-item label="产品图片" prop="pic">
        <el-col :span="16">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            multiple
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview">
                  <i class="el-icon-edit"></i>
                </span>
                <span class="el-upload-list__item-delete">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-alert
            title="产品图片建议尺寸：800*800，首张图片为封面图，最多可上传5张"
            type="warning"
            show-icon
            :closable="false"
          >
          </el-alert>
        </el-col>
      </el-form-item>
      <el-form-item label="产品名称" prop="name">
        <el-col :span="12">
          <el-input
            type="text"
            v-model="ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品分类" prop="category">
        <el-select v-model="ruleForm.category" placeholder="请选择类别">
          <el-option
            v-for="item in categorys"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品简介" prop="abstract">
        <el-col :span="16">
          <el-input
            type="textarea"
            :rows="8"
            placeholder="请输入产品简介"
            v-model="ruleForm.abstract"
            maxlength="300"
            show-word-limit
          >
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品原价" prop="price">
        <el-input-number
          v-model="ruleForm.price"
          :precision="2"
          :step="10"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="产品优惠价" prop="newPrice">
        <el-input-number
          v-model="ruleForm.newPrice"
          :precision="2"
          :step="10"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="产品类型" prop="type">
        <el-radio v-model="ruleForm.type" :label="1">普通产品</el-radio>
        <el-radio v-model="ruleForm.type" :label="2">会员产品</el-radio>
      </el-form-item>
      <el-form-item label="产品详情" prop="detail">
        <el-col :span="16">
          <editor></editor>
          <el-alert
            title="产品详情图片大小建议不要超过300kb"
            type="warning"
            show-icon
            :closable="false"
            class="mt10"
          >
          </el-alert>
        </el-col>
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
import editor from "@/components/base/editor";

export default {
  name: "productAdd",
  data() {
    return {
      ruleForm: {
        pic: "",
        name: "",
        category: "",
        abstract: "",
        price: 10,
        newPrice: 0,
        type: 1,
        detail: "",
      },
      rules: {
        pic: [{ required: true, message: "请选择产品图片" }],
        name: [{ required: true, message: "请输入产品名称", trigger: "blur" }],
        category: [
          { required: true, message: "请选择产品类别", trigger: "blur" },
        ],
        abstract: [
          { required: true, message: "请输入产品简介", trigger: "blur" },
        ],
        price: [{ required: true, message: "请输入产品价格", trigger: "blur" }],
        type: [{ required: true, message: "请选择产品类型", trigger: "blur" }],
        detail: [
          { required: true, message: "请输入产品详情", trigger: "blur" },
        ],
      },
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
  components: {
    editor,
  },
};
</script>

<style scoped>
</style>