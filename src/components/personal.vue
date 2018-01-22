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
    <div class="order-kind mui-bar-tab">
      <div class="order-kind-items mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
      </div>
       <div class="order-kind-items mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
      </div>
       <div class="order-kind-items mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
      </div>
       <div class="order-kind-items mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
      </div>
    </div>
    <div class="settings">
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right">我的收藏</a>
		  </div>
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right">门店信息</a>
		  </div>
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right">设置</a>
		  </div>
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
  .outlets-personal .order-kind {
    display: flex;
    display: -webkit-flex;
    padding: 12px 0 55px;;
  }
  .outlets-personal .order-kind .order-kind-items {
    flex: 1;
  }
  .outlets-personal .settings {
    height: 3.2rem;
    background-color: rgb(249, 249, 249);
    padding-top: 12px;
  }
  .mui-table-view-cell:after {
    height: 0;
  }
  .mui-push-right:after {
    font-size: 24px;
  }
  .outlets-personal .settings .mui-table-view-cell{
    margin-bottom: 12px;
    background-color: #fff;
  }
</style>
