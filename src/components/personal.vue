<template>
	<div class="outlets-personal">
		<div class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
				<span class="mui-tab-label">会员权益</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">个人中心</span>
			</a>
		</div>
    <div class="personal-info">
      <div class="avatar fl">
        <img src="" alt="">
      </div>
      <div class="base-info fl">
        <p>windir</p>
        <p>已绑定微信账号</p>
        <p class="member-integral f-12">
          <span>黄金会员</span>
          <span>1800积分</span>
        </p>
      </div>
    </div>
    <div class="order-kind">
      
    </div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "personal",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
  .outlets-personal .personal-info {
    height: 2rem;
    box-sizing: border-box;
    padding:0.8rem 0 0 0.4rem;
    background-color: rgba(70, 76, 91, 1); 
  }
  .personal-info .avatar {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: beige;
    margin-right: 0.2rem;
  }
  .personal-info .base-info p {
    color: #fff;
  }
  .personal-info .base-info .member-integral {
    border: 1px solid #fff;
    border-radius: 18px;
    padding: 0 5px;
  }
</style>
