import { EditIcon, InfoIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Editable,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { BarChart, Bar } from "recharts";

import { useLoaderData } from "react-router-dom";

export default function Profile() {
  const users = useLoaderData();
  const { User_Id, Name, Address1, Address2, Email, Phone, Profile, Country } =
    users;

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page D",
      uv: 2000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page f",
      uv: 3780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page G",
      uv: 5780,
      pv: 2908,
      amt: 2000,
    },
  ];

  return (
    <>
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
          <Button colorScheme="blackAlpha" leftIcon={<EditIcon />}>
            Edit
          </Button>
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
                {Object.entries(users).map(([key, value]) => {
                  return (
                    key !== "Profile" && (
                      <ListItem key={key}>
                        <Heading size="sm" textTransform="uppercase">
                          {key}
                        </Heading>
                        <Text pt="2" fontSize="md" color="gray">
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
              <BarChart width={600} height={100} data={data}>
                <Bar dataKey="uv" fill="green" />
              </BarChart>
            </CardBody>
            <Divider />
          </Card>
          <Card bg="white" minW="500px" h="auto" ml="2rem" mt="3rem">
            <CardHeader>
              <Heading>Data Management</Heading>
            </CardHeader>
            <Divider />
            <CardBody>
              <Button colorScheme="red" maxW="170px">
                Delete Account
              </Button>
              <Text color="gray" mt="1rem" fontSize="1.1rem">
                Remove this customer’s chart if he requested that, if not please
                be aware that what has been deleted can never brought back
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </>
  );
}
export const profileLoader = async () => {
  const res = await fetch("http://localhost:4000/User");
  return res.json();
};
