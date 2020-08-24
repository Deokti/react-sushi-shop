export type TypeInitialState = {
  sushiList: Array<TypeOneSushiServer>,
  categories: Array<TypeOneCategory>
  currentCategory: string
};

export type TypeOneCategory = {
  id: number,
  label: string,
  name: string
};

export type TypeCategoryProps = {
  categories: Array<TypeOneCategory>,
  currentCategory: string,
  toggleCurrentCategory(category: string | undefined): void
};

export type TypeOneSushiServer = {
  id: number,
  amount: number
  category: string
  composition: Array<string | null | undefined>,
  currency: number,
  imageUrl: string
  name: string
  popularity: number
  price: number
};

export type TypeSushiListProps = {
  sushiShopService: {
    GET_DATA_URL: string,
    getData(): {
      then(p: (data: TypeOneSushiServer) => any): Array<TypeOneSushiServer>
    }
  },
  sushiList: Array<TypeOneSushiServer>,
  sushiListLoaded: any
  currentCategory: string
};


