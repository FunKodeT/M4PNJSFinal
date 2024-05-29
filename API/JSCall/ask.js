function askPage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let askPage = document.querySelector('main.askPage');
	askPage.innerHTML += `<div class="askHeader">
	<h1>What future do you wish to know?</h1>
	<p>
		Test
		<br />
		test <strong>TEST</strong> test,
		<br />
		test.
	</p>`;

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
