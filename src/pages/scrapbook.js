import React, { useEffect } from 'react'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby"
import sortFiles from '../func/sortFiles'
import { Box } from 'rebass';


const Scrapbook = () => {

    let { allFile: { edges } } = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "scrapbook"}}) {
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
    
    useEffect(() => {
        edges = sortFiles(edges);
    }, [ edges ])
    
    let images = edges.map(i => {
        return <Img fluid={i.node.childImageSharp.fluid} alt=""/>
    })

    return (
        <Layout>
            <Box
                sx={{
                    maxWidth: "100%",
                    mx: 0,
                    px: 0,
                }}>
                <Nav bg="pinkPrimary"/>
                {images}
            </Box>
        </Layout>
    )
}

export default Scrapbook