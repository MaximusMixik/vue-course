import { createStore } from 'vuex'

// 7.1
// import { students, gradingSystems, categories } from '../components/HW/LessonTasks7/TaskLesson1/constants/data'

// export default createStore({
// 	state() {
// 		return {
// 			studentList: [],
// 			isLoading: false,
// 			error: null,
// 			gradingSystems: gradingSystems,
// 			currentGrade: gradingSystems[0],
// 			categories: categories,
// 			currentCategory: '',
// 		}
// 	},
// 	getters: {
// 		categories: ({ categories }) => categories,
// 		currentCategory: ({ currentCategory }) => currentCategory,
// 		gradingSystems: ({ gradingSystems }) => gradingSystems,
// 		currentGrade: ({ currentGrade }) => currentGrade,
// 		studentList: ({ studentList }) => studentList,
// 		isLoading: ({ isLoading }) => isLoading,
// 		error: ({ error }) => error,
// 	},
// 	mutations: {
// 		loadStudents(state, students) {
// 			let uploadAllStudents = students.map((s) => { return { ...s } })


// 			// filter by average
// 			const currentCategory = state.currentCategory
// 			if (currentCategory) {
// 				uploadAllStudents = uploadAllStudents.filter(s => {
// 					if (currentCategory === 'Блатник' && s.averageScore === 1) return s;
// 					if (currentCategory.name === 'Двійочник' && s.averageScore < 3) return s;
// 					if (currentCategory.name === 'Трійочник' && s.averageScore < 7) return s;
// 					if (currentCategory.name === 'Хорошист' && s.averageScore < 9) return s;
// 					if (currentCategory.name === 'Відмінник' && s.averageScore >= 9) return s;
// 				})
// 			}


// 			// change grade
// 			if (state.currentGrade.value === 5) {
// 				state.studentList = uploadAllStudents.map((s) => {
// 					let score;
// 					switch (true) {
// 						case s.averageScore <= 1:
// 							score = 1;
// 							break;
// 						case s.averageScore <= 2:
// 							score = 2;
// 							break;
// 						case s.averageScore <= 6:
// 							score = 3;
// 							break;
// 						case s.averageScore <= 9:
// 							score = 4;
// 							break;
// 						case s.averageScore <= 12:
// 							score = 5;
// 							break;
// 						default:
// 							score = "uncorrected";
// 					}
// 					return { ...s, averageScore: score };
// 				});
// 			}
// 			else {
// 				state.studentList = uploadAllStudents
// 			}
// 			// console.log(state.studentList)
// 		},
// 		setStateValue(state, { name, value }) {
// 			state[name] = value
// 		},
// 		changeGrade(state, newGrade) {
// 			state.currentGrade = newGrade
// 		},
// 		changeCategory(state, category) {
// 			state.currentCategory = category
// 		},
// 	},
// 	actions: {
// 		loadStudents({ commit }) {
// 			commit('setStateValue', { name: 'isLoading', value: true })
// 			commit('setStateValue', { name: 'error', value: null })
// 			setTimeout(() => {
// 				try {
// 					commit('loadStudents', students)
// 				}
// 				catch (error) {
// 					commit('setStateValue', { name: 'error', value: null })
// 				}
// 				finally {
// 					commit('setStateValue', { name: 'isLoading', value: false })
// 				}
// 			}, 300)
// 		},
// 		changeGrade({ commit }, newGrade) {
// 			commit('changeGrade', newGrade)
// 			commit('loadStudents', students)
// 		},
// 		filterByCategory({ commit }, category) {
// 			commit('changeCategory', category)
// 			commit('loadStudents', students)
// 		},
// 		clearFilter({ commit }) {
// 			commit('setStateValue', { name: 'currentGrade', value: gradingSystems[0] })
// 			commit('setStateValue', { name: 'currentCategory', value: '' })
// 			commit('loadStudents', students)
// 		}
// 	},
// })

// v2

import { students, categories, gradingSystems } from '@/components/HW/LessonTasks7/TaskLesson5/constants/data'

import { convertScore } from './helpers/scoreUtils.js'
// convertScoreToGrade
export default createStore({
	state() {
		return {
			studentList: [],
			categories: [],
			grade: [],
			currentGrade: null,
			currentCategory: null,
		}
	},
	getters: {
		studentList: ({ studentList }) => studentList,
		categories: ({ categories }) => categories,
		grade: ({ grade }) => grade,
		currentGrade: ({ grade }) => grade[0],
		currentCategory: ({ currentCategory }) => currentCategory,
		getOtherGradeList: (state) => {
			let students = [...state.studentList]

			if (!state.currentGrade || state.currentGrade?.value === 12)
				return students

			return students.map(s => ({
				...s,
				averageScore: convertScore(s.averageScore)
			}))
		},
		// add filter by category
		// filteredStudentList: (state, getter) => {
		// 	let students = [...state.studentList]
		// },
	},
	mutations: {
		loadStudents(state) {
			state.studentList = students
		},
		loadCategories(state) {
			state.categories = categories
		},
		loadGrade(state) {
			state.grade = gradingSystems
		},
		// 
		setGradeValue(state, itemData) {
			state.currentGrade = itemData
		},
		setCategoryValue(state, itemData) {
			state.currentCategory = itemData
		}
	},
	actions: {
		loadStudents({ commit }) {
			commit('loadStudents')
		},
		loadCategories({ commit }) {
			commit('loadCategories')
		},
		loadGrade({ commit }) {
			commit('loadGrade')
		},
		setGradeValue({ commit }, itemData) {
			commit('setGradeValue', itemData)
		},
		setCategoryValue({ commit }, itemData) {
			commit('setCategoryValue', itemData)
		}
	},
})

