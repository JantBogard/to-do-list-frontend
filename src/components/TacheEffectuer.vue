<template>
  <h1 class="header">Tache effectuer</h1>
  <TacheList :taches="tacheOvers" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import TacheList from "./TacheList";
import axios from "axios";

const tacheOvers = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/tache/over");

    tacheOvers.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
.header {
  padding: 16px;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid #bdbdbd;
}
</style>
