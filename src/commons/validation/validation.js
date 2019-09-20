import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import ptBR from 'vee-validate/dist/locale/pt_BR'

for (let rule in rules) {
  extend(rule, rules[rule])
}

localize('pt_BR', ptBR)

localize('pt_BR', {
  ...ptBR,
  messages: {
    ...ptBR.messages,
    confirmed: 'Os campos senha e confirmação de senha devem ser iguais'
  }
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
