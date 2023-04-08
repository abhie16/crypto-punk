import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import imgSrc from "../assests/btc.png"

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={"85vh"}  pb={'8'}>
        <Image w={'full'} h={'full'} objectFit={'contain'} src={imgSrc} filter={'grayscale(.5)'} />
      <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} mt={'-20'}>Crypto Punk</Text>
    </Box>
  )
}

export default Home