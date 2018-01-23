<template>
	<div class="outlets-changePwd">
    <div class="title bd">
      <span>1.验证原号码</span>
      <span>2.绑定新手机</span>
		</div>
    <div class="contain">
      <div class="otp bd">
        <span>188****8888</span>
        <button class="fr">发送验证码</button>
		  </div>
      <div class="mui-input-row bd">
        <label></label>
			  <input type="text" placeholder="输入验证码">
		  </div>
    </div>  
    <div class="confirm">下一步</div>
    <div class="tips">
      <p class="f-12">
        <span></span>
        <span>温馨提示</span>
      </p>
      <p class="f-12">手机号码修改成功后需要使用新的手机号码进行登录。</p>
    </div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "changePhone",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
  .outlets-changePwd .title {
    height: 0.45rem;
    line-height: 0.45rem;
  }
  .outlets-changePwd .title span {
    display: inline-block;
    width: 49%;
    text-align: center;
  }
  .outlets-changePwd .mui-input-row, .otp{
    width: 90%;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size:14px;
    margin: 0 auto;
  }
  .otp button {
    margin : 6px 0 0 0;
    color: #929292;
    border-radius: 5px;
  }
  .outlets-changePwd .mui-input-row label {
    color: #000;
    width: 0; 
    padding: 0;
  }
  .outlets-changePwd .mui-input-row input {
    width: 100%;
    font-size:14px;    
  }
  .contain {
    background-color: #fff;
    margin-top: 0.1rem;
  }
  .outlets-changePwd .confirm {
    background-color:  rgb(26, 188, 156);
    color: #fff;
    text-align: center;
    width: 90%;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 16px;
    margin: 0.2rem auto 0;
    border-radius: 5px;
  }
  .tips {
    width: 90%;
    margin: 0.3rem  auto 0;
  }
</style>
