<template lang="pug">
  header
    .city 苏州
    .search-wrap(ref="search")
      span(ref="placeholder" v-if="!searchValue") 输入地址
      input(@input="onChange" ref="input" @focus="onFocus" @blur="onBlur" v-model="searchValue")
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {Action} from 'vuex-class'

@Component
export default class Header extends Vue {
  @Action setSearchVal: (value: string) => void;
  searchValue: string = "";
  mounted () {

  }
  onChange () {
    const val: string= this.searchValue;
    this.setSearchVal(val);
  }
  onFocus ():void {
    const Trans_x: string= "translateX(15px)";
    const Left: string= "30%";
    const placeholder: any=this.$refs.placeholder;
    if(!placeholder) return;
    placeholder.style.left= Left;
    placeholder.style.transfrom= Trans_x;
  }
  onBlur ():void {
    const placeholder: any = this.$refs.placeholder;
    if(placeholder) placeholder.removeAttribute("style");
  }
}
</script>
<style lang="scss" scoped>
  header{
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    height: 50px;
    line-height: 50px;
    z-index: 99;
    .city{
      position: relative;
      width: 10%;
    }
    .search-wrap{
      position: absolute;
      left: 0;
      width: 60%;
      span {
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.2s ease-in;
        color: #b8b8b8;
      }
      input {
        border-radius: 20px;
        outline: none;
        border: none;
        height: 30px;
        width: 50%;
        font-size: 16px;
        border: 1px solid #b8b8b8;
        padding: 0 20px;
      }
    }
  }
</style>

