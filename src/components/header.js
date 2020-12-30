import React from 'react'
import { Heading } from 'rebass'

const Header = ({ children, c, fontSize }) => {
    return (
        <Heading
            fontSize={fontSize}
            py={4}
            sx={{ 
                color: `${c}`,
                fontFamily: 'Rozha One', 
                fontWeight: 'normal',
                textShadow: "1px 1px #4c4c4c47" }}>
            {children}
        </Heading>
    )
}

export default Header