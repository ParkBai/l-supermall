<template>
  <div class="tar-bat-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  import TabBar from "./TabBar";

  export default {
    name: "TabBarItem",
    props:{
      path : String,
      activeColor:{
        type:String,
        default:'palevioletred'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{ color: this.activeColor }: {}
      }
    },
    data(){
      return{
        //isActive:true
      }
    },
    methods:{
      itemclick(){
        this.$router.push(this.path)
      },


    }
  }
</script>

<style scoped>
  .tar-bat-item{
    text-align: center;
    flex: 1;
    height: 49px;
    font-size: 14px;
  }
  .tar-bat-item img{
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

</style>
