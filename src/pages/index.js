import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import SEO from "../components/seo"
import {
  DiHtml5,
  DiJsBadge,
  DiCss3,
  DiSass,
  DiGithubBadge,
  DiReact,
  DiGit,
  DiBootstrap,
  DiNodejs,
  DiMongodb,
} from "react-icons/di"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={indexStyles.heading}>
        <div className={indexStyles.headingcontent}>
          <h2 className={indexStyles.headh2}>Hello!</h2>
          <h2 className={indexStyles.headh21}>
            I'm <b>Kartikey Yadav</b> , a Full-Stack Web developer focused on
            developing beautiful interfaces , experiences and scalable backends
          </h2>
        </div>
        <div className={indexStyles.headingImg}>
          <Img fluid={props.data.profile.childImageSharp.fluid} />
        </div>
      </div>
      <div className={indexStyles.about} id="about">
        <h2 className={indexStyles.abouthead}>About</h2>
        <p className={indexStyles.aboutcontent}>
          Hey, I am a front-end developer and I love building beautifull and
          responsive websites for the web . In this fast paced industry I am
          always try my best to improve my skills and give the best user
          experiences I believe that hard work and consistency can lead to
          beautiful things in life
        </p>
      </div>

      <div className={indexStyles.skills} id="skill">
        <h2 className={indexStyles.skillshead}>Skills</h2>
        <div className={indexStyles.skillsset}>
          <h2>
            <span className={indexStyles.text1}>Html5</span>{" "}
            <DiHtml5 className={indexStyles.htmllogo} />{" "}
          </h2>
          <h2>
            <span className={indexStyles.text1}>Css3</span>{" "}
            <DiCss3 className={indexStyles.csslogo} />{" "}
          </h2>
          <h2>
            <span className={indexStyles.text1}>Javascipt</span>{" "}
            <DiJsBadge className={indexStyles.jslogo} />{" "}
          </h2>
          <h2>
            <span className={indexStyles.text1}>Sass</span>{" "}
            <DiSass className={indexStyles.sasslogo} />{" "}
          </h2>
          <h2>
            <span className={indexStyles.text1}>Git</span>
            <DiGit className={indexStyles.gitlogo} />{" "}
          </h2>
          <h2>
            <span className={indexStyles.text1}>Github</span>{" "}
            <DiGithubBadge className={indexStyles.githublogo} />{" "}
          </h2>
          <h2>
            <span className={indexStyles.text1}>React</span>{" "}
            <DiReact className={indexStyles.reactlogo} />{" "}
          </h2>
          <h2>
            <span className={indexStyles.text1}>Bootstrap</span>{" "}
            <DiBootstrap className={indexStyles.bootstraplogo} />{" "}
          </h2>
          <h2>
            <span className={indexStyles.text1}>Figma</span>{" "}
            <Img
              fluid={props.data.figmaIcon.childImageSharp.fluid}
              className={indexStyles.reduxlogo}
            />
          </h2>
          <h2>
            <span className={indexStyles.text1}>Redux</span>{" "}
            <Img
              fluid={props.data.reduxIcon.childImageSharp.fluid}
              className={indexStyles.reduxlogo}
            />
          </h2>
          <h2>
            <span className={indexStyles.text1}>Node</span>{" "}
            <DiNodejs className={indexStyles.nodelogo} />{" "}
          </h2>
          <h2>
            <span className={indexStyles.text1}>Mongodb</span>{" "}
            <DiMongodb className={indexStyles.mongodblogo} />{" "}
          </h2>
        </div>
      </div>
      <div className={indexStyles.projects} id="project">
        <h2 className={indexStyles.projHead}>Projects</h2>
        <div className={indexStyles.myProjects}>
          <div className={indexStyles.project1}>
            <a
              href="https://movieopedia.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={props.data.project1.childImageSharp.fluid} />
            </a>
            <p className={indexStyles.projectp}>
              Movie Search app{" "}
              <b style={{ display: "block" }}> Technologies :</b> React and TMDB
              Api
            </p>
          </div>

          <div className={indexStyles.project1}>
            <a
              href="https://developerslane.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={props.data.project2.childImageSharp.fluid} />
            </a>
            <p className={indexStyles.projectp}>
              The fullStack App for the developers and designers to post their
              work and user can comment and like on their posts{" "}
              <b style={{ display: "block" }}> Technologies :</b>
              MongoDb | React | Node | Express | Redux
            </p>
          </div>
          <div className={indexStyles.project1}>
            <a
              href="https://shopulse.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={props.data.project3.childImageSharp.fluid} />
            </a>
            <p className={indexStyles.projectp}>
              A fullStack App made like a ecommerce website and integrated with
              payments and all other stuffs .{" "}
              <b style={{ display: "block" }}> Technologies :</b> MongoDb |
              React | Node | Express | Redux
            </p>
          </div>
          <div className={indexStyles.project1}>
            <a
              href="https://developersdomain.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={props.data.project4.childImageSharp.fluid} />
            </a>
            <p className={indexStyles.projectp}>
              A blog website for blogs and any stuff I want to share to the
              world of developers.{" "}
              <b style={{ display: "block" }}> Technologies :</b> Gatsby |
              Netlify CMS | Google Analytics | SEO
            </p>
          </div>
        </div>
      </div>
      <div className={indexStyles.contact} id="contact">
        <h2 className={indexStyles.contacthead}>
          <b>Want a developer</b> or you have some suggestions or just want a
          fun chat I am always upto it
        </h2>
        <a
          href="mailto:kartikeyyadav.13579@gmail.com"
          className={indexStyles.contactbutton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get In Touch
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project1: file(relativePath: { eq: "projectmovie.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project2: file(relativePath: { eq: "projectsocial.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project3: file(relativePath: { eq: "projectecommerce.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project4: file(relativePath: { eq: "blogsite.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reduxIcon: file(relativePath: { eq: "reduxIcon.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    figmaIcon: file(relativePath: { eq: "figmalogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profile: file(relativePath: { eq: "profilesvg.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
