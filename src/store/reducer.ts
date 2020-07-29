import { State } from "src/store/initialState"
import { IAction } from "src/store/actions"
import { ActionType } from "src/store/types"

const reducer = (state: State, action: IAction): State => {
  switch (action.type) {
    case ActionType.SET_POPULAR:
      return {
        ...state,
        popular: action.payload.popular,
      }
    case ActionType.SET_RELATED:
      return {
        ...state,
        related: action.payload.related,
      }
    case ActionType.SET_SEARCHED:
      return {
        ...state,
        searched: action.payload.searched,
      }
    case ActionType.SET_SELECTED:
      return {
        ...state,
        selected: action.payload.selected,
      }
    case ActionType.SET_TERM:
      return {
        ...state,
        term: action.payload.term,
      }
    default:
      return state
  }
}

export default reducer
