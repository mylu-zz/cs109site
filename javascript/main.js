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
function showCatHealth() {
    $('#cat_dist').html('');
    html = "<img src=\"images/scoredists/Health_scoredist.jpg\" alt=\"Health Score Dist\">";
    $('#cat_dist').html(html);
}
function showCatHome() {
    $('#cat_dist').html('');
    html = "<img src=\"images/scoredists/Home_&_Kitchen_scoredist.jpg\" alt=\"Home Score Dist\">";
    $('#cat_dist').html(html);
}
function showCatOutdoors() {
    $('#cat_dist').html('');
    html = "<img src=\"images/scoredists/Sports_&_Outdoors_scoredist.jpg\" alt=\"Outdoors Score Dist\">";
    $('#cat_dist').html(html);
}
function showCatPhones() {
    $('#cat_dist').html('');
    html = "<img src=\"images/scoredists/Cell_Phones_&_Accessories_scoredist.jpg\" alt=\"Phones Score Dist\">";
    $('#cat_dist').html(html);
}
function showCatTools() {
    $('#cat_dist').html('');
    html = "<img src=\"images/scoredists/Tools_&_Home_Improvement_scoredist.jpg\" alt=\"Tools Score Dist\">";
    $('#cat_dist').html(html);
}
function showCatToys() {
    $('#cat_dist').html('');
    html = "<img src=\"images/scoredists/Toys_&_Games_scoredist.jpg\" alt=\"Toys Score Dist\">";
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
function showMAClothing() {
    $('#time_corr').html('');
    html = "<div id=\"myCarousel\" class=\"carousel slide\"><div class=\"carousel-inner\" width=\"100%\" height=\"100%\">";
    html += "<div class=\"item\"><img src=\"images/ma_analysis/Clothing_&_Accessories/Clothing_&_Accessories_ma_analysis_B000ID49Y2.jpg\"/>";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Clothing_&_Accessories/Clothing_&_Accessories_ma_analysis_B000ID49Y2.jpg\"/>";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Clothing_&_Accessories/Clothing_&_Accessories_ma_analysis_B000ID49Z6.jpg\" />";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Clothing_&_Accessories/Clothing_&_Accessories_ma_analysis_B000ND1YKE.jpg\" />";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Clothing_&_Accessories/Clothing_&_Accessories_ma_analysis_B00016QOZS.jpg\" />";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Clothing_&_Accessories/Clothing_&_Accessories_ma_analysis_B00016QPBQ.jpg\" />";
    html += "</div><div class=\"item\"><img src=\"images/ma_analysis/Clothing_&_Accessories/Clothing_&_Accessories_ma_analysis_B00062NPEK.jpg\"/>";
    html += "</div></div><a class=\"carousel-control left\" href=\"#myCarousel\" data-slide=\"prev\">‹</a>"; 
    html += "<a class=\"carousel-control right\" href=\"#myCarousel\" data-slide=\"next\">›</a></div>";
    $('#time_corr').html(html);
}

$(document).ready(function () {
    $('#cat_art').click(showCatArt);
    $('#cat_clothing').click(showCatClothing);
    $('#cat_electronics').click(showCatElectronics);
    $('#cat_health').click(showCatHealth);
    $('#cat_home').click(showCatHome);
    $('#cat_outdoors').click(showCatOutdoors);
    $('#cat_phones').click(showCatPhones);
    $('#cat_tools').click(showCatTools);
    $('#cat_toys').click(showCatToys);
    $('#ma_art').click(showMAArt);
    $('#ma_clothing').click(showMAClothing);
    $('#ma_electronics').click(showMAElectronics);
    $('#ma_health').click(showMAHealth);
    $('#ma_home').click(showMAHome);
    $('#ma_outdoors').click(showMAOutdoors);
    $('#ma_phones').click(showMAPhones);
    $('#ma_tools').click(showMATools);
    $('#ma_toys').click(showMAToys);
});
