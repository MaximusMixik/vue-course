import { createStore } from 'vuex'

import { categories, laptops, carBatteries, massageProducts, pressureWashers } from '../components/HW/LessonTasks8/TaskLesson1/constants/data.js'
export default createStore({
	state() {
		return {
			categoriesList: [],
			currentCategory: null,
		}
	},
	getters: {
		categoriesList: ({ categoriesList }) => categoriesList,
		currentCategory: ({ currentCategory }) => currentCategory,
		getProductsByCategory: (state) => {
			let products
			switch (state.currentCategory.slug) {
				case 'laptops': products = laptops
					break
				case 'carBatteries': products = carBatteries
					break
				case 'massageProducts': products = massageProducts
					break
				case 'pressureWashers': products = pressureWashers
					break
				default: throw new Error('something wrong')
			}
			return products
		}
	},
	mutations: {
		loadCategories(state) {
			state.categoriesList = categories
		},
		selectCategory(state, catId) {
			state.currentCategory = categories.find(c => c.id == catId)
		}

	},
	actions: {
		loadCategories({ commit }) {
			commit('loadCategories')
		},
		selectCategory({ commit }, catId) {
			commit('selectCategory', catId)
		}

	},
})



