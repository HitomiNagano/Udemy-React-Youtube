import { ActionType } from "src/store/types"
import {
  Popular,
  Related,
  Searched,
  Selected,
  Term,
} from "src/store/initialState"

interface SetPopularAction {
  type: typeof ActionType.SET_POPULAR
  payload: { popular: Popular }
}
interface SetRelatedAction {
  type: typeof ActionType.SET_RELATED
  payload: { related: Related }
}
interface SetSearchedAction {
  type: typeof ActionType.SET_SEARCHED
  payload: { searched: Searched }
}
interface SetSelectedAction {
  type: typeof ActionType.SET_SELECTED
  payload: { selected: Selected }
}
interface SetTermAction {
  type: typeof ActionType.SET_TERM
  payload: { term: Term }
}
// @see https://qiita.com/makishy/items/bb014073d6e494b1b35f
export type IAction =
  | SetPopularAction
  | SetRelatedAction
  | SetSearchedAction
  | SetSelectedAction
  | SetTermAction
