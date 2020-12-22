import * as React from "react"
import Nav from '../components/nav/nav'
import Header from "../components/header"
import MenuItem from '../components/menuItem/menuItem'
import { Box, Flex } from "rebass"
import { graphql, useStaticQuery } from "gatsby"

const bgColors = [ 'pinkPrimary pinkDark', 'lightBluePrimary blueDark', 'purplePrimary purpleDark', 'creamPrimary creamDark', 'greenPrimary greenDark' ];

const MainPage = () => {

  const [ bg, d ] = bgColors[Math.floor(Math.random() * bgColors.length)].split(" ");
  
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
      <Header c={d}>
        Collection
      </Header>
      <Box
        sx={{
          maxWidth: 1024,
          mx: 'auto',
          px: 3,
        }}>
        <Flex flexWrap='wrap' mx={4}>
          <MenuItem fluid={edges[0]} bg={bg}/>
          <MenuItem fluid={edges[1]} bg={bg}/>
          <MenuItem fluid={edges[2]} bg={bg}/>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <MenuItem fluid={edges[3]} bg={bg}/>
          <MenuItem fluid={edges[4]} bg={bg}/>
          <MenuItem fluid={edges[5]} bg={bg}/>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <MenuItem fluid={edges[6]} bg={bg}/>
          <MenuItem fluid={edges[7]} bg={bg}/>
          <MenuItem fluid={edges[8]} bg={bg}/>
        </Flex>
      </Box>
      <footer>
        &copy; Lauren Cochran | Design by her awesome brother
      </footer>
    </Box>
  )
}

export default MainPage