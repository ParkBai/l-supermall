<template>
  <router-view></router-view>
  <mainTabBar></mainTabBar>
</template>

<script>
import mainTabBar from "components/content/mainTabBar/mainTabBar";
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
