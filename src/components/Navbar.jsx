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
  Tooltip,
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

export default function Navbar() {
  return (
    <>
      <Flex as="nav" p="2rem" alignItems="center" bg="bisque">
        <Heading as="h1" fontSize="3rem">
          <NavLink to="/">Cineplex</NavLink>
        </Heading>
        <Spacer />
        <HStack spacing="1.5rem">
          <Popover placement="left">
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
              <MenuItem>
                <NavLink to="/Profile">Profile</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/Setting">Setting</NavLink>
              </MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </>
  );
}
