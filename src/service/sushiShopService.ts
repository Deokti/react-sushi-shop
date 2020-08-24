export default class SushiShopService {
  GET_DATA_URL: string = 'https://react-sushi-shop.firebaseio.com/sushi-shop.json';

  async getData() {
    const response = await fetch(this.GET_DATA_URL);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  }
}


