function contactPage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let aboutPage = document.querySelector('div.contactPage');
	aboutPage.innerHTML += `<div class="contactHeader">
	<h1>You would like to contact us?</h1>
	<div>
		<p>Don't</p>
        <div>
            Please, 
                <span 
                    id="homeTrigger" 
                    onclick="swapPrep(this)">
                    return to learn your fortune!
                </span>
        </div>
	</div>`;

	// INSERT NEW NAV ELEMENTS
	const navRmv = document.getElementById('navBar');
	if (navRmv) {
		navRmv.remove();
	}
	const navRep = document.createElement('nav');
	navRep.setAttribute('id', 'navBar');
	navRep.setAttribute('class', 'contactPage');
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
contactPage();
