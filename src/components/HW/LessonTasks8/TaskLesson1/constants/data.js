// Категории товаров
export const categories = [
	{
		id: 1,
		name: "Ноутбуки",
		slug: 'laptops',

		image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
		description: "Портативные компьютеры для работы и развлечений"
	},
	{
		id: 2,
		slug: 'carBatteries',
		name: "Автомобільні акумулятори",
		image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
		description: "Надежные аккумуляторы для вашего автомобиля"
	},
	{
		id: 3,
		name: "Масажні накидки, мати, подушки",
		slug: 'massageProducts',
		image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
		description: "Товары для релаксации и массажа"
	},
	{
		id: 4,
		slug: 'pressureWashers',
		name: "Апарати високого тиску",
		image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
		description: "Профессиональное оборудование для мойки под давлением"
	}
];

// Товары для категории "Ноутбуки"
export const laptops = [
	{
		id: 101,
		categoryId: 1,
		name: "Хромбук б/у Lenovo Льолісо Thinkpad 11e",
		price: 2750,
		oldPrice: 3200,
		image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
		description: "Компактный и надежный хромбук для учебы и работы",
		specs: {
			processor: "Intel Celeron N3150",
			ram: "4GB",
			storage: "32GB eMMC",
			screen: "11.6 дюймов"
		},
		inStock: true
	},
	{
		id: 102,
		categoryId: 1,
		name: "Ноутбук HP Pavilion 15-cg0312nw (4P4A8EA)",
		price: 18434,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1525547719571-a8d4ac917a83?w=400&h=300&fit=crop",
		description: "Современный ноутбук для повседневных задач",
		specs: {
			processor: "Intel Core i5-1135G7",
			ram: "8GB",
			storage: "256GB SSD",
			screen: "15.6 дюймов"
		},
		inStock: true
	},
	{
		id: 103,
		categoryId: 1,
		name: "Продуктивний 2K ноутбук Fujitsu",
		price: 9099,
		oldPrice: 10500,
		image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
		description: "Производительный ноутбук с 2K дисплеем",
		specs: {
			processor: "Intel Core i7-8565U",
			ram: "16GB",
			storage: "512GB SSD",
			screen: "14 дюймов 2K"
		},
		inStock: true
	},
	{
		id: 104,
		categoryId: 1,
		name: "Ноутбук HP ProBook 430 G4 \\ 13.3 \\ Core i3 \\",
		price: 6300,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
		description: "Бизнес-ноутбук для профессиональной работы",
		specs: {
			processor: "Intel Core i3-7100U",
			ram: "8GB",
			storage: "128GB SSD",
			screen: "13.3 дюйма"
		},
		inStock: true
	},
	{
		id: 105,
		categoryId: 1,
		name: "Ноутбук ASUS VivoBook 15 X513EA",
		price: 15999,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
		description: "Стильный ноутбук с современным дизайном",
		specs: {
			processor: "Intel Core i5-1135G7",
			ram: "8GB",
			storage: "512GB SSD",
			screen: "15.6 дюймов"
		},
		inStock: true
	},
	{
		id: 106,
		categoryId: 1,
		name: "Ноутбук Dell Inspiron 3511",
		price: 22500,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
		description: "Универсальный ноутбук для дома и офиса",
		specs: {
			processor: "Intel Core i7-1165G7",
			ram: "16GB",
			storage: "1TB SSD",
			screen: "15.6 дюймов"
		},
		inStock: false
	}
];

// Товары для категории "Автомобільні акумулятори"
export const carBatteries = [
	{
		id: 201,
		categoryId: 2,
		name: "Акумулятор VARTA Blue Dynamic E11 74Ah",
		price: 3200,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
		description: "Надежный стартерный аккумулятор",
		specs: {
			capacity: "74Ah",
			voltage: "12V",
			startingCurrent: "680A",
			terminals: "Европейские"
		},
		inStock: true
	},
	{
		id: 202,
		categoryId: 2,
		name: "Акумулятор BOSCH S4 Silver S4005 60Ah",
		price: 2850,
		oldPrice: 3100,
		image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&h=300&fit=crop",
		description: "Качественный аккумулятор от немецкого производителя",
		specs: {
			capacity: "60Ah",
			voltage: "12V",
			startingCurrent: "540A",
			terminals: "Европейские"
		},
		inStock: true
	},
	{
		id: 203,
		categoryId: 2,
		name: "Акумулятор EXIDE Premium EA852 85Ah",
		price: 4100,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1609413467929-3b4c38b1e4b2?w=400&h=300&fit=crop",
		description: "Мощный аккумулятор для больших автомобилей",
		specs: {
			capacity: "85Ah",
			voltage: "12V",
			startingCurrent: "800A",
			terminals: "Европейские"
		},
		inStock: true
	},
	{
		id: 204,
		categoryId: 2,
		name: "Акумулятор MUTLU SFB M2 55Ah",
		price: 2400,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1597149456242-1d9ec5f2e0c5?w=400&h=300&fit=crop",
		description: "Бюджетный надежный аккумулятор",
		specs: {
			capacity: "55Ah",
			voltage: "12V",
			startingCurrent: "450A",
			terminals: "Европейские"
		},
		inStock: true
	}
];

