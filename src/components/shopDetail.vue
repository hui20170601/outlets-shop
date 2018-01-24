<template>
	<div class="outlets-shop-detail">
    <div id="slider" class="mui-slider slider">
			<div class="mui-slider-indicator">
				<div class="mui-indicator mui-active"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
			</div>
		</div>
    <div class="shop-info bd">
      <p class="clearfix">
        <span class="fl">广州白云区店</span>
        <span class="fr">
          <span class="mui-icon mui-icon-location"></span>
          <span class="instance">500m</span>
        </span>
      </p>
      <p class='recommend-list-txt'>
        <span class="mui-icon mui-icon-star"></span>
        <span class="mui-icon mui-icon-star"></span>
        <span class="mui-icon mui-icon-star"></span>
        <span class="mui-icon mui-icon-star"></span>
        <span class="mui-icon mui-icon-star"></span>
      </p>
    </div>
    <div class="shop-info bd">
     <p>地址</p>
     <p>广州市白云区，江高小塘总站</p>
    </div>
    <div class="shop-info bd">
     <p>电话</p>
     <p>020-3888888</p>
    </div>
    <div class="shop-info">
     <p>营业时间</p>
     <p>周一—周五09:00-22:00，周六-周日：09:00-23:00</p>
    </div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "shopDetail",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
  .outlets-shop-detail .shop-info {
    padding: 0.2rem 0.15rem;
    height: 0.8rem;
  } 
  .outlets-shop-detail .mui-icon {
    font-size: 18px;
    color: orange;
  }
</style>
