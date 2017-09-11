<style>
  body{margin:0;padding:0}
</style>
<template>
<div id="homePage">
    <toolbar :searchList='searchList'></toolbar>
    <router-view></router-view>
</div>
</template>
<script>
import toolbar from '../toolBar.vue';
export default {
  data(){
    return {
      searchList:[
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" }
        ]
    }
  },
  components:{
    toolbar:toolbar
  },
  methods:{

  }
}
</script>
