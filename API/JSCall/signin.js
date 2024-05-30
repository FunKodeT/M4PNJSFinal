function signInPage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let signInPage = document.querySelector('div.signInPage');
	signInPage.innerHTML += `<div class="signInHeader">
        <h1>You would like to signIn us?</h1>
        <div>
            <form action="/" method="post" id="signInData">
                <input type="text" name="userName" id="userName" placeholder="Username..." required>
                <input type="text" name="passWord" id="passWord" placeholder="Password..." required>
                <input id="homeTrigger" type="submit" value="Sign In!">
            </form>
            <button
                type="button"
                id="homeTrigger"
                class="homePage"
                onclick="swapPrep(this)">
                Home
            </button>
        </div>
        `;

	// INSERT NEW NAV ELEMENTS
	const navRmv = document.getElementById('navBar');
	if (navRmv) {
		navRmv.remove();
	}
	const navRep = document.createElement('nav');
	navRep.setAttribute('id', 'navBar');
	navRep.setAttribute('class', 'signInPage');
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
signInPage();
