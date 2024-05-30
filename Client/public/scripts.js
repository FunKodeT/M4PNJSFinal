let currentPage = document.getElementById('divId');
accountHide();
let swapPrep = (trigger) => {
	let triggerId = trigger.id;
	let triggerClass = trigger.className;
	pageSwap(triggerId, triggerClass);
};

const pageSwap = (triggerId, triggerClass) => {
	const divId = document.getElementById('divId');
	const mainId = document.getElementById('mainId');
	let currentClass = divId.className;
	console.log(currentClass);

	if (triggerClass === currentClass) {
		return;
	} else if (triggerId === 'askTrigger') {
		divId.setAttribute('class', 'askPage');
		divId.innerHTML = '';
		mainId.insertBefore(divId, mainId.firstChild);
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}
		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/ask.js';
		scriptReplace.id = 'scriptSwap';
		document.body.appendChild(scriptReplace);
	} else if (triggerId === 'aboutTrigger') {
		divId.setAttribute('class', 'aboutPage');
		divId.innerHTML = '';
		mainId.insertBefore(divId, mainId.firstChild);
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}
		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/about.js';
		scriptReplace.id = 'scriptSwap';
		document.body.appendChild(scriptReplace);
	} else if (triggerId === 'answerTrigger') {
		divId.setAttribute('class', 'answerPage');
		divId.innerHTML = '';
		mainId.insertBefore(divId, mainId.firstChild);
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}
		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/answer.js';
		scriptReplace.id = 'scriptSwap';
		document.body.appendChild(scriptReplace);
	} else if (triggerId === 'signInTrigger') {
		divId.setAttribute('class', 'signInPage');
		divId.innerHTML = '';
		mainId.insertBefore(divId, mainId.firstChild);
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}
		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/signIn.js';
		scriptReplace.id = 'scriptSwap';
		document.body.appendChild(scriptReplace);
	} else if (triggerId === 'signOutTrigger') {
		divId.setAttribute('class', 'signOutPage');
		divId.innerHTML = '';
		mainId.insertBefore(divId, mainId.firstChild);
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}
		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/signOut.js';
		scriptReplace.id = 'scriptSwap';
		document.body.appendChild(scriptReplace);
	} else if (triggerId === 'registerTrigger') {
		divId.setAttribute('class', 'registerPage');
		divId.innerHTML = '';
		mainId.insertBefore(divId, mainId.firstChild);
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}
		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/register.js';
		scriptReplace.id = 'scriptSwap';
		document.body.appendChild(scriptReplace);
	} else if (triggerId === 'contactTrigger') {
		divId.setAttribute('class', 'contactPage');
		divId.innerHTML = '';
		mainId.insertBefore(divId, mainId.firstChild);
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}
		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/contact.js';
		scriptReplace.id = 'scriptSwap';
		document.body.appendChild(scriptReplace);
	} else {
		divId.setAttribute('class', 'homePage');
		divId.innerHTML = '';
		mainId.insertBefore(divId, mainId.firstChild);
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}
		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/home.js';
		scriptReplace.id = 'scriptSwap';
		document.body.appendChild(scriptReplace);
	}
	accountHide();
};

