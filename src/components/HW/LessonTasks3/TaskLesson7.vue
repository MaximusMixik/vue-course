<template>
  <div>
    <h6>
      Задача 7. Динамічний пошук. Є список працівників і поле пошуку. При
      введенні відображаються усі, які містять вказаний фрагмент
    </h6>

    <fieldset>
      <label>
        search
        <input type="text" v-model.trim="searchText" />
      </label>

      <ul v-if="search.length > 0">
        <li v-for="(item, ind) in search" :key="ind">
          {{ item }}
        </li>
      </ul>
      <div v-else>no searched items</div>
    </fieldset>
  </div>
</template>

<script>
const usersNames = ["Ivan", "Petro", "Olga", "Olena", "John"];

export default {
  data() {
    return {
      searchText: null,
    };
  },
  computed: {
    search() {
      let list = usersNames;
      if (this.searchText) {
        const text = this.searchText.toLowerCase();
        list = usersNames.filter((name) => name.toLowerCase().includes(text));
      }
      return list;
    },
  },
};
</script>

<style lang="scss" scoped></style>
