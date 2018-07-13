export default function Pictures() {
    const pictures = document.getElementById('Pictures');
    const images = pictures.getElementsByClassName('pictures__image');
    const buttons = pictures.getElementsByClassName('pictures__button');
    let current_image = 0;
    let total_images = images.length;

    // Add events
    for (var x = 0; x < buttons.length; x++) buttons[x].addEventListener('click', handleButtonClick);

    /**
     * Handle nav button click
     */
    function handleButtonClick(e) {
        if (/--next/.test(this.className)) {
            nextImage();
        } else if (/--prev/.test(this.className)) {
            prevImage();
        }
    }

    /**
     * Jumps to the next image
     */
    function nextImage() {
        let next_image = current_image+1;
        if (next_image == total_images) next_image = 0;
        images[current_image].className = images[current_image].className.replace('pictures__image--show', '').trim();
        images[next_image].className += ' pictures__image--show';
        current_image = next_image;
    }

    /**
     * Jumps to the previous image
     */
    function prevImage() {
        let prev_image = current_image-1;
        if (prev_image < 0) prev_image = total_images - 1;
        images[current_image].className = images[current_image].className.replace('pictures__image--show', '').trim();
        images[prev_image].className += ' pictures__image--show';
        current_image = prev_image;
    }
}