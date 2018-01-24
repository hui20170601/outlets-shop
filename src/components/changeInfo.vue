<template>
	<div class="outlets-shop">
    <div class="change-info">
      <div class="mui-input-row bd">
			  <label class="f-16">地址</label>
			  <input type="text" value="广州市白云区江高小塘总站" class="f-14">
		  </div>
      <div class="bgc sure">确定</div>  
    </div>    
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "changeInfo",
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style scoped>
 .change-info .mui-input-row {
   margin-bottom: 80px;
 }
 .change-info .sure {
   width: 90%;
   margin: 0 auto;
 }
</style>
