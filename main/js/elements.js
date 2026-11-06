//Header
let siteHeader = document.getElementById("header");
console.log(siteHeader);
let headerContent = `
    <img id="logo" src="assets/images/logo.png" alt="travel chicken">
    <img id="burger" src="assets/images/Mobile/hamburger 1.png" alt="button">
    <div id="menuegroup">
        <a class="menue" href="index.html">Home</a>
        <a class="menue" href="about.html">About</a>
        <a class="menue" href="tours.html">Tours</a>
        <a class="menue" href="contact.html">Contact</a>
        <a class="menue" href="shop.html">Shop</a>
    
    </div>
    <nav>
        <a  href="index.html">Home</a>
        <a  href="about.html">About</a>
        <a  href="tours.html">Tours</a>
        <a  href="contact.html">Contact</a>
        <a  href="shop.html">Shop</a>
        <button id="hero_btn">Book a tour</button>
    </nav>
`;
siteHeader.innerHTML = headerContent;


//Burger

let burgerIcon = document.getElementById("burger")
console.log(burgerIcon)

let burgerMenu = document.querySelector("#menuegroup");
console.log(burgerMenu)
burgerIcon.addEventListener("click", function () {
    if (burgerMenu.classList.contains("fadeIn")) {
        burgerMenu.classList.remove("fadeIn");
        setTimeout(function () {
            burgerMenu.style.display = "none"
        }, 150);
        burgerIcon.src = "assets/images/Mobile/hamburger 1.png";
    }
    else {
        burgerMenu.style.display = "flex";
        setTimeout(function () {
            burgerMenu.classList.add("fadeIn")
        }, 150)
        //change to X icon
        burgerIcon.src = "assets/images/Mobile/x-mark.svg";

    }
});

//Footer
let siteFooter = document.getElementById("footer");
console.log(siteFooter);
let footerContent = `
    <div class="footer-inner">
        <div>
            <p class="footer-brand">Travelling Chicken</p>
            <p>Ontario adventure tours from Toronto</p>
            <div class="socialmedia">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/TravellingChickenTrips" target="_blank" rel="noopener" aria-label="Facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCeQIC7HgB61jr8ey7ILnPgg" target="_blank" rel="noopener" aria-label="YouTube">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/travellingchickentrips" target="_blank" rel="noopener" aria-label="Instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tripadvisor.ca/Attraction_Review-g155019-d11918297-Reviews-Travelling_Chicken-Toronto_Ontario.html" target="_blank" rel="noopener" aria-label="TripAdvisor">
                            <img class="social-img" src="https://cdn.simpleicons.org/tripadvisor/ffffff" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <p id="footer-note">Concept redesign by Xin-Yu (Sandy) Tsai for Seneca Interactive Media Design coursework. Not affiliated with or endorsed by Travelling Chicken.</p>
        </div>
        <div>
            <p class="footer-label">Contact</p>
            <p>+1 647 625 9033<br>info@travellingchicken.ca</p>
        </div>
        <div>
            <p class="footer-label">Licensed</p>
            <p>Powered by Centre Holidays<br>TICO 50018114</p>
        </div>
    </div>
    

`;
siteFooter.innerHTML = footerContent;