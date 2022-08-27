//* ============================ Маски Форм ===========================*\\

export const nameMask = function (value) {
	let pattern = new RegExp(/^[-A-z0-9_.-]+$/i)
	return pattern.test(value)
}

export const emailMask = function (value) {
	let pattern = new RegExp(/^[-a-z0-9!#$%&'*+/=?^_`{|}~.@]+$/i)
	return pattern.test(value)
}

export const passwordMask = function (value) {
	let pattern = new RegExp(/^[-a-z0-9!#$%&@'*+/=?^_`{|}~.]+$/i)
	return pattern.test(value)
}
