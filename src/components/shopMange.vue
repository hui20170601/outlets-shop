<template>
	<div class="outlets-shop">
    <div class="account f-13">门店管理</div>
    <div class="settings">
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right f-13">名称</a>
        <span class="phone-num">广州白云店</span>
		  </div>
      <div class="mui-table-view-cell">
			  <a class="f-13">主图</a>
        <img src="../assets/img/p3.jpg" alt="" class="">
		  </div>
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right f-13">地址</a>
        <span class="phone-num txt">广州市白云区,江高小塘总站</span>
		  </div>
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right f-13">电话</a>
        <span class="phone-num">020-2888888</span>
		  </div>
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right f-13">营业时间</a>
        <span class="phone-num txt">周一-周五：09:00-22:00，周六-周日：09:00-23:00</span>
		  </div>
    </div>
    <div class="account f-13">门店详情</div>
     <div class="settings">
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right f-13">门店轮播图</a>
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
  .outlets-shop .account {
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.15rem;    
  }
  .outlets-shop .settings {
    background-color: #fff;
  }
  .mui-table-view-cell {
    border-bottom: 1px solid rgba(228, 228, 228, 1);
  }
  .mui-table-view-cell img {
    width: 0.5rem;
    position: absolute;
    right: 0.15rem;
    top: 0.05rem;
  }
  .mui-table-view-cell:after {
    height: 0;
  }
  .mui-navigate-right:after {
    font-size: 24px;
    color: #999999;
  }
  .outlets-setting .settings .mui-table-view-cell{
    height: 0.5rem;
    line-height: 0.24rem;
  }
  .outlets-shop .txt {
    display: inline-block;
    width: 100px;;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .outlets-shop .phone-num {
    position: absolute;
    top: 0.13rem;
    right: 0.4rem;
  }
  .outlets-shop .mui-table-view-cell span {
    color: #999;
  }
</style>
