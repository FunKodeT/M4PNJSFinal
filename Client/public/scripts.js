let swapPrep = (trigger) => {
	let triggerId = trigger.id;
	pageSwap(triggerId);
};

const pageSwap = (triggerId) => {
	const mainId = document.getElementById('mainId');
	let currentClass = mainId.className;
	if (triggerId === currentClass) {
		return;
	} else if (triggerId === 'askTrigger') {
		mainId.setAttribute('class', 'askPage');
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}

		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/ask.js';
		scriptReplace.id = 'scriptSwap';

		document.body.appendChild(scriptReplace);

		mainId.innerHTML = '';
	} else if (triggerId === 'aboutTrigger') {
		mainId.setAttribute('class', 'aboutPage');
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}

		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/about.js';
		scriptReplace.id = 'scriptSwap';

		document.body.appendChild(scriptReplace);

		mainId.innerHTML = '';
	} else if (triggerId === 'answerTrigger') {
		mainId.setAttribute('class', 'answerPage');
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}

		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/answer.js';
		scriptReplace.id = 'scriptSwap';

		document.body.appendChild(scriptReplace);

		mainId.innerHTML = '';
	} else if (triggerId === 'signInTrigger') {
		mainId.setAttribute('class', 'signInPage');
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}

		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/signIn.js';
		scriptReplace.id = 'scriptSwap';

		document.body.appendChild(scriptReplace);

		mainId.innerHTML = '';
	} else if (triggerId === 'signOutTrigger') {
		mainId.setAttribute('class', 'signOutPage');
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}

		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/signOut.js';
		scriptReplace.id = 'scriptSwap';

		document.body.appendChild(scriptReplace);

		mainId.innerHTML = '';
	} else if (triggerId === 'registerTrigger') {
		mainId.setAttribute('class', 'registerPage');
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}

		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/register.js';
		scriptReplace.id = 'scriptSwap';

		document.body.appendChild(scriptReplace);

		mainId.innerHTML = '';
	} else if (triggerId === 'contactTrigger') {
		mainId.setAttribute('class', 'contactPage');
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}

		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/contact.js';
		scriptReplace.id = 'scriptSwap';

		document.body.appendChild(scriptReplace);

		mainId.innerHTML = '';
	} else {
		mainId.setAttribute('class', 'homePage');
		const scriptRemove = document.getElementById('scriptSwap');
		if (scriptRemove) {
			scriptRemove.remove();
		}

		const scriptReplace = document.createElement('script');
		scriptReplace.src = '../../API/JSCall/home.js';
		scriptReplace.id = 'scriptSwap';

		document.body.appendChild(scriptReplace);

		mainId.innerHTML = '';
	}
};

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
/* 
// PAGE SWAP FUNCTIONS (OLD)
function askTrigger() {
	let mainId = document.getElementById('mainId');
	mainId.setAttribute('class', 'askPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/ask.js');
	console.log(mainId);
}
function homeTrigger() {
	let mainId = document.getElementById('mainId');
	mainId.setAttribute('class', 'homePage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/home.js');
	console.log(mainId);
}
function aboutTrigger() {
	let mainId = document.getElementById('mainId');
	mainId.setAttribute('class', 'aboutPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/about.js');
	console.log(mainId);
}
function answerTrigger() {
	let mainId = document.getElementById('mainId');
	mainId.setAttribute('class', 'answerPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/answer.js');
	console.log(mainId);
}
function signInTrigger() {
	let mainId = document.getElementById('mainId');
	mainId.setAttribute('class', 'signInPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/signin.js');
	console.log(mainId);
}
function signOutTrigger() {
	let mainId = document.getElementById('mainId');
	mainId.setAttribute('class', 'signOutPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/signout.js');
	console.log(mainId);
}
function registerTrigger() {
	let mainId = document.getElementById('mainId');
	mainId.setAttribute('class', 'registerPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/register.js');
	console.log(mainId);
}
function contactTrigger() {
	let mainId = document.getElementById('mainId');
	mainId.setAttribute('class', 'contactPage');
	let askSwap = document.getElementById('scriptSwap');
	askSwap.setAttribute('src', '../../API/JSCall/contact.js');
	console.log(mainId);
}
 */
