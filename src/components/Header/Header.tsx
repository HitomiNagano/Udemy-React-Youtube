import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import Style from "./Header.module.scss"
import { useHistory } from "react-router-dom"
import { useGlobalState, useDispatch } from "src/store"
import { ActionType } from "src/store/types"

const Header: React.FC = () => {
  const [term, setTerm] = useState("")
  const history = useHistory()
  const globalState = useGlobalState("term")
  const setGlobalState = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGlobalState({
      type: ActionType.SET_TERM,
      payload: { term },
    })
    history.push(`/search?query=${term}`)
  }

  useEffect(() => {
    setTerm(globalState)
  }, [globalState])

  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="検索"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header
