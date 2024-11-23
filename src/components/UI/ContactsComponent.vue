<template>
  <v-bottom-sheet>
    <template v-slot:activator="{ props }">
      <p v-bind="props">
        КОНТАКТЫ
      </p>
    </template>

    <v-card color="black">
      <v-container class="contacts-container">
        <div class="contacts-holder">

          <div class="contacts-holder phone-holder">
            <v-list-item
              prepend-icon="$IconPhone"
              title="+8 800 555 35 35"
            ></v-list-item>
          </div>

          <div class="contacts-holder address-holder">
            <v-list-item
              prepend-icon="$IconMarker"
              title="г. Цветочный, ул. Колокольчиков 15"
            ></v-list-item>
          </div>

          <div class="contacts-holder times-holder">
            <v-list-item
              prepend-icon="$IconCalendar"
              title="Ежедневно: 10:00-18:00"
            ></v-list-item>
          </div>

          <div class="contacts-holder image">
            <v-img :src="'../src/assets/img/instagram.png'" max-height="35px" />
            <v-img :src="'../src/assets/img/whatsapp.png'" max-height="35px" />
            <v-img :src="'../src/assets/img/tik-tok.png'" max-height="35px" />
            <v-img :src="'../src/assets/img/telegram.png'" max-height="35px" />
            <v-img :src="'../src/assets/img/vk.png'" max-height="35px" />
          </div>

        </div>
      </v-container>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import IconCalendar from "@/assets/icons/vue/icon-calendar.vue";

export default {
  name: "ContactsComponent",
  computed: {
    IconCalendar() {
      return IconCalendar
    }
  },
  data: () => ({
   iconCalendar: '$IconCalendar'
  }),
}
</script>

<style lang="sass" scoped>

.v-list-item
  margin: 0 auto

.title
  max-width: 7%
  text-align: center
  border-radius: 15px
  padding: 5px

.contacts-container
  width: 100%

.contacts-holder
  display: flex
  width: 100%

.phone-holder
  min-width: 20%

.address-holder
  min-width: 10%

.times-holder
  min-width: 10%

.image
  min-width: 10%

.icon
  padding-right: 20px
</style>
