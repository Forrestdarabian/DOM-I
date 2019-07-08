const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const maincontent = document.querySelectorAll ('p');
maincontent[0].textContent = siteContent['main-content']['features-content'];
maincontent[1].textContent = siteContent['main-content']['about-content'];
maincontent[2].textContent = siteContent['main-content']['services-content'];
maincontent[3].textContent = siteContent['main-content']['product-content'];
maincontent[4].textContent = siteContent['main-content']['vision-content'];
maincontent[5].textContent = siteContent['contact']['contact-h4'];
maincontent[6].textContent = siteContent['contact']['address'];
maincontent[7].textContent = siteContent['contact']['phone'];
maincontent[8].textContent = siteContent['contact']['email'];


const h4sections = document.querySelectorAll ('h4');
h4sections[0].textContent = siteContent['main-content']['features-h4'];
h4sections[1].textContent = siteContent['main-content']['about-h4'];
h4sections[2].textContent = siteContent['main-content']['services-h4'];
h4sections[3].textContent = siteContent['main-content']['product-h4'];
h4sections[4].textContent = siteContent['main-content']['vision-h4'];


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let topText = document.querySelector('h1');
topText.textContent = siteContent["cta"]["h1"];

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"])


let midPage = document.getElementById("middle-img");
midPage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const navLinks = document.querySelectorAll ('nav a');
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

const nav = document.querySelector('nav');
const firstATag = document.createElement('a');
const secondATag = document.createElement('a');
const resourcesText = document.createTextNode('Help');
const extrasText = document.createTextNode('Learn More');

firstATag.appendChild(resourcesText);
nav.appendChild(firstATag);

secondATag.appendChild(extrasText);
nav.appendChild(secondATag);

const allNavLinks = document.querySelectorAll('nav a');
allNavLinks.forEach((link) => {
  link.style.color = 'gray';
})

let buttonText = document.querySelector('button');
buttonText.textContent = siteContent["cta"]["button"];


// let contacth4 = document.querySelector('contact-h4');
// contacth4.textContent = siteContent["contact"]["contact-h4"];

// let addy = document.querySelector('address');
// addy.textContent = siteContent["contact"]["address"];

// let phoney = document.querySelector('phone');
// phoney.textContent = siteContent["contact"]["phone"];
 
// let mail = document.querySelector('email');
// mail.textContent = siteContent["contact"]["email"];

const theBottom = document.querySelector("footer p");
theBottom.textContent = siteContent["footer"]["copyright"];

