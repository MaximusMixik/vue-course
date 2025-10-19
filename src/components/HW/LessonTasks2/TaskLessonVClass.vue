<template>
  <div>
    <!-- 1 -->
    <div>
      <h6>
        Приклад. Вводиться номер місця пацієнта у черзі.. Відображати кольром
        зелений, 18 – він перший жовтий, 14 – другий оранжевий, 12 – третій
        синій, 10 – всі інш
      </h6>

      <div>
        <figcaption :class="patientRate">
          <label>
            Вводиться номер місця пацієнта у черзі
            <input type="number" v-model.number.lazy="patientNumber" />
          </label>
        </figcaption>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patientNumber: null,
    };
  },

  computed: {
    patientRate() {
      if (!this.patientNumber) return "";
      switch (this.patientNumber) {
        case 1:
          return "green";
        case 2:
          return "yellow";
        case 3:
          return "orange";
        default:
          return "blue";
      }
    },
  },
};
</script>

<style scoped>
.green {
  background: green;
}
.yellow {
  background: yellow;
}
.orange {
  background: orange;
}
.blue {
  background: blue;
}
</style>
