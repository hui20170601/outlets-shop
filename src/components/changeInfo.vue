<template>
	<div class="outlets-shop">
    <div class="change-info">
      <div class="mui-input-row bd info">
			  <label class="f-13">地址</label>
			  <input type="text" value="广州市白云区江高小塘总站" class="f-12">
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
 .change-info input{
   color: #999;
   padding-top: 7px;
 }
</style>
