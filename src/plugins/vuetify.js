/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

// Composables
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Icons
import IconCalendar from "../assets/icons/vue/icon-calendar.vue"
import IconMarker from "../assets/icons/vue/icon-marker.vue"
import IconPhone from "../assets/icons/vue/icon-phone.vue"
//
import {aliases, mdi} from "vuetify/lib/iconsets/mdi";
const aliasesCustom = {
  ...aliases,
  IconCalendar,
  IconMarker,
  IconPhone,
}

const light = {
  dark: false,
  colors: {
    background: '#d5d5d5',
    navbar: '#ffffff',
    surface: '#dcdcdc',
    primary: 'rgba(114,114,114,0.7)',
    secondary: 'rgba(74,126,58,0.44)',
    error: '#B00020',
    info: 'rgba(221,114,245,0.52)',
    success: '#4CAF50',
    warning: '#FB8C00',
    company: '#FF90D3',
    transparent: '#00000000',
    hover: '#00E59B51',
    test: '#868686'
  },
}
const dark = {
  dark: true,
  colors: {
    background: '#000000',
    surface: '#696969',
    primary: '#111111B2',
    secondary: '#2D2D2DB3',
    error: '#e02727',
    info: 'rgba(140,0,133,0.21)',
    success: '#4CAF50',
    warning: '#FB8C00',
    company: '#FF90D3',
    transparent: '#00000000',
    hover: '#00E59B51',
    test: '#868686'
  },
}

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliasesCustom
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark, light
    },
    icons: {
      defaultSet: 'mdi',
    }
  },
})
