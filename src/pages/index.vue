<template>
  <v-container>
    <v-card class="d-flex flex-column pa-8 ga-6">
      <h4 class="text-h4">LOGIN</h4>
      <form>
        <v-text-field
          v-model="state.email"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="state.password"
          label="Password"
          type="password"
          required
        ></v-text-field>

        <v-btn
          class="me-4"
          block
          color="primary"
          @click="login"
        >
          submit
        </v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'
import {ApiService} from "../services/api-service";

const initialState = {
  email: '',
  password: '',
}

const state = reactive({
  ...initialState,
})

const login = async () => {
  const user = await ApiService.login(state);
  console.log(user.data.token);
  localStorage.setItem('token', JSON.stringify(user.data.token));
  window.location.href = '/dashboard';
}



</script>
