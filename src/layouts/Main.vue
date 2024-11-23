<template>
  <v-app>
    <app-bar></app-bar>
    <View></View>
  </v-app>
</template>

<script>
import View from "@/layouts/View.vue";
import AppBar from "@/layouts/AppBar.vue";

export default {
  name: "MainLayout",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: {AppBar, View}
}
</script>

<style scoped>

</style>
