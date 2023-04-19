import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numOfPages = Math.ceil(
      this._data.recipes.length / this._data.recipesPerPage
    );

    // Page 1, and there are other pages
    if (this._data.page === 1 && numOfPages > 1) {
      return this._nextPageButton();
    }

    // Last page
    if (this._data.page === numOfPages && numOfPages > 1) {
      return this._prevPageButton();
    }

    // Other page
    if (this._data.page < numOfPages) {
      return `${this._nextPageButton()}${this._prevPageButton()}`;
    }

    // Page 1, and there are NO other pages
    return '';
  }

  _nextPageButton() {
    return `
        <button data-goto=${
          this._data.page + 1
        } class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
  }

  _prevPageButton() {
    return `
        <button data-goto=${
          this._data.page - 1
        }  class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
        </button>
    `;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--inline');

      if (!button) return;

      handler(+button.dataset.goto);
    });
  }
}

export default new PaginationView();
