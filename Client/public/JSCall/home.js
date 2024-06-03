function homePage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let homePage = document.querySelector('div.homePage');
	homePage.innerHTML += `
	<div class="homeHeader">
	    <h1>Do you know the future?</h1>
	    <p>
            If you answered "no", well you are in luck! You were
	        destined to be here,
	        <br />
	        in <strong>this</strong> moment,
	        <br />
	        to ask your questions of the future, and receive answers!
	    </p>
	</div>
	<div class="homeAskLink">
	    <h3>Are you ready?</h3>
	    <h2>
	    The only thing left to do
        <br />
            <span 
                id="askTrigger" 
                onclick="swapPrep(this)">
            <u><em>is ask...</em></u></span>
	    </h2>
	    <!-- 'ask' will be linked to the askPage -->
	</div>`;

	// INSERT NEW NAV ELEMENTS
	const navRmv = document.getElementById('navBar');
	if (navRmv) {
		navRmv.remove();
	}
	const navRep = document.createElement('nav');
	navRep.setAttribute('id', 'navBar');
	navRep.setAttribute('class', 'homePage');
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
homePage();
