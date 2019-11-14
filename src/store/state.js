const state = {
    debug: true,
    count: 0,
    json: {},
    category: 'pizza',
    basket: {},
    totalChek: 0,
    visibleModal: false,
    options: {},
    modalTabsList: [
      {
        type: 'sizes',
        currentAmount: 0,
        max: 1
      }, {
        type: 'breads',
        currentAmount: 0,
        max: 1
      }, {
        type: 'vegetables',
        currentAmount: 0,
        max: 3
      }, {
        type: 'sauces',
        currentAmount: 0,
        max: 3
      }, {
        type: 'fillings',
        currentAmount: 0,
        max: 3
      }, {
        type: 'Result',
        currentAmount: 0,
        max:0
      }],
    modalStartPage: 'sizes',

    productToBeAdded: {},
    nameProductToAdded: ''
  }

  export default state