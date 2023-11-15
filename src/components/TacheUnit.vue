<template>
  <div class="card-tache">
    <div class="card-valid-tache">
      <input type="checkbox" />
    </div>
    <div class="card-info-tache">
      <h2 class="card-libelle-tache">Test libelle</h2>
      <p class="card-descrip-tache">Descripition de la tache</p>
    </div>
    <div class="card-favoris-tache">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.card-tache {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px 24px;
  background-color: #c8e6c9;
  border-radius: 8px;
  transition: all 0.5s;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.card-info-tache {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-libelle-tache {
  font-size: 20px;
  font-weight: 700;
}

.card-descrip-tache {
  font-size: 16px;
  font-weight: 500;
}

.card-favoris-tache {
  margin-left: auto;
  cursor: pointer;
  transition: all 0.5s;
}

.card-favoris-tache:hover,
.active {
  color: #448aff;
}

.card-valid-tache input {
  width: 20px;
  height: 20px;
}
</style>
