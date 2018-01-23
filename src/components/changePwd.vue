<template>
	<div class="outlets-changePwd">
    <div class="mui-input-row bd">
			<label>旧密码</label>
			<input type="text" placeholder="请输入旧密码">
		</div>
    <div class="mui-input-row bd">
			<label>新密码</label>
			<input type="text" placeholder="请输入新密码（6-20位数字或字母）">
		</div>
    <div class="mui-input-row bd">
			<label>确认密码</label>
			<input type="text" placeholder="请再次输入新密码">
		</div>
    <div class="confirm">确定</div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "changePwd",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
  .outlets-changePwd .mui-input-row {
    height: 0.45rem;
    line-height: 0.45rem;
    font-size:14px;
  }
  .outlets-changePwd .mui-input-row label {
    color: #000;
    width: 30%; 
  }
  .outlets-changePwd .mui-input-row input {
    width: 70%;
    font-size:14px;    
  }
  .outlets-changePwd .confirm {
    background-color:  rgb(26, 188, 156);
    color: #fff;
    text-align: center;
    width: 90%;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 16px;
    margin: 1rem auto 0;
    border-radius: 5px;
  }
</style>
