export const convertScore = (score) => {
	if (score >= 1 && score <= 2) return score
	if (score >= 3 && score <= 6) return 3
	if (score >= 7 && score <= 9) return 4
	if (score >= 10 && score <= 12) return 5

	return 'uncorrect' // или выбросить ошибку
}
export const convertScoreToGrade = (score) => {
	if (score <= 1) return 'Блатник'
	if (score >= 1 && score <= 2) return 'Двійочник'
	if (score >= 3 && score <= 6) return 'Трійочник'
	if (score >= 7 && score <= 9) return 'Хорошист'
	if (score >= 10 && score <= 12) return 'Відмінник'

	return 'uncorrect' // или выбросить ошибку
}
