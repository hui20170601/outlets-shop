<template>
	<div class="outlets-changePwd">
    <div class="contain">
      <div class="mui-input-row bd">
			  <label class="lab">姓名</label>
			  <input type="text" placeholder="输入收货人姓名">
		  </div>
      <div class="mui-input-row bd">
			  <label class="lab">手机号码</label>
			  <input type="text" placeholder="输入手机号码">
		  </div>
      <div class="mui-input-row bd">
			  <label class="lab">邮政编码</label>
			  <input type="text" placeholder="输入邮政编码">
		  </div>
      <div class="mui-input-row bd">
			  <label class="lab">所在区域</label>
			  <input type="text" placeholder="选择所在省份城市县区">
        <span class="mui-icon mui-icon-arrowright"></span>
		  </div>
      <div class="mui-input-row bd">
			  <label class="lab">详细地址</label>
			  <input type="text" placeholder="街道楼牌号等详细地址">
		  </div>
    </div>
    <div class="mui-input-row mui-radio mui-left">
			<label>设为默认收货地址</label>
			<input name="radio1" type="radio">
		</div>
    <div class="confirm">保存</div>
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
  .outlets-changePwd .contain {
    background-color: #fff;
  }
  .outlets-changePwd .mui-input-row {
    height: 0.45rem;
    line-height: 0.45rem;
    font-size:14px;
  }
  .outlets-changePwd .mui-input-row .lab {
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
    margin: 0 auto;
    border-radius: 5px;
  }
  .outlets-changePwd .mui-icon {
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
  }
  .mui-radio input[type='radio']:before {
    font-size: 20px;
    position: absolute;
    top: 7px;
  }
  .mui-radio.mui-left label {
    padding-left: 44px;
  }
</style>
