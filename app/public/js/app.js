// Javascript for the dropdown results
var currentURL = window.location.origin;

$(document).ready(function() {

$("#submit2").click(function() {
    var name = $("#name").val().trim();
    console.log(name);
  
    var photo = $("#photo").val().trim();
    console.log(photo);

    var q1 = $("#q1").val().trim();
    var q2 = $("#q2").val().trim();
    var q3 = $("#q3").val().trim();
    var q4 = $("#q4").val().trim();
    var q5 = $("#q5").val().trim();
    var q6 = $("#q6").val().trim();
    var q7 = $("#q7").val().trim();
    var q8 = $("#q8").val().trim();
    var q9 = $("#q9").val().trim();
    var q10 = $("#q10").val().trim();
   
    var user = {
        name: name, 
        photo: photo,
        scores: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
    }
    console.log (user);

    function runFriendsData () {
    $.ajax({
        url: currentURL + "/api/friends/",
        method: "GET"
    })
    .done(function(friendsArray) {
        console.log(friendsArray);

        
    });
   
    };

runFriendsData();

    $("#match-name").text(name);
    $("#match-photo").attr("src", photo);
});

});



