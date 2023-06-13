import { Button, HStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <HStack p={'4'} shadow={"base"} bgColor={"blackAlpha.900"} alignItems="center" justifyContent={"center"}>
    <Button background={"none"} color={"whiteAlpha.900"}>
        <Link to="/">Home</Link></Button>
    <Button bgColor={"transparent"} color={"whiteAlpha.900"}><Link to="/exchange">Exchange</Link></Button>
    <Button bgColor={"transparent"} color={"whiteAlpha.900"}><Link to="/coins">Crypto</Link></Button>
    <Button bgColor={"transparent"} color={"whiteAlpha.900"}><Link to="/aboutus">About Us</Link></Button>
    </HStack>
    </>
  );
}

export default Header