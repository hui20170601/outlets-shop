<template>
	<div class="outlets-home">
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
				<div class="mui-slider-indicator">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
				</div>
			</div>
			<div class="announcement bd bt">
				<div class="announcement-info">
					<span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
					<ul class="message f-12">
						<li>奥特莱斯成为中国最大的手机零食商</li>
					</ul>
				</div>
				<div class="details f-12">详情</div>
			</div>
			<div class="goods-pic clearfix bd">
				<div>
					<img src="" alt="">
				</div>
        <div>
					<img src="" alt="">
				</div>
				<div>
					<img src="" alt="">
				</div>
				<div>
					<img src="" alt="">
				</div>
			</div>
			<div class="hot-brand bd">
				<div class="title clearfix">
					<span class="fl">热门品牌</span>
					<span class="mui-icon mui-icon-forward fr"></span>
					<span class="fr">更多品牌</span>			
				</div>
				<ul class="hot-brand-tab">
					<li class="tab-active">苹果</li>
					<li>小米</li>
					<li>华为</li>
					<li>vivo</li>
					<li>oppo</li>
					<li>三星</li>
				</ul>
				<div class="hot-brand-content">
					<div class="hot-brand-cell clearfix">
						<img src="" alt="" class="fl">
						<div class="fl">
							<p>iphoneX</p>
							<p>¥8888</p>
						</div>		
					</div>
					<div class="hot-brand-cell clearfix">
						<img src="" alt="" class="fl">
						<div class="fl">
							<p>iphoneX</p>
							<p>¥8888</p>
						</div>		
					</div>
					<div class="hot-brand-cell clearfix">
						<img src="" alt="" class="fl">
						<div class="fl">
							<p>iphoneX</p>
							<p>¥8888</p>
						</div>		
					</div>
					<div class="hot-brand-cell clearfix">
						<img src="" alt="" class="fl">
						<div class="fl">
							<p>iphoneX</p>
							<p>¥8888</p>
						</div>		
					</div>
				</div>
			</div>
			<div class="recommend clearfix">
				<div class="title clearfix bd bt">
					<span class="fl">热门推荐</span>
					<span class="mui-icon mui-icon-forward fr"></span>
					<span class="fr">更多推荐</span>			
				</div>
				<div class="recommend-items bd fl">
          <img src="" alt="">
          <p>苹果iPhone7</p>
          <p>¥1500+5000积分</p>
          <p>市场参考价： ¥4999</p>
        </div>
        <div class="recommend-items bd fl">
          <img src="" alt="">
          <p>苹果iPhone7</p>
          <p>¥1500+5000积分</p>
          <p>市场参考价： ¥4999</p>
        </div>
        <div class="recommend-items bd fl">
          <img src="" alt="">
          <p>苹果iPhone7</p>
          <p>¥1500+5000积分</p>
          <p>市场参考价： ¥4999</p>
        </div>
        <div class="recommend-items bd fl">
          <img src="" alt="">
          <p>苹果iPhone7</p>
          <p>¥1500+5000积分</p>
          <p>市场参考价： ¥4999</p>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "member",
  data() {
    return {};
  },
  mounted() {
    // mui.plusReady(function(){
    mui.init({
      swipeBack: true //启用右滑关闭功能
    });
    var slider = mui("#slider");
    // slider.slider({
    // 	interval: 2000
    // });
		// });
	
  }
};
</script>

<style scoped>
	.outlets-home .slider {
  	height: 2rem;
	}
	.outlets-home .extentions {
		overflow-x: scroll;
		white-space: nowrap;
		padding: 0.2rem 0 0.1rem;
	}
	.outlets-home .extentions li:first-child {
		margin-left: 0.4rem
	}
	.outlets-home .extentions .extentions-items{
		display: inline-block;
		margin-left: 0.45rem;
	}
	.extentions .extentions-items span {
		display: block;
	}
	.extentions .extentions-items .items-txt {
		text-align: center;
	}
	.extentions .extentions-items .items-icon {
		font-size: 36px;
		margin-bottom: 5px;
	}
	.outlets-home .announcement {
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		justify-content: space-between;
		-webkit-justify-content: space-between;
		height: 0.4rem;
		line-height: 0.4rem;
    padding: 0 0.2rem;
    margin-top: 10px;
	}
	.outlets-home .announcement .announcement-info {
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
	}
	.outlets-home .announcement .mui-icon {
		font-size: 16px;
		margin-right: 10px;
	}
	.outlets-home .announcement .details{
		width: 0.4rem;
		height: 0.2rem;
		line-height: 0.2rem;		
		border: 1px solid rgb(26, 188, 156);
		color: rgb(26, 188, 156);
		text-align: center;
		border-radius: 3px;
	}
	.outlets-home .goods-pic {
    padding: 0.1rem 0.1rem 0.2rem;
	}
	.outlets-home .goods-pic div {
    width: 1.72rem;
    height: 0.95rem;
    float: left;
	}
	.outlets-home .goods-pic div:first-child {
		margin-right: 0.1rem;
		background-color: red;
		margin-bottom: 0.1rem;
	}
	.outlets-home .goods-pic div:nth-child(2) {
		background-color: rosybrown;
		margin-bottom: 0.1rem;		
  }
  .outlets-home .goods-pic div:nth-child(3) {
		background-color: rosybrown;
		margin-right: 0.1rem;
	}
	.outlets-home .goods-pic div:last-child {
		background-color: green;
	}
	.outlets-home .hot-brand {
    padding: 10px 10px 0;
	}
	.outlets-home .title {
		margin: 10px 5px 0;
		line-height: 24px;
	}
	.outlets-home .hot-brand .hot-brand-tab {
		height: 44px;
		line-height: 44px;
	}
	.hot-brand .hot-brand-tab li {
		display: inline-block;
		margin-right: 0.2rem;
		padding: 0 5px;
	}
	.hot-brand .hot-brand-tab .tab-active {
		color: red;
    height: 42px;
    border-bottom: 3px solid rgb(238, 123, 81);
	}
	.hot-brand .hot-brand-content {
		margin-top:12px;
	}
	.hot-brand .hot-brand-content .hot-brand-cell {
		display: inline-block;
		width: 1.5rem;
		padding: 20px 0 20px 5px;
		background-color: rgba(228, 228, 228, 1);
		margin: 0 7px 4px 0;
  }
  .outlets-home .recommend {
    margin-top: 10px;
  }
	.outlets-home .recommend .title {
    padding: 10px 15px;
    margin: 0;
	}
	.recommend .recommend-items {
    width: 50%;
    padding: 0.1rem 0 0.3rem ;
    text-align: center;
	}
</style>
