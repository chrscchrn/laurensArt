import React from 'react'
import { Box, Text } from 'rebass'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'

const Utensils = () => {
    return (
        <Layout>
            <Nav bg="purplePrimary"/>
            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    textAlign: 'center',
                }}>
                <Header c="black"fontSize={[4, 5, 6]}>
                    Listen, Listen
                </Header>

            </Box>

        </Layout>
    )
}

export default Utensils