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
            <form action="/user" method="post" id="registerData">
                <label for="username">Username:</label>
                <input type="text" name="username" id="username" placeholder="Who are you..." required>
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="Why are you..." required>
                <label for="confirmPassword">Confirm Password:
                </label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="You sure?" required>
                <br><span id="errMsg" class="error" style="display: none">Passwords do not match</span><br>
                <input id="registerSubmit" type="submit" value="Create Account" class="homeTrigger" disabled>
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

	document
		.getElementById('registerData')
		.addEventListener('input', function () {
			let password = document.getElementById('password').value;
			let confirmPassword =
				document.getElementById('confirmPassword').value;
			const submitBtn = document.getElementById('registerSubmit');
			const errMsg = document.getElementById('errMsg');

			if (password === confirmPassword) {
				submitBtn.disabled = false;
				errMsg.style.display = 'none';
			} else {
				submitBtn.disabled = true;
				errMsg.style.display = 'inline-block';
			}
		});

	document
		.getElementById('registerData')
		.addEventListener('submit', async function (event) {
			event.preventDefault();
			let formData = {
				username: document.getElementById('username').value,
				password: document.getElementById('password').value,
			};
			const response = await fetch('/user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				swapPrep(this);
			}
			const result = await response.json();
			console.log(result);
		});
}
registerPage();
