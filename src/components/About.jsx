import { Box ,Text,Image, HStack ,VStack, Button} from '@chakra-ui/react'
import React from 'react'
import { Heading ,Link } from '@chakra-ui/react'
import img3 from "../assests/btc.png"
import vid from "../assests/crypto.mp4"
import { motion } from 'framer-motion'

export const About = () => {
  return (
      <div style={{
        width:"full",
        height:"full",
        position:"relative",
        flexWrap:"wrap",

      }}>
        <video src={vid} autoPlay muted loop style={{
            objectFit:'contain',
            alignContent:'center',
            
        }}/>

        <div style={{
            display:"flex",
            position:"absolute",
            alignItems:"center",
            justifyContent:"center",
            top:"5%",

        }}>
            <VStack>

            <Heading color={"red.600"} fontSize={"8xl"} >Our Mission</Heading>
            <VStack py={"20"} alignItems={"center"} justifyContent={"center"} >
            <Text alignItems={"center"} letterSpacing={"widest"} padding={"4"} fontSize={"4xl"} fontWeight={"600"} color={"whiteAlpha.900"} mx={"60"} >Powered by cryptocurrency, the future of the internet: Web3 will be more fair and equitable, owned by the builders, creators and users.</Text>
    <Text alignItems={"center"}  py={"30"} fontSize={"5xl"} fontWeight={"600"} color={"whiteAlpha.900"} >We believe it is your basic right to control your money, data and identity.</Text>
    <motion.div style={{
        padding:"100px",
        height:"100%",
    }}    
        animate={{
            translateX:"10px",
            translateY:"10px",
        }}
        transition={{
            duration:"2",
            repeat:"Infinity",
            repeatType:"reverse",
        }}
    >
    <Button p={"7"} fontFamily={"heading"} fontSize={"3xl"} background={"none"} border={"4px"} borderColor={"whiteAlpha.900"} borderRadius={"2"} color={"whiteAlpha.900"} _hover={"none"}><a href='/coins'>Start Your Journey</a></Button>
    </motion.div>
            </VStack>
            </VStack>

        </div>
        </div>
  )
}
