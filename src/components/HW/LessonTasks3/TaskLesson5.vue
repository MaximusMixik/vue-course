<template>
	<div>
		<h6>
			Задача 5. Дано список спортсменів. Потрібно сформувати список тих, які
			будуть брати участь у змаганні. При цьому є два стовпці. В одному
			відображені всі спортсмени, в іншому – список тих, хто був вибраний. При
			натисканні на зелену стрілку спортсмен переміщається у список для змагань.
			При натисканні на червону стрілку спортсмен переміщається у загальний
			список.
		</h6>

		<div class="body">
			<fieldset>
				<legend>список спортсменів</legend>

				<ul>
					<li v-for="sportsmen in sportsmenList" :key="sportsmen.id">
						<span>
							{{ sportsmen.name }}
						</span>
						<button @click="
							listsAction(sportsmenList, competitionList, sportsmen.id)
							">
							<!-- toCompetitionList(sportsmen.id) -->
							add to competition List
						</button>
					</li>
				</ul>
			</fieldset>
			<fieldset>
				<legend>будуть брати участь у змаганні</legend>

				<ul>
					<li v-for="sportsmen in competitionList" :key="sportsmen.id">
						<span>
							{{ sportsmen.name }}
						</span>
						<button @click="
							listsAction(competitionList, sportsmenList, sportsmen.id)
							">
							to all List
						</button>
						<!-- toAllList(sportsmen.id) -->
					</li>
				</ul>
			</fieldset>
		</div>
	</div>
</template>

<script>
const list = [
	{ id: 1, name: "John Depp" },
	{ id: 2, name: "Sara Wik" },
	{ id: 3, name: "Den Miro" },
	{ id: 4, name: "Alan Woo" },
	{ id: 5, name: "Olga Sich" },
	{ id: 6, name: "Ivan Hal" },
];
export default {
	data() {
		return {
			sportsmenList: [...list],
			competitionList: [],
		};
	},
	methods: {
		toCompetitionList(id) {
			const searchIndex = this.sportsmenList.findIndex((sp) => sp.id === id);
			if (searchIndex === -1) return;
			const sportsmen = this.sportsmenList.splice(searchIndex, 1)[0];
			this.competitionList.push(sportsmen);
		},
		toAllList(id) {
			const searchIndex = this.competitionList.findIndex((sp) => sp.id === id);

			if (searchIndex === -1) return;
			const sportsmen = this.competitionList.splice(searchIndex, 1)[0];

			this.sportsmenList.push(sportsmen);
		},
		// multifunction
		listsAction(arrIn, arrTo, id) {
			const searchIndex = arrIn.findIndex((sp) => sp.id === id);

			if (searchIndex === -1) return;
			const sportsmen = arrIn.splice(searchIndex, 1)[0];

			arrTo.push(sportsmen);
		},
	},
};
</script>

<style scoped>
.body {
	display: flex;
	gap: 100px;
}
</style>
