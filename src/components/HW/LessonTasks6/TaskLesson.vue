<template>
  <div>
    Задача 1.
    <CustomInput
      :label="label"
      :likes="likes"
      v-model="myValue"
      @dislike="onAddDisLike"
      @like="onAddLike" />
    <span> output - {{ myValue }} </span>
  </div>
</template>

<script>
import CustomInput from "./CustomInput";
export default {
  name: "TaskLesson",

  components: {
    CustomInput,
  },
  data() {
    return {
      myValue: null,
      label: "Custom input",
      likes: 12,
    };
  },
  computed: {},
  methods: {
    onAddLike() {
      this.likes++;
    },
    onAddDisLike() {
      this.likes--;
    },
  },
};
</script>
