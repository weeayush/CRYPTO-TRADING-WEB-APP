import React,{useEffect} from 'react'
import axios from "axios"
import { server } from '../index'
import { useState } from 'react'
import { Container, Heading, HStack, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import { Image,Text } from '@chakra-ui/react'

import Error from './Error'

export const Exchanges = () => {
  

    const [exchanges,setExchanges] = useState([])
    const [loading,setloading] = useState([true])
    const [error,seterror] = useState([false])

  useEffect(() => {
    const fetchexchanges = async()=>{
      try{

        const {data} = await axios.get(`${server}/exchanges`)
        setExchanges(data);
        setloading(false);
      }
      catch (error){
        seterror(true);
        setloading(false);
      }
    };
    fetchexchanges();
  }, [])

  // if(error) return <Error/>

  
    return (
    <Container maxW={"container.xl"} > 
    {loading ? <Loader/> :<>
    <HStack wrap={'wrap'} justifyContent={"space-evenly"}>
      {
        exchanges.map((i)=>(
          <Exchangecard key={i.id} name={i.name} rank={i.trust_score_rank} url={i.url} img={i.image}/>
        ))
      }
    </HStack>
    </>}
    </Container>
  )
}


const Exchangecard = ({name,img,rank,url})=>(
  <a href={url} target={"blank"}>
  <VStack w={"52"} shadow={'lg'} p={8} borderRadius="lg" transition={"all 0.3s"} m="4" css={
    {
      "&:hover":{
        transform:"scale(1.1)",
      }
    }
  }>
    <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"} />
    <Heading size={"md"} noOfLines={1}>{rank}</Heading>
    <Text noOfLines={1}>
      {name}
    </Text>
  </VStack>
  </a>
)


export default Exchanges