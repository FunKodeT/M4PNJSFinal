function answerPage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let answerPage = document.querySelector('main.answerPage');
	answerPage.innerHTML += `<div class="answerHeader">
	<h1>Test2</h1>
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
