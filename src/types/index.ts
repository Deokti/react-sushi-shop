export interface TypeInitialState {
  arrays: any,
  currentState: any,
  shoppingCart: any
}

export type TypeOneCategoryAndSorting = {
  id: number,
  label: string,
  name: string
};

export type TypeCategoryProps = {
  categories: Array<TypeOneCategoryAndSorting>,
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
  price: number,
  onAddedToCart?: any,
};

export type TypeRequestService = {
  sushiShopService: {
    GET_DATA_URL: string,
    getData(): {
      then(p: (data: TypeOneSushiServer) => any): Array<TypeOneSushiServer>
    }
  },
  getData(): any;
}

export type TypeSushiListProps = {
  sushiList: Array<TypeOneSushiServer>,
  sushiListLoaded: any
  currentCategory: string,
  currentSorting: string
};

export type TypeSortingProps = {
  sortingActivePopup: boolean
  currentSorting: string
  sortingList: Array<TypeOneCategoryAndSorting>
  toggleSortingActivePopup: any,
  toggleCurrentSorting: any
}

export type CartOneSushi = {
  buyAmount: number,
  currency: any,
  id: number,
  imageUrl: string,
  name: string,
  totalPrice: number
}

export type TypeCartListItem = {
  buyAmount: number,
  currency: string,
  id: number,
  imageUrl: string,
  name: string,
  totalPrice: number
  onIncrement: any
  onDecrement: any
  onDelete: any
}

export type TypeSortingMapToProps = {
  currentState: {
    sortingActivePopup: boolean
    currentSorting: string
  }
  arrays: { sortingList: Array<TypeOneCategoryAndSorting> }
}

export type TypeSushiListMapToProps = {
  arrays: { sushiList: Array<TypeOneSushiServer> }
  currentState: {
    currentCategory: string
    currentSorting: string
  }
}
