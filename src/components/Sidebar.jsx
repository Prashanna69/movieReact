import React from "react";
import { CalendarIcon, HamburgerIcon,AtSignIcon } from "@chakra-ui/icons";
import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, Heading, Divider, DrawerBody, List, ListItem, ListIcon, HStack, AvatarBadge } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <HamburgerIcon
                cursor='pointer'
                boxSize='2rem'
                ref={btnRef}
                onClick={isOpen ? onClose : onOpen}
            />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <Heading p='1rem'>
                        Cineplex
                    </Heading>
                    <Divider />
                    <DrawerBody>
                        <List p='2rem' mt='2rem' fontSize='20px' spacing={6}>
                            <ListItem alignItems='center'>
                                <NavLink to='/'>
                                <ListIcon as={CalendarIcon}/>
                                Dashboard
                                </NavLink>
                            </ListItem>
                            <ListItem alignItems='center'>
                                <NavLink to='/Profile'>
                                <ListIcon as={AtSignIcon}/>
                                    Profile
                                </NavLink>
                            </ListItem>
                            <ListItem alignItems='center'>
                                <NavLink to='/Setting'>
                                <ListIcon as={CalendarIcon}/>
                                 Setting
                                </NavLink>
                            </ListItem>
                        </List>
                    </DrawerBody>


                </DrawerContent>

            </Drawer>
        </>
    );
}
