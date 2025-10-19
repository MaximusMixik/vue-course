// Array for the product list
export const products = [
	{ id: 'prod-1', name: 'Хліб', price: 24, currency: 'грн.' },
	{ id: 'prod-2', name: 'Молоко', price: 31, currency: 'грн.' },
	{ id: 'prod-3', name: 'Ковбаса', price: 350, currency: 'грн.' },
	{ id: 'prod-4', name: 'Шовдарь', price: 950, currency: 'грн.' },
	{ id: 'prod-5', name: 'Пікниця', price: 210, currency: 'грн.' },
];

// Array for the shopping cart items
export const cartItems = [
	{ id: 'cart-1', name: 'Вода', price: 15, currency: 'грн.' },
	{ id: 'cart-2', name: 'Ноутбук', price: 529999, currency: 'грн.' },
	{ id: 'cart-3', name: 'Комплект моніторів', price: 25000, currency: 'грн.' },
	{ id: 'cart-4', name: 'Інвертор', price: 13000, currency: 'грн.' },
	{ id: 'cart-5', name: 'Акумулятор', price: 11000, currency: 'грн.' },
];

// Array for available currencies
export const currencies = [
	{ id: 'curr-1', name: 'Гривня', symbol: 'грн.', value: 1 },
	{ id: 'curr-2', name: 'Доллар', symbol: '$', value: 41 },
	{ id: 'curr-3', name: 'Euro', symbol: 'E', value: 44 },
];

// Variable to store the currently selected currency (for example, its ID)
export const selectedCurrencyId = 'curr-1'; // Assuming 'Гривня' is selected by default

// Example of how you might structure data for the "Buy" buttons if they had unique actions/states
// This might not be a separate array but rather a part of the 'products' array item itself.
// For instance, a function or method passed to a component.
// buyButton: { action: 'addToCart' }