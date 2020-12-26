import React from 'react'
import { Box, Text } from 'rebass'
import Footer from '../components/footer/footer'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Memory = () => {
    let { allFile: { edges } } = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "dance-studio"}}) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid {
                            aspectRatio
                            base64
                            sizes
                            src
                            srcSet
                            }
                        }
                    }
                }
            }
        }
    `)

    let images = [];
    for (let img of edges) {
        switch (img.node.base) {
            case 'Slide1.PNG':
                images[0] = img.node.childImageSharp.fluid;
                break;
            case 'Slide2.PNG':
                images[1] = img.node.childImageSharp.fluid;
                break;
            case 'Slide3.PNG':
                images[2] = img.node.childImageSharp.fluid;
                break;
            case 'Slide4.PNG':
                images[3] = img.node.childImageSharp.fluid;
                break;
            case 'Slide5.PNG':
                images[4] = img.node.childImageSharp.fluid;
                break;
            case 'Slide6.PNG':
                images[5] = img.node.childImageSharp.fluid;
                break;
            case 'Slide7.PNG':
                images[6] = img.node.childImageSharp.fluid;
                break;
            case 'Slide8.PNG':
                images[7] = img.node.childImageSharp.fluid;
                break;
            case 'Slide9.PNG':
                images[8] = img.node.childImageSharp.fluid;
                break;
            case 'Slide10.PNG':
                images[9] = img.node.childImageSharp.fluid;
                break;
            default:
                break;
        }
    }

    return (
        <Layout>
            <Nav bg="greenDark"/>
            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    textAlign: 'center',
                }}>
                <Header c="black"fontSize={[4, 5, 6]}>
                    Memory Palace
                </Header>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[2, 3, 4]}>
                    A memory palace is an imaginary but familiar place that you create in your mind to keep mnemonic-images as a memorization technique. 
                </Text>
                <br/>
                <Text c="gray" fontSize={[2, 3, 4]}>
                    The memory palace that I created for these set of projects is a dance studio I used to attend for many years. I used it to memorize 20 random words and made scenarios inspired by them to help me memorize all the words. 
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[0]}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[3, 4, 5]}>
                    Birds-eye-view of the memory palace. My memory palace is a 1:1 replica of my old dance studio. The vignettes shown are different scenarios happening at different times within the studio.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[1]}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[3, 4, 5]}>
                    Water Fountain
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[2]}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[3, 4, 5]}>
                    A good action shot in the middle of the chaos that’s happening in the main studio. 
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[3]}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[3, 4, 5]}>
                    Ballerinas playing Wii Tennis
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[4]}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[5]}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[3, 4, 5]}>
                My Final Moments: 
                    (For context, Aang from Avatar: The Last Airbender is about to finish me off with giant balls of playdough)
                    I wanted to emphasize how ridiculous this scene is with weird pictures of Aang’s poorly rendered face. It’s supposed to be stupid…
                    (Shown left to right: a transparent aang, aang2 (but flipped horizontally), aang1)
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[6]}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[3, 4, 5]}>
                My Final Moments:
                    This scene is very theatrically dramatic (lights, positioning), I think it emphasizes the ridiculousness of it all.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[7]}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[3, 4, 5]}>
                    The Fallen Ballerinas:
                        My favourite shot from the memory palace
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[8]}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[3, 4, 5]}>
                    The Fallen Ballerinas:
                        (Shown left to right: pile2, pile3)
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={images[9]}/>
            </Box>

            <Footer/>
        </Layout>
    )
}

export default Memory