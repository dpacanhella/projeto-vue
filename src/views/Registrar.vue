<template>
  <v-container class="fill-height">

    <v-row justify="center" align="center">

      <v-col cols="4">

        <v-card max-width="800px" class="mx-auto">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title >Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <ValidationObserver ref="observer" v-slot="{ invalid }">

              <ValidationProvider rules="required|email" v-slot="{ errors }" name="E-mail">
                <v-text-field
                  v-model="model.email"
                  label="E-mail"
                  type="text"
                  name="email"
                  prepend-icon="mdi-account-circle"
                  :error-messages="errors"
                ></v-text-field>
              </ValidationProvider>

              <ValidationProvider vid="senha" rules="required|min:8" v-slot="{ errors }" name="Senha">
                <v-text-field
                  v-model="model.senha"
                  label="Senha"
                  name="senha"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :type="showPassword ? 'text' : 'password'"
                  :error-messages="errors"
                ></v-text-field>
              </ValidationProvider>

              <ValidationProvider rules="required|confirmed:senha" v-slot="{ errors }" name="Confirmação de senha">
                <v-text-field
                  v-model="model.confirmacaoSenha"
                  label="Confirmação de senha"
                  name="confirmacaoSenha"
                  prepend-icon="mdi-lock"
                  :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showConfirmPassword = !showConfirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  :error-messages="errors"
                ></v-text-field>
              </ValidationProvider>

            </ValidationObserver>
          </v-card-text>

          <v-card-actions>
            <v-btn color="secondary" @click="backLogin">Voltar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="callRegister">Registrar</v-btn>
          </v-card-actions>
        </v-card>

      </v-col>

    </v-row>

  </v-container>
</template>

<script>

export default {
  data () {
    return {
      showPassword: false,
      showConfirmPassword: false,
      model: {
        email: '',
        senha: '',
        confirmacaoSenha: ''
      }
    }
  },
  methods: {
    async callRegister () {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        console.log('registrando....')
      }
    },
    backLogin () {
      this.$router.push({ name: 'login' })
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
