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

function show2004() {
    $('#time_buttons').html('');
    html = "<div class=\"btn-group\" role=\"group\" aria-label=\"...\">";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"art2004\">Arts</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"clothing2004\">Clothing</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"electronics2004\">Electronics</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"health2004\">Health</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"home2004\">Home</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"outdoors2004\">Outdoors</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"phones2004\">Phones</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"tools2004\">Tools</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"toys2004\">Toys</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"time_back\">Back</button></div>";
    $('#time_buttons').html(html);
}

function showTimeButtons() {
    $('#time_buttons').html('');
    html= "<div class=\"btn-group\" role=\"group\" aria-label=\"...\">";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"2004\">2004</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"2005\">2005</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"2006\">2006</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"2007\">2007</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"2008\">2008</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"2009\">2009</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"2010\">2010</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"2011\">2011</button>";
    html+= "<button type=\"button\" class=\"btn btn-default\" id=\"2012\">2012</button></div>";
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
    $('#time_buttons').html('hello');
    $('#2005').click(show2005);
    $('#2006').click(show2006);
    $('#2007').click(show2007);
    $('#2008').click(show2008);
    $('#2009').click(show2009);
    $('#2010').click(show2010);
    $('#2011').click(show2011);
    $('#2012').click(show2012);
    $('#time_back').click(showTimeButtons);
});
