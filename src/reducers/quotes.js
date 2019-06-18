export default (state = [], action) => {
  let foundQuoteIndex
  let newState
  switch(action.type){

    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return [...state.filter(quote => quote.id !== action.quoteId)]
    case "UPVOTE_QUOTE":

      foundQuoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      newState = [...state]
      newState[foundQuoteIndex].votes += 1
      return newState
    case "DOWNVOTE_QUOTE":
      foundQuoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      newState = [...state]
      if (newState[foundQuoteIndex].votes > 0) {
        newState[foundQuoteIndex].votes -= 1
      }
      return newState
    default:
      return state
  }
}
