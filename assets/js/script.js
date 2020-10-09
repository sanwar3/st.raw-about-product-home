// highlight image name start

function observeElements(elementsQuery) {
  function callbackFunc(entries, observer) {
    entries.forEach((entry) => {
      // Find the link element based on the href value
      const $link = document.querySelector(`a[href="#${entry.target.id}"]`);

      if (entry.isIntersecting) {
        $link.classList.add('active');
      } else {
        $link.classList.remove('active');
      }
    });
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  };

  const observer = new IntersectionObserver(callbackFunc, options);

  const $areas = document.querySelectorAll(elementsQuery);

  $areas.forEach((element) => {
    observer.observe(element);
  });
}

observeElements('.product-featured');


