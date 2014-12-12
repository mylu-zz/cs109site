
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
function showTArt(event) {
    $('#time_dist').html('');
    html = "<img src=\"images/score_dist_by_year/Arts/Arts_by_year_";
    html += event.data.param1;
    html +=".jpg\" alt=\"Arts 2004 Score Dist\">";
    $('#time_dist').html(html);
}

function show2005() {
    $('#time_buttons').html('');
    html = "<div class=\"btn-group\" role=\"group\" aria-label=\"...\">";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"art2005\">Ar ts</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"clothing2005\">Clothing</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"electronics2005\">Electronics</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"health2005\">Health</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"home2005\">Home</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"outdoors2005\">Outdoors</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"phones2005\">Phones</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"tools2005\">Tools</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"toys2005\">Toys</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"time_back\">Back</button></div>";
    $('#time_buttons').html(html);
}

/*
 * Executed when page loads
 */
$(document).ready(function () {
    // assigns functions that are executed when a button is clicked
    $('#cat_art').click(showCatArt);
    $('#cat_clothing').click(showCatClothing);
    $('#cat_electronics').click(showCatElectronics);
    $('#t2004').click(show2004);
    $('#art2004').click(showArt2004);
    $('#t2005').click(show2005);
    $('#t2006').click(show2006);
    $('#t2007').click(show2007);
    $('#t2008').click(show2008);
    $('#t2009').click(show2009);
    $('#t2010').click(show2010);
    $('#t2011').click(show2011);
    $('#t2012').click(show2012);
});
