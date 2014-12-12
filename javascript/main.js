
function showCatArt() {
    $('#cat_dist').html('');
    html = "<img src=\"images/scoredists/Arts_scoredist.jpg\" alt=\"Arts Score Dist\">";
    $('#cat_dist').html(html);
}
function showCatClothing() {
    $('#cat_dist').html('');
    html = "<img src=\"images/scoredists/Clothing_&_Accessories_scoredist.jpg\" alt=\"Clothing Score Dist\">";
    $('#cat_dist').html(html);
}
function showCatElectronics() {
    $('#cat_dist').html('');
    html = "<img src=\"images/scoredists/Electronics_scoredist.jpg\" alt=\"Electronics Score Dist\">";
    $('#cat_dist').html(html);
}

function showSlideShow() {
    $('#time_corr').html('');
    html = "<div id=\"myCarousel\" class=\"carousel slide\"><div class=\"carousel-inner\" width=\"100%\" height=\"100%\">";
    html += "<div class=\"item\"><img src=\"http://www.trexglobal.com/property-management/wp-content/uploads/2010/02/real-estate-investment-property-canada.jpg\"/>";
    html += "</div><div class=\"item\"><img src=\"http://news.worldwidepropertydevelopments.com/wp-content/uploads/2008/09/feature.jpg\"/>";
    html += "</div><div class=\"item\"><img src=\"http://images.realestate.com/re/homepage/theme4/2.jpg\" />";
    html += "</div></div><a class=\"carousel-control left\" href=\"#myCarousel\" data-slide=\"prev\">‹</a>"; 
    html += "<a class=\"carousel-control right\" href=\"#myCarousel\" data-slide=\"next\">›</a></div>";
    $('#time_corr').html('test');
/*
 * Executed when page loads
 */
$(document).ready(function () {
    // assigns functions that are executed when a button is clicked
    $('#cat_art').click(showCatArt);
    $('#cat_clothing').click(showCatClothing);
    $('#cat_electronics').click(showCatElectronics);
    $('#ma_art').click(showSlideShow);
});
