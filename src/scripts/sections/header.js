class StickyHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.header = document.getElementById('shopify-section-header');
    this.headerBounds = {};
    this.currentScrollTop = 0;

    this.onScrollHandler = this.onScroll.bind(this);

    window.addEventListener('scroll', this.onScrollHandler, false);

    this.createObserver();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  createObserver() {
    let observer = new IntersectionObserver((entries, observer) => {
      this.headerBounds = entries[0].intersectionRect;
      observer.disconnect();
    });

    observer.observe(this.header);
  }

  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
      requestAnimationFrame(this.hide.bind(this));
    } else if (scrollTop < this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
      requestAnimationFrame(this.reveal.bind(this));
    } else if (scrollTop <= this.headerBounds.top) {
      requestAnimationFrame(this.reset.bind(this));
    }

    this.currentScrollTop = scrollTop;
  }

  hide() {
    this.header.classList.add('shopify-section-header-hidden', 'shopify-section-header-sticky');
  }

  reveal() {
    this.header.classList.add('shopify-section-header-sticky', 'animate');
    this.header.classList.remove('shopify-section-header-hidden');
  }

  reset() {
    this.header.classList.remove('shopify-section-header-hidden', 'shopify-section-header-sticky', 'animate');
  }
}

customElements.define('sticky-header', StickyHeader);
