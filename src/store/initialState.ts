// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Popular = Array<any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Related = Array<any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Searched = Array<any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Selected = any

export type Term = string

export type State = {
  popular: Popular
  related: Related
  searched: Searched
  selected: Selected
  term: string
}

const initialState = {
  popular: [],
  related: [],
  searched: [],
  selected: undefined,
  term: "",
}

export default initialState
