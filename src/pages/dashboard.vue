<script setup lang="ts">
import {onMounted, ref} from "vue";

async function fetchData() {
  return await fetch('http://localhost:3001/api/vendors?unit=1', {
    method: 'GET',
  }).then((response) => {
    response.json().then((data) => {
      vendors.value = data.data;
      paging.value = data.paging
    });
  })
}

const vendors = ref();

onMounted(() => {
  fetchData();
})

const paging = ref({});

const items = ref([
  'Silloam Lippo Village',
  'Sollioam Bogor',
  'Silloam Makassar'
])
const testF = (test: any) => {
  console.log(test)
}
</script>

<template>
  <v-app>
    <v-container fluid >
      <v-row no-gutters>
        <v-col cols="2">
          <v-sheet class="h-screen border-e-md">
            <nav>
              <v-list-item link title="Dashboard"></v-list-item>
              <v-list-item link title="Vendor"></v-list-item>
            </nav>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <v-breadcrumbs bg-color="primary" class="d-flex justify-space-between mb-6 bg-surface-variant align-content-center">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-select item-props="item-props" :item-value="items" :items="items">

              </v-select>
            </v-breadcrumbs>
          </v-sheet>

          <v-btn color="primary" href="create-vendor">Create Vendor</v-btn>

          <v-table>
            <thead>
            <tr>
              <th class="text-left">
                ID
              </th>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Address
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="item in vendors"
              :key="item.name"
            >
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.address }}</td>
            </tr>
            </tbody>
          </v-table>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                  v-model="paging.current_page"
                  :length="paging.total_page"
                  class="my-4"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped lang="sass">

</style>
