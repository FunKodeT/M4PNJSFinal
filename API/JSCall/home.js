let homePage = document.querySelector('main.homePage');
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
