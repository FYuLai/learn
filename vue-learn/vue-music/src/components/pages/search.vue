<template>
  <div>
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <v-searchBox></v-searchBox>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
export default {
  components:{
    'v-searchBox': searchBox
}
}
</script>

<style lang="">
  
</style>