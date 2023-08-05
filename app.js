import { langs, symbols } from './constants.js'

const inputText = document.querySelector('#inputText')
const outputText = document.querySelector('#outputText')
const btnCompute = document.querySelector('#submit')
const shiftElement = document.querySelector('#shift')
const langElement = document.querySelector('#language')
const warningElement = document.querySelector('#warning')

function charShift(arr, char) {
	let index = arr.indexOf(char)
	return arr[index + parseInt(shiftElement.value)]
}

function charChange(char) {
	char.toLowerCase()
	return langs[langElement.value].includes(char)
		? charShift(langs[langElement.value], char)
		: char
}

function textValidation(text) {
	warningElement.style.display = 'none'
	const langsStr = langs[langElement.value].join('')
	const passed = text
		.trim()
		.split('')
		.every((el) => langsStr.includes(el))

	if (!passed) {
		warningElement.style.display = 'block'
	}
	return text
}

btnCompute.onclick = () => {
	warning.style.display = 'none'
	outputText.textContent = textValidation(inputText.value)
		.split('')
		.map((el) => charChange(el))
		.join('')
}
