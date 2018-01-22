<template>
	<div class="outlets-category">
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
      <div class="search bd">
        <div class="mui-input-row">
					<input type="text" placeholder="输入商品关键词或用户名" class="search-box f-12">
          <button type="button" class="mui-btn mui-btn-primary mui-icon mui-icon-search">搜索</button>          
				</div>
      </div>
      <div class="category-list clearfix">
        <ul class="list-tab fl">
          <li>新品</li>
          <li class="list-tab-active">苹果</li>
          <li>小米</li>
          <li>华为</li>
          <li>三星</li>
          <li>oppo</li>
          <li>vivo</li>
          <li>配件</li>
        </ul>
        <div class="list-content fl">
          <div class="list-content-items">
            <div class="list-content-info">
              <img src="" alt="">
              <p>iphone7</p>
            </div>
            <div class="list-content-info">
              <img src="" alt="">
              <p>iphone7</p>
            </div>
            <div class="list-content-info">
              <img src="" alt="">
              <p>iphone7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "category",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
	.outlets-category .search {
    padding: 0.1rem 0.2rem 0 0.1rem;
  }
  .outlets-category .search .search-box {
    width: 75%;
    margin-bottom: 10px;
  }
  .outlets-category .search button {
    width: 21%;
    padding: 10px 0.1rem;
    border: 1px solid rgb(26, 188, 156);
    background-color: rgb(26, 188, 156);
  }
  .category-list .list-tab {
    padding-top: 10px;
    width: 25%;
    text-align: center
  }
  .category-list .list-tab li{
    margin-top: 20px;
  }
  .category-list .list-tab .list-tab-active {
    color: red;
    border-left: 3px solid rgb(238, 123, 81);
  }
  .category-list .list-content {
    width: 75%;
    border-left: 1px solid rgba(228, 228, 228, 1);    
  }
  .list-content .list-content-items {
    display: flex;
    display: -webkit-flex;
    padding-top: 10px;
    margin-bottom: 10px;
  }
  .list-content .list-content-items .list-content-info {
    background-color: burlywood;
    flex: 1;
    text-align: center;
  }
  .list-content-items .list-content-info img {
    margin: 0 auto 10px;
  }
</style>
