import React from "react"
import ReactDOM from "react-dom"
import "normalize.css"
import App from "src/App"
import StoreProvider from "src/store"

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
