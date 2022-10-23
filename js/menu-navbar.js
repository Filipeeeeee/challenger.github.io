class MenuNavbar{
    constructor(Menu, NavList, Navlinks){
        this.Menu = document.querySelector(Menu);
        this.NavList = document.querySelector(NavList);
        this.Navlinks = document.querySelectorAll(Navlinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
 
    animateLinks() {
        this.Navlinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation =  `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    handleClick (){
        this.NavList.classList.toggle(this.activeClass);
        this.animateLinks();    
    }
    
    addClickEvent() {
        this.Menu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.Menu) {
            this.addClickEvent();
        }
        return this;
    }
}
const menuNavbar = new MenuNavbar(
    ".menu",
    ".nav-list",
    ".nav-list li",
);
menuNavbar.init();