$( document ).ready(function() {

    $('#totalProjects').trigger('click');

	var quote = jQuery('#quote');
	var author = jQuery('#author');
	var URL = "https://api.myjson.com/bins/1b3wep";
	jQuery.get(URL, function(response) {
		 var rand = Math.floor((Math.random() * 5) + 1);
		 var rand = rand - 1;
		 var randomQuote = response.data[ rand ].quote;
		 var randomeAuthor = response.data[ rand ].author;
		 quote.text(randomQuote);
		 author.text(" - " + randomeAuthor);
	});

	var contact = $("#myNavbar > ul.nav.navbar-nav.navbar-right > li > a");
    contact.click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });

    /*
	** on click navigation on blog page
     */

    // if this is clicked, then run this

    function hideOrShowBlog (showBlog, hideBlogOne, hideBlogTwo) {
        console.log("hide or show blog");
    	showBlog.css("display", "block");
    	hideBlogOne.css("display", "none");
    	hideBlogTwo.css("display", "none");
    }

    var main = $('#blogPosts');
    var tutorial = $('#tutorialPosts');
    var research = $('#researchPosts');

    var m_butt = $('#mainBlogButt');
    var t_butt = $('#tutorialBlogButt');
    var r_butt = $('#researchBlogButt');


    m_butt.click(function() {
        hideOrShowBlog(main,tutorial,research);
	  });

    t_butt.click(function (){
        hideOrShowBlog(tutorial,main,research);
    });

    r_butt.click(function (){
        hideOrShowBlog(research, tutorial, main);
    });


});
