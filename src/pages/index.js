import React from 'react'
import { Link } from 'gatsby'
import { Box, Image } from 'rebass'
import Layout from '../components/layout/layout'
import Header from '../components/header'
import anime from '../images/anime/animeGif.gif'


const IndexPage = () => {
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
                {/* <img src={walk}/> */}
                <Image src={anime} sx={{ width: [ '100%', '768px' ] }} alt="awesomeness"/>
                <Link
                    to="work"
                    sx={{
                        display: 'inline-block',
                        fontWeight: 'normal',
                        px: 2,
                        py: 4,
                    }}>
                    Enter At Your Own Awesomeness
                </Link>
            </Box>
        </Layout>
    )
}

export default IndexPage