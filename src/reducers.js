
export {rootReducer};

function rootReducer(state = [], action)
{
  switch(action.type){
    case 'Add-One':
      //return state.concat('incremented one');
      return state.concat(action.data);
    case 'Sub-One':
      return state.concat('Subtracted one');
    default:
      return state;
  }
}