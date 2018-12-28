<template lang="pug">
  .main-wrap
    h2 {{title}}
    v-header
    .content-wrap
      list
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Getter, Action } from 'vuex-class'
import header from '@/components/header.vue'
import list from '@/components/list.vue'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  components: {
    "v-header": header,
    list
  }
})
export default class Main extends Vue {
  @State author: string;
  @Action initAjax: () => void;
  // data
  title: string = 'vue + typescript';
  // computed
  get IsTitle(): string {
    return `Title: ${this.title}`
  }
  // methods
  doSome(): void {
    console.log("Author: " + this.author)
    console.log("用 @component 装饰器之后写方法不需要额外加逗号")
  }
  mounted () {
    this.doSome();
    this.initAjax();
  }
}
</script>
<style lang="scss">
  .main-wrap{
    h2{
      text-align: center;
    }
  }
</style>