// SIGNIN, SIGNOUT, REGISTER HIDE FUNCTIONS
// PAGE DATA FOR CHECK
function accountHide() {
	// PAGE DATA FOR IF
	let signIn = document.querySelector('button.signInPage');
	let signOut = document.querySelector('button.signOutPage');
	let register = document.querySelector('button.registerPage');
	let user = document.getElementById('userName');
	/* 	console.log(currentPage);
	console.log(signIn);
	console.log(signOut);
	console.log(register);
	console.log(user); */

	// USER CHECK
	localStorage.setItem('user', 'loggedOut');
	let userState = localStorage.getItem('user');
	// localStorage.setItem('user', '');

	// NAV HIDE / SHOW DISPLAY FUNCTION
	if (signIn !== '' && register !== '' && signOut !== '' && user !== '') {
		if (
			userState == 'loggedOut' &&
			currentPage.className !== 'signInPage'
		) {
			console.log('user is not logged in, and page is not signInPage');
			user.style.display = 'none';
			signIn.style.display = 'inline-block';
			register.style.display = 'inline-block';
			signOut.style.display = 'none';
		} else if (
			userState == 'loggedIn' &&
			currentPage.className !== 'signInPage'
		) {
			console.log('user is logged in, and page is not signInPage');
			user.style.display = 'inline-block';
			signIn.style.display = 'none';
			register.style.display = 'none';
			signOut.style.display = 'inline-block';
		} else if (
			userState == 'loggedOut' &&
			currentPage.className == 'signInPage'
		) {
			console.log('user is not logged in, and page is signInPage');
			user.style.display = 'none';
			signIn.style.display = 'none';
			register.style.display = 'inline-block';
			signOut.style.display = 'none';
		} else if (
			userState == 'loggedIn' &&
			currentPage.className == 'signInPage'
		) {
			console.log('user is logged in, and page is signInPage');
			user.style.display = 'inline-block';
			signIn.style.display = 'none';
			register.style.display = 'none';
			signOut.style.display = 'inline-block';
		} else if (
			userState == 'loggedOut' &&
			currentPage.className == 'registerPage'
		) {
			console.log('user is not logged in, and page is registerPage');
			user.style.display = 'none';
			signIn.style.display = 'inline-block';
			register.style.display = 'none';
			signOut.style.display = 'none';
		} else if (
			userState == 'loggedIn' &&
			currentPage.className == 'registerPage'
		) {
			console.log('user is logged in, and page is registerPage');
			user.style.display = 'inline-block';
			signIn.style.display = 'none';
			register.style.display = 'none';
			signOut.style.display = 'inline-block';
		} else if (
			userState == 'loggedOut' &&
			currentPage.className == 'signOutPage'
		) {
			console.log('user is not logged in, and page is signOutPage');
			user.style.display = 'none';
			signIn.style.display = 'inline-block';
			register.style.display = 'inline-block';
			signOut.style.display = 'none';
		} else if (
			userState == 'loggedIn' &&
			currentPage.className == 'signOutPage'
		) {
			console.log('user is logged in, and page is signOutPage');
			user.style.display = 'inline-block';
			signIn.style.display = 'none';
			register.style.display = 'none';
			signOut.style.display = 'none';
		}
	}
}

/* 
	// HIDE SIGN IN BUTTON IF: AUTHENTICATED / ON PAGE
	let signInHide = document.querySelector('li.signInPage');
	console.log(signInHide);
	signInHide.setAttribute('style', 'display: "none"');
 */
/* 
// NOTES (OLD)

/* // VARIABLES
let navBar = document.getElementById('navBar');
let navClass = document.getElementsByClassName('homePage');
let button = document.getElementsByClassName('button');
 */
/*
// I need to have it so if the page you are on is classified as the home page or something, it will insert the script from the associated js file to dynamically change the web-page to that layout
// maybe something like...

// if(page){
    <insert HTML script association>
}else{
    if(differentPage){

    }
}

so i need an eventlistener, that onclick of either (ASK || ABOUT || ANSWER || SIGN IN || USERNAME) in the navbar and/or (ASK...) in the body, that changes the id of the section and nav according to the page its on. So for example, I click ask and it changes my section id to 'askPage' which due to my if statement in this script, will dynamically replace the contents of askPage.js into the html by inserting a script tag underneath this .js files tag that links to the askPage.js file

// PAGE SWAP FUNCTIONS (OLD)
function askTrigger() {
	let divId = document.getElementById('divId');
	divId.setAttribute('class', 'askPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/ask.js');
	console.log(divId);
}
function homeTrigger() {
	let divId = document.getElementById('divId');
	divId.setAttribute('class', 'homePage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/home.js');
	console.log(divId);
}
function aboutTrigger() {
	let divId = document.getElementById('divId');
	divId.setAttribute('class', 'aboutPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/about.js');
	console.log(divId);
}
function answerTrigger() {
	let divId = document.getElementById('divId');
	divId.setAttribute('class', 'answerPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/answer.js');
	console.log(divId);
}
function signInTrigger() {
	let divId = document.getElementById('divId');
	divId.setAttribute('class', 'signInPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/signin.js');
	console.log(divId);
}
function signOutTrigger() {
	let divId = document.getElementById('divId');
	divId.setAttribute('class', 'signOutPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/signout.js');
	console.log(divId);
}
function registerTrigger() {
	let divId = document.getElementById('divId');
	divId.setAttribute('class', 'registerPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/register.js');
	console.log(divId);
}
function contactTrigger() {
	let divId = document.getElementById('divId');
	divId.setAttribute('class', 'contactPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/contact.js');
	console.log(divId);
}

// NAV SWAP (OLD)
the nav bar needs to change its id only if the document is on: askPage, aboutPage, and answerPage.
    If on ask, display (HOME || ABOUT || ANSWER)
    If on about, display (ASK || HOME || ANSWER)
    If on answer, display (ASK || ABOUT || HOME)
All other pages do not need to use any other nav bar besides the homePage one

overall the code is gonna have to be ordered approximately like:

index.html loads as normal, loads the home page
scripts.js is loaded, and has an eventlistener waiting for when the user clicks on a link
when a link is clicked, the page that link goes to will be inserted via scripts.js and the page id's will be changed as well. The id swaps will need to be inserted either via scripts.js, or hidden
    within the index.html
 */
