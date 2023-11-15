<template>
  <div class="form-container">
    <h1 class="form-title">Ajouter une tache</h1>
    <form>
      <div class="input-group">
        <label class="input-label" for="libelle">Libelle</label>
        <input class="input-field" type="text" id="libelle" />
      </div>
      <div class="input-group">
        <label class="input-label" for="dateDebut">Date debut</label>
        <input class="input-field" type="date" id="dateDebut" />
      </div>
      <div class="input-group">
        <label class="input-label" for="dateFin">Date fin</label>
        <input class="input-field" type="date" id="dateFin" />
      </div>
      <div class="input-group">
        <label class="input-label" for="description">Description</label>
        <textarea
          class="input-field"
          id="description"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="form-action">
        <button class="cancel-btn">Annuler</button>
        <button class="valid-btn">Enregistrer</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-title {
  font-size: 24px;
  font-weight: 700;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-label {
  font-size: 16px;
  font-weight: 500;
}

.input-field {
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #c8e6c9;
}

.input-field:focus {
  outline: 1px solid #4caf50;
}

.form-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s;
}

.cancel-btn {
  background-color: #757575;
  color: #ffffff;
}

.cancel-btn:hover {
  background-color: #bdbdbd;
}

.valid-btn {
  background-color: #4caf50;
  color: #ffffff;
}

.valid-btn:hover {
  background-color: #388e3c;
}
</style>
