import React from 'react'
import { Heading } from 'rebass'

const Header = ({ children, c }) => {
    return (
        <Heading
            fontSize={[ 5, 6, 7 ]}
            py={4}
            sx={{ 
                color: `${c}`,
                fontFamily: 'Rozha One', 
                fontWeight: 'normal' }}>
            {children}
        </Heading>
    )
}

export default Header