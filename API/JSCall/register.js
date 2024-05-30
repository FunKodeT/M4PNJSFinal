function registerPage() {
	// DECLARE BODY VARIABLE FOR USE BY NAV
	const bodyVar = document.querySelector('body');

	// INSERT NEW PAGE ELEMENTS
	let registerPage = document.querySelector('div.registerPage');
	registerPage.innerHTML += `<div class="registerHeader">
        <h1>Would you like to register with us?</h1>
        <div>
            <p>
                Registering with us will allow for you to view any and all predictions you receive after account creation, as well as stores any future answers.
            </p>
            <form action="/" method="post" id="registerData">
                <input type="text" name="userName" id="userName" placeholder="Username..." required>
                <input type="text" name="passWord" id="passWord" placeholder="Password..." required>
                <input type="text" name="passWord" id="passWord" placeholder="Password..." required>
                <input id="registerTrigger" type="submit" value="Create Account">
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
	navRep.setAttribute('class', 'registerPage');
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
registerPage();
