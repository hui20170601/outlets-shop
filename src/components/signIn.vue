<template>
	<div class="outlets-singIn">
		<div class="container">
      <div class="personal-info clearfix">
        <div class="avatar fl">
          <img src="" alt="">
        </div>
        <div class="base-info fl">
          <p>windir</p>
          <p class="member-integral f-12">
            <span>黄金会员</span>
            <span>1800积分</span>
          </p>
        </div>
      </div>
      <p class="f-12">累计有效签到积分:5,距离升级至钻石会员还差8000分</p>
      <div class="signin-days">
        <p>已连续签到<span class="num">2</span>天</p>
        <div class="mui-btn mui-btn-primary f-12">签到</div>
      </div>
      <div class="signin-gifts">
        <span class="title">连续签到送大礼包</span>
      </div>
    </div>
    
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "singIn",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
  .outlets-singIn {
    background-color: rgb(249, 249, 249);
    padding: 0.1rem;
  }
  .outlets-singIn .container {
     background-color: #fff;
     border-radius: 15px;
     padding: 0.2rem;
  }
   .personal-info {
     margin-bottom: 15px;
   }
   .personal-info .avatar {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: beige;
    margin-right: 0.1rem;
  }
  .personal-info .base-info .member-integral {
    color: #fff;
    background-color: rgb(153, 153, 153);
    border-radius: 18px;
    padding: 0 5px;
    margin-top: 10px;
  }
  .signin-days {
    text-align: center;
    margin: 0.7rem 0;
  }
  .signin-days p {
    font-size: 24px;
    color: #000;
    margin-bottom: 0.5rem;
  }
  .signin-days .num {
    font-size: 30px;
  }
  .signin-days .mui-btn {
    width: 90%;
    border-radius: 20px;
    height: 40px;
    line-height: 26px;
  }
  .signin-gifts {
    position: relative;
    border-top: 1px solid rgb(153, 153, 153);
  }
  .signin-gifts .title {
    position: absolute;
    left: 50%;
    top: -12px;
    transform: translateX(-50%);
    font-size: 16px;
    padding: 0 10px;
    background-color: #efeff4;
  }
</style>
