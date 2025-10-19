<template>
  <br />

  <!-- state -->
  {{ $store.state.count }}
  ///
  {{ count }}
  <br />
  {{ $store.state.name }}
  ///
  {{ name }}

  <br />
  <!-- getters -->
  {{ $store.getters.doubleCount }}
  ///
  {{ doubleCount }}

  <br />
  {{ getCount }}
  \\\\\
  {{ $store.getters.getCount }}

  <!-- <button @click="$store.dispatch('onChangeCount', 1)">+++</button>
  {{ getCount }}
  <button @click="$store.dispatch('onChangeCount', -1)">---</button> -->

  <br />
  <button @click="onChangeCount(1)">+++</button>
  {{ getCount }}
  <button @click="onChangeCount(1)">---</button>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "TaskLesson",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["count", "name"]),
    ...mapGetters(["doubleCount", "getCount"]),
    ...mapActions(["onChangeCount"]),
  },
  methods: {},
};
</script>
