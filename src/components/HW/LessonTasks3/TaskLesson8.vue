<template>
	<div>
		<fieldset>
			<legend>
				<h5>
					Задача 8. Дано список автомобілів (марка, рік випуску, ціна).
					Сформувати елементи для фільтрування з використанням випадаючого
					списку (контент цих випадаючих списків сформувати у залежності від
					переданого списку).
				</h5>
			</legend>
		</fieldset>
		<fieldset>
			<legend>
				<h6>Filters</h6>
			</legend>
			<label>
				Brand
				<select v-model="car.brand">
					<option v-for="brand in brandsList" :key="brand.value" :value="brand.value">{{ brand.title }}</option>
				</select>
			</label>
			<label>
				Years
				<select v-model="car.year">
					<option v-for="year in yearsList" :key="year.value" :value="year.value">{{ year.title }}</option>
				</select>
			</label>
		</fieldset>
		<fieldset>
			<legend>
				<h5>Filtered Cars</h5>
			</legend>
			<ul>
				<li v-for="car in filteredList" :key="car.id">
					{{ car.brand }} - {{ car.owner }} - {{ car.year }}
				</li>
			</ul>
		</fieldset>
	</div>
</template>

<script>

const cars = [
	{
		id: 1,
		brand: "Toyota", year: 2020, price: 20000, owner: "John Doe"
	},
	{
		id: 2,
		brand: "Honda",
		year: 2020,
		price: 18000,
		owner: "Jane Smith",
	},
	{
		id: 3,
		brand: "Ford",
		year: 2018,
		price: 15000,
		owner: "Alice Brown",
	},
	{
		id: 4,
		brand: "Toyota",
		year: 2020,
		price: 21000,
		owner: "Michael Johnson",
	},
	{ id: 5, brand: "BMW", year: 2019, price: 30000, owner: "Chris Green" },
	{ id: 6, brand: "Honda", year: 2021, price: 17000, owner: "Tom Hanks" },
	{ id: 7, brand: "Ford", year: 2018, price: 16000, owner: "Emma White" },
	{
		id: 8,
		brand: "Toyota",
		year: 2021,
		price: 22000,
		owner: "Sarah Black",
	},
	{ id: 9, brand: "BMW", year: 2019, price: 31000, owner: "Liam Blue" },
	{
		id: 10,
		brand: "Honda",
		year: 2020,
		price: 19000,
		owner: "Olivia Pink",
	}
];

export default {
	name: "TaskLesson8",
	data() {
		return {
			car: {
				brand: null,
				year: null,
			}
		};
	},
	computed: {
		brandsList() {
			let brandsList = [
				{
					value: null,
					title: 'All Brands'
				}
			];
			Array.from(new Set(cars.map(car => car.brand))).forEach(
				brand => {
					brandsList.push({ value: brand, title: brand })
				})
			return brandsList
		},

		yearsList() {
			const yearsList = [
				{
					value: null,
					title: 'All years'
				}
			]
			Array.from(new Set(cars.map(car => car.year))).forEach(year => {
				yearsList.push({ value: year, title: year })
			})

			return yearsList
		},
		filteredList() {
			return JSON.parse(JSON.stringify(cars)).filter(
				car => (
					(!this.car.brand || car.brand === this.car.brand) &&
					(!this.car.year || car.year === this.car.year)
				)
			)
		}
	},
	methods: {},
};
</script>
