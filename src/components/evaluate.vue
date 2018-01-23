<template>
	<div class="outlets-evaluate">
    <div class="stars">
      <p>门店评分</p>
      <p class="stars-icon">
        <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
        <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
        <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
        <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
        <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
        <span class="txt">非常好</span>
      </p>
    </div>
    <form class="description">
      <textarea id="textarea" rows="7" placeholder="宝贝是否满足你的期待？说说你的使用心得分享给其他想购买的朋友吧"></textarea>
      <button>匿名提交</button>
    </form>
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "evaluate",
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style scoped>
  .outlets-evaluate {
    padding: 0.2rem;
  }
  .outlets-evaluate .stars {
    margin-top: 0.6rem;
  }
  .outlets-evaluate .stars .stars-icon {
    margin: 0.4rem 0;
  }
  .stars .stars-icon .txt {
    margin-left: 0.1rem;
  }
  .outlets-evaluate .description textarea {
    font-size: 13px;
    margin-bottom: 0.8rem;
  }
  .outlets-evaluate .description button {
    display: inline-block;
    width: 100%;
    height: 0.4rem;
    background-color: rgb(26, 188, 156);
    border: none;
    color: #fff;
    font-size: 16px;
  }
</style>
