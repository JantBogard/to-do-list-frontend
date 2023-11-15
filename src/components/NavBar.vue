<template>
  <nav>
    <ul>
      <li>
        <router-link class="link" to="/mestache">
          Mes tâches
          <span>2</span>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/mesfavoris">
          Favoris
          <span>3</span>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/tacheeffectuer">
          Tâches effectués
          <span>4</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup></script>
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
