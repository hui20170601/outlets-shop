<template>
	<div class="outlets-order">
    <ul class="order-tab bd">
			<li class="tab-active">全部</li>
			<li>待提货</li>
			<li>已提货</li>
			<li>已取消</li>
			<li>待评价</li>
		</ul>
    <div class="order-status">
      <div class="order-num clearfix">
        <span class="fl">订单编号：123456</span>
        <span class="fr">待提货</span>
      </div>
      <div class="goods-info">
        <div class="content">
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
      <div class="handle-btn">
        <button class="fr">取消订单</button>
      </div>
    </div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "order",
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style scoped>
 .order-tab {
    height: 40px;
    display: flex;
    display: -webkit-flex;
    background-color: #fff;
	}
	.order-tab li {
    height: 100%;
    line-height: 40px;;
	  flex: 1;
		margin-right: 0.2rem;
    padding: 0 5px;
    text-align: center;
	}
	.order-tab .tab-active {
		color: rgb(51, 153, 204);
    border-bottom: 2px solid rgb(51, 153, 204);
  }
  .order-status {
    padding: 0 0.2rem;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .order-status .order-num, .handle-btn {
    height: 45px;
    line-height: 45px;
  }
  .content {
    position: relative;
    padding: 10px 0;
  }
  .content::before, .content::after {
    content: '';
    height: 1px;
    background-color: rgba(228, 228, 228, 1);
    position: absolute;
    left: -0.2rem;
    right: -0.2rem;
  }
  .content::before {
    top: 0;
  }
  .content::after {
    bottom: 0;
  }
  .handle-btn button {
    margin : 8px 0 0 0;
    color: #929292;
    border-radius: 5px;
  }
</style>
