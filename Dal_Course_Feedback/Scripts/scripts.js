let subject = document.getElementById("subject").value;
console.log("subject: " + subject);

function showCreateComment() {
    document.getElementById("create-comment").style.display = "block"; //Display the form to make a new comment only when the "create comment button is clicked"
}

function showSearchReview() {
    document.getElementById("searchReview").style.display = "block"; //Display the form to search reveiew only when the " button is clicked"
}

function showSearchProfReview() {
    document.getElementById("searchProfReview").style.display = "block"; //Display the form to search reveiew only when the " button is clicked"
}

function showCommentProf(){
    document.getElementById("create-prof-comment").style.display = "block"; //Display the form to search reveiew only when the " button is clicked"
}