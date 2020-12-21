import React from 'react'
import { Flex, Text, Box } from 'rebass'
import { Link } from 'gatsby'
// import './nav.css'

const Nav = ({ bg }) => {
    return (
        <Flex
            className="nav"
            px={2}
            color='black'
            bg={bg}>
            <Text p={3}>
                YARR
            </Text>
            <Box mx='auto' />
            <Text p={3}>
                <Link variant='nav' p={3} to='/'>
                    Home
                </Link>
            </Text>
        </Flex>
    );
}

export default Nav
