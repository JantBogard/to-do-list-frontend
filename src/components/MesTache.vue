<template>
  <div class="action-content">
    <button>
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
    </button>
  </div>
  <TacheList />
</template>

<script setup>
import TacheList from "./TacheList";
</script>

<style scoped>
.action-content {
  padding: 0 16px;
  display: flex;
  justify-content: end;
}

button {
  border: none;
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

button:hover {
  background-color: #388e3c;
}
</style>
