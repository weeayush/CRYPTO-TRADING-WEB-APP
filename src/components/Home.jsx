import React from 'react'
import { Box , Image,Text} from '@chakra-ui/react' 
import {motion} from "framer-motion"
import img1 from "../assests/btc.png"
export const Home = () => {
  return (
   <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    <motion.div style={{
        height:"80vh",
    }}
    animate={{
        translateY:"20px"
    }}
    transition={{
        duration:2,
        repeat:"Infinity",
        repeatType:"reverse",

    }}
    >

    <Image height={"full"} width={"full"} objectFit={"contain"} src={img1} filter={"grayscale(1)"}/>
    </motion.div>
    <Text fontSize={"6xl"} textAlign={"center"} fontweight={"thin"} color={"whiteAlpha.700"} mt={"-20"}>Acrypto</Text>
   </Box>
  )
}
