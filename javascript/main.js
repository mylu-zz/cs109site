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
function showMAArt() {
    $('#time_corr').html('');
    html = "<div id=\"myCarousel\" class=\"carousel slide\"><div class=\"carousel-inner\" width=\"100%\" height=\"100%\">";
    html += "<div class=\"item\"><img src=\"images/ma_analysis/Arts/Arts_ma_analysis_B0000CBK1L.jpg\"/>";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Arts/Arts_ma_analysis_B000EOX28E.jpg\"/>";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Arts/Arts_ma_analysis_B000F7DPEQ.jpg\" />";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Arts/Arts_ma_analysis_B000JQM1DE.jpg\" />";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Arts/Arts_ma_analysis_B000NK5VY2.jpg\" />";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Arts/Arts_ma_analysis_B0002KHBS2.jpg\" />";
    html += "</div></div><a class=\"carousel-control left\" href=\"#myCarousel\" data-slide=\"prev\">‹</a>"; 
    html += "<a class=\"carousel-control right\" href=\"#myCarousel\" data-slide=\"next\">›</a></div>";
    $('#time_corr').html(html);
}

$(document).ready(function () {
    $('#cat_art').click(showCatArt);
    $('#cat_clothing').click(showCatClothing);
    $('#cat_electronics').click(showCatElectronics);
    $('#ma_art').click(showMAArt);
    $('ma_clothing').click(showMAClothing);
});
