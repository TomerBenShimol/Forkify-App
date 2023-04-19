import View from './View';
import icons from 'url:../../img/icons.svg';

class SearchView extends View {
  _parentElement = document.querySelector('.search-results');
  _searchField = document.querySelector('.search__field');
  _searchButton = document.querySelector('.search__btn');

  getQuery() {
    return this._searchField.value;
  }

  clearInput() {
    this._searchField.value = '';
  }

  addHandlerRender(handler) {
    this._searchButton.addEventListener('click', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
