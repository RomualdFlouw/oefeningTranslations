import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from "../assets/translations/English"
import nl from "../assets/translations/Nederlands"
import ru from "../assets/translations/русский"
import zh from "../assets/translations/中文"

Vue.use(VueI18n)

let languageFiles = {
    en: en,
    nl: nl,
    ru: ru,
    zh: zh
}

const currentlocale = localStorage.getItem("locale");

export const i18n = new VueI18n({
    locale : currentlocale,
    messages : languageFiles
})