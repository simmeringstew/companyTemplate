const mobileNavigation = document.getElementById('mobile-nav');
const navigationOpen = document.getElementById('nav-open');
const navigationClose = document.getElementById('nav-close');
const servicesMenuButton = document.getElementById('services-menu-button');
const servicesMenu = document.getElementById('services-menu');

const toggleNav = () => {
  mobileNavigation.classList.toggle('left-[-1100px]');
  mobileNavigation.classList.toggle('left-0');
  servicesMenu.classList.add('hidden');
  servicesMenuButton.ariaExpanded = 'false';
};
navigationOpen.addEventListener('click', toggleNav);
navigationClose.addEventListener('click', toggleNav);

const closeServicesMenu = () => {
  servicesMenu.classList.add('hidden');
  servicesMenuButton.ariaExpanded = 'false';
};

const toggleServicesMenu = () => {
  servicesMenu.classList.toggle('hidden');
  if (servicesMenuButton.ariaExpanded === 'false') {
    servicesMenuButton.ariaExpanded = 'true';
  } else {
    servicesMenuButton.ariaExpanded = 'false';
  }
};
servicesMenuButton.addEventListener('click', toggleServicesMenu);

const closeMenus = () => {
  servicesMenu.classList.add('hidden');
  servicesMenuButton.ariaExpanded = 'false';
};
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenus();
  }
});