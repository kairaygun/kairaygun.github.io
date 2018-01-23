window.onload = function() {

    // Retrieve all the modal trigger buttons
    var elements = document.getElementsByClassName("modal-button");

    // Retrieve all the sections under main
    var section = document.getElementsByClassName("container-section");
    var original_section = section[0].className;

    // Loop through all the modal trigger buttons
    for (var i = 0; i < elements.length; i++) {
        // Add a click event listener to each button
        elements[i].addEventListener('click', showModal, false);
        // Attach an index parameter to each button
        elements[i].myParam = i + 1;
    }

    function showModal(e) {

        /** Modal display **/

        // Index attached to the passed button element of the function
        var idx = e.target.myParam;

        // Variables for referencing the content of each post
        var modal_id = idx + "modal";
        var button_id = idx + "modal-button";
        var slideshow_class = idx + "slideshow-content";

        // Get the current modal
        var modal = document.getElementById(modal_id);

        // Get the current trigger button for the modal
        var button_modal = document.getElementById(button_id);

        // Get the current <span> element (x)
        var span_modal = document.getElementsByClassName("close-modal")[idx - 1];

        // On button click ''>>' 
        button_modal.onclick = function() {
            console.log("clicking clicking");
            // Opens the modal
            modal.style.display = "block";
            // Blurs the background
            section[0].className += " open-modal";
        }

        // On button click <span> (x)
        span_modal.onclick = function() {
            // Closes the modal
            modal.style.display = "none";
            // Unblurs the background
            section[0].className = original_section;
        }

        // On button click anywhere outside of the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                // Closes the modal
                modal.style.display = "none";
                // Unblurs the background
                section[0].className = original_section;
            }
        }

        /** Modal slideshow **/

        try {
            // Get the images for slideshows
            var images_slideshow_all = document.getElementsByClassName(slideshow_class)[0].children;

             // Set the image slideshow index to 0
            var idx_slideshow = 0;
            
            // Loop through images and display the first image and hide the rest
            for (idx_slideshow; idx_slideshow < images_slideshow_all.length; idx_slideshow++) {
                if (idx_slideshow === 0) {
                    images_slideshow_all[idx_slideshow].style.display = "block";
                } else {
                    images_slideshow_all[idx_slideshow].style.display = "none";
                }
            }

            // Set the image slideshow index to 0 again after looping
            idx_slideshow = 0;

            // Get the next button for the slideshow
            var next = document.getElementsByClassName("next")[idx - 1];

            // Get the prev button for the slideshow
            var prev = document.getElementsByClassName("prev")[idx - 1];

            // On button next click, go to the next slideshow
            next.onclick = function () {
                // Do not increase more than the ending index
                if (idx_slideshow < images_slideshow_all.length - 1) {
                    // Hide the current image
                    images_slideshow_all[idx_slideshow].style.display = "none";

                    // Increase the index to show the next image
                    idx_slideshow = idx_slideshow + 1;
                    images_slideshow_all[idx_slideshow].style.display = "block";
                }
            }

            // On button prev click, go to the previous slideshow
            prev.onclick = function () {
                // Do not decrease less than the starting index
                if (idx_slideshow > 0) {
                    // Hide the current image
                    images_slideshow_all[idx_slideshow].style.display = "none";

                    // Decrease the index to show the previous image
                    idx_slideshow = idx_slideshow - 1;
                    images_slideshow_all[idx_slideshow].style.display = "block";
                }
            }
        } catch (e) {
            console.log(e instanceof TypeError); // true
        }

    };





};