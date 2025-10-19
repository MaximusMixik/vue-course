import { createStore } from 'vuex'

import { carsData } from '../components/HW/LessonTasks8/TaskLesson2/constants/data.js'

// vehicleType
export default createStore({
	state() {
		return {
			allCarsList: [],
			filters: {
				body: [],
				brand: null,
				model: null,
				year: { rangeStart: 2010, rangeEnd: new Date().getFullYear() }
			}
		}
	},
	getters: {
		getFilters: ({ filters }) => filters,
		allCarsList: ({ allCarsList }) => allCarsList,
		getEnabledModels: (state, getters) => getters.getFilteredCars.length,
		getModelList: (state,) => {
			// getters

			// if (state.filters.brand) {
			// 	return [...new Set(getters.getFilteredCars.map(car => car.model))].map(model => ({
			// 		name: model,
			// 		value: model,
			// 	}))
			// }
			// else
			return [...new Set(state.allCarsList.map(car => car.model))].map(model => ({
				name: model,
				value: model,
			}))

		},
		// with filter functional
		// getBrandsList: (state, getters) =>
		// 	[...new Set(getters.getFilteredCars.map(car => car.brand))].map(brand => ({
		// 		name: brand,
		// 		value: brand,
		// 	})),
		// without filtered functional
		getBrandsList: (state) =>
			[...new Set(state.allCarsList.map(car => car.brand))].map(brand => ({
				name: brand,
				value: brand,
			})),

		// without filtered functional
		getBodiesList: ({ allCarsList }) => [...new Set(allCarsList.map(car => car.bodyType))].map(bodyType => ({
			name: bodyType,
			value: bodyType,
		})),

		getFilteredCars: (state) => {
			let filteredList = state.allCarsList

			// if (state.filters.brand || state.filters.body.length) { //check if has  filters  // start if

			//! only brands
			// filteredList = filteredList.filter(car => car.brand === state.filters.brand)

			//! only bodies
			// filteredList = filteredList.filter(car => {
			// 	if (!state.filters.body.length || state.filters.body.includes(car.bodyType)) return car
			// })

			//! add bodies
			// filteredList = filteredList.filter(car => {
			// 	if ((!state.filters.brand || car.brand === state.filters.brand) && (!state.filters.body.length || state.filters.body.includes(car.bodyType))) return car
			// })



			// add models
			filteredList = filteredList.filter(car => {
				if (
					(!state.filters.model || car.model === state.filters.model) && //models
					(!state.filters.brand || car.brand === state.filters.brand) && //brands
					(!state.filters.body.length || state.filters.body.includes(car.bodyType)) //bodies
				)

					return car
			}
			)


			// } // endif

			return filteredList
		}
	},
	mutations: {
		loadCars(state) {
			state.allCarsList = JSON.parse(JSON.stringify(carsData))
		},
		setFilters(state, filtersData) {
			// let changeBrand = false
			// if (state.filters.brand !== filtersData.brand) {
			// 	changeBrand = true
			// }
			state.filters = {
				...state.filters, //add all current filters
				...filtersData, // add and change on new values
			}


		},
		clearFilters(state) {
			state.filters = {
				body: [],
				brand: null,
				model: null,
				year: { rangeStart: 2010, rangeEnd: new Date().getFullYear() }
			}
		}
	},
	actions: {
		loadCars({ commit }) {
			commit('loadCars')
		},
		setFilters({ commit }, filtersData) {
			commit('setFilter', filtersData)
		},
		clearFilters({ commit }) {
			commit('clearFilters')
		}
	},
})















// from 7 lesson example
// export default createStore({
// 	//опис властивостей стану(аналог data)
// 	state() {
// 		return {
// 			count: 10,
// 			name: 'Ivan'
// 		}
// 	},
// 	//опис обчисл.власт.(аналог computed)
// 	getters: {
// 		getCount: ({ count }) => count,
// 		doubleCount(state) {
// 			return state.count * 2
// 		}
// 	},
// 	mutations: {
// 		changeCount(state) {
// 			state.count += 1
// 		},
// 	},
// 	actions: {
// 		onChangeCount({ commit }) {
// 			console.log(commit)
// 			commit('changeCount')
// 		}
// 	}
// })

