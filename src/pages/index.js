import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import indexStyles from './index.module.scss';
import SEO from '../components/seo';
import {
	DiHtml5,
	DiJsBadge,
	DiCss3,
	DiSass,
	DiGithubBadge,
	DiReact,
	DiGit,
	DiPhotoshop,
	DiBootstrap
} from 'react-icons/di';

const IndexPage = () => {
	let data = useStaticQuery(graphql`
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
			profile: file(relativePath: { eq: "profilesvg.png" }) {
				childImageSharp {
					fluid(maxWidth: 3000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO title="Home" />
			<div className={indexStyles.heading}>
				<div className={indexStyles.headingcontent}>
					<h2 className={indexStyles.headh2}>Hello!</h2>
					<h2 className={indexStyles.headh21}>
						I'm <b>Kartikey Yadav</b> , a design-minded Front-end developer focused on developing beautiful
						interfaces and experiences{' '}
					</h2>
				</div>
				<div className={indexStyles.headingImg}>
					<Img fluid={data.profile.childImageSharp.fluid} />
				</div>
			</div>
			<div
				className={indexStyles.about}
				id="about"
				data-sal="fade"
				// data-sal-delay="2s"
				data-sal-duration="1s"
				data-sal-easing="ease-in"
			>
				<h2 className={indexStyles.abouthead}>About</h2>
				<p className={indexStyles.aboutcontent}>
					Hey, I am a front-end developer and I love building beautifull and responsive websites for the web .
					In this fast paced industry I am always try my best to improve my skills and give the best user
					experiences I believe that hard work and consistency can lead to beautiful things in life
				</p>
			</div>
			<div
				className={indexStyles.skills}
				id="skill"
				data-sal="fade"
				// data-sal-delay="s"
				data-sal-duration="1s"
				data-sal-easing="ease-in"
			>
				<h2 className={indexStyles.skillshead}>Skills</h2>
				<div className={indexStyles.skillsset}>
					<h2>
						<span className={indexStyles.text1}>Html5</span> <DiHtml5 className={indexStyles.htmllogo} />{' '}
					</h2>
					<h2>
						<span className={indexStyles.text1}>Css3</span> <DiCss3 className={indexStyles.csslogo} />{' '}
					</h2>
					<h2>
						<span className={indexStyles.text1}>Javascipt</span>{' '}
						<DiJsBadge className={indexStyles.jslogo} />{' '}
					</h2>
					<h2>
						<span className={indexStyles.text1}>Sass</span> <DiSass className={indexStyles.sasslogo} />{' '}
					</h2>
					<h2>
						<span className={indexStyles.text1}>Git</span>
						<DiGit className={indexStyles.gitlogo} />{' '}
					</h2>
					<h2>
						<span className={indexStyles.text1}>Github</span>{' '}
						<DiGithubBadge className={indexStyles.githublogo} />{' '}
					</h2>
					<h2>
						<span className={indexStyles.text1}>React</span> <DiReact className={indexStyles.reactlogo} />{' '}
					</h2>
					<h2>
						<span className={indexStyles.text1}>Bootstrap</span>{' '}
						<DiBootstrap className={indexStyles.bootstraplogo} />{' '}
					</h2>
					<h2>
						<span className={indexStyles.text1}>Photoshop</span>{' '}
						<DiPhotoshop className={indexStyles.photoshoplogo} />{' '}
					</h2>
				</div>
			</div>
			<div
				className={indexStyles.projects}
				id="project"
				data-sal="fade"
				// data-sal-delay="1s"
				data-sal-duration="1s"
				data-sal-easing="ease-in"
			>
				<h2 className={indexStyles.projHead}>Projects</h2>
				<div className={indexStyles.project1}>
					<a href="https://movieopedia.netlify.app" target="_blank">
						<Img fluid={data.project1.childImageSharp.fluid} />
					</a>
					<p className={indexStyles.projectp}>
						Movie Search app was made by me from scratch with help of TMdb api
					</p>
				</div>
			</div>
			<div
				className={indexStyles.contact}
				id="contact"
				data-sal="fade"
				// data-sal-delay="2s"
				data-sal-duration="1s"
				data-sal-easing="ease-in"
			>
				<h2 className={indexStyles.contacthead}>
					<b>Want a developer</b> or you have some suggestions or just want a fun chat I am always upto it
				</h2>
				<a href="mailto:kartikeyyadav.13579@gmail.com" className={indexStyles.contactbutton} target="_blank">
					Get In Touch
				</a>
			</div>
		</Layout>
	);
};

export default IndexPage;
