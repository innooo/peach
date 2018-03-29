export default (state = {}, action) => {
  let obj = {};  
  switch(action.type) {
    case 'WORKITEM_PENDING':
      obj[action.type] = action.payload;
      return Object.assign(state, obj);
      break;
    case 'WORKITEM_CREATE':
      obj[action.type] = action.payload;
      return Object.assign(state, obj);
      break;
    case 'WORKITEM_FOLLOW':
      obj[action.type] = action.payload;
      return Object.assign(state, obj);
      break;
    case 'WORKITEM_COLLECT':
      obj[action.type] = action.payload;
      return Object.assign(state, obj);
      break;
    default:
      return state;
  }
}