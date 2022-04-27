import $ from 'jquery';
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const selectors = {
  slideshow: '[data-slideshow]',
  slideshowSlide: '[data-slideshow-slide]'
};

const classes = {
  swiperDuplicateSlide: '.swiper-slide-duplicate'
}

class SlideshowSection extends HTMLElement {
  constructor() {
    super();

    this.$container = $(this);
    this.$slideshow = $(selectors.slideshow, this.$container);

    this.swiperOptions = {
      loop: true,
      speed: 500,
      spaceBetween: Number.parseInt(this.$slideshow.data('space-between')) || 0,
      slidesPerView: Number.parseInt(this.$slideshow.data('slides-to-show')) || 1,
      slidesPerGroup: Number.parseInt(this.$slideshow.data('slides-to-scroll')) || 1,
      navigation: {
        nextEl: this.$slideshow.find('.swiper-arrow--right').get(0),
        prevEl: this.$slideshow.find('.swiper-arrow--left').get(0)
      }
    };

    if (this.$slideshow.data('autoplay')) {
      this.swiperOptions.autoplay = {
        delay: Number.parseInt(this.$slideshow.data('speed')) || 5000
      };
    }

    if (this.$slideshow.data('dots') && this.$slideshow.find('.swiper-pagination').length) {
      this.swiperOptions.pagination = {
        el: this.$slideshow.find('.swiper-pagination').get(0),
        type: 'progressbar',
        clickable: true
      };
    }

    if (this.$slideshow.data('animation') === 'fade') {
      this.swiperOptions.effect = 'fade';
      this.swiperOptions.fadeEffect = {
        crossFade: true
      };
    }

    if (this.$slideshow.data('transition-speed')) {
      this.swiperOptions.speed = this.$slideshow.data('transition-speed') || 1000;
    }

    // only initialize the slideshow if there is more than one slide 
    if (this.$slideshow.find(`${selectors.slideshowSlide}:not(${classes.swiperDuplicateSlide})`).length > 1) {
      // initialize swiper
      this.swiper = new Swiper(this.$slideshow.get(0), this.swiperOptions);
    }

    // Initialize Swiper
    this.swiper = new Swiper(this.$slideshow.get(0), this.swiperOptions);

    // Register theme editor events 
    $(document)
      .on('shopify:section:load	', this.onLoad.bind(this))
      .on('shopify:section:unload	', this.onUnload.bind(this))
      .on('shopify:section:select', this.onSectionSelect.bind(this))
      .on('shopify:section:deselect', this.onSectionDeselect.bind(this))
      .on('shopify:section:reorder', this.onSectionReorder.bind(this))
      .on('shopify:block:select', this.onBlockSelect.bind(this))
      .on('shopify:block:deselect', this.onBlockDeselect.bind(this));
  }


  // Theme Editor section events below
  // ==============================================

  onLoad(e) {
    this.swiper.destroy()
    this.swiper = new Swiper(this.$slideshow.get(0), this.swiperOptions);
  }
  onUnload(e) {

  }
  onSectionSelect(e) {

  }
  onSectionDeselect(e) {

  }
  onSectionReorder(e) {

  }

  onBlockSelect(e) {

    const $blockSlide = this.$slideshow.find(`[data-block-id="${e.detail.blockId}"]`);

    if ($blockSlide.length === 0) {
      return;
    }

    const selectedIndex = $blockSlide.first().data('swiper-slide-index');

    this.swiper.slideToLoop($blockSlide.first().data('swiper-slide-index'));
    this.swiper.autoplay.stop();
  }

  onBlockDeselect(e) {
    if (this.$slideshow.data('autoplay')) {
      this.swiper.autoplay.start();
    }
  }

}

customElements.define('swiper-slideshow', SlideshowSection);
