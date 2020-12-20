import * as React from "react"
// import Header from '../components/header';
import Nav from '../components/nav'
import { Box, Flex, Heading } from "rebass"

const MainPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        mx: 0,
        px: 0,
      }}>
      <Nav/>
      <Heading
        fontSize={[ 5, 6, 7 ]}>
        Wow This is A Header That Can Be Any Length
      </Heading>
      <Box
        sx={{
          maxWidth: 1024,
          mx: 'auto',
          px: 3,
        }}>
        <Flex flexWrap='wrap' mx={4}>
          <Box px={2} py={1} width={1/3}>
            <img src="https://via.placeholder.com/300" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <img src="https://via.placeholder.com/300" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <img src="https://via.placeholder.com/300" alt=""/>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <Box px={2} py={1} width={1/3}>
            <img src="https://via.placeholder.com/300" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <img src="https://via.placeholder.com/300" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <img src="https://via.placeholder.com/300" alt=""/>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' mx={4}>
          <Box px={2} py={1} width={1/3}>
            <img src="https://via.placeholder.com/300" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <img src="https://via.placeholder.com/300" alt=""/>
          </Box>
          <Box px={2} py={1} width={1/3}>
            <img src="https://via.placeholder.com/300" alt=""/>
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
