function answerPage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let answerPage = document.querySelector('div.answerPage');
	answerPage.innerHTML += `
	<div class="answerHeader">
		<h1>You ask: <span id="userQuestion"></span></h1>
		<h3>The Magic 8-Ball says:</h3>
		<h1><span id="magicAnswer"></span></h1>
	</div>
	`;

	// ATTACH QUESTION
	function answerAttach() {
		// GRABS CONTAINER FROM LOCALSTORAGE
		let formData = JSON.parse(localStorage.getItem('formData'));

		// SETS MAGICANSWER VALUE TO FORMDATA VALUE
		let magicAnswer = document.getElementById('magicAnswer');
		magicAnswer.innerText = formData.magicAnswer;

		// SETS USER QUESTION VALUE TO FORMDATA VALUE
		let userQuestion = document.getElementById('userQuestion');
		userQuestion.innerText = formData.userQuestion;
	}
	answerAttach();

	// INSERT NEW NAV ELEMENTS
	const navRmv = document.getElementById('navBar');
	if (navRmv) {
		navRmv.remove();
	}
	const navRep = document.createElement('nav');
	navRep.setAttribute('id', 'navBar');
	navRep.setAttribute('class', 'answerPage');
	navRep.innerHTML += `
	<h1>Magic 8-Ball!</h1>
			<ul>
                <li class="askPage">
                    <button
                        type="button"
                        id="askTrigger"
                        class="askPage"
                        onclick="swapPrep(this)">
                        Ask
                    </button>
                </li>
				<li class="aboutPage">
					<button
						type="button"
						id="aboutTrigger"
						class="aboutPage"
						onclick="swapPrep(this)">
						About
					</button>
				</li>
				<li class="homePage">
					<button
						type="button"
						id="homeTrigger"
						class="homePage"
						onclick="swapPrep(this)">
						Home
					</button>
				</li>
			</ul>
	`;
	bodyVar.insertBefore(navRep, bodyVar.firstChild);
}
answerPage();
