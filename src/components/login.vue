<template>
  <el-container class="contioner-login">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
      <div class="title">智社后台管理系统</div>
      <el-form-item prop="name">
        <el-input v-model="loginForm.name" placeholder="请输入用户名" type="text">
          <icon slot="prefix" name="user"></icon>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" :type="type">
          <icon slot="prefix" name="lock"></icon>
          <span slot="suffix" @click="changView()"><icon  :name="name"></icon></span>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      name: "eye-slash",
      type: "password",
      loginForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    changView() {
      if (this.name == "eye-slash") {
        this.type = "text";
        this.name = "eye";
      } else {
        this.type = "password";
        this.name = "eye-slash";
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.contioner-login {
  width: 100%;
  position: absolute;
  height: 100%;
  background: #2b394c;
  .el-form {
    width: 450px;
    height: 165px;
    margin: 130px auto 0px;
    .title {
      margin-bottom: 40px;
      font-size: 26px;
      font-weight: 400;
      color: #eee;
      text-align: center;
      font-weight: bold;
    }
    .el-input__inner {
      height: 47px;
      line-height: 47px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #fff;
    }
    .el-button {
      width: 100%;
      background: #009b8b;
      border-color: #009b8b;
    }
    .el-input__prefix,
    .el-input__suffix {
      position: absolute;
      top: 6px;
      color: #889aa4;
    }
  }
}
</style>


