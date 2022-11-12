const iSObservers = document.querySelector('.listItem');
const options = {
  rootMargin: '-30% 0px',
};
 
const fadeIn = (target) => {
  target.classList.add('active');
};
 
const observeUse = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeIn(entry.target);
    }
  });
};
 
const observer = new IntersectionObserver(observeUse, options);
iSObservers.forEach(iSObserver => {
  observer.observe(iSObserver);
});