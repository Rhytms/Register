'use strict'

const radioButton = document.querySelector('.remember-item__check')
const radioButtonRegister = document.querySelector('.check-register')
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
function rememberPasswordRegister(object) {
	object.addEventListener('click', () => {
		radioYes(radioButtonRegister)
	})
}
rememberPassword(radioButtonBlock)
rememberPasswordRegister(radioButtonBlockRegister)


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
		
	let invalidSymbol = /[\s\/\.\,\'\\\"\`\(\)\-\=\+\_\?\[\]\{\}\<\>\!\@\#\$\%\^\&\*]/
		if(item.value.match(invalidSymbol)) {
			item.classList.remove('_validate')
			item.classList.add('_error')
		} else {
			item.classList.remove('_error')
			item.classList.add('_validate')

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

		validateForm(loginUser)
		validateForm(passwordRegister)
		validateForm(emailRegister)
		validateForm(confirmPassword)
		validateForm(firstName)
		validateForm(secondName)
		validateForm(phoneInput)
		
		drible(passwordRegister)
		drible(loginUser)
		drible(emailRegister)
		drible(confirmPassword)
		drible(firstName)
		drible(secondName)
		drible(phoneInput)
		if (passwordRegister.classList.contains('_error')) {
			blockEyesRegister.classList.add('drible')
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
//-------------------------- names
const firstName = document.querySelector('.register-window__name.first')
const secondName = document.querySelector('.register-window__name.second')


function CheckNames(item) {
	item.onkeyup = function () {
		
	let invalidSymbol = /[\d\s\/\.\,\'\\\"\`\(\)\-\=\+\_\[\]\{\}\?\<\>\!\~\@\#\$\%\^\&\*]/
		if(item.value.match(invalidSymbol)) {
			item.classList.add('_error')
		} else {
			item.classList.remove('_error')
		}
		if (item.value.length <= 2) {
			item.classList.add('_error')
			
		}
	
	}	
	
}
CheckNames(firstName)
CheckNames(secondName)
//------------------------------ login
const loginUser = document.querySelector('.register-window__login')
function checkLogin(item) {
	let invalidSymbol = /[\s\/\.\,\'\\\"\`\(\)\=\+\_\[\]\{\}\?\<\>\!\~\@\#\$\%\^\&\*]/
		if(item.value.match(invalidSymbol)) {
			item.classList.add('_error')
		} else {
			item.classList.remove('_error')
	}
	if (item.value.length <= 2) {
			item.classList.add('_error')
		
	}
}
loginUser.addEventListener('keyup', () => {
	checkLogin(loginUser)
})

function validateForm(item)
{
var x=item.value;
if (x==null || x==""){
  item.classList.add('_error')
  return false;
	}

}
//---------------------- phone
const phoneInput = document.querySelector('.register-window__phone')
function checkPhoneNumber(item) {
	const numb = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
	return numb.test(item)
}
function validationForm() {
	phoneInput.value
	if (!checkPhoneNumber(phoneInput)) {
		phoneInput.classList.remove('_error')
	} else {
		phoneInput.classList.add('_error')
	}
}
phoneInput.addEventListener('keyup', validationForm())
//------------------------------ transform
const buttonToRegister = document.querySelector('.author-window__register')
const buttonToAuthor = document.querySelector('.register-window__title')

const authorWindow = document.querySelector('.author-window')
const registerWindow = document.querySelector('.register-window')

buttonToRegister.addEventListener('click', () => {
	if (!authorWindow.classList.contains('disabled')) {
		authorWindow.classList.add('disabled')
		registerWindow.classList.remove('disabled')
	} 
})
buttonToAuthor.addEventListener('click', () => {
	if (!registerWindow.classList.contains('disabled')) {
		registerWindow.classList.add('disabled')
		authorWindow.classList.remove('disabled')
	} 
})

//--------------------------------

// const randomItem = document.querySelectorAll('.object-paralax__item');
// randomItem.forEach(item => {
// 	const max = 100
// 	item.style.left = `${(Math.random()*(max +1))}%`
// 	item.style.top = `${(Math.random()*(max +1))}%`
// 			})
// 		const paralax = document.querySelector('.paralax')
// 		window.onload = () => {
// 	if (paralax) {
	
// 		const forItem = 50
	
// 		const speed = 0.05
	
// 		let positionX = 0, positionY = 0
// 		let coordXprocent = 0, coordYprocent = 0
	
// 		function setMouseParalaxStyle() {
// 			const distX = coordXprocent - positionX
// 			const distY = coordYprocent - positionY
	
// 			positionX = positionX + (distX * speed)
// 			positionY = positionY + (distY * speed)
// 			randomItem.forEach(item => {
// 			// const max = 100
// 			// item.style.left = `${(Math.random()*(max +1))}%`
// 			// item.style.top = `${(Math.random()*(max +1))}%`
// 			item.style.cssText = `transform: translate(${positionX / forItem}%,${positionY / forItem}%)`
// 			})
// 			requestAnimationFrame(setMouseParalaxStyle)
// 		}
// 		setMouseParalaxStyle()
// 		paralax.addEventListener('mousemove', (e) => {
// 			const paralaxWidth = paralax.offsetWidth
// 			const paralaxHeight = paralax.offsetHeight

// 			const coordX = e.pageX - paralaxWidth / 2
// 			const coordY = e.pageY - paralaxWidth / 2

// 			coordXprocent = coordX / paralaxWidth * 100
// 			coordYprocent = coordY / paralaxHeight * 100
// 		})
		
// 	}
// }



//-----------------------
function mouseMove(){
    // Add event listener
    const elem = document.querySelector(".paralax")
    // Magic happens here
		// elem.forEach(item => {
		document.addEventListener("mousemove", parallax)
		function parallax(e) {
				let _w = window.innerWidth/2
				let _h = window.innerHeight/2
				let _mouseX = e.clientX
				let _mouseY = e.clientY
				let _depth3 = `${10 - (_mouseX - _w) * 0.03}% ${80 - (_mouseY - _h) * 0.03}%`
				let x = `${_depth3}`
				// console.log(x)
				elem.style.backgroundPosition = x
		}
		
		

}
mouseMove()
