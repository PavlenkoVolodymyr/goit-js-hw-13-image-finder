export default class PicturesAPI {
  constructor() {
    this.API_KEY = '&key=24019457-bd2d78efc521170e7e34daade';
    this.BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
    this.page = 1;
    this.imagesPerPage = 12;
    this._query = '';
  }
  get query() {
    return this._query;
  }

  set query(newQuery) {
    return (this._query = newQuery);
  }

  async fetchPictures() {
    let endpoints = `&q=${this._query}&page=${this.page}&per_page=${this.imagesPerPage}`;
    let url = this.BASE_URL + endpoints + this.API_KEY;
    const response = await fetch(url);

    return response.json();
  }
}
