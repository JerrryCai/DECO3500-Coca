/** person page */
let countNum = 0;
function showNavigation() {
    let nav = document.getElementById("menuContents");
    countNum++;
    if (countNum % 2 == 1) {
        nav.style.display = "block";
    } else if (countNum % 2 == 0) {
        nav.style.display = "none";
    }
}


/** home page */

var skip = document.querySelector('#skip');

function skipJump(){
    window.location.href = "home.html";
}

/** music page */
function commentConfirm(){
    let comment = document.getElementById('comment');
    let span = document.getElementById('myComment');
    
    let content = document.createElement('span');
    content.innerHTML = comment.value;
    span.appendChild(content);

}
