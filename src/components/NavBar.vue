<template>
  <nav>
    <ul>
      <li>
        <a href="#">
          Mes tâches
          <span>2</span>
        </a>
      </li>
      <li>
        <a href="#">
          Favoris
          <span>3</span>
        </a>
      </li>
      <li>
        <a href="#">
          Tâches effectués
          <span>4</span>
        </a>
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
}

ul {
  display: flex;
  gap: 10px;
}

a {
  padding: 12px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;

  display: flex;
  gap: 8px;
  align-items: center;
}

a:hover {
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
