import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledHero, SplashImageObj } from "./styles"
import { AnimatedWave } from "./"
import Img from "gatsby-image"

const Hero = ({ imageAlt, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fixed(width: 972, height: 1297) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyledHero id={id}>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt={imageAlt}
        style={{ margin: "0 auto", height: "100%" }}
        imgStyle={SplashImageObj}
      />
      <AnimatedWave enableWave bottom={true} />
    </StyledHero>
  )
}

export default Hero
