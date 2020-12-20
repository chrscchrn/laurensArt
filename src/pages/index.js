import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading } from 'rebass'
import anime from '../images/animehellyeah/animeGif.gif'

const IndexPage = () => {
    return (
        <>
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
                    Yeah Im A Header
                </Heading>
                <img src={anime} width="768"/>
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
        </>
    )
}

export default IndexPage