<template>
  <div class="action-content">
    <h1>Mes Tâche</h1>
    <router-link class="add-btn" to="/addtacheform">
      Ajouter
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-plus"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
    </router-link>
  </div>
  <TacheList :taches="taches" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import TacheList from "./TacheList";
import axios from "axios";

const taches = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/tache");
    console.log(response);
    taches.value = response.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
});
</script>

<style scoped>
.action-content {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
}

h1 {
  font-size: 24px;
  font-weight: 700;
}

.add-btn {
  border: none;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #4caf50;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s;
}

.add-btn:hover {
  background-color: #388e3c;
}
</style>
