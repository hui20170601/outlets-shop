<template>
	<div class="outlets-chooseShop">
		<div class="mui-content">
			<div class="nav bd">
        <div>
          <span>全部品牌</span>
          <span class="mui-icon mui-icon-arrowdown"></span>
        </div>
        <div>
          <span>价格</span>
          <span class="mui-icon mui-icon-arrowdown"></span>
        </div>
        <div>
          <span>筛选商品</span>
          <span class="mui-icon mui-icon-arrowdown"></span>
        </div>
      </div>
      <ul class="mui-table-view shop-list">
				<li class="mui-table-view-cell mui-media mui-input-row mui-radio">
					<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							苹果 iphone7
							<p class='recommend-list-txt'>防水防尘，混合红外线滤镜，TrueTone 闪光灯</p>
							<p class='mui-ellipsis'>¥4079</p>
						</div>          
					</li> 
				</ul>
		</div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "chooseShop",
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
  .outlets-chooseShop .confirm {
    background-color:  rgb(26, 188, 156);
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
  }
  .outlets-chooseShop .nav {
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    align-items: center;
    -webkit-align-items: center;
    padding: 0 0.05rem 0 0.1rem;
    height: 0.4rem;
    background-color: #eee;
  }
  .mui-icon-arrowdown:before {
    font-size: 12px;
  }
  .mui-table-view:after {
    left: 20px;
    right: 20px;
  }
</style>
