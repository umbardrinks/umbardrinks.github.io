export default function() {
    var opened = false;
    const button = document.getElementById('BurgerMenuButton');
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo');
    const items = nav.getElementsByClassName('nav__item');
    const items_content = document.getElementsByClassName('-nav_item');

    console.log(items_content);

    // Add events
    button.addEventListener('click', handleBurgerMenuClick);
    for(var x = 0; x<items.length; x++) items[x].addEventListener('click', handleItemClick);
    for(var x = 0; x<items_content.length; x++) items_content[x].addEventListener('click', handleItemClick);
    

    function toogleNav() {
        if (!opened) {
            nav.className += " nav--show";
            logo.className += " logo--inverse";

            let newButtonClass = button.className.replace('burger-menu--open', '') + ' burger-menu--close';
            button.className = newButtonClass;

            opened = true;
        } else {
            nav.className = nav.className.replace("nav--show", "");
            logo.className = logo.className.replace("logo--inverse", "");

            let newButtonClass = button.className.replace('burger-menu--close', '') + ' burger-menu--open';
            button.className = newButtonClass;

            opened = false;
        }
    }

    /**
     * Handles menu items click
     */
    function handleItemClick(e) {
        e.preventDefault();
        let anchor = this.attributes.href.nodeValue.substr(1);
        let section = document.querySelector('#section_' + anchor);
        // alert(section.offsetTop)
        let rect = section.getBoundingClientRect();
        let win = section.ownerDocument.defaultView;
        let top = rect.top + win.pageYOffset;
        
        window.scrollTo(0, top - 20);

        // Closes the nav menu (if the click came from the nav component)
        if(/nav__item/.test(this.className)) {
            toogleNav();
        }
        

        return false;
    }


    /**
     * Handles burger menu click
     */
    function handleBurgerMenuClick(e) {
        toogleNav();
    }
}