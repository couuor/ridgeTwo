import React from "react"
import Image5 from "../components/image5"
import Image6 from "../components/image6"
import Image7 from "../components/image7"
import TestIMG from "../images/aluminum slide.jpg"
import "./threeWallets.css"
const threeWallets = () => {
  return (
    <div id="holderDivOne">
      <div id="div1A">
        <Image5 />
        <h5 style={{ textAlign: "center" }}>GUNMETAL - $75</h5>
        <a href="https://www.ridgewallet.com/collections/titanium/products/titanium-gunmetal">
          <button
            style={{
              marginLeft: "50%",
              transform: "translateX(-50%)",
            }}
          >
            SHOP
          </button>
        </a>
      </div>
      <div id="div1B">
        <Image6 />
        <h5 style={{ textAlign: "center" }}>TITANIUM - $105</h5>
        <a href="https://www.ridgewallet.com/collections/titanium/products/titanium-burnt">
          <button
            style={{
              marginLeft: "50%",
              transform: "translateX(-50%)",
            }}
          >
            SHOP
          </button>
        </a>
      </div>

      <div id="div1C">
        <Image7 />
        <h5 style={{ textAlign: "center" }}>CARBON - $125</h5>
        <a href="https://www.ridgewallet.com/collections/carbon-fiber/products/carbon-fiber">
          <button
            style={{
              marginLeft: "50%",
              transform: "translateX(-50%)",
            }}
          >
            SHOP
          </button>
        </a>
      </div>
    </div>
  )
}

export default threeWallets
