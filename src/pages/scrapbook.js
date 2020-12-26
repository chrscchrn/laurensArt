import React from 'react'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby"
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
    
    let arr = [];
    for (let fluid of edges) {
        switch (fluid.node.base) {
            case 'a.png':
                arr[0] = fluid.node.childImageSharp.fluid;
                break;
            case 'b.png':
                arr[1] = fluid.node.childImageSharp.fluid;
                break;
            case 'c.png':
                arr[2] = fluid.node.childImageSharp.fluid;
                break;
            case 'd.png':
                arr[3] = fluid.node.childImageSharp.fluid;
                break; 
        }
    }

    let images = arr.map(img => {
        return <Img fluid={img}/>
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