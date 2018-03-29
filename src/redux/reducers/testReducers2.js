export default (state = [], action) => {
  switch(action.type) {
    case 'TEST2':
    return [...state, action.payload];
    break;
    default:
    return state;
  }
}