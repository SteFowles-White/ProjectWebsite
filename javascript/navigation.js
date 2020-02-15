/************************************************
* **********************************************
*              Navigation JavaScript
* **********************************************
* *********************************************/

// add or remove a class c-nav__show depending on weather it it actice or not
$('.navbar-toggler').click(function() {
    console.log('test');
    if($('.c-nav').hasClass('c_nav__show') && $('#navbarNavAltMarkup').hasClass('show'))
        {
            $('.c-nav').removeClass('c_nav__show');
        }
    else {
        $('.c-nav').addClass('c_nav__show')
    }

})