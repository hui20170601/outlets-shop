<template>
	<div class="outlets-productDetail">
    <div class="mui-bar mui-bar-tab">
      <div class="ask fl">
      	<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">提问</span>
      </div>
			<div class="ask fl">
        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">收藏</span>
      </div>
			<div class="jd fl">京东购买</div>
			<div class="buy fr">立即购买</div>
		</div>
		<div class="mui-content">
      <div id="slider" class="mui-slider slider">
				<div class="mui-slider-group mui-slider-loop">
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#">
							<img src="../assets/img/p4.jpg">
						</a>
					</div>
					<!-- 第一张 -->
					<div class="mui-slider-item">
						<a href="#">
							<img src="../assets/img/p1.jpg">
						</a>
					</div>
					<!-- 第二张 -->
					<div class="mui-slider-item">
						<a href="#">
							<img src="../assets/img/p2.jpg">
						</a>
					</div>
					<!-- 第三张 -->
					<div class="mui-slider-item">
						<a href="#">
							<img src="../assets/img/p3.jpg">
						</a>
					</div>
					<!-- 第四张 -->
					<div class="mui-slider-item">
						<a href="#">
							<img src="../assets/img/p4.jpg">
						</a>
					</div>
					<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#">
							<img src="../assets/img/p1.jpg">
						</a>
					</div>
				</div>
			</div>
      <div class="goods-info bd">
        <p>华为 Mate 10 Pro</p>
        <p>保时捷版[免息送豪礼]HuaWei/华为 10 Pro手机正品MATE10,咨询客服有优惠!</p>
        <p>￥5899</p>
        <p>您是黄金会员可抵扣1000积分</p></p>
      </div>
      <div class="service bt">
        <span class="fl">服务说明</span>
        <span class="fr">送589.9积分</span>
      </div>
      <div class="service spec bt">
        <span class="fl">选择规格</span>
        <div class="param">
          <p class="f-12">浅艾蓝 全网通版 4GB+64GB 官方标配</p>
          <p class="f-12 fr">*1</p>
        </div>
        <span class="mui-icon mui-icon-arrowright fr"></span>
      </div>
      <div class="introduce">
        <div class="nav">
          <span>商品</span>
          <span>详情</span>
          <span>参数</span>
        </div>
        <div class="content">
          <p class="f-12">关于定制版说明：Mate10移动定制全网通版和全网通版随机发，除了有定制logo区别，网络均不影响使用，定制版在插入两张sim卡时，只有一张为移动sim卡时，即默认移动卡为主卡，另外一张sim卡只能使用2G通话不支持数据流量。</p>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "productDetail",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
  .outlets-productDetail .mui-bar {
    padding-left: 0.2rem;
  }
  .outlets-productDetail .mui-bar .ask {
    width: 20%;
    display: flex;
    flex-direction: column;
    padding-top: 4px;
  }
  .outlets-productDetail .mui-bar .ask span {
    padding: 0px;
  }
  .outlets-productDetail .mui-bar .jd {
    width: 25%;
    line-height: 50px;
    text-align: center;
    background-color: rgba(26, 188, 156, 1);
    color: #fff;
    font-size: 14px;
  }
  .outlets-productDetail .mui-bar .buy {
    width: 35%;
    line-height: 50px;
    text-align: center;    
    background-color: rgba(255, 204, 51, 1);
    color: #fff;
    font-size: 14px;    
  }
  .outlets-productDetail .goods-info {
    padding: 0.2rem;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .outlets-productDetail .service {
    height: 0.45rem;
    line-height: 0.45rem;
    background-color: #fff;
    padding: 0 0.2rem;    
  }
  .spec {
    position: relative;
    margin-bottom: 15px;
  }
  .param {
    position: absolute;
    top: 0;
    right: 0.48rem;
  }
  .param p {
    line-height: 0.25rem;
  }
  .spec .mui-icon {
    line-height: 0.45rem;    
  }
  .introduce {
    background-color: #fff;    
  }
  .introduce .nav {
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    align-items: center;
    -webkit-align-items: center;
    height: 0.4rem;
    border-bottom: 2px solid rgba(228, 228, 228, 1);
  }
  .introduce .content {
    padding: 0.2rem;
    
  }
</style>
