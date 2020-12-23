import React from 'react'
import { Link } from 'gatsby'
import { Box, Image, Text } from 'rebass'
import Layout from '../components/layout/layout'
import Header from '../components/header'
import anime from '../images/anime/animeGif.gif'

const IndexPage = () => {
    
    // pick random dark color theme for header and link
    // const bgColors = [ 'pinkPrimary', 'lightBluePrimary', 'purplePrimary', 'creamPrimary' ];

    return (
        <Layout>
            <Box
                sx={{
                    maxWidth: [768, "100%"],
                    mx: 'auto',
                    textAlign: 'center',
                }}
                my={[5, 4, 0]}
                px={[ 0, 1, 2]}
                mx={[ 0, 1, 2]}>
                <Header fontSize={[6, 6, 7]}>
                    Lauren Cochran
                </Header>
                <Image src={anime} sx={{ width: [ '100%', '768px' ] }} alt="awesomeness"/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Link to="work">
                    <Text fontSize={[3, 4, 5]} my={0}>
                        Enter At Your Own Awesomeness
                    </Text>
                </Link>
            </Box>
        </Layout>
    )
}

export default IndexPage