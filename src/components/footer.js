import React from "react"
import footerStyles from "./footer.module.scss"
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"

function footer() {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.Date}>
        © {new Date().getFullYear()}, Kartikey Yadav
      </div>
      <div>
        <a
          href="https://twitter.com/_Kartikey_7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className={footerStyles.twitter} />
        </a>
      </div>
      <div className={footerStyles.linkedIn}>
        <a
          href="https://www.linkedin.com/in/kartikey-yadav-29aba9190/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaLinkedinIn />
        </a>
      </div>
      <div className={footerStyles.github}>
        <a
          href="https://www.github.com/Kartikeyyadav7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMarkGithub />
        </a>
      </div>
      <div className={footerStyles.instagram}>
        <a
          href="https://www.instagram.com/kartikey_kumar_7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  )
}
export default footer
