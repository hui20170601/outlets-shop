<template>
	<div class="outlets-trans">
    <div class="mui-bar mui-bar-tab submit">
      <span class="sum">应付金额：5881元</span>
      <div class="btn">确认提交</div>
    </div>
    <div class="mui-content">
      <div class="choose-shop">
        <div class="mui-table-view-cell">
			    <a class="mui-navigate-right">请选择门店</a>
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
      <div class="line"></div>
      <div class="line-bold"></div>
      <div class="pay-info bt bd mui-table-view-cell clearfix">
        <span class="integral">积分抵扣</span>
        <span>使用1000积分可抵扣¥10.00现金</span>
        <div class="mui-switch mui-switch-mini mui-active fr">
				  <div class="mui-switch-handle"></div>
			  </div>
      </div>
      <div class="line"></div>
      <div class="pay-info bd clearfix">
        <span class="fl">商品合计</span>
        <span class="fr">¥5899.00</span>
      </div>
      <div class="pay-info bd clearfix">
        <span class="fl">积分抵扣</span>
        <span class="fr">¥10.00</span>
      </div>
      <div class="pay-info bd clearfix">
        <span class="fl">活动优惠</span>
        <span class="tag">APP首单减免8元</span>
        <span class="fr">-¥8.00</span>
      </div>       
    </div>   
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "trans",
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style scoped>
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
  .goods-info .title {
    padding: 0 0.15rem;
    height: 0.4rem;
    line-height: 0.4rem;
  }
  .goods-info .content {
    padding: 0.1rem 0.15rem;
  }
  .outlets-trans .pay-info {
    box-sizing: border-box;
    padding: 0 0.15rem;
    height: 0.49rem;
    line-height: 0.49rem;
  }
  .mui-table-view-cell:after {
    height: 0;
  }
  .mui-switch .mui-switch-handle {
    transform: translateX(0.41rem);    
    top: 0px;
    width: 0.21rem;
    height: 0.21rem;
  }
  .mui-switch {
    width: 0.65rem;
    height: 0.25rem;
  }
  .pay-info .integral {
    margin-right: 0.1rem;
  }
  .pay-info .tag{
    display: inline-block;
    color: orange;
    border: 1px solid orange;
    padding: 0 0.02rem;
    height: 22px;
    line-height: 22px;
    position: relative;
    left: 1.1rem;
  }
  .pay-info .tag:after {
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-color: transparent transparent
    transparent orange;
    border-style: solid;
    position: absolute;
    right: -24px;
    top: -2px;
  }
  .pay-info .tag::before {
    width: 0;
    height: 0;
    content: '';
    border-width: 10px;
    border-color: transparent transparent
    transparent #ffffff;
    border-style: solid;
    position: absolute;
    right: -20px;
    top: 0;
    z-index: 1;
  }
  .outlets-trans .submit {
    line-height: 50px;
  }
  .submit .sum {
    position: absolute;
    left: 0.1rem;
  }
  .submit .btn {
    position: absolute;
    right: 0;
    width: 1.5rem;
    height: 100%;
    color: #fff;
    background: rgba(255, 204, 51, 1);
    text-align: center;
  }
</style>
