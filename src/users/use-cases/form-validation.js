




export const formValidation = (user) =>{

const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#lastName');
const inputBalance = document.querySelector('#balance');


	if (!user.firstName) {
		inputName.required = true;
		throw 'First name are required';
	}
	if (!user.lastName) {
		inputLastName.required = true;
		throw 'Last name are required';
	}
	if (!user.balance) {
		inputBalance.required = true;
		throw 'Balanced are required';
	}




}
