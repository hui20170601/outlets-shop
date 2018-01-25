<template>
	<div class="outlets-shop">
    <div class="upload-photo">
      <div class="clearfix">
        <div class="fl upload-handle">
          <i class="icon-plus f-24"></i>
          <p class="f-12">点击上传</p>
        </div>
        <div class="fr">
          <p class="f-12">门店轮播图</p>
          <p class="f-12">a. 尺寸750 x 352px</p>
          <p class="f-12">b. 大小1MB以内</p>
          <p class="f-12">c. 数量限制在5张以内</p>
          <p class="f-12">d. 图片格式仅支持JPG,PNG格式</p>
        </div>
      </div>
      <div class="preview">
        <p class="f-12">以上传3张</p>
      </div>
      <div class="bgc">确定</div>     
    </div>    
	</div>
</template>

<script>
// import Mui from 'mui'
export default {
  name: "photo",
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style scoped>
 .upload-photo {
  padding: 0.7rem 0.2rem 0;
 }
 .upload-handle {
   width: 1.2rem;
   height: 1.2rem;
   border: 1px solid #999;
   text-align: center;
   box-sizing: border-box;
   padding-top: 0.4rem;
 }
 .preview {
  margin-top: 50px;
  height: 3rem; 
 }
</style>
