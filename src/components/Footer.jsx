import { Avatar, Box, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { HStack,Text } from '@chakra-ui/react';
import img2 from "../assests/founder.jpg"
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whatsapp.700"} minH={"48"} px={"16"}
    py={["16","8"]}
    >

        <Stack direction={["column","row"]} h={"full"} alignItems={"full"} color={"whiteAlpha.600"}>
            <VStack w="full" alignItems={["center","flex-start"]}>
                <Text fontWeight={"bold"}><a href='/aboutus'>About US</a></Text>
                <Text fontSize={"sm"} letterSpacing={'widest'} textAlign={["center","left"]}>We Are Crypto Trading App In India</Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]} src={img2}/>

                <Text>Our Founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer