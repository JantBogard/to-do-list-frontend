<template>
  <div class="card-list">
    <TacheUnit v-for="tache in taches" :key="tache.id" :tache="tache" />
  </div>
</template>

<script setup>
import TacheUnit from "./TacheUnit";
import { defineProps } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  taches: new Array(),
});
</script>

<style scoped>
.card-list {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
