import * as React from "react"
import Nav from '../components/nav'
import Header from "../components/header"
import { Box, Flex, Image } from "rebass"
import walk from '../images/MetashapeRenders/walk/walkrend1.png'

const MainPage = () => {
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
            <Image sx={{ width: [ '100%' ] }} src={walk} alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Image sx={{ width: [ '100%' ] }} src="https://via.placeholder.com/400" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Image sx={{ width: [ '100%' ] }} src="https://via.placeholder.com/400" alt=""/>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <Box px={2} py={1} width={1/3}>
            <Image sx={{ width: [ '100%' ] }} src="https://via.placeholder.com/400" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Image sx={{ width: [ '100%' ] }} src="https://via.placeholder.com/400" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Image sx={{ width: [ '100%' ] }} src="https://via.placeholder.com/400" alt=""/>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <Box px={2} py={1} width={1/3}>
            <Image sx={{ width: [ '100%' ] }} src="https://via.placeholder.com/400" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Image sx={{ width: [ '100%' ] }} src="https://via.placeholder.com/400" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <Image sx={{ width: [ '100%' ] }} src="https://via.placeholder.com/400" alt=""/>
          </Box>
        </Flex>
      </Box>
      <footer >
        This is a footer and I will put a lot of padding on the bottom
      </footer>
    </Box>
  )
}

export default MainPage
