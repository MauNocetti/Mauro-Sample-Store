import { serializeForm, fetchConfig } from '../core/util/a11y';

class ProductForm extends HTMLElement {
  constructor() {
    super();

    this.form = this.querySelector('form');
    this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
  }

  onSubmitHandler(evt) {
    evt.preventDefault();

    const submitButton = this.querySelector('[type="submit"]');

    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('loading');

    const body = JSON.stringify({
      ...JSON.parse(serializeForm(this.form)),
      sections_url: window.location.pathname
    });

    fetch(`${window.routes.cart_add_url}`, { ...fetchConfig('javascript'), body })
      .then((response) => response.json())
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        submitButton.classList.remove('loading');
        submitButton.removeAttribute('disabled');
      });
  }
}

customElements.define('product-form', ProductForm);
