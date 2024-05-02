<script setup lang="ts">
import {reactive} from "vue";
import axios from "axios";

const initialState = {
  name: '',
  address: '',
}

const state = reactive({
  ...initialState,
  unit: 1,
})

const createVendor = async () => {

  const response = await axios.post('http://localhost:3001/api/vendors', state);

  window.location.href = '/dashboard'

}

</script>

<template>
  <v-container>
    <v-card class="d-flex flex-column pa-8 ga-6">
      <h4 class="text-h4">Vendors</h4>
      <form>
        <v-text-field
          v-model="state.name"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="state.address"
          label="Address"
          type="text"
          required
        ></v-text-field>

        <v-btn
          class="me-4"
          block
          color="primary"
          @click="createVendor"
        >
          create
        </v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<style scoped lang="sass">

</style>
