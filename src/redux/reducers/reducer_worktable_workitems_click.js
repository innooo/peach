export default (state = {}, action) => {
    let obj = {};  
    switch(action.type) {
      case 'CLICK_WORKITEM_TAG':
        obj[action.type] = action.payload;
        return Object.assign(state,obj);
      default:
        return state;
    }
  }