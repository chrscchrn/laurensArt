import React from 'react'
import { Box, Text } from 'rebass'
import Footer from '../components/footer/footer'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'
import Player from '../components/wave/player'

const Sound = () => {

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
            
            <div style={{ textAlign: "-webkit-center" }}>
                <Player/>
            </div>
            
            
            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black" fontSize={[2, 3, 4]}>
                    The theme that I chose to center my project around was the difference and relationship between linear time and our perception of it. I wanted to create something that would reflect some of my experiences I have had while walking around the city through a short narrative. 
                </Text>
                <br/>
                <Text c="black" fontSize={[2, 3, 4]}>
                    Throughout my sound design, there is a constant beeping from a pedestrian crossing in the background which beeps every second. This is an indicator of the passage of time that is constant and regular. Although it is not always noticeable and can be easily covered up, it is always there. 
                </Text>
                <br/>
                <Text c="black" fontSize={[2, 3, 4]}>
                    The new sounds that are later brought in, represent the person’s narrative we are following. As this person is walking throughout Providence, they hear sounds of children playing, doors opening and closing, regular hussle of the city. However, there are slight distortions in the sounds. Some parts are sped up, slowed down, and/or with a variation in pitch. From the point of view of the person whom we are following along with, this manipulation of the sound signifies the change of their perception of time and separation of the normal, linear concept of time. These represent moments when you may be getting lost in thought when 5 minutes seems like it turns into 5 seconds or vice versa. Time is still passing, getting louder, more apparent to this person, but there is a slight disconnection at times.
                </Text>
                <br/>
                <Text c="black" fontSize={[2, 3, 4]}>
                    The second part of the narrative after the build up of music and overwhelming white noise, is the person getting in their car. As they begin to drive (indicated by the start of the music and key noises), their disconnection with linear time grows, as sounds begin to distort into unrecognizable tones with different amplifications that can make it feel disorienting. After the person gets out of their car, is the first break of the constant beeps thus far. This person’s view of the concept of time is beginning to collapse to the point where their perception seems to be blending into reality, or so it feels. 
                </Text>
                <br/>
                <Text c="black" fontSize={[2, 3, 4]}>
                As the person is now out of their car and walking about again, the sounds they hear are ordinary. There’re busses passing, people talking, people walking, but they don’t sound like that anymore. They’re so broken down that they are unrecognizable. They get louder and louder with the beeping, until it cuts off and time stops again. A few moments pass and we can hear the person breathing heavily. The representation of linear time (beeping) has been stopped, but the person holds this power now. Each inhalation and exhalation marks one second passing, so although the beeping has ended, time refuses to stop and carries itself through this person. The breathing eventually ceases, and time regains its strength to start again.
                </Text>
            </Box>
            <Footer/>
        </Layout>
    )
}

export default Sound