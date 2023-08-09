import { EditIcon, InfoIcon, TimeIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Spacer,
  Text,
  useDisclosure,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";

import React from "react";

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

import { useLoaderData } from "react-router-dom";

export default function Profile() {
  const { profile, data } = useLoaderData();
  const { User_Id, Name, Address1, Address2, Email, Phone, Profile, Country } =
    profile;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalDisclosure = useDisclosure();

  const drawerDisclosure = useDisclosure();

  const openEdit = () => {
    drawerDisclosure.onOpen();
  };
  return (
    <div>
      <Flex alignItems="center">
        <Avatar size="xl" src={Profile} ml="2rem"></Avatar>
        <Flex flexDirection="column">
          <Heading ml="2rem">{Name}</Heading>
          <Text ml="2rem" fontFamily="bold">
            User ID:
            <Text as="span" bg="gray.100" ml="1em" p="5px" borderRadius="2rem">
              {User_Id}
            </Text>
          </Text>
        </Flex>
        <Spacer />
        <HStack spacing={2}>
          <Button
            onClick={openEdit}
            colorScheme="blackAlpha"
            leftIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Edit</DrawerHeader>
              <Divider />
            </DrawerContent>
          </Drawer>
          <Button leftIcon={<InfoIcon />}>Reset Password</Button>
        </HStack>
      </Flex>
      <Flex>
        <Card bg="white" minW="500px" h="auto" ml="5rem" mt="3rem">
          <CardHeader>
            <Heading fontSize="2rem">Basic Details</Heading>
          </CardHeader>
          <Divider />
          <HStack>
            <CardBody>
              <List>
                {Object.entries(profile).map(([key, value]) => {
                  return (
                    key !== "Profile" && (
                      <ListItem key={key}>
                        <Heading size="sm" textTransform="uppercase">
                          {key}
                        </Heading>
                        <Text
                          pt="2"
                          fontSize="md"
                          color="gray"
                          cursor="inherit"
                        >
                          {value}
                        </Text>
                        <Divider />
                      </ListItem>
                    )
                  );
                })}
              </List>
            </CardBody>
          </HStack>
        </Card>
        <Flex flexDirection="column">
          <Card bg="white" minW="500px" h="auto" ml="2rem" mt="3rem">
            <CardHeader>
              <Heading>Stats</Heading>
            </CardHeader>
            <CardBody>
              {data && (
                <BarChart width={600} height={200} data={data || []}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Legend />
                  <Bar dataKey="uv" fill="#8884d8" />
                  <Bar dataKey="pv" fill="#82ca9d" />
                  <Bar dataKey="amt" fill="#ffc658" />
                </BarChart>
              )}
            </CardBody>
          </Card>
          <Divider />
          <Card bg="white" minW="500px" h="auto" ml="2rem" mt="1.5rem">
            <CardHeader>
              <Heading>Data Management</Heading>
            </CardHeader>
            <Divider />
            <CardBody>
              <AlertDialog isOpen={isOpen} onClose={onClose}>
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Delete Customer
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button onClick={onClose}>Cancel</Button>
                      <Button colorScheme="red" onClick={onClose} ml={3}>
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
              <Button colorScheme="red" maxW="170px" onClick={onOpen}>
                Delete Account
              </Button>
              <Text color="gray" mt="1rem" fontSize="1.1rem">
                Remove this customer's chart if he requested that, if not please
                be aware that what has been deleted can never brought back
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </div>
  );
}
export const profileLoader = async () => {
  const res = await fetch("http://localhost:4000/User");
  return res.json();
};
export const dataLoader = async () => {
  const res = await fetch("http://localhost:3000/data");
  return res.json();
};

export const resolveProfileData = async () => {
  const profile = await profileLoader();
  const data = await dataLoader();

  return {
    profile,
    data,
  };
};
