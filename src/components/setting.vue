<template>
	<div class="outlets-setting">
    <div class="account">账号管理</div>
    <div class="settings">
      <div class="mui-table-view-cell bd">
			  <a class="mui-navigate-right">修改密码</a>
		  </div>
      <div class="mui-table-view-cell bd">
			  <a class="mui-navigate-right">地址管理</a>
		  </div>
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right">修改手机</a>
        <span class="phone-num">180****8888</span>
		  </div>
    </div>
    <div class="account">关于</div>
     <div class="settings">
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right">关于商城</a>
        <span class="phone-num">普通会员</span>
		  </div>
    </div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "setting",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
  .outlets-setting .account {
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.15rem;    
  }
  .outlets-setting .settings {
    /* height: 3.2rem; */
    background-color: #fff;
  }
  .mui-table-view-cell:after {
    height: 0;
  }
  .mui-navigate-right:after {
    font-size: 24px;
  }
  .outlets-setting .settings .mui-table-view-cell{
    height: 0.5rem;
    line-height: 0.24rem;
  }
  .phone-num {
    position: absolute;
    top: 0.13rem;
    right: 0.4rem;
  }
</style>
