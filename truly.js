function submitButton() {
    var input = $('#username')[0];
    var username = input.value;
    alert(`Welcome ${username} to Truly Hers.`);
    input.value = "";
}

function pleadgeSubmit() {
    alert("You clicked on Pledge a course.");
    // Write logic related to this functionality here.
}

$(document).ready(function() {
    var readMoreSection = $('#read-more-section')[0];
    var htmlString = '';
    for(var i=0; i<10; i++) {
        htmlString = htmlString + '<div class="col-xs-2 column col-xs-offset-1"><div class="card"><img src="assets/Artboard 39_1.png" /><h4>Long Title</h4><p>Lorem Ipsum Dolor si amet.</p></div></div>';
    }
    readMoreSection.innerHTML = htmlString;
})
