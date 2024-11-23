<template>
  <v-card>
    <v-img :src="src">
<!--      <v-container>-->
<!--        <v-card-title>-->
<!--          {{ title }}-->
<!--        </v-card-title>-->

<!--        <v-card-text>-->
<!--          {{ text }}-->
<!--        </v-card-text>-->
<!--      </v-container>-->
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "CollectionsItem",
  props: {
    title: String,
    text: String,
    src: String
  }
}
</script>

<style lang="sass" scoped>
.v-container
  padding-top: 250px
</style>
