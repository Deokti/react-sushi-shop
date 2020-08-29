export type TypeInitialState = {
  sushiList: Array<TypeOneSushiServer>,
  categories: Array<TypeOneCategoryAndSorting>
  currentCategory: string
  sortingList: Array<TypeOneCategoryAndSorting>,
  currentSorting: string,
  sortingActivePopup: boolean,
};

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

export type TypeCartButtonProps = {
  price: number
  amount: number,
}

export type SusiListMapStateToProps = {
  sushiList: Array<TypeOneSushiServer>,
  currentCategory: string,
  currentSorting: string
}