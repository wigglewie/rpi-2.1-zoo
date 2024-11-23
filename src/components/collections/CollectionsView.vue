<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card"
        cols="12"
        md="4"
      >
        <collections-item
        :title="card.title"
        :text="card.text"
        :src="card.src"
        ></collections-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CollectionsItem from "@/components/collections/CollectionsItem.vue";

export default {
  name: "CollectionsView",
  components: {CollectionsItem},
  data: () => ({
    cards:[
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame10.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame22.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame23.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame24.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame25.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame26.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame27.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame28.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame29.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame30.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame31.png'},
      {title: "title", text: 'text', src: '../src/assets/img/collections/Frame32.png'},

    ]
  }),
}
</script>

<style lang="sass" scoped>
*
  padding: 0
  border-radius: 0
</style>
