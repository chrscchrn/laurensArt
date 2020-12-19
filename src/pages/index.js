import * as React from "react"
// import Header from '../components/header';
import { Box, Flex, Text, Heading } from "rebass";

const IndexPage = () => {
  return (
    <Box
      sx={{
        maxWidth: 1024,
        mx: 'auto',
        px: 3,
      }}>
      <Heading
        fontSize={[ 5, 6, 7 ]}>
        Wow This is A Header That Can Be Any Length
      </Heading>
      <Flex flexWrap='wrap' mx={-2}>
        <Box px={2} py={2} width={1/2}>
          <Text p={1} color='background' bg='primary'>Est est irure ex labore et nulla duis elit consectetur quis in duis. Labore ullamco commodo minim mollit ad sunt culpa labore. Eu excepteur cillum ut occaecat anim dolore ullamco amet mollit eu consectetur cupidatat. Qui commodo aliqua mollit officia est non minim adipisicing ad cillum.</Text>
        </Box>
        <Box px={2} py={2} width={1/2}>
          <Text p={1} color='background' bg='primary'>Est est irure ex labore et nulla duis elit consectetur quis in duis. Labore ullamco commodo minim mollit ad sunt culpa labore. Eu excepteur cillum ut occaecat anim dolore ullamco amet mollit eu consectetur cupidatat. Qui commodo aliqua mollit officia est non minim adipisicing ad cillum.</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default IndexPage
