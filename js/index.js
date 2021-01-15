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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll("nav a");
for(let i = 0; i < navLinks.length; i++){
  navLinks[i].textContent = siteContent.nav[`nav-item-${i}`];
}

const topImg = document.querySelector('#cta-img');
topImg.setAttribute('src', "img/header-img.png");

const mainTitle = document.querySelector('.cta-text h1');
mainTitle.textContent = 'DOM Is Awesome';

const mainButton = document.querySelector('button');
mainButton.textContent = siteContent.cta.button;

const middleTitle = document.querySelectorAll('.text-content h4');
middleTitle[0].textContent = siteContent['main-content']['features-h4'];
middleTitle[1].textContent = siteContent['main-content']['about-h4'];
middleTitle[2].textContent = siteContent['main-content']['services-h4'];
middleTitle[3].textContent = siteContent['main-content']['product-h4'];
middleTitle[4].textContent = siteContent['main-content']['vision-h4'];

const mainText = document.querySelectorAll('.text-content p');
mainText[0].textContent = siteContent['main-content']['features-content'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainText[4].textContent = siteContent['main-content']['vision-content'];

const middleImage = document.querySelector('.middle-img');
middleImage.setAttribute('src', "img/mid-page-accent.jpg");

const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];


// const contactText = document.querySelectorAll('.contact p');
// contactText[0].textContent = siteContent['contact'];
// contactText[1].textContent = siteContent['contact'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact['address'];
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

// const navColor = document.querySelector('header nav a').style.color = 'green';

// const navElement = document.querySelector('nav');
const moreNav = document.createElement('a');
moreNav.textContent = 'More';
moreNav.style.fontSize = "16px";
moreNav.style.color = "red";
moreNav.setAttribute('href', '#');
document.querySelector('nav').appendChild(moreNav);

const home = document.createElement('a');
home.textContent = 'Home';
home.style.fontSize = "16px";
home.style.color = "red";
home.setAttribute('href', '#');
document.querySelector('nav').prepend(home);

// const contactLink = document.createElement('a');
// contactLink.textContent = 'Contact';
// contactLink.setAttribute('href', '#');
// document.querySelector('nav').appendChild(contactLink);

// const moreNav = document.appendChild('nav');
// moreNav.setAttribute = "More";



