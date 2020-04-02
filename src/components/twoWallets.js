import React from "react"
import Image2 from "../components/image2"
import Image3 from "../components/image3"
import "./twoWallets.css"

const twoWallets = () => {
  return (
    <div id="holderDiv">
      <div id="pictureOne" style={{ maxWidth: "500px" }}>
        <Image2 />
      </div>
      <div id="descriptionOne">
        <div className="container">
          <h1>The Wallet, Redefined.</h1>

          <p style={{ fontWeight: "bold" }}>
            The best way to carry your cash and cards since, well, ever.
          </p>
          <a href="https://www.ridgewallet.com">
            <button>SHOP NOW</button>
          </a>
        </div>
      </div>
      <div id="pictureTwo" style={{ maxWidth: "500px" }}>
        <Image3 />
      </div>
      <div id="descriptionTwo">
        <div className="container">
          <h1 className="secondWords">We Invented It.</h1>

          <p style={{ fontWeight: "bold" }} className="secondWords">
            The Ridge developed the first dual-track RFID-blocking wallet.
          </p>

          <a href="https://www.ridgewallet.com">
            <button id="buttonOneShop">SHOP NOW</button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default twoWallets
