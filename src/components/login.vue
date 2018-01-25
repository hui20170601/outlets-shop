<template>
	<div class="outlets-shop">
    <div class="logo">
      <img src="../assets/img/u3499.svg" alt="">
    </div>
    <div class="account">
      <div class="mui-input-row bd info">
				<label>
          <i class="icon-tasks"></i>
        </label>
				<input type="text" placeholder="门店账号">
			</div>
      <div class="mui-input-row bd info">
				<label>
          <i class="icon-lock"></i>
        </label>
				<input type="password" placeholder="登录密码">
			</div>
      <div class="login-btn bgc">登录</div>
    </div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "login",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
  .outlets-shop .logo {
    height: 2rem;
    text-align: center;
  }
  .outlets-shop .logo img {
    width: 0.8rem;
    margin: 0.7rem;
  }
  .outlets-shop .account {
    width: 70%;
    margin: 0 auto;
  }
  .account .info label {
    font-size: 20px;
  }
  .account .login-btn {
    margin-top: 0.6rem;
  }
</style>
