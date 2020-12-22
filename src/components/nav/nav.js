import React from 'react'
import { Flex, Text, Box } from 'rebass'
import { Link } from 'gatsby'
import './nav.css'

const Nav = ({ bg }) => {
    return (
        <Flex
            className="nav"
            px={2}
            bg={bg}>
            <Text p={3} color="white">
                YARR
            </Text>
            <Box mx='auto' />
            <Text p={3}>
                <Link variant='nav' p={3} to='/' className="nav-link">
                    Home 
                </Link>
                {' '}
                <Link variant='nav' p={3} to='/work' className="nav-link">
                    Work
                </Link>
            </Text>
        </Flex>
    );
}

export default Nav
