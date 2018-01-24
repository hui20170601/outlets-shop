<template>
	<div class="outlets-shop">
    <div class="logo">
      <img src="../assets/img/u3499.svg" alt="">
      <p class="f-16">奥特莱斯手机商城</p>
    </div>
    <div class="access bt">
      <p class="txt">登录应用将获取以下权限</p>
      <div class="mui-input-row mui-checkbox mui-left">
				<label>获得你的公开信息（昵称、头像等）</label>
				<input name="checkbox" value="Item 2" type="checkbox" checked="">
			</div>
      <div class="confirm-btn bgc">确认登录</div>
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
    height: 2.2rem;
    text-align: center;
  }
  .outlets-shop .logo img {
    width: 0.8rem;
    margin: 0.7rem 0 0.2rem 0;
  }
  .outlets-shop .access {
    width: 80%;
    margin: 0 auto;
  }
  .access .txt {
    margin: 30px 0 10px;
  }
  .access .mui-checkbox input[type='checkbox'] {
    left: 0;
  }
  .access .mui-checkbox input[type='checkbox']::before {
    font-size: 20px;
  }
  .access .mui-checkbox.mui-left label {
    padding: 9px 15px 11px 29px;
  }
   .access .confirm-btn {
    margin-top: 0.6rem;
  }
</style>
