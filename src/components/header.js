import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image4 from "./image4"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `gray`,
      marginBottom: `1.45rem`,
      position: "sticky",
      top: 0,
      zIndex: 99999,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 800,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ maxWidth: `150px` }}>
        <Image4 />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
