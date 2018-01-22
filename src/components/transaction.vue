<template>
	<div class="outlets-trans">
		<div class="choose-shop">
      <div class="mui-table-view-cell">
			  <a class="mui-navigate-right">选择门店</a>
		  </div>
    </div>
    <div class="line-bold"></div>
    <div class="personal-info clearfix">
      <div class="avatar fl">
        <img src="" alt="">
      </div>
      <div class="base-info fl">
        <p>windir</p>
        <p class="member-integral f-12">
          <span>黄金会员</span>
          <span>1800积分</span>
        </p>
      </div>
    </div>
    <div class="line-bold"></div>
    
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "trans",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped> 
  .choose-shop .mui-navigate-right {
    text-align: center;
    font-size: 18px;
  }
  .choose-shop .mui-navigate-right:after {
    font-size: 24px;
  }
  .choose-shop .mui-table-view-cell {
    height: 100px;
    line-height: 80px;
  }
  .personal-info {
    padding: 0.2rem 0.1rem;
  }
  .personal-info .avatar {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: beige;
    margin-right: 0.1rem;
  }
  .personal-info .base-info {
     margin-top: -7px;
  }
</style>
