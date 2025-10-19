<template>
  <div>
    <h6>
      Задача 5. Самостійно сформуйте масив даних та виведіть фрагмент на зразок
      поданого (дані не обов’язково повинні співпадати)
    </h6>

    <template v-for="item in tutorialsList" :key="item.id">
      <div>
        <div style="display: flex; gap: 10px">
          <img
            :src="item.image"
            alt="Image"
            style="width: 30px; height: 30px" />
          <div>
            {{ item.title }}
            {{ item.url }}
          </div>
        </div>
        <h4>
          {{ item.title }}
        </h4>
        {{ item.description }}
      </div>
      <hr />
    </template>
  </div>
</template>

<script>
export default {
  name: "TaskLesson5",
  data() {
    return {};
  },
  computed: {
    tutorialsList() {
      return tutorials;
    },
  },
  methods: {},
};

const tutorials = [
  {
    id: 1,
    title: "Tutorial",
    description:
      "Welcome to the Vue tutorial! The goal of this tutorial is to quickly give you an experience of what it feels like to work with Vue, right in the browser.",
    url: "https://vuejs.org",
    image: "https://vuejs.org/images/logo.png",
  },
  {
    id: 2,
    title: "Getting started with Vue – Learn web development | MDN",
    description:
      "In this article we’ll look at a little bit of Vue background, learn how to install it and create a new project, study the high-level structure of the whole...",
    url: "https://developer.mozilla.org",
    image: "https://developer.mozilla.org/static/img/favicon144.png",
  },
  {
    id: 3,
    title: "Vue Tutorial",
    description:
      "This tutorial is specially designed to help you learn Vue as quickly and efficiently as possible. First, you will learn the basics of Vue.",
    url: "https://www.w3schools.com",
    image: "https://www.w3schools.com/favicon.ico",
  },
  {
    id: 4,
    title: "Introduction — Vue.js",
    description:
      "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best...",
    url: "https://v2.vuejs.org",
    image: "https://v2.vuejs.org/images/logo.png",
  },
];
</script>
