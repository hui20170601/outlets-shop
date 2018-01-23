<template>
	<div class="outlets-chooseShop">
		<div class="mui-content">
			<div class="nav bd">
        <div>
          <span>广州市</span>
          <span class="mui-icon mui-icon-arrowdown"></span>
        </div>
        <div>
          <span>距离</span>
          <span class="mui-icon mui-icon-arrowdown"></span>
        </div>
        <div class="search mui-input-row">
					<input type="text" placeholder="输入门店名称" class="search-box f-12">
          <button type="button" class="mui-btn mui-btn-primary">搜索</button>          
				</div>
      </div>
      <div class="nearby">
        <div>附近门店</div>
        <div class="shop-info">
          <img src="" alt="">
          <p>
            广州白云区店
            <span class="instance fr">500m</span>            
            <span class="mui-icon mui-icon-location fr"></span>
          </p>
          <p>
            <span class="mui-icon mui-icon-star"></span>
            <span class="mui-icon mui-icon-star"></span>
            <span class="mui-icon mui-icon-star"></span>
            <span class="mui-icon mui-icon-star"></span>
            <span class="mui-icon mui-icon-star"></span>
          </p>
          <p class="f-12 address">广州市白云区，江高小塘总站</p>
        </div>
      </div>
		</div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "branches",
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
    height: 0.6rem;
    background-color: #fff;
  }
  .outlets-chooseShop .search {
    width: 2.3rem;
    height: 0.3rem;
  }
  .nav .search .search-box {
    width: 75%;
    height: 100%;
    margin-bottom: 0;
  }
  .nav .search button {
    width: 22%;
    height: 100%;
    line-height: 100%;
    text-align: center;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid rgb(26, 188, 156);
    background-color: rgb(26, 188, 156);
  }
  .mui-icon-arrowdown:before {
    font-size: 12px;
  }
  .shop-info .mui-icon {
    font-size: 18px;
    color: orange;
  }
  .nearby {
    padding: 0.1rem 0.15rem;
  }
  .nearby .shop-info {
    background-color: #fff;
    padding: 0.1rem;
  }
  .nearby .shop-info .address {
    margin-top: 7px;
  }
</style>