// 8. practice lesson
// import { workers } from "../components/HW/LessonTasks8/PracticeLesson1/constants/workersData";

// export default createStore({
// 	state() {
// 		return {
// 			searchItem: '',
// 			workerList: [],
// 			isLoading: false,
// 			error: null,
// 		}
// 	},
// 	getters: {
// 		filteredWorkersList({ searchItem, workerList }) {
// 			if (searchItem && workerList) {
// 				const searchText = searchItem.toLowerCase()
// 				return workerList.filter(w => w.name.toLowerCase().includes(searchText))
// 			} else
// 				return workerList
// 		},
// 		searchItem: ({ searchItem }) => searchItem,
// 		workerList: ({ workerList }) => workerList,
// 		isLoading: ({ isLoading }) => isLoading,
// 		error: ({ error }) => error,

// 	},
// 	mutations: {
// 		updateSearch(state, newVal) {
// 			state.searchItem = newVal
// 		},
// 		loadData(state, data) {
// 			state.workerList = data
// 		},
// 		// error and load-state
// 		setItem(state, { name, newVal }) {
// 			state[name] = newVal
// 		}
// 	},
// 	actions: {
// 		updateSearch({ commit }, newVal) {
// 			commit('updateSearch', newVal)
// 		},
// 		loadData({ commit }) {
// 			commit('setItem', { name: 'isLoading', newVal: true })
// 			commit('setItem', { name: 'error', newVal: null })
// 			setTimeout(() => {
// 				try {
// 					commit('loadData', workers)
// 					// console.log(workers)
// 					// throw new Error('error') // initiate test error
// 				}
// 				catch (error) {
// 					commit('setItem', { name: 'error', newVal: error })
// 				}
// 				finally {
// 					commit('setItem', { name: 'isLoading', newVal: false })
// 				}
// 			}, 3000)
// 		}
// 	},

// })


// ! ???
// 7.1
// export default createStore({
// 	//опис властивостей стану(аналог data)
// 	state() {
// 		return {
// 			taskList: [],
// 		}
// 	},
// 	//опис обчисл.власт.(аналог computed)
// 	getters: {
// 		taskList: ({ taskList }) => taskList,
// 		// doubleCount(state) {
// 		// 	return state.count * 2
// 		// }
// 	},
// 	mutations: {
// 		addToList({ taskList }, workerTask) {
// 			const hasWorker = taskList.find(item => item.worker.id === workerTask.worker.id)
// 			if (taskList.length > 0 && hasWorker) {
// 				hasWorker.tasks.push(...workerTask.tasks)
// 			}
// 			else {
// 				taskList.push(workerTask)
// 			}
// 		},
// 		doneTask({ taskList }, { taskId, workerTask }) {
// 			taskList.find(worker => {
// 				if (worker.id === workerTask) {
// 					worker.tasks.find(task => task.id === taskId).isDone = true
// 				}
// 			})
// 		},
// 		removeTask({ taskList }, { taskId, workerTask }) {
// 			taskList.find((worker, ind, baseArr) => {

// 				if (worker.id === workerTask) {
// 					if (worker.tasks.length <= 1) {
// 						baseArr.splice(ind, 1)
// 						return
// 					}
// 					const taskIndex = worker.tasks.findIndex(task => task.id === taskId)
// 					console.log(taskIndex)
// 					worker.tasks.splice(taskIndex, 1)
// 				}
// 			})
// 		}
// 	},
// 	actions: {
// 		addToList({ commit }, { worker, task }) {
// 			const workerTask = {
// 				id: new Date().getTime(),

// 				worker,
// 				tasks: [{ ...task, isDone: false }],
// 			}
// 			commit('addToList', workerTask)
// 		},
// 		doneTask({ commit }, workerData) {
// 			commit('doneTask', workerData)
// 		},
// 		removeTask({ commit }, workerData) {
// 			commit('removeTask', workerData)
// 		},
// 	},

// })


//! empty
// export default createStore({
// 	state() {
// 		return {
// 		}
// 	},
// 	getters: {
// 	},
// 	mutations: {

// 	},
// 	actions: {
// 	},
// })
