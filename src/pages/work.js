import * as React from "react"
import Img from 'gatsby-image'
import Nav from '../components/nav'
import Header from "../components/header"
import { Box, Flex } from "rebass"
import walk from '../images/MetashapeRenders/walk/walkrend1.png'
import { graphql, useStaticQuery } from "gatsby"



const MainPage = () => {
  
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {relativeDirectory: {eq: "menuItems"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                srcSet
                src
              }
            }
          }
        }
      }
    }
  `)
  
  return (
    <Box
      sx={{
        bg: "white",
        maxWidth: "100%",
        mx: 0,
        px: 0,
      }}>
      <Nav/>
      <Header>
        Collection
      </Header>
      <Box
        sx={{
          maxWidth: 1024,
          mx: 'auto',
          px: 3,
        }}>
        <Flex flexWrap='wrap' mx={4}>
          <Box px={2} py={1} width={1/3}>
            <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <Box px={2} py={1} width={1/3}>
            <Img fluid={data.allFile.edges[3].node.childImageSharp.fluid} sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Img fluid={data.allFile.edges[4].node.childImageSharp.fluid} sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Img fluid={data.allFile.edges[5].node.childImageSharp.fluid} sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <Box px={2} py={1} width={1/3}>
            <Img fluid={data.allFile.edges[6].node.childImageSharp.fluid} sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Img fluid={data.allFile.edges[7].node.childImageSharp.fluid} sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Img fluid={data.allFile.edges[8].node.childImageSharp.fluid} sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
        </Flex>
      </Box>
      <footer>
        This is a footer and I will put a lot of padding on the bottom
      </footer>
    </Box>
  )
}

export default MainPage
