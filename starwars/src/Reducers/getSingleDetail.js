export default function(state = { individualRecord: [] }, action) {
  switch (action.type) {
    case "GET_SINGLE_DETAILS":
      return {
        ...state,
        individualRecord: action.payload,
        singleDetail: true
      };

    default:
      return state;
  }
}
