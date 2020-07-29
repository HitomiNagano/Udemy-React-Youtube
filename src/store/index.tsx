import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from "react"
import initialState, { State } from "src/store/initialState"
import { IAction } from "src/store/actions"
import reducer from "src/store/reducer"

// グローバルステイトの初期値を引数として取り、state用のcontextを生成
// @see https://qiita.com/y4u0t2a1r0/items/36f0b3583051fe3c3b43
const stateContext = createContext(initialState as State)
// IAction型の引数を取る空の関数を初期値とし、dispatch用のcontextを生成
const dispatchContext = createContext((() => true) as Dispatch<IAction>)

export type Props = {
  children: ReactNode
}

// @see https://medium.com/@suraj.kc/state-management-with-react-hooks-in-typescript-84b70b6c3fb9
const StoreProvider: React.FC<Props> = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    <dispatchContext.Provider value={setGlobalState}>
      <stateContext.Provider value={globalState}>
        {children}
      </stateContext.Provider>
    </dispatchContext.Provider>
  )
}

export default StoreProvider

// dispatch関数を利用できるようにする
export const useDispatch = (): React.Dispatch<IAction> => {
  return useContext(dispatchContext)
}

// グローバルステイトを利用できるようにする
export const useGlobalState = <K extends keyof State>(
  property: K
): State[K] => {
  const state = useContext(stateContext)
  return state[property]
}
