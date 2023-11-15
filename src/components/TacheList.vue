<template>
  <div class="card-list">
    <TacheUnit />
    <TacheUnit />
    <TacheUnit />
    <TacheUnit />
    <TacheUnit />
  </div>
</template>

<script setup>
import TacheUnit from "./TacheUnit";
</script>

<style scoped>
.card-list {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
