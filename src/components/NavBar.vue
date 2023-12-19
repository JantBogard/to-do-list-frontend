<template>
  <nav>
    <ul>
      <li>
        <router-link class="link" to="/mestache">
          Mes tâches
          <span>{{ countTache }}</span>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/mesfavoris">
          Favoris
          <span>{{ countFavoris }}</span>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/tacheeffectuer">
          Tâches effectués
          <span>{{ countTacheOver }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const countTache = ref(0);
const countFavoris = ref(0);
const countTacheOver = ref(0);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/tache/count");
    countTache.value = response.data.countTache;
    countFavoris.value = response.data.countFavoris;
    countTacheOver.value = response.data.countTacheOver;
  } catch (error) {
    console.error(error);
  }
});
</script>
<style scoped>
nav {
  padding: 16px 12px;
  background-color: #4caf50;
  color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
}

ul {
  display: flex;
  gap: 10px;
}

.link {
  font-family: "Roboto", sans-serif;
  padding: 12px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;

  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 400;
  border-radius: 8px;
}

.link:hover {
  background-color: #388e3c;
}

span {
  border-radius: 50%;
  background-color: #448aff;
  padding: 5px;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
