import React from 'react'
import { Link } from 'gatsby'
import { Box, Image } from 'rebass'
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
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    textAlign: 'center',
                }}>
                <Header>
                    Lauren Cochran
                </Header>
                <Image src={anime} sx={{ width: [ '100%', '768px' ] }} alt="awesomeness"/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Link to="work">
                    Enter At Your Own Awesomeness
                </Link>
            </Box>
        </Layout>
    )
}

export default IndexPage