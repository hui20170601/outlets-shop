<template>
	<div class="outlets-shop">
    <div class="mui-bar mui-bar-tab cancel">
      <button class="fr f-12 block">取消订单</button>
    </div>
    <div class="mui-content">
      <div class="choose-shop">
        <span class="mui-icon-extra mui-icon-extra-outline"></span>
        <span class="f-16">未完成</span>
      </div>
      <div class="personal-info clearfix">
        <div class="icon fl">
          <img src="../assets/img/u2862.svg" alt="">
        </div>
        <div class="base-info fl">
          <p class="block f-16">广州市白云区店</p>
          <p class="member-integral f-12">广州市白云区，江高小塘总站</p>
        </div>
      </div>
      <div class="personal-info clearfix">
        <div class="avatar fl">
          <img src="" alt="">
        </div>
        <div class="base-info fl">
          <p class="block f-16">windir</p>
          <p class="member-integral f-12">
            <span>黄金会员</span>
            <span>188 8888 8888</span>
          </p>
        </div>
      </div>
      <div class="goods-info">
        <div class="title f-13">商品信息</div>
        <div class="content">
					<img class="mui-media-object mui-pull-left" src="../assets/img/p3.jpg">
					<div class="mui-media-body f-16 block">
						苹果 iphone7
            <span class="fr f-13 red">x1</span>
						<p class='recommend-list-txt f-12 block'>防水防尘，混合红外线滤镜，TrueTone 闪光灯</p>
						<p class='mui-ellipsis f-13 red'>¥4079</p>
						<p class='mui-ellipsis f-12 block'>(门店自提）广州白云区店</p>
					</div>
        </div>
      </div>
       <div class="order-info">
        <div class="title bd f-13">订单信息</div>
        <div class="sum">
          <p><span class="block">商品合计：</span><span class="num">¥8599.00</span></p>
          <p><span class="block">积分抵扣：</span><span class="num">¥10.00</span></p>
          <p><span class="block">活动优惠：</span><span class="num">- ¥8.00</span></p>
        </div>
      </div> 
      <div class="order-info">
        <div class="sum">
          <p><span class="block">订单编号：</span><span class="num">¥8599.00</span><button class="fr block f-12">复制</button></p>
          <p><span class="block">提交时间：</span><span class="num">¥10.00</span></p>
          <p><span class="block">支付方式：</span><span class="num">-¥8.00</span></p>
        </div>
      </div>  
    </div>   
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "orderDetail",
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style scoped>
  .cancel button{
    margin : 10px 20px 0 0;
    border-radius: 5px;
  }
  .choose-shop {
    height: 1rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    padding-left: 0.2rem;
    background-color:  rgb(26, 188, 156);
    color: #fff;
  }
  .mui-icon-extra {
    font-weight: 900;
    margin-right: 5px;
  }
  .personal-info .icon {
    margin: 7px 10px 0 0;
  }
  .choose-shop .mui-table-view-cell {
    height: 100px;
    line-height: 80px;
  }
  .title {
    padding: 0 0.15rem;
    height: 0.4rem;
    line-height: 0.4rem;
  }
  .goods-info {
    background-color: #fff;
    margin-bottom: 12px;       
  }
  .goods-info .content,.order-info .sum {
    padding: 0.2rem 0.15rem;
  }
  .content{
    position: relative;
    padding: 10px 0 6px;
  }
   .content img {
    width: 0.9rem;
    height: 1rem;
    margin-right: 10px;
  }
  .content::before,.content::after {
    content: '';
    height: 1px;
    background-color: rgba(228, 228, 228, 1);
    position: absolute;
    left: -0.2rem;
    right: -0.2rem;
    bottom: 0;
  }
  .content::before {
    top: 0;
  }
  .order-info {
    background-color: #fff;
    margin-bottom: 12px;
  }
  .order-info .sum p {
    line-height: 30px;
    font-size: 12px;
  }
  .order-info .num {
    margin-left: 15px;
  }
  .outlets-shop .sum button {
   height: 25px;
   width: 60px;
   line-height: 25px;
   padding: 0;
   border-radius: 5px;
 }
</style>
