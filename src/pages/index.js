import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Image } from 'rebass'
import anime from '../images/anime/animeGif.gif'
import Layout from '../components/layout/layout'

const IndexPage = () => {
    return (
        <Layout>
            <Box
                bg="inherit"
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                }}>
                <Heading
                    fontSize={[ 5, 6, 7 ]}
                    color='primary'>
                    Lauren Cochran
                </Heading>
                <Image src={anime} sx={{ width: [ '100%', '768px' ] }} alt="awesomeness"/>
                <Link
                    to="work"
                    sx={{
                        display: 'inline-block',
                        fontWeight: 'bold',
                        px: 2,
                        py: 1,
                        color: 'inherit',
                    }}>
                    Enter At Your Own Awesomeness
                </Link>
            </Box>
        </Layout>
    )
}

export default IndexPage