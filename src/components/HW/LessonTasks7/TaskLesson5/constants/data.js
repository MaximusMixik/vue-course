// Array for the list of students
export const students = [
	{ id: 'student-1', fullName: 'Коваль Тарас', averageScore: 10 },
	{ id: 'student-2', fullName: 'Григоренко Іван', averageScore: 9 },
	{ id: 'student-3', fullName: 'Маркович Оля', averageScore: 11 },
	{ id: 'student-4', fullName: 'Василеко Іра', averageScore: 12 },
	{ id: 'student-5', fullName: 'Пилип Тарас', averageScore: 7 },
	{ id: 'student-6', fullName: 'Баба Галя', averageScore: 8 },
	{ id: 'student-7', fullName: 'Дід Степан', averageScore: 34 },
];

// Array for the "Система оцінювання" (Grading System) options
export const gradingSystems = [
	{ id: 'grade-sys-1', value: 12, label: '12-балльна система' }, // Assuming 12-point system
	{ id: 'grade-sys-2', value: 5, label: '5-балльна система' },   // Assuming 5-point system
];

// Array for the "Категорія" (Category) options
export const categories = [
	{ id: 'cat-1', name: 'Відмінник' },
	{ id: 'cat-2', name: 'Хорошист' },
	{ id: 'cat-3', name: 'Трійочник' },
	{ id: 'cat-4', name: 'Двійочник' },
	{ id: 'cat-5', name: 'Блатник' },
];

// Example of how you might store selected values (for Vue data properties)
export const selectedGradingSystemId = 'grade-sys-1'; // Defaulting to 12-point system
export const selectedCategoryId = null; // No category selected by default, or an initial category ID