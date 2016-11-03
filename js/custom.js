//exo1//
$('#clique-moi').click(function () {
    alert('cest cool');
});

//exo2//

$("#image").dblclick('click',function () {
    $(this).width(500).height(280);
});
$("#image").click('click',function () {
    $(this).width('').height('');
});

//exo3//
$('#afficher').click(function () {
    $("#texte").show();
});
$('#cacher').click(function () {
    $("#texte").hide();
});
//exo4//

$('#red').click(function () {
    $('#texte2').css('color', 'red');
});
$('#blue').click(function () {
    $('#texte2').css('color', 'blue');
});
$('#green').click(function () {
    $('#texte2').css('color', 'green');
});
//exxo5//


$("#nom").focusin(function () {
    $("#nom").css('border', '1px solid green');
});
$("#prenom").focusin(function () {
    $("#prenom").css('border', '1px solid green');
});
$("#nom").focusout(function () {
    $("#nom").css('border', '1px solid red');
});
$("#prenom").focusout(function () {
    $("#prenom").css('border', '1px solid red');
});

//exo6//


$("#red1").hover(function () {
    $("#texte3").css('color', 'red');
});
$("#blue1").hover(function () {
    $("#texte3").css('color', 'blue');
});
$("#green1").hover(function () {
    $("#texte3").css('color', 'green');
});
$("#green1,#blue1,#red1").mouseout(function () {
    $("#texte3").css('color', 'black');
});
