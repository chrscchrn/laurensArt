import React from 'react'
import { Flex, Text, Box } from 'rebass'
import { Link } from 'gatsby'
// import { Switch } from '@rebass/forms'
{/* <Switch/> */}

const Nav = () => {
    return (
        <div>
            <Flex
                px={2}
                color='white'
                bg='black'
                alignItems='center'>
                <Text p={2} fontWeight='bold'>
                    YARR
                </Text>
                <Box mx='auto' />
                <Link variant='nav' to='/'>
                    Front
                </Link>
            </Flex>
        </div>
    )
}

export default Nav