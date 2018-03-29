export default (state = ['test1'], action) => {
  switch(action.type) {
    case 'TEST1':
    return [...state, action.payload];
    default:
    return state;
  }
}