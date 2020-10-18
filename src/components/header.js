import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => {
  const [toggle, setToggle] = useState(false)
  const [state, setState] = useState(false)
  const handleClick = () => {
    setState(!state)
    setToggle(!toggle)
  }
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <h3 className={headerStyles.h3}>
          <Link to="/" className={headerStyles.link}>
            {siteTitle}
          </Link>
        </h3>

        <div className={state ? headerStyles.active : headerStyles.content}>
          <h3>
            <a
              href="https://developersdomain.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className={headerStyles.about}
            >
              Blog
            </a>
          </h3>
          <h3>
            <a href="#about" className={headerStyles.about}>
              About
            </a>
          </h3>
          <h3>
            {" "}
            <a href="#skill" className={headerStyles.skills}>
              Skills
            </a>{" "}
          </h3>
          <h3>
            <a href="#project" className={headerStyles.projects}>
              Projects
            </a>
          </h3>
          <h3>
            <a href="#contact" className={headerStyles.contact}>
              Contact
            </a> 
          </h3>
        </div>
      </div>

      <div className={headerStyles.burger} onClick={handleClick}>
        <div
          className={
            toggle
              ? (headerStyles.toggle, headerStyles.toggleLine1)
              : headerStyles.line1
          }
        />
        <div
          className={
            toggle
              ? (headerStyles.toggle, headerStyles.toggleLine2)
              : headerStyles.line2
          }
        />
        <div
          className={
            toggle
              ? (headerStyles.toggle, headerStyles.toggleLine3)
              : headerStyles.line3
          }
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
