<template>
	<div class="outlets-favorite">
    <ul class="mui-table-view favorite-list">
			<li class="mui-table-view-cell mui-media">
				<img class="mui-media-object mui-pull-left" src="">
				<div class="mui-media-body">
					  苹果 iphone7
					<p class='recommend-list-txt'>防水防尘，混合红外线滤镜，TrueTone 闪光灯</p>
					<p class='mui-ellipsis'>¥4079
            <button class="fr">删除</button>
          </p>
				</div>
			</li>
				
		</ul>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "favorite",
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style scoped>
 .outlets-favorite button {
   height: 25px;
   width: 60px;
   line-height: 25px;
   padding: 0;
   color: #929292;
   border-radius: 5px;
 }
</style>
