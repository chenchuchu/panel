<style lang="scss">
$toolbar-color:#026aa7;
$btn-color:#3b8bbb;
$btn-color-hover:#62a3c8;
$white:white;
.toolbar{
  height: 60px;
  width:100%;
  background: $toolbar-color;
  .btn-root{
    margin:10px 5px;
    background:$btn-color;
    border:solid 1px $btn-color;
    color:$white;
    &:hover{
      background: $btn-color-hover;
      border:solid 1px $btn-color-hover;
      color:$white
    }
  }
  .btn-small{
    margin:15px 3px;
  }
  .item {
  margin-right: 10px;
}
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
.el-badge__content.is-fixed{
  top:15px
}
</style>

<template>
<div class="toolbar">
  <el-button type="primary" icon="document" class="btn-root">看板</el-button>
  <el-autocomplete
  popper-class="my-autocomplete"
  v-model="searchContent"
  :fetch-suggestions="querySearch"
  custom-item="my-item-zh"
  placeholder="请输入内容"
  @select="handleSelect"
  icon="search"
  :trigger-on-focus="true"
  :on-icon-click="handleIconClick"></el-autocomplete>
  <div style="float:right">
    <div style="margin-right:10px">
      <el-button icon="plus" size="small" class="btn-root btn-small"></el-button>
      <el-button icon="information" size="small" class="btn-root btn-small"></el-button>
      <el-badge :value="3" class="item">
        <el-button icon="message" size="small" class="btn-root btn-small"></el-button>
      </el-badge>
      <el-button type="primary" class="btn-root">Admin</el-button>
    </div>
  </div>
</div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('my-item-zh', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { attrs: { class: 'name' } }, [item.value]),
        h('span', { attrs: { class: 'addr' } }, [item.address])
      ]);
    },
    props: {
      item: { type: Object, required: true }
    }
  });
export default {
    data() {
      return {
        restaurants: [],
        searchContent: ''
      };
    },
    props:['searchList'],
    mounted() {
      // this.restaurants = this.loadAll();
      this.restaurants = this.$props.searchList;
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      // loadAll() {
      //   return [
      //     { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
      //     { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" }
      //   ];
      // },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
      
    }
}
</script>
