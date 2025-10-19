<template>
  <div>
    <h2>
      Задача 1. Спробуйте відтворити використовуючи відповідні компоененти
    </h2>
    <fieldset>
      <h2>Мобільні телефони</h2>
      <h3>кількість товарів {{ list.length }}</h3>
      <ul class="list">
        <li v-for="(phone, ind) in list" :key="ind">
          <img :src="phone" width="100" height="100" sty alt="phone" />
        </li>
      </ul>
    </fieldset>
    <div>
      <h2>Останні переглянуті товари</h2>
      <div class="list list--big">
        <fieldset v-for="item in latestList" :key="item.id">
          <button>🧡</button>
          <img :src="item.src" alt="Image" />
          <h6>{{ item.title }}</h6>
          <a href="" v-if="item.rating">
            rating {{ item.rating }}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              viewBox="0 0 24 24">
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 9h7m-7 4h7M7 9h0m0 4h0m14 7-3.3-1.7c-.3 0-.4-.2-.5-.2a2 2 0 0 0-.4 0l-.6-.1h-10c-1.1 0-1.7 0-2.1-.2a2 2 0 0 1-.9-.9c-.2-.4-.2-1-.2-2.1V7.2c0-1.1 0-1.7.2-2.1.2-.4.5-.7.9-.9C4.5 4 5 4 6.2 4h11.6c1.1 0 1.7 0 2.1.2.4.2.7.5.9.9.2.4.2 1 .2 2.1V20Z" />
            </svg>
            {{ item.reviewsCount }}
          </a>
          <a v-else href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              viewBox="0 0 24 24">
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 9h7m-7 4h7M7 9h0m0 4h0m14 7-3.3-1.7c-.3 0-.4-.2-.5-.2a2 2 0 0 0-.4 0l-.6-.1h-10c-1.1 0-1.7 0-2.1-.2a2 2 0 0 1-.9-.9c-.2-.4-.2-1-.2-2.1V7.2c0-1.1 0-1.7.2-2.1.2-.4.5-.7.9-.9C4.5 4 5 4 6.2 4h11.6c1.1 0 1.7 0 2.1.2.4.2.7.5.9.9.2.4.2 1 .2 2.1V20Z" />
            </svg>
            {{ item.reviews }}</a
          >
          <a href="" v-if="item.availability === 'Є в наявності'">{{
            item.availability
          }}</a>
          <div v-else>
            {{ item.availability }}
          </div>

          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            ">
            <div>
              <del v-if="item.oldPrice"
                >{{ item.oldPrice }} {{ item.currency }}</del
              >
              <br />
              <strong :class="{ action: item.oldPrice }">
                {{ item.price }} {{ item.currency }}
              </strong>
            </div>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="30"
                viewBox="0 0 24 24">
                <g stroke="#1C274C" stroke-width="1.5">
                  <path
                    d="M8 18a2 2 0 1 1-1 3 2 2 0 0 1 1-3Zm9 0a1 1 0 1 1 0 3 1 1 0 0 1 0-3Z" />
                  <path
                    stroke-linecap="round"
                    d="M2 3h0l3 1v6l1 5 5 1h1m4 0 3-1 1-3 1-2V7l-4-1h-6M5 6h2" />
                </g>
              </svg>
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
const phoneList = [
  "https://www.apple.com/ua/iphone-16/images/overview/product-viewer/iphone/blue__cevjmd4i0xsi_large_2x.jpg",
  "https://www.apple.com/ua/iphone-16/images/overview/product-viewer/iphone/blue__cevjmd4i0xsi_large_2x.jpg",
  "https://www.apple.com/ua/iphone-16/images/overview/product-viewer/iphone/blue__cevjmd4i0xsi_large_2x.jpg",
];
const latestViewedList = [
  {
    id: 66,
    title: "Портативний екран TouYinger 130″",
    availability: "Є в наявності",
    price: 1899,
    currency: "₴",
    src: "https://picsum.photos/seed/touyinger/400/300",
    reviews: "Залишити відгук",
  },
  {
    id: 45,
    title: "Портативний монітор MUCAI N116A black 11,6″",
    availability: "Є в наявності",
    price: 2950,
    currency: "₴",
    src: "https://picsum.photos/seed/mucai/400/300",
    reviews: "Залишити відгук",
  },
  {
    id: 23,
    title: "Шафа розпашна Roko Дуб Венге 90x50x204.5 см",
    availability: "Немає в наявності",
    price: 2976,
    oldPrice: 3504,
    currency: "₴",
    rating: 4.5,
    reviewsCount: 29,
    src: "https://picsum.photos/seed/roko/400/300",
  },
];

export default {
  name: "TaskLesson1",
  computed: {
    list() {
      return phoneList;
    },
    latestList() {
      return latestViewedList;
    },
  },
};
</script>
<style scoped>
.action {
  color: red;
}
.list {
  list-style: none;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}
.list img {
  width: 180px;
  height: 180px;
  object-fit: contain;
}
.list--big {
  grid-template-columns: repeat(3, 1fr);
}
.list--big img {
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
}
.list--big fieldset {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.list--big button {
  cursor: pointer;
  align-self: self-end;
}
</style>
