import { Avatar, Button, Flex, HStack, Heading, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Tooltip, Wrap, WrapItem, MenuOptionGroup,MenuItemOption } from "@chakra-ui/react";
import { BellIcon, CheckCircleIcon, NotAllowedIcon, ViewOffIcon } from "@chakra-ui/icons";
import Profile from "../pages/Profile";
import { NavLink } from "react-router-dom";

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
                    <BellIcon boxSize={ 8 } _hover={ { color: 'green', cursor: 'pointer', transition: '0.5s' } } />
                    <Tooltip label='Open Menu'>
                    <Menu>
                            <MenuButton
                            >
                            <Wrap>
                                <WrapItem>
                                    <Avatar size='md' name="Profile" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW4lMjBwb3RyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                                </WrapItem>
                            </Wrap>
                        </MenuButton>
                            <MenuList>
                                <MenuOptionGroup defaultValue='asc' title='Status' type='radio'>
                                    <MenuItemOption value='act' icon={<CheckCircleIcon color='Green' />}>Active</MenuItemOption>
                                    <MenuItemOption value='hide' icon={<ViewOffIcon/>}>Hidden</MenuItemOption>
                                    <MenuItemOption value='noDis' icon={<NotAllowedIcon color='red'/>}>Don't Disturb</MenuItemOption>
                                </MenuOptionGroup>
                                <MenuDivider />
                                <MenuItem>
                                    <NavLink to='/profile'>
                                        Profile
                                    </NavLink>
                                </MenuItem>
                            <MenuItem >Logout</MenuItem>
                        </MenuList>
                        </Menu>
                        </Tooltip>

                </HStack>
            </Flex>
        </>
    )
}
