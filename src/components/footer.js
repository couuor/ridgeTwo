import React from "react"
import Image from "../components/image"
import "./footer.css"

const Footer = () => {
  return (
    <div
      id="containerFive"
      style={{
        backgroundColor: "black",
      }}
    >
      <div
        id="innerFive"
        style={{ maxWidth: "100px", paddingTop: "25px", paddingBottom: "25px" }}
      >
        <a href="https://www.ridgewallet.com">
          <Image />
        </a>
      </div>
    </div>
  )
}
export default Footer
