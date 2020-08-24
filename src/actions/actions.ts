export const categoryReady = (newCategory: any[]) => {
  return {
    type: 'CATEGORY_READY',
    payload: newCategory
  }
}
