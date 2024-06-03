function signOutPage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let signOutPage = document.querySelector('div.signOutPage');
	signOutPage.innerHTML += `
            <h1>Goodbye!</h1>
            <h2>The 8-Ball predicts you will come back and see us soon!</h2>
            `;

	// INSERT NEW NAV ELEMENTS
	const navRmv = document.getElementById('navBar');
	if (navRmv) {
		navRmv.remove();
	}
	const navRep = document.createElement('nav');
	navRep.setAttribute('id', 'navBar');
	navRep.setAttribute('class', 'signOutPage');
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
signOutPage();
