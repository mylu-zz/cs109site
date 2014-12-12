function showCatArt() {
    html = "<img src=\"images/scoredists/Arts_scoredist.jpg\" alt=\"Arts Score Dist\">";
    $('#cat_dist').html(html);
}
function showCatClothing() {
    html = "<img src=\"images/scoredists/Clothing_&_Accessories_scoredist.jpg\" alt=\"Clothing Score Dist\">";
    $('#cat_dist').html(html);
}
         

/*
 * Executed when page loads
 */
$(document).ready(function () {
    // assigns functions that are executed when a button is clicked
    $('#cat_art').click(showCatArt);
    $('#cat_clothing').click(showCatClothing);
    $('#cat_electronics').click(showCatElectronics);
});
