import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

/**
 *
 * @param {HTMLDivElement} element
 * @param {() => void} callback
 */

/* TODO: Podria llamar el callback desde el padre, 
 y asi reutilizar el button en mas de un caso.

    renderAddButtons(element, () => {
		console.log('desde el padre');
	});

    export const renderAddButtons = (element, callback) => {
	const fabButton = document.createElement('button');
	fabButton.innerText = '+';
	fabButton.classList.add('fabButton');

	element.append(fabButton);

	fabButton.addEventListener('click', () => {
		if (!callback) return;
		callback();
	});
};
*/

export const renderAddButtons = (element) => {
	const fabButton = document.createElement('button');
	fabButton.innerText = '+';
	fabButton.classList.add('fabButton');

	element.append(fabButton);

	fabButton.addEventListener('click', () => {
		showModal();
	});
};
