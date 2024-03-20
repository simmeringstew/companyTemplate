const mobileNavigation = document.getElementById('mobile-nav');
const navigationOpen = document.getElementById('nav-open');
const navigationClose = document.getElementById('nav-close');
const aboutMenuButton = document.getElementById('about-menu-button');
const aboutMenu = document.getElementById('about-menu');
const servicesMenuButton = document.getElementById('services-menu-button');
const servicesMenu = document.getElementById('services-menu');

const toggleNav = () => {
  mobileNavigation.classList.toggle('left-[-1100px]');
  mobileNavigation.classList.toggle('left-0');
  aboutMenu.classList.add('hidden');
  aboutMenuButton.ariaExpanded = 'false';
  servicesMenu.classList.add('hidden');
  servicesMenuButton.ariaExpanded = 'false';
};
navigationOpen.addEventListener('click', toggleNav);
navigationClose.addEventListener('click', toggleNav);

const toggleAboutMenu = () => {
  aboutMenu.classList.toggle('hidden');
  if (aboutMenuButton.ariaExpanded === 'false') {
    aboutMenuButton.ariaExpanded = 'true';
  } else {
    aboutMenuButton.ariaExpanded = 'false';
  }
  if (servicesMenuButton.ariaExpanded === 'true') {
    closeServicesMenu();
  }
};
const closeServicesMenu = () => {
  servicesMenu.classList.add('hidden');
  servicesMenuButton.ariaExpanded = 'false';
};
aboutMenuButton.addEventListener('click', toggleAboutMenu);
aboutMenuButton.addEventListener('mouseover', closeServicesMenu);

const toggleServicesMenu = () => {
  servicesMenu.classList.toggle('hidden');
  if (servicesMenuButton.ariaExpanded === 'false') {
    servicesMenuButton.ariaExpanded = 'true';
  } else {
    servicesMenuButton.ariaExpanded = 'false';
  }
  if (aboutMenuButton.ariaExpanded === 'true') {
    closeAboutMenu();
  }
};
const closeAboutMenu = () => {
  aboutMenu.classList.add('hidden');
  aboutMenuButton.ariaExpanded = 'false';
};
servicesMenuButton.addEventListener('click', toggleServicesMenu);
servicesMenuButton.addEventListener('mouseover', closeAboutMenu);

const closeMenus = () => {
  aboutMenu.classList.add('hidden');
  servicesMenu.classList.add('hidden');
  aboutMenuButton.ariaExpanded = 'false';
  servicesMenuButton.ariaExpanded = 'false';
};
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenus();
  }
});