import React, { useEffect } from 'react'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby"
import sortFiles from '../func/sortFiles'


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
    }, [edges])
    
    let images = edges.map(i => {
        return <Img fluid={i.node.childImageSharp.fluid} alt=""/>
    })

    return (
        <Layout>
            <Nav bg="pinkDark"/>
            {images}
        </Layout>
    )
}

export default Scrapbook