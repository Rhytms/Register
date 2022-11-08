'use strict'

const radioButton = document.querySelector('.remember-item__check')
function radioYes(check) {
	if (!check.classList.contains('_yes')) {
		check.classList.add('_yes')
	}
	else {
		check.classList.remove('_yes')
	}
	return
}

const radioButtonBlock = document.querySelector('.remember-item')
const radioButtonBlockRegister = document.querySelector('.remember-item.register')
function rememberPassword(object) {
	object.addEventListener('click', () => {
		radioYes(radioButton)
	})
}

rememberPassword(radioButtonBlock)


//------------------- email
const emailError = /^(([^<>()[\]\\.,;:\s@"\s]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]\s)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const email = document.querySelector('.author-window__email');
const emailRegister = document.querySelector('.register-window__email');
function validateEmail(value) {
  return emailError.test(value);
}
function updateInput() {
	if (validateEmail(email.value)) {
		email.classList.remove('_error');
		email.classList.add('_validate');
	}
	else {
		email.classList.remove('_validate')
		email.classList.add('_error')
	}
}
function updateInputRegister() {
	if (validateEmail(emailRegister.value)) {
		emailRegister.classList.remove('_error');
		emailRegister.classList.add('_validate');
	}
	else {
		emailRegister.classList.remove('_validate')
		emailRegister.classList.add('_error')
	}
}
email.addEventListener('input', updateInput);
emailRegister.addEventListener('input', updateInputRegister);


function validateForm(item)
{
var x=item.value;
if (x==null || x==""){
  item.classList.add('_error')
  return false;
	}

}

//------------------------ password
const passwordAuthor = document.querySelector('.author-window__password');
const passwordRegister = document.querySelector('.register-window__password');

function validateRegister(item) {
	item.onkeyup = function () {
	
		const lowerCaseLetters = /[a-z]/g;
		if(item.value.match(lowerCaseLetters)) {
			item.classList.remove('_error')
			item.classList.add('_validate')
		} else {
			item.classList.remove('_validate')
			item.classList.add('_error')
	}
		if (passwordRegister.value == confirmPassword.value) {
			confirmPassword.classList.add('_validate')
		} else {
			confirmPassword.classList.remove('_validate')
			confirmPassword.classList.add('_error')
		}
	
		const upperCaseLetters = /[A-Z]/g
		if(item.value.match(upperCaseLetters)) {
			item.classList.remove('_error')
			item.classList.add('_validate')
		} else {
			item.classList.remove('_validate')
			item.classList.add('_error')
		}
	
		const numbers = /[0-9]/
		if(item.value.match(numbers)) {
			item.classList.remove('_error')
			item.classList.add('_validate')
		} else {
			item.classList.remove('_validate')
			item.classList.add('_error')
		}
	
		if(item.value.length >= 6) {
			item.classList.remove('_error')
			item.classList.add('_validate')
		}
		else if (item.value.length <= 0) {
			item.classList.add('_error')
			
		}
		else {
			item.classList.remove('_validate')
			item.classList.add('_error')
		}
		
	let invalidSymbol = /[\s\/\.\,\'\\\"\`\(\)\-\=\+\_\[\]\{\}\?\<\>\~\!\@\#\$\%\^\&\*]/
		if(item.value.match(invalidSymbol)) {
			item.classList.remove('_validate')
			item.classList.add('_error')
		}
	
	}	
}
function validateAuthor(item) {
	item.onkeyup = function () {
		
		if(item.value.length >= 6) {
			item.classList.remove('_error')
			item.classList.add('_validate')
		}
		else {
			item.classList.remove('_validate')
			item.classList.add('_error')
		}
		let invalidSymbol = /[\s\/\.\,\'\\\"\`\(\)\-\=\+\_\?\[\]\{\}\<\>\!\@\#\$\%\^\&\*]/
		if(item.value.match(invalidSymbol)) {
			item.classList.remove('_validate')
			item.classList.add('_error')
		}

		
	}	
}
validateAuthor(passwordAuthor)
validateRegister(passwordRegister)



const passwordEye = document.querySelector('.window-password__eyes')
const passwordEyeRegister = document.querySelector('.window-password__eyes._register')
function changeEye(item) {
	if (item.classList.contains('_close')) {
		item.classList.remove('_close')
	} else {
		item.classList.add('_close')
	}
}
function ShowPassword(item) {
	if (item.getAttribute('type') === 'password') {
		item.setAttribute('type','text')
	}else{
		item.setAttribute('type','password')
	}
}
function dribleEyes(eye) {
	eye.addEventListener('click', (e) => {
	changeEye(eye)
	ShowPassword(passwordAuthor)
})
}
function dribleEyesRegister(eye) {
	eye.addEventListener('click', (e) => {
	changeEye(eye)
	ShowPassword(passwordRegister)
	ShowPassword(confirmPassword)
})
}
dribleEyes(passwordEye)
dribleEyesRegister(passwordEyeRegister)


//-------------------------------------- submit
const submitButtonAuthor = document.querySelector('.author-window__btn')
const submitButtonRegister = document.querySelector('.register-window__btn')
const blockEyes = document.querySelector('.window-password__eyes')
const blockEyesRegister = document.querySelector('.window-password__eyes._register')
function drible(item) {
	if (item.classList.contains('_error')) {
		item.classList.remove('drible')
		item.classList.add('drible')
		disableDrible(item)
	} else {
		item.classList.remove('drible')

	}
	return
}
function disableDrible(object) {
	setTimeout(() => {
		if (object.classList.contains('drible')) {
			object.classList.remove('drible')
			blockEyes.classList.remove('drible')
			blockEyesRegister.classList.remove('drible')
		}
	}, 800)
	return
}
function SubmitAuthorButton(btn) {
	btn.addEventListener('click', () => {
		
		validateForm(passwordAuthor)
		validateForm(email)
		drible(passwordAuthor)
		drible(email)


		if (passwordAuthor.classList.contains('_error')) {
			blockEyes.classList.add('drible')
		}

	})
	
}
function SubmitRegisterButton(btn) {
	btn.addEventListener('click', () => {
		
		validateForm(passwordRegister)
		validateForm(emailRegister)
		validateForm(confirmPassword)
		validateForm(agreedBlock)
		
		drible(passwordRegister)
		drible(emailRegister)
		drible(confirmPassword)

		if (passwordRegister.classList.contains('_error')) {
			blockEyesRegister.classList.add('drible')
		}
		if (!agreedCheck.classList.contains('_agreed')) {
			drible(agreedBlock)
			agreedCheck.classList.add('_error')
			agreedBlock.classList.add('_error')
		} else {
			agreedBlock.classList.remove('_error')
			agreedCheck.classList.remove('_error')
		}
		

	})
	
}
SubmitAuthorButton(submitButtonAuthor)
SubmitRegisterButton(submitButtonRegister)

//-------------------------------REgister
const confirmPassword = document.querySelector('.register-window__password.confirm')
const confirmPasswordBLock = document.querySelector('.window-password__block._confirm')
function checkConfirmPassword(item) {
	if (passwordRegister.value == confirmPassword.value) {
		confirmPassword.classList.remove('_error')
		confirmPassword.classList.add('_validate')
	} else {
		confirmPassword.classList.remove('_validate')
		confirmPassword.classList.add('_error')
	}
	if (confirmPassword.value.length <= 0) {
		confirmPassword.classList.remove('_validate')
	}
}
checkConfirmPassword()
//------------------------------ transform
const buttonToRegister = document.querySelector('.author-window__register')
const buttonToAuthor = document.querySelector('.register-window__title')

const authorWindow = document.querySelector('.author-window')
const registerWindow = document.querySelector('.register-window')

buttonToRegister.addEventListener('click', () => {
	// document.body.style.padding = '0 15px'
	if (!authorWindow.classList.contains('disabled')) {
		authorWindow.classList.add('disabled')
		registerWindow.classList.remove('disabled')
		email.classList.remove('_error')
		passwordAuthor.classList.remove('_error')
	} 
})
buttonToAuthor.addEventListener('click', () => {
	if (!registerWindow.classList.contains('disabled')) {
		registerWindow.classList.add('disabled')
		authorWindow.classList.remove('disabled')
		emailRegister.classList.remove('_error')
		passwordRegister.classList.remove('_error')
		confirmPassword.classList.remove('_error')



	} 
})
//----------------------------- agreed
const agreedBlock = document.querySelector('.password-block__agreement')
const agreedCheck = document.querySelector('.agreement__check')
agreedCheck.addEventListener('click', () => {
	if (!agreedCheck.classList.contains('_agreed')) {
		agreedCheck.classList.add('_agreed')
			agreedCheck.classList.remove('_error')

		agreedCheck.classList.add('_validate')
		
	} else {
		agreedCheck.classList.remove('_agreed')
		agreedCheck.classList.remove('_validate')

		
	}
})

//-----------------------
// function mouseMove(){
//     // Add event listener
//     const elem = document.querySelector(".paralax")
//     // Magic happens here
// 		// elem.forEach(item => {
// 		document.addEventListener("mousemove", parallax)
// 		function parallax(e) {
// 				let _w = window.innerWidth/2
// 				let _h = window.innerHeight/2
// 				let _mouseX = e.clientX
// 				let _mouseY = e.clientY
// 				let _depth3 = `${10 - (_mouseX - _w) * 0.03}% ${80 - (_mouseY - _h) * 0.03}%`
// 				let x = `${_depth3}`
// 				// console.log(x)
// 				elem.style.backgroundPosition = x
// 		}
		
		

// }
// mouseMove()
