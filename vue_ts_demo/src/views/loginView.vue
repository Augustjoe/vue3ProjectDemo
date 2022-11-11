<template>
  <div class="loginBox">
    <el-form ref="formEl" :model="formInline" :rules="rules" label-width="80px" class="demo-form">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="formInline.userName" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="passWords">
        <el-input v-model="formInline.passWords" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formEl)">登录</el-button>
        <el-button type="default" @click="reset">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref } from "@vue/reactivity";
// 引入规定好的formData类为formInline规定类型
import { FromInt } from "@/type/loginData"
import router from "@/router"
import type { FormInstance } from 'element-plus'

let formEl = ref<FormInstance>()

const formInline = reactive(FromInt)

const rules = {
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 15, message: '请输入3到15个字符', trigger: 'blur' },
  ],
  passWords: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(formInline)
      if(formInline.passWords == '123' && formInline.userName == 'admin'){
        router.push('/')
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}


// function onSubmit(){

// }

// function reg(){

// }

</script>

<style lang="scss" scoped>
.loginBox {
  width: 100%;
  height: 100%;
  padding-bottom: 1px;
  .demo-form{
      background: #a8dceb;
      width:350px;
      margin: auto;
      margin-top:200px;
      padding:40px;
      border-radius: 20px;
  }
}
</style>