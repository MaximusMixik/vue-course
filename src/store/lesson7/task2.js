
// 7.2
import { products, cartItems, currencies } from "../components/HW/LessonTasks7/TaskLesson2/constants/data";

export default createStore({
	state() {
		return {
			productList: [],
			cartList: [],
			byeList: [],
			isLoading: false,
			error: null,
			currency: currencies[0],
			currencyList: currencies
		}
	},
	getters: {
		currencyList: ({ currencyList }) => currencyList,
		byeList: ({ byeList }) => byeList,
		productList: ({ productList }) => productList,
		cartList: ({ cartList }) => cartList,
		isLoading: ({ isLoading }) => isLoading,
		error: ({ error }) => error,
		totalCartPrice: ({ cartList }) => {
			if (!cartList.length) return '0'
			return cartList.reduce((prevSum, product) => prevSum + product.price, 0).toFixed(2);
		},
		currency: ({ currency }) => currency,
	},

	// TODO add change currency in bye all cart
	// TODO bug with doubling list after change currency
	mutations: {
		byeAll({ cartList, byeList, productList }) {
			let currentItems = cartList.splice(0, cartList.length)
			byeList.push(...currentItems)
			productList.push(...currentItems)
		},
		// byeAll(state) {
		// 	let currentItems = state.cartList.splice(0, state.cartList.length)
		// 	// state.byeList.push(...currentItems)
		// 	// state.productList.push(...currentItems)
		// 	if (state.currency === 1) {
		// 		// state.productList = currentItems
		// 		state.productList = currentItems
		// 		state.byeList = currentItems
		// 	}
		// 	else {
		// 		const currencyList = currentItems.map(p => ({ ...p, price: p.price / state.currency.value, }))
		// 		state.productList.push(...currencyList)
		// 		state.byeList.push(...currencyList)
		// 	}
		// },
		loadProductList(state, productListData) {
			let list = productListData.map(p => { return { ...p } })
			if (state.currency === 1) state.productList = list
			else {
				list = list.map(p => ({ ...p, price: p.price / state.currency.value, }))
				state.productList = list
			}
		},
		loadCartList(state, cartListData) {
			let list = cartListData.map(p => { return { ...p } })
			if (state.currency === 1) state.productList = list
			else {
				list = list.map(p => ({ ...p, price: p.price / state.currency.value, }))
				state.cartList = list
			}
		},
		setStateValue(state, { name, val }) {
			state[name] = val
		},
		addToCart({ cartList }, product) {
			cartList.push(product)
		},
		clearField({ productList }, productId) {
			const index = productList.findIndex(p => p.id === productId)
			productList.splice(index, 1)
		},
		removeFromCart({ cartList, productList }, productId) {
			const index = cartList.findIndex(p => p.id === productId)
			const removedItem = cartList.splice(index, 1)
			productList.push(...removedItem)
		},
	},
	actions: {
		setCurrency({ commit }, newVal) {
			// commit('setCurrency', newVal)
			commit('setStateValue', { name: 'currency', val: newVal })
			commit('loadProductList', products)
			commit('loadCartList', cartItems)
			// commit('byeAll')
		},
		removeFromCart({ commit }, productId) {
			commit('removeFromCart', productId)
		},

		byeAll({ commit }) {
			commit('byeAll')
		},
		addToCartAndClearField({ commit }, product) {
			commit('addToCart', product)
			commit('clearField', product.id)
		},
		loadProductList({ commit }) {
			commit('setStateValue', { name: 'isLoading', val: true })
			commit('setStateValue', { name: 'error', val: null })
			setTimeout(() => {
				try {
					// console.log(products)
					// throw new Error('error');
					commit('loadProductList', products)
				}
				catch (error) {
					commit('setStateValue', { name: 'error', val: error })
				}
				finally {
					commit('setStateValue', { name: 'isLoading', val: false })
				}
			}, 300)
		},
		loadCartList({ commit }) {
			commit('setStateValue', { name: 'isLoading', val: true })
			commit('setStateValue', { name: 'error', val: null })
			setTimeout(() => {
				try {
					commit('loadCartList', cartItems)
				}
				catch (error) {
					commit('setStateValue', { name: 'error', val: error })
				}
				finally {
					commit('setStateValue', { name: 'isLoading', val: false })
				}
			}, 300)
		}
	},
})
