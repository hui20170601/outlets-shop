<template>
	<div class="outlets-changeAddress">
    <div class="mui-bar mui-bar-tab">
      <div class="btn">添加新收货人</div>
    </div>
    <div class="mui-content">
      <div class="mui-card bd">
			  <div class="mui-card-content">
				  <div class="mui-card-content-inner">
					  <p class="name">
              <span>高峰 180****8888</span>
              <span>默认</span>
            </p>
					  <p class="f-12">广东省广州市科学园</p>
				  </div>
			  </div>
			  <div class="mui-card-footer">
				  <a class="mui-card-link mui-input-row mui-radio mui-left">
            <label>默认地址</label>
			      <input name="radio1" type="radio">
          </a>
          <a class="mui-card-link">编辑</a>
				  <a class="mui-card-link">删除</a>
			  </div>
		  </div>
    </div>
    
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "changeAddress",
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style scoped>
  .outlets-changeAddress .btn {
    width: 45%;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
    margin: 6px auto 0;
    color: #fff;
    border-radius: 20px;
    background-color:  rgb(26, 188, 156);
  }
  .outlets-changeAddress .name {
    margin-bottom: 10px;
  }
  .outlets-changeAddress .mui-card {
   margin: 10px 0;
   box-shadow: 0 0 0 rgba(0, 0, 0, .3)
  }
  .mui-radio.mui-left label {
    padding-left: 30px;
  }
  .mui-radio.mui-left input[type='radio'] {
    width: 70%;
    left: 0;
    top: 7px;  
  }
  .outlets-changeAddress .mui-card-footer a{
    color: #8f8f94;
  }
</style>
