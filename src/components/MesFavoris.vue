<template>
  <h1 class="favoris-header">Mes favoris</h1>
  <TachList :taches="favoris" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import TachList from "./TacheList.vue";
import axios from "axios";

const favoris = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/tache/favoris");

    favoris.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
.favoris-header {
  padding: 16px;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid #bdbdbd;
}
</style>
