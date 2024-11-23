<template>
  <v-img :src="src"></v-img>
  <v-form
    ref="form"
    @submit="send">
    <v-container>

      <p class="header">Задать вопрос, записаться на экскурсию или оставить отзыв на наш Зоопарк:</p>

      <v-text-field
        variant="outlined"
        placeholder="Номер телефона/E-mail"
        :v-model="email"
        :rules="[rules.required, rules.email]"
      >
      </v-text-field>
      <v-textarea
        variant="outlined"
        placeholder="Ваш текст..."
        :rules="[rules.required]"
        :v-model="text"
      >
      </v-textarea>
      <div class="left-side">
        <v-btn
          class="left-side"
          variant="tonal"
          text="Отправить"
          @click="send"
        ></v-btn>
      </div>
      <v-snackbar
        v-model="showSnackBar"
        text="Отправка данных"
        color="orange"
        :timeout="2000"
      >
      </v-snackbar>

    </v-container>
  </v-form>
</template>

<script>

export default {
  name: "ExcursionsView",
  computed: {
  },
  components: {},
  data: () => ({
    src: '../src/assets/img/Excursions.png',
    email: '',
    text: '',

    showSnackBar: false,

    rules: {
      required: value => !!value || 'Не заполнено',
      email: value => value.includes("@") || "Неверный формат почты",
    }
  }),
  methods: {
    async send() {
      const {valid} = await this.$refs.form.validate()
      if (valid) {
        this.showSnackBar = true;
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  font-size: 150%
  font-weight: bold
  padding-bottom: 20px

.left-side
  margin: auto 80%
  width: 200px

</style>
