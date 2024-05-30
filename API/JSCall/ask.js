function askPage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let askPage = document.querySelector('div.askPage');
	askPage.innerHTML += `
	<div class="askHeader">
	<h1>What future do you wish to know?</h1>
	<div>
		<form action="/answer" method="post" id="askForm">
			<input type="text" name="magicQuestion" id="magicQuestion" placeholder="Ask your question!" required>
			<input id="answerTrigger" type="submit" value="Receive Revelation!">
		</form>
	</div>
	`;

	// ANSWER ARRAY INDEX
	let answerArray = [
		'Maybe.',
		'Certainly not.',
		'I hope so.',
		'Not in your wildest dreams.',
		'There is a good chance.',
		'Quite likely.',
		'I think so.',
		'I hope not.',
		'I hope so.',
		'Never!',
		'Fuhgeddaboudit.',
		'Ahaha! Really?!?',
		'Pfft.',
		'Sorry, bucko.',
		'Hell, yes.',
		'Hell to the no.',
		'The future is bleak.',
		'The future is uncertain.',
		'I would rather not say.',
		'Who cares?',
		'Possibly.',
		'Never, ever, ever.',
		'There is a small chance.',
		'Yes!',
	];

	// SUBMIT LISTENER
	document
		.getElementById('askForm')
		.addEventListener('submit', questionStore);

	// USER QUESTION STORAGE FUNCTION AND ANSWER ASSIGNMENT
	function questionStore(event) {
		// PREVENTS DEFAULT BEHAVIOR
		event.preventDefault();

		// ASSIGNS RANDOM NUMBER TO ANSWERARRAY
		let randomIndex = Math.floor(Math.random() * answerArray.length);

		// GRABS THE VALUE OF THE USER SUBMITTED QUESTION
		let userQuestion = document.getElementById('magicQuestion').value;

		// APPLIES RANDOMIZED ANSWER FROM ARRAY TO USER QUESTION
		let magicAnswer = '';
		magicAnswer = answerArray[randomIndex];

		// CREATES A CONTAINER FOR USER AND ARRAY DATA
		const formData = {
			userQuestion: userQuestion,
			magicAnswer: magicAnswer,
		};

		// PUTS THE INFORMATION WITHIN THE CONTAINER INTO LOCAL BROWSER STORAGE
		localStorage.setItem('formData', JSON.stringify(formData));

		// STANDARD PAGE FUNCTIONS
		const trigger = document.getElementById('answerTrigger');
		swapPrep(trigger);
	}

	// INSERT NEW NAV ELEMENTS
	const navRmv = document.getElementById('navBar');
	if (navRmv) {
		navRmv.remove();
	}
	const navRep = document.createElement('nav');
	navRep.setAttribute('id', 'navBar');
	navRep.setAttribute('class', 'askPage');
	navRep.innerHTML += `
	<h1>Magic 8-Ball!</h1>
			<ul>
				<li class="homePage">
					<button
						type="button"
						id="homeTrigger"
						class="homePage"
						onclick="swapPrep(this)">
						Home
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
				<li class="answerPage">
					<button
						type="button"
						id="answerTrigger"
						class="aboutPage"
						onclick="swapPrep(this)">
						Answer
					</button>
				</li>
			</ul>
	`;
	bodyVar.insertBefore(navRep, bodyVar.firstChild);
}
askPage();
