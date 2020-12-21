import * as React from "react"
import Nav from '../components/nav/nav'
import Header from "../components/header"
import MenuItem from '../components/menuItem/menuItem'
import { Box, Flex } from "rebass"
import { graphql, useStaticQuery } from "gatsby"

const colors = [ 'pinkPrimary', 'lightBluePrimary' ];

const MainPage = () => {

  const bg = colors[Math.floor(Math.random() * colors.length)];

  
  const { allFile: { edges } } = useStaticQuery(graphql`
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
      <Nav bg={bg}/>
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
          <MenuItem fluid={edges[0]} film={bg}/>
          <MenuItem fluid={edges[1]} film={bg}/>
          <MenuItem fluid={edges[2]} film={bg}/>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <MenuItem fluid={edges[3]} film={bg}/>
          <MenuItem fluid={edges[4]} film={bg}/>
          <MenuItem fluid={edges[5]} film={bg}/>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <MenuItem fluid={edges[6]} film={bg}/>
          <MenuItem fluid={edges[7]} film={bg}/>
          <MenuItem fluid={edges[8]} film={bg}/>
        </Flex>
      </Box>
      <footer>
        This is a footer and I will put a lot of padding on the bottom
      </footer>
    </Box>
  )
}

export default MainPage