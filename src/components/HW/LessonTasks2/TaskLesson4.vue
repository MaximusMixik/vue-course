<template>
  <div>
    <h6>
      Вивести список як маркований список з елементами у форматі (name: salary)
    </h6>
    <ul>
      <li v-for="worker in list" :key="worker.id">
        {{ worker.name }} : {{ worker.salary }}
      </li>
    </ul>
  </div>
</template>

<script>
const workersList = [
  {
    id: "111",
    name: "Іванов",
    salary: 10000,
  },
  {
    id: "112",
    name: "Петров",
    salary: 20000,
  },
  {
    id: "113",
    name: "Сидоров",
    salary: 50000,
  },
];
export default {
  name: "TaskLesson4",
  data() {
    return {};
  },
  computed: {
    list() {
      return workersList;
    },
  },
  methods: {},
};
</script>
