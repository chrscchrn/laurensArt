import React from 'react'
import { Flex, Text, Box } from 'rebass'
import { Link } from 'gatsby'
// import { Switch } from '@rebass/forms'
{/* <Switch/> */}

const Nav = () => {
    return (
        <Flex
            px={2}
            color='black'
            bg='primary'>
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
