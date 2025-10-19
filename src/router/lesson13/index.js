import HomeView from '../../pages/Lessons/13/task1/HomeView.vue'
import ProductsView from '../../pages/Lessons/13/task1/ProductsView.vue'
import SupplierView from '../../pages/Lessons/13/task1/SupplierView.vue'
import ContactsView from '../../pages/Lessons/13/task1/ContactsView.vue'
import ShoppingRules from '../../pages/Lessons/13/task1/ShoppingRules.vue'

export default [
	{ path: '/', name: 'home', component: HomeView },
	{ path: '/products', name: 'products', component: ProductsView },
	{ path: '/suppliers', name: 'suppliers', component: SupplierView },
	{ path: '/contacts', name: 'contacts', component: ContactsView },
	{ path: '/rules', name: 'rules', component: ShoppingRules },
]
