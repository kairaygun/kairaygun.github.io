const container = document.querySelector('.container-section');
container.addEventListener('click', (event) => {
    if (event.toElement.nodeName === 'IMG' && event.toElement.className === 'image-portfolio') {
        openModal(event.target.id);
    }
}, true);


function openModal(index) {
    let id = index.split('-')[0];
    let modal = document.getElementById(`${id}-modal`);
    console.log(modal);
    container.className += " open-modal";
    modal.querySelector(".modal-effect").className += " modal-effect-show";
    modal.style.display = "block";

    document.getElementsByClassName("close-modal")[id - 1].addEventListener('click', () => {
        modal.style.display = "none";
        container.className = "container-section";
        modal.querySelector(".modal-effect").className = "modal-content modal-effect";
    });

    document.addEventListener('click', () => {
        if (event.target == modal) {
            modal.style.display = "none";
            container.className = "container-section";
            modal.querySelector(".modal-effect").className = "modal-content modal-effect";
        }
    });

}

    onSlideShow();

function onSlideShow(id) {
    let slideshowClass = "slideshow-content";
    try {
        let imagesSlideshow = document.getElementsByClassName(slideshowClass)[0].children;
        let i = 0;

        for (i; i < imagesSlideshow.length; i++) {
            if (i === 0) {
                imagesSlideshow[i].style.display = "block";
            } else {
                imagesSlideshow[i].style.display = "none";
            }
        }
        i = 0;
        let next = document.getElementsByClassName("next")[0];
        let prev = document.getElementsByClassName("prev")[0];

        next.onclick = function() {
            if (i < imagesSlideshow.length - 1) {
                imagesSlideshow[i].style.display = "none";
                i = i + 1;
                imagesSlideshow[i].style.display = "block";
            }
        }

        prev.onclick = function() {
            if (i > 0) {
                imagesSlideshow[i].style.display = "none";
                i = i - 1;
                imagesSlideshow[i].style.display = "block";
            }
        }
    } catch (e) {
        console.log(e instanceof TypeError);
    }
}