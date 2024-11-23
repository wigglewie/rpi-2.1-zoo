<template>
  <v-container>
    <v-carousel height="800px">
      <v-carousel-item
        :src="'../src/assets/img/HomeCitizens.png'"
        cover
      >
        <v-container class="btn-holder">
          <v-btn
            class="btn btn-color-first"
            density="default"
            variant="tonal"
            text="Жители нашего зоопарка"
            @click="route('./collections')"
          ></v-btn>
        </v-container>
      </v-carousel-item>

      <v-carousel-item
        :src="'../src/assets/img/HomeExcursions.png'"
        cover
      >
        <v-container class="btn-holder">
          <v-btn
            class="btn btn-color-second"
            density="default"
            variant="tonal"
            text="Экскурсии"
            @click="route('./excursions')"
          ></v-btn>
        </v-container>
      </v-carousel-item>

      <v-carousel-item
        :src="'../src/assets/img/HomeNewMeats.png'"
        cover
      >
        <v-container class="btn-holder">
          <v-btn
            class="btn btn-color-third"
            density="default"
            variant="tonal"
            text="Новички"
            @click="route('./newmeat')"
          ></v-btn>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "HomeView",
  methods:{
    route(path){
      router.push(path)
    }
  }
}
</script>

<style lang="sass" scoped>

.v-carousel
  border-radius: 30px

.btn-holder
  margin-top: 35%
  margin-left: 70%

.btn
  border-radius: 30px
  font-size: 120%
  color: white

.btn-color-first
  min-width: 360px
  min-height: 80px
  background-color: #A92DD2

.btn-color-second
  min-width: 260px
  min-height: 80px
  background-color: #D22D7D

.btn-color-third
  min-width: 260px
  min-height: 80px
  background-color: #D2532D

</style>
