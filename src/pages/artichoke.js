import Img from 'gatsby-image'
import React from 'react'
import { Box, Text } from 'rebass'
import Footer from '../components/footer/footer'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'

const Artichoke = () => {
    return (
        <Layout>
            <Nav bg="black"/>
            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    textAlign: 'center',
                }}>
                <Header c="black"fontSize={[4, 5, 6]}>
                    A focus on a single artichoke from the same point of view, five times.
                </Header>

            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                {/* <Img src=""/> */}
                <img src="https://via.placeholder.com/512" />
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]}>
                    Black conte crayons, line and tone studied separately, inconsideration towards accuracy 30 min.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                {/* <Img src=""/> */}
                <img src="https://via.placeholder.com/512" />
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]}>
                    Compressed charcoal, focus on line and tone and their simultinaity, study of object’s relationship with light/shadows, 3 hrs.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                {/* <Img src=""/> */}
                <img src="https://via.placeholder.com/512" />
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]}>
                    Brown and orange conte crayons, brown focused on tone, orange focused on line, quick draw, 10 min.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                {/* <Img src=""/> */}
                <img src="https://via.placeholder.com/512" />
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]}>
                    Lines created from charcoal residue on finger tips, focus on range of pressure to create depth, 20 min.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                {/* <Img src=""/> */}
                <img src="https://via.placeholder.com/512" />
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]}>
                    Artichoke sitting in a formal dining room staring at a grey fox skull compressed charcoal, combination of realism and minimalism to induce emotions from artichoke - personification, 2 hrs.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                {/* <Img src=""/> */}
                <img src="https://via.placeholder.com/512" />
            </Box>
            <Footer/>
        </Layout>
    )
}

export default Artichoke

// ARTICHOKE 4: Brown and orange conte crayons, brown focused on tone, orange focused on line, quick draw, 10 min.
// ARTICHOKE 5: Lines created from charcoal residue on finger tips, focus on range of pressure to create depth, 20 min.
// ARTICHOKE FINAL: 