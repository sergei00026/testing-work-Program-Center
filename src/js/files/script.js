// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const form = document.forms.validation;
if (form) {
	form.addEventListener('keyup', function (event) {
		const inputNumIndex = getIndexFromSet(form, event.target);
		if (event.target.value.length >= parseInt(event.target.getAttribute('maxlength'))) {
			if (inputNumIndex < form.length - 1) {
				form[inputNumIndex + 1].focus();
			}
			else {
				form[0].focus();
			}
		}
		if (event.target.value.length == 0) {
			if (inputNumIndex > 0) {
				form[inputNumIndex - 1].focus();
			}
			else {
				form[form.length - 1].focus();
			}
		}
	});
}
function getIndexFromSet(set, elm) {
	// elm.value = elm.value.replace(/\D/, "");
	let setArr = [].slice.call(set);
	for (let i in setArr) {
		if (setArr[i] == elm) {
			return parseInt(i);
		};
	}
}