import React from 'react'
import { Heading } from 'rebass'

const Header = ({ children }) => {
    return (
        <Heading
            fontSize={[ 5, 6, 7 ]}
            py={5}
            sx={{ 
                color: "black",
                fontFamily: 'Rozha One', 
                fontWeight: 'normal' }}>
            {children}
        </Heading>
    )
}

export default Header