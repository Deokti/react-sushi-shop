export const sortingSushi = (sushiList: any, currentSorting: string) => {
  switch (currentSorting) {
    case 'популярности':
      return sushiList.sort((prev: any, next: any) => prev.popularity - next.popularity)
    case 'цене':
      return sushiList.sort((prev: any, next: any) => prev.price - next.price);
    case 'алфавиту':
      return sushiList.sort((prev: any, next: any) => {
        if ( prev.name < next.name ) return -1;
        if ( prev.name < next.name ) return 1;
      })
  }
}
