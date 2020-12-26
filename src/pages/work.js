import * as React from "react"
import Nav from '../components/nav/nav'
import Header from "../components/header"
import MenuItem from '../components/menuItem/menuItem'
import { Box, Flex } from "rebass"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "../components/footer/footer"

const bgColors = [ 'pinkPrimary pinkDark', 'lightBluePrimary blueDark', 'purplePrimary purpleDark', 'creamPrimary creamDark', 'greenPrimary greenDark' ];
const [ bg, d ] = bgColors[Math.floor(Math.random() * bgColors.length)].split(" ");

const directory = [
  {
    title: "Artichoke Series",
    url: "/artichoke",
    base: "artichoke.jpg"
  },
  {
    title: "Scrapbook",
    url: "/scrapbook",
    base: "insideCover.png"
  },
  {
    title: "Providence Map",
    url: "/providence",
    base: "map.jpg"
  },
  {
    title: "Memory Palace",
    url: "/memory",
    base: "wii.png"
  },
  {
    title: "Charcoal Drawings",
    url: "/charcoal",
    base: "BENEFITST.jpg"
  },
  {
    title: "Metashape Portrait",
    url: "/metashape",
    base: "me5.png"
  },
  {
    title: "Sound Design",
    url: "/sound",
    base: "audio.png"
  },
  {
    title: "Walk on Chalkfield St",
    url: "/walk",
    base: "walkrend1.png"
  },
  {
    title: "Useless Utensils",
    url: "/uselessUtensils",
    base: "utensils.jpg"
  },
];

const MainPage = () => {
  
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
  `);

  for (let node of edges) {
    for (let page of directory) {
      if (node.node.base === page.base) {
        node.title = page.title;
        node.url = page.url;
      }
    }
  }
    
  return (
    <Box
      sx={{
        bg: "white",
        maxWidth: "100%",
        mx: 0,
        px: 0,
      }}>
      <Nav bg={bg}/>
      <Header c={d} fontSize={[5, 6, 7]}>
        Collection
      </Header>
      <Box
        my={[4, 3, 0]}
        sx={{
          maxWidth: 1024,
          mx: 'auto',
        }}>
        <Flex flexWrap='wrap' mx={[0, 1, 3]}>
          <MenuItem fluid={edges[0]} bg={bg}/>
          <MenuItem fluid={edges[1]} bg={bg}/>
          <MenuItem fluid={edges[2]} bg={bg}/>
        </Flex>
        <Flex flexWrap='wrap' mx={[0, 1, 3]}>
          <MenuItem fluid={edges[3]} bg={bg}/>
          <MenuItem fluid={edges[4]} bg={bg}/>
          <MenuItem fluid={edges[5]} bg={bg}/>
        </Flex>
        <Flex flexWrap='wrap' mx={[0, 1, 3]}>
          <MenuItem fluid={edges[6]} bg={bg}/>
          <MenuItem fluid={edges[7]} bg={bg}/>
          <MenuItem fluid={edges[8]} bg={bg}/>
        </Flex>
      </Box>
      <Footer/>
    </Box>
  )
}

export default MainPage