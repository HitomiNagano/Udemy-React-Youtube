import React from "react"
import Header from "src/components/Header/Header"
import Style from "./Layout.module.scss"

const Layout: React.FC = ({ children }) => {
  return (
    <div className={Style.wrapper}>
      <Header />
      <div className={Style.main}>{children}</div>
    </div>
  )
}

export default Layout
