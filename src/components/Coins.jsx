import React,{useEffect} from 'react'
import axios from "axios"
import { server } from '../index'
import { useState } from 'react'
import { Button, Container, Heading, HStack, Radio, RadioGroup, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import { Image,Text } from '@chakra-ui/react'
import Exchangecoin from "./Exchangecoin"
import Error from './Error'


const Coins = () => {
    const [coins,setcoins] = useState([])
    const [loading,setloading] = useState([true])
    const [error,seterror] = useState([false])
    const [page,setpage] = useState(1)
    const [currency,setcurrency] = useState("inr")
    const currencysymbol = currency=="inr"?"₹":currency=="eur"?"€":"$";

    const changepage = (page) =>{
        setpage(page);
        setloading(true); 
    }

    const btns = new Array(132).fill(1);
  useEffect(() => {
    const fetchcoin = async()=>{
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setcoins(data);
        setloading(false);
    };
    fetchcoin();
  }, [currency,page])

  // if(error) return <Error/>

  
    return (
    <Container maxW={"container.xl"} > 
    {loading ? (<Loader/>) :(

            <>
            <RadioGroup defaultValue={currency} onChange={setcurrency} p={"8"}>
                <HStack spacing={"4"} >
                    <Radio value='inr'>INR</Radio>
                    <Radio value='usd'>USD</Radio>
                    <Radio value='eur'>EUR</Radio>
                </HStack>
            </RadioGroup>
        <HStack wrap={'wrap'} justifyContent={"space-evenly"}>
      {
          coins.map((i)=>(
              <Exchangecoin id={i.id} key={i.id} name={i.name} price={i.current_price} symbol={i.symbol} img={i.image} currencysymbol={currencysymbol}/>
              ))
            }
    </HStack>
    <HStack w={"full"}  overflowX={"scroll"} overflowY={"hidden"} p={"8"} >
        {
            btns.map((item,index)=>(
                <Button key={index} bgColor={"blackAlpha.900"} color={"white"} onClick={()=>changepage(index+1)}>{index +1}</Button>       
            ))
        }
    </HStack>
    </>
            ) 
    }
    </Container>
  )
}



export default Coins