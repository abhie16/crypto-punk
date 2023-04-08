import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={['16','8']}>
        <Stack direction={['column','row']} h={'full'} alignItems={'center'} >
            <VStack w={'full'} alignItems={['center','flex-start']}>
                <Text fontWeight={'bold'}>About</Text>
                <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>
                    Get Information about all the Crypto exchanges platform with their ranking. Know more about the CryptoCurrencies and its price in
                    real time with trading chart according to the ranking.
                </Text>
            </VStack>
            <VStack w={'full'}>
                <Text fontSize={'sm'} letterSpacing={'widest'}>Made With ❤️ by Abhishek</Text>
                <HStack>
                    <a href="https://www.github.com/abhie16" target='_blank' rel="noopener noreferrer"><AiFillGithub size={'45'} /></a>
                    <a href="https://www.linkedin.com/in/abhie16" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={'45'}  /></a>
                </HStack>
            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer