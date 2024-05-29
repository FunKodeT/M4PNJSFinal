function aboutPage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let aboutPage = document.querySelector('div.aboutPage');
	aboutPage.innerHTML += `<div class="aboutHeader">
	<h1>Who are we?</h1>
	<div>
		<p>Seekers of Truth! Seers of the future!<br>Not legally responsible for any actions you take regarding your future!<br><strong>Psychically Adept!</strong></p>
	</div>`;

	// INSERT NEW NAV ELEMENTS
	const navRmv = document.getElementById('navBar');
	if (navRmv) {
		navRmv.remove();
	}
	const navRep = document.createElement('nav');
	navRep.setAttribute('id', 'navBar');
	navRep.setAttribute('class', 'aboutPage');
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
				<li class="homePage">
					<button
						type="button"
						id="homeTrigger"
						class="homePage"
						onclick="swapPrep(this)">
						Home
					</button>
				</li>
				<li class="answerPage">
					<button
						type="button"
						id="answerTrigger"
						class="answerPage"
						onclick="swapPrep(this)">
						Answer
					</button>
				</li>
			</ul>
	`;
	bodyVar.insertBefore(navRep, bodyVar.firstChild);
}
aboutPage();
