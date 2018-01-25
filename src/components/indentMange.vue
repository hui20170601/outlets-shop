<template>
	<div class="outlets-shop">
    <div class="shop-info">
      <span class="setting">
        <i class="icon-cog fr f-24"></i>
      </span>
      <div class="avatar fl">
        <img src="" alt="">
      </div>
      <div class="base-info fl">
        <p class="f-16">门店名称</p>
        <p class="stars f-24">
          <i class="icon-heart"></i>
          <i class="icon-heart"></i>
          <i class="icon-heart"></i>
          <i class="icon-heart"></i>
          <i class="icon-heart"></i>
        </p>
      </div>
    </div>
    <div class="orders">
      <div class="mui-table-view-cell f-14">
			  <a class="mui-navigate-right">全部订单</a>
		  </div>
      <div class="category">
        <div class="unfinish">
          <i class="icon-file-alt"></i>
          <span>未完成订单</span>
          <span class="num">12</span>
        </div>
        <div class="line"></div>
        <div class="finished">
          <i class="icon-ok-sign"></i>
          <span>已完成订单</span>
          <span class="num">88</span>
        </div>
        <div class="line"></div>
        <div class="cancel">
          <i class="icon-exclamation-sign"></i>
          <span>已取消订单</span>
          <span class="num">0</span>
        </div>
      </div>
    </div>
    
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "indentMange",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
  .outlets-shop .shop-info {
    height: 2rem;
    box-sizing: border-box;
    padding:0.1rem 0.2rem 0 0.4rem;
    background-color: rgba(70, 76, 91, 1); 
  }
  .shop-info .setting {
    color: #efeff4;
  }
  .shop-info .avatar {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: beige;
    margin-right: 0.2rem;
    margin-top: 0.7rem;
  }
  .shop-info .base-info {
    margin-top: 0.75rem;
  }
  .shop-info .base-info p {
    color: #efeff4;
  }
   .shop-info .base-info .stars {
    color: rgb(243, 78, 106);
     margin-top: 12px;
  }
  .mui-table-view-cell:after {
    height: 0;
  }
  .mui-navigate-right:after {
    font-size: 24px;
  }
  .mui-table-view-cell {
    height: 50px;
    padding-top: 13px;
    background-color: #fff;    
  }

  .orders .category {
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    align-items: center;
    -webkit-align-items: center;
    height: 1.5rem;
    margin-top: 10px;
    background-color: #fff;    
  }
  .category i {
    font-size: 50px;
    margin-bottom: 10px;
    color: rgba(70, 76, 91, 1);
  }
  .category i,.category span {
    display: block;
    text-align: center;
  }
  .category span {
    color: rgb(39, 38, 38);
  }
  .unfinish .num {
     color: rgb(248, 82, 17)
  }
  .category .num {
    font-size: 13px;
  }
  .category .line { 
    width: 2px;
    height: 0.8rem;
    background-color: #efeff4;
  }
</style>
