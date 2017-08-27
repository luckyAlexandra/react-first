export function doChange (state, action) {
  console.log(action.type)
  switch(action.type) {
    case 'CHANGE_BG':
      return {
        color: action.color
      }
    default :
      break;
  }
}