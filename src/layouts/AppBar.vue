<template>
  <v-app-bar color="primary">
    <v-app-bar-title
      class="title main-title"
      @click="route('./')"
    >
      ЗООПАРК
    </v-app-bar-title>

    <v-app-bar-title
      class="title"
      @click="route('./collections')"
    >
      КОЛЛЕКЦИЯ
    </v-app-bar-title>

    <v-app-bar-title
      class="title"
      @click="route('./newmeat')"
    >
      НОВИЧКИ
    </v-app-bar-title>

    <v-app-bar-title
      class="title"
      @click="route('./excursions')"
    >
      ЭКСКУРСИИ
    </v-app-bar-title>

    <v-app-bar-title class="title">
      <contacts-component></contacts-component>
    </v-app-bar-title>

    <v-container class="time-holder-container">
      <div class="time-holder">
        <v-list-item
          prepend-icon="$IconCalendar"
          title="Ежедневно: 10:00-18:00"
        ></v-list-item>
      </div>
    </v-container>
  </v-app-bar>

</template>

<script>

import ContactsComponent from "@/components/UI/ContactsComponent.vue";
import router from "@/router";

export default {
  name: "AppBar",
  components: {ContactsComponent},
  data() {
    return {
      actions: [
        {title: "ЗООПАРК", route: './home'},
        {title: "КОЛЛЕКЦИЯ", route: './home'},
        {title: "НОВИЧКИ", route: './home'},
        {title: "ЭКСКУРСИИ", route: './home'},
        {title: "КОНТАКТЫ", route: './home'},
      ],
    }
  },
  methods:{
    route(path){
      router.push(path)
    }
  }
}

</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'

.title
  max-width: 7%
  text-align: center
  border-radius: 15px
  padding: 5px

.v-app-bar-title:hover
  background-color: #464545

.main-title
  font-size: 110%
  font-weight: bolder

.time-holder-container
  max-width: 20%
  margin: 0 15px 0 auto

.time-holder
  display: flex

.icon
  margin: 0 15px 0 0
  color: green

</style>

