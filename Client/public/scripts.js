// VARIABLES
let navBar = document.getElementById('navBar');
let navClass = document.getElementsByClassName('homePage');
// let pageId = document.getElementById('homePage');
/* 
console.log(navClass);
if(clickEvent == true && pageId == homePage) {

}else if(navClass == askPage){

}else if(navClass == aboutPage){

}else(navClass == answerPage){

}
 */
// HEADER

// FOOTER

// PAGES
// let clickEvent = document.addEventListener('onclick', pageSwap);
let button = document.getElementsByClassName('button');
//let e = addEventListener('onclick', pageSwap());

function pageSwap() {
	let mainId = document.getElementById('homePage');
	mainId.setAttribute('id', 'askPage');
	console.log(mainId);

	/*      {
        document.getElementById("homePage")
        homePage.id = "askPage"
    }else if(clickEvent.target.id === aboutTrigger) {
        
    }else if(clickEvent.target.id === answerTrigger){

    }else if(clickEvent.target.id === signInTrigger){

    }else if(clickEvent.target.id === signOutTrigger){

    }else if(clickEvent.target.id === registerTrigger){

    }else if(clickEvent.target.id === contactTrigger){

    }else(clickEvent.target.id === homeTrigger){

    }
 */
}
/*
// I need to have it so if the page you are on is classified as the home page or something, it will insert the script from the associated js file to dynamically change the web-page to that layout
// maybe something like...

// if(page){
    <insert HTML script association>
}else{
    if(differentPage){

    }
}

so i need an eventlistener, that onclick of either (ASK || ABOUT || ANSWER || SIGN IN || USERNAME) in the navbar and/or (ASK...) in the body, that changes the id of the section and nav according to the page its on. So for example, I click ask and it changes my section id to 'askPage' which due to my if statement in this script, will dynamically replace the contents of askPage.js into the html by inserting a script tag underneath this .js files tag that links to the askPage.js file

the nav bar needs to change its id only if the document is on: askPage, aboutPage, and answerPage.
    If on ask, display (HOME || ABOUT || ANSWER)
    If on about, display (ASK || HOME || ANSWER)
    If on answer, display (ASK || ABOUT || HOME)
All other pages do not need to use any other nav bar besides the homePage one

overall the code is gonna have to be ordered approximately like:

index.html loads as normal, loads the home page
scripts.js is loaded, and has an eventlistener waiting for when the user clicks on a link
when a link is clicked, the page that link goes to will be inserted via scripts.js and the page id's will be changed as well. The id swaps will need to be inserted either via scripts.js, or hidden
    within the index.html
*/
