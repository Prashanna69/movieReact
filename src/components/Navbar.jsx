import {
  Avatar,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Wrap,
  WrapItem,
  MenuOptionGroup,
  MenuItemOption,
  AvatarBadge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogOverlay,
  AlertDialogContent,
  Button,
} from "@chakra-ui/react";
import {
  BellIcon,
  CheckCircleIcon,
  NotAllowedIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";

import Profile from "../pages/Profile";
import Setting from "../pages/Setting";

import { NavLink } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Flex as="nav" p="2rem" alignItems="center" bg="bisque">
        <Heading as="h1" fontSize="3rem">
          <NavLink to="/">Cineplex</NavLink>
        </Heading>
        <Spacer />
        <HStack spacing="1.5rem">
          <Popover placement="left" colorScheme="green">
            <PopoverTrigger>
              <BellIcon
                boxSize={8}
                _hover={{
                  color: "green",
                  cursor: "pointer",
                  transition: "0.5s",
                }}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader fontSize="1.2rem">Notifications</PopoverHeader>
              <PopoverBody>
                <Flex alignItems="center">
                  <BellIcon />
                  Dummy
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Menu>
            <MenuButton>
              <Wrap>
                <WrapItem>
                  <Avatar
                    size="md"
                    name="Profile"
                    src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW4lMjBwb3RyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  >
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </WrapItem>
              </Wrap>
            </MenuButton>
            <MenuList>
              <MenuOptionGroup defaultValue="asc" title="Status" type="radio">
                <MenuItemOption
                  value="act"
                  icon={<CheckCircleIcon color="Green" />}
                >
                  Active
                </MenuItemOption>
                <MenuItemOption value="hide" icon={<ViewOffIcon />}>
                  Hidden
                </MenuItemOption>
                <MenuItemOption
                  value="noDis"
                  icon={<NotAllowedIcon color="red" />}
                >
                  Don't Disturb
                </MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <NavLink to="/Profile">
                <MenuItem>Profile</MenuItem>
              </NavLink>
              <NavLink to="/Setting">
                <MenuItem>Setting</MenuItem>
              </NavLink>
              <MenuItem onClick={onOpen}>Logout</MenuItem>
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Log out?
                    </AlertDialogHeader>
                    <AlertDialogBody>Are you sure?</AlertDialogBody>
                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="red" onClick={onClose} ml={3}>
                        Logout
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </>
  );
}
