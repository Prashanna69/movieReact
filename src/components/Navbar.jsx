import { Avatar, Button, Flex, HStack, Heading, Spacer, Wrap, WrapItem, transition } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

export default function Navbar ()
{
    return (
        <>
            <Flex as='nav' p='2rem' alignItems='center' bg='bisque'>
                <Heading as='h1' fontSize='3rem'>
                    Cineplex
                </Heading>
                <Spacer />
                <HStack spacing='1.5rem'>
                <Wrap>
                    <WrapItem>
                        <Avatar size='md' name="Profile" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW4lMjBwb3RyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                    </WrapItem>
                    </Wrap>
                    <BellIcon boxSize={8} _hover={{color: 'green', cursor:'pointer', transition:'0.5s'}} />

                <Button colorScheme="green">Logout</Button>
                </HStack>
            </Flex>
        </>
    )
}