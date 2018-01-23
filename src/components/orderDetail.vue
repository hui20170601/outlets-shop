<template>
	<div class="outlets-orderDetail">
    <div class="mui-bar mui-bar-tab cancel">
      <button class="fr">取消订单</button>
    </div>
    <div class="mui-content">
      <div class="choose-shop">
        <span class="mui-icon-extra mui-icon-extra-outline"></span>
        <span>等待提货</span>
      </div>
      <div class="personal-info clearfix">
        <div class="fl">
          <span class="mui-icon mui-icon-location"></span>
        </div>
        <div class="base-info fl">
          <p>广州市白云区店</p>
          <p class="member-integral f-12">广州市白云区，江高小塘总站</p>
        </div>
      </div>
      <div class="line-bold"></div>      
      <div class="personal-info clearfix">
        <div class="avatar fl">
          <img src="" alt="">
        </div>
        <div class="base-info fl">
          <p>windir</p>
          <p class="member-integral f-12">
            <span>黄金会员</span>
            <span>188 8888 8888</span>
          </p>
        </div>
      </div>
      <div class="line-bold"></div>
      <div class="goods-info">
        <div class="title bt">商品信息</div>
        <div class="content bd bt">
          <a href="javascript:;">
					  <img class="mui-media-object mui-pull-left" src="">
					    <div class="mui-media-body">
							  苹果 iphone7
                <span class="fr">*1</span>
							  <p class='recommend-list-txt'>防水防尘，混合红外线滤镜，TrueTone 闪光灯</p>
							  <p class='mui-ellipsis'>¥4079</p>
						  </div>
					  </a>
        </div>
      </div>
      <div class="line-bold"></div>
      <div class="order-info">
        <div class="title bd">订单信息</div>
        <div class="num">
          <p><span>商品合计：</span><span>¥8599.00</span></p>
          <p><span>积分抵扣：</span><span>¥10.00</span></p>
          <p><span>活动优惠：</span><span>-¥8.00</span></p>
        </div>
      </div> 
      <div class="line-bold"></div>
      <div class="order-info">
        <div class="num">
          <p><span>订单编号：</span><span>¥8599.00</span><button class="fr">复制</button></p>
          <p><span>提交时间：</span><span>¥10.00</span></p>
          <p><span>支付方式：</span><span>-¥8.00</span></p>
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
    margin : 8px 20px 0 0;
    color: #929292;
    border-radius: 5px;
  }
  .choose-shop {
    height: 0.8rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    padding-left: 0.2rem;
    background-color:  rgb(26, 188, 156);
    color: #fff;
    font-size: 18px;
  }
  .mui-icon-extra {
    font-weight: 900;
    margin-right: 5px;
  }
  .choose-shop .mui-navigate-right {
    text-align: center;
    font-size: 18px;
  }
  .choose-shop .mui-navigate-right:after {
    font-size: 24px;
  }
  .choose-shop .mui-table-view-cell {
    height: 100px;
    line-height: 80px;
  }
  .personal-info {
    padding: 0.2rem 0.1rem;
  }
  .personal-info .avatar {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: beige;
    margin-right: 0.1rem;
  }
  .personal-info .base-info {
     margin-top: -7px;
  }
  .title {
    padding: 0 0.15rem;
    height: 0.4rem;
    line-height: 0.4rem;
  }
  .goods-info .content,.order-info .num {
    padding: 0.1rem 0.15rem;
  }
  .order-info .num p {
    line-height: 30px;
    font-size: 12px;
  }
  .outlets-orderDetail .num button {
   height: 25px;
   width: 60px;
   line-height: 25px;
   padding: 0;
   color: #929292;
   border-radius: 5px;
 }
</style>
