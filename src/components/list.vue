<template lang="pug">
  h3.list-wrap 头条列表
    ul
      li(v-for="(item, index) in list" :key="index")
        .title {{item.title}}
        .img-wrap
          a(:href="item.url")
            img(:src="item.imgUrl")
          .img-count 图片数量：{{item.imgNum}}

</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'

  @Component({
    name: 'list'
  })
  export default class list extends Vue {
    @State list: StoreState.list[]
  }
</script>
<style lang="scss" scoped>
  .list-wrap {
    ul{
      li{
        text-align: left;
        .img-wrap {
          padding: 10px 0;
          font-weight: 400;
          font-size: 14px;
          img{
            width: 100px;
          }
        }
      }
    }
  }
</style>

