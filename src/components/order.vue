<template>
	<div class="outlets-order">
    <ul class="order-tab">
			<li class="tab-active">全部</li>
			<li>未完成</li>
			<li>已完成</li>
			<li>已取消</li>
		</ul>
    <div class="order-status">
      <div class="order-num">
        <span class="fl">订单编号：123456</span>
        <span class="fr red">待提货</span>
      </div>
      <div class="goods-info">
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
      <div class="handle-btn">
        <button class="fr block f-12">取消订单</button>
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
    line-height: 40px;
	  flex: 1;
		margin-right: 0.2rem;
    padding: 0 5px;
    text-align: center;
  }
  .order-tab .tab-active {
    position: relative;
    color: rgba(26, 188, 156, 1);
  }
	.order-tab .tab-active::after{
    content: '';
    height: 2px;
    width: 100%;
    background-color: rgba(26, 188, 156, 1);
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 1;;
  }
  .order-status {
    padding: 0 0.2rem;
    background-color: #fff;
    margin-bottom: 12px;
  }
  .order-status .order-num, .handle-btn {
    height: 45px;
    line-height: 45px;
  }
  .content{
    position: relative;
    padding: 10px 0 6px;
  }
  .order-num {
    position: relative;
  }
  .content img {
    width: 0.9rem;
    height: 1rem;
    margin-right: 10px;
  }
  .order-num::before,.order-num::after,.content::after {
    content: '';
    height: 1px;
    background-color: rgba(228, 228, 228, 1);
    position: absolute;
    left: -0.2rem;
    right: -0.2rem;
    bottom: 0;
  }
  .order-num::before {
    top: 0;
  }
  .handle-btn button {
    margin : 8px 0 0 0;
    border-radius: 5px;
  }
</style>
