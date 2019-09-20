<template>
  <v-container class="fill-height">

    <v-row justify="center" align="center">

      <v-col cols="4">

        <v-card max-width="800px" class="mx-auto">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title >Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" :lazy-validation='true'>
              <v-text-field
                v-model="model.email"
                label="E-mail"
                type="text"
                name="email"
                prepend-icon="mdi-account-circle"
                :rules="emailRules"
                required
              ></v-text-field>

              <v-text-field
                v-model="model.senha"
                label="Senha"
                name="senha"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
                :rules="passwordRules"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn color="secondary" @click="callRegister">Registrar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="loginService">Login</v-btn>
          </v-card-actions>
        </v-card>

      </v-col>

    </v-row>

  </v-container>
</template>

<script>

import size from 'lodash/size'
import LoginService from '../services/LoginService'

export default {
  data () {
    return {
      passwordRules: [
        v => !!v || 'O password é obrigatório',
        v => size(v) >= 5 || 'O password deve possuir pelo menos 5 caracteres'
      ],
      emailRules: [
        v => !!v || 'O e-mail é obrigatório',
        v => /.+@.+/.test(v) || 'Você deve digiar um e-mail válido'
      ],
      showPassword: false,
      model: {
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    async loginService () {
      if (this.$refs.form.validate()) {
        await LoginService.login(this.model.email, this.model.senha)
        this.$router.push({ name: 'contact-list' })
      }
    },
    callRegister () {
      this.$router.push({ name: 'register' })
    },
    reset () {
      this.$refs.form.reset()
      this.$refs.form.resetValidation()
    }
  }

}
</script>

<style scoped>

</style>
