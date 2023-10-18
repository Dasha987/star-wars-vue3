<template>
  <div v-if="loading">
    <Spinner />
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Пол</td>
          <td>Масса</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(people, index) in peoples.results" :key="index">
          <td>{{ people.name }}</td>
          <td>{{ people.gender }}</td>
          <td>{{ people.mass }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import DataService from '@/services/DataService'
import IResponseData from '@/types/ResponseData'
import IPersons from '@/types/Peoples'
import Spinner from '@/components/UI/Spinner.vue'

export default defineComponent({
  components: {
    Spinner
  },
  setup() {
    const loading = ref(true as Boolean)
    const peoples = ref({} as IPersons)

    onMounted(() => getPeople())
    const getPeople = () => {
      DataService.getPeople()
        .then((res: IResponseData) => {
          loading.value = false
          peoples.value = res.data
        })
        .catch((e: Error) => console.log(e))
    }

    return { loading, peoples }
  }
})
</script>