// Товары для категории "Масажні накидки, мати, подушки"
export const massageProducts = [
	{
		id: 301,
		categoryId: 3,
		name: "Масажна накидка на крісло ZENET ZET-854",
		price: 1890,
		oldPrice: 2200,
		image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
		description: "Универсальная массажная накидка для кресла",
		specs: {
			massageType: "Роликовый массаж",
			heatFunction: "Есть",
			power: "45W",
			material: "Искусственная кожа"
		},
		inStock: true
	},
	{
		id: 302,
		categoryId: 3,
		name: "Масажна подушка для шиї RELAXA MC-309E",
		price: 990,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1600334129128-685c5508cdd5?w=400&h=300&fit=crop",
		description: "Портативная массажная подушка",
		specs: {
			massageType: "Шиацу массаж",
			heatFunction: "Есть",
			power: "25W",
			material: "Дышащая ткань"
		},
		inStock: true
	},
	{
		id: 303,
		categoryId: 3,
		name: "Масажний мат CASADA Vitalmat CMK-7600",
		price: 2750,
		oldPrice: 3000,
		image: "https://images.unsplash.com/photo-1582845512956-d7b833ef3dad?w=400&h=300&fit=crop",
		description: "Полноразмерный массажный мат",
		specs: {
			massageType: "Акупунктурный массаж",
			heatFunction: "Есть",
			power: "60W",
			size: "180x60 см"
		},
		inStock: true
	},
	{
		id: 304,
		categoryId: 3,
		name: "Масажер для ног MEDISANA FM 885",
		price: 1450,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
		description: "Массажер для расслабления ног",
		specs: {
			massageType: "Роликовый массаж",
			heatFunction: "Есть",
			power: "35W",
			material: "Дышащая ткань"
		},
		inStock: false
	}
];

// Товары для категории "Апарати високого тиску"
export const pressureWashers = [
	{
		id: 401,
		categoryId: 4,
		name: "Мойка высокого давления KARCHER K2 Basic",
		price: 3200,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
		description: "Компактная мойка для дома",
		specs: {
			pressure: "110 бар",
			flowRate: "360 л/час",
			power: "1400W",
			hoseLength: "3 м"
		},
		inStock: true
	},
	{
		id: 402,
		categoryId: 4,
		name: "Мойка BOSCH AdvancedAquatak 140",
		price: 4850,
		oldPrice: 5200,
		image: "https://images.unsplash.com/photo-1609413467929-3b4c38b1e4b2?w=400&h=300&fit=crop",
		description: "Профессиональная мойка среднего класса",
		specs: {
			pressure: "140 бар",
			flowRate: "450 л/час",
			power: "2100W",
			hoseLength: "6 м"
		},
		inStock: true
	},
	{
		id: 403,
		categoryId: 4,
		name: "Мойка NILFISK C 130.1-6 P X-TRA",
		price: 6300,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1597149456242-1d9ec5f2e0c5?w=400&h=300&fit=crop",
		description: "Мощная мойка для интенсивного использования",
		specs: {
			pressure: "130 бар",
			flowRate: "480 л/час",
			power: "1800W",
			hoseLength: "8 м"
		},
		inStock: true
	},
	{
		id: 404,
		categoryId: 4,
		name: "Мойка STIHL RE 90",
		price: 2990,
		oldPrice: null,
		image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&h=300&fit=crop",
		description: "Легкая и маневренная мойка",
		specs: {
			pressure: "100 бар",
			flowRate: "330 л/час",
			power: "1300W",
			hoseLength: "5 м"
		},
		inStock: true
	}
];