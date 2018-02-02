window.onload = function() {

    // Retrieve all the modal trigger buttons
    var modalTriggers = document.getElementsByClassName("modal-button");

    // Retrieve the container section under main
    var mainSection = document.getElementsByClassName("container-section")[0];

    

    /*******************/
    /** Modal display **/
    /*******************/

    for (var i = 0; i < modalTriggers.length; i++) {
        modalTriggers[i].addEventListener("click", bindClick(i));
     }

     function bindClick(i) {
        return function(){
            showModal(i + 1);
        };
     }

    function showModal(e) {

        // Index attached to the passed button element of the function
        var idx = e;

        // Variables for referencing the content of each post
        var modalId = idx + "modal";
        var buttonId = idx + "modal-button";

        // Get the current modal
        var modal = document.getElementById(modalId);

        // Get the current trigger button for the modal
        var buttonModal = document.getElementById(buttonId);
        
        // Opens the modal
        modal.style.display = "block";
            
        // Blurs the background
        mainSection.className += " open-modal";

        // Get the current <span> element (x)
        var spanModal = document.getElementsByClassName("close-modal")[idx - 1];

        // On button click <span> (x)
        spanModal.onclick = function() {
            // Closes the modal
            modal.style.display = "none";
            // Unblurs the background
            mainSection.className = "container-section";
        }

        // On button click anywhere outside of the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                // Closes the modal
                modal.style.display = "none";
                // Unblurs the background
                mainSection.className = "container-section";
            }
        }


        /*********************/
        /** Modal slideshow **/
        /*********************/

        //  For referencing the content of each post including the modal
        var slideshowClass = idx + "slideshow-content";

        try {
            // Get the images for slideshows
            var imagesSlideshow = document.getElementsByClassName(slideshowClass)[0].children;

             // Set the image slideshow index to 0
            var i = 0;
            
            // Loop through images and display the first image and hide the rest
            for (i; i < imagesSlideshow.length; i++) {
                if (i === 0) {
                    imagesSlideshow[i].style.display = "block";
                } else {
                    imagesSlideshow[i].style.display = "none";
                }
            }

            // Set the image slideshow index to 0 again after looping
            i = 0;

            // Get the next button for the slideshow
            var next = document.getElementsByClassName("next")[idx - 1];

            // Get the prev button for the slideshow
            var prev = document.getElementsByClassName("prev")[idx - 1];

            // On button next click, go to the next slideshow
            next.onclick = function () {
                // Do not increase more than the ending index
                if (i < imagesSlideshow.length - 1) {
                    // Hide the current image
                    imagesSlideshow[i].style.display = "none";

                    // Increase the index to show the next image
                    i = i + 1;
                    imagesSlideshow[i].style.display = "block";
                }
            }

            // On button prev click, go to the previous slideshow
            prev.onclick = function () {
                // Do not decrease less than the starting index
                if (i > 0) {
                    // Hide the current image
                    imagesSlideshow[i].style.display = "none";

                    // Decrease the index to show the previous image
                    i = i - 1;
                    imagesSlideshow[i].style.display = "block";
                }
            }
        } catch (e) {
            console.log(e instanceof TypeError); // true
        }
    };
};