import { PlusSquareIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const movies = useLoaderData();

  return (
    <>
      <Heading as="h2" mt="2rem" ml="2.5rem">
        Dashboard
      </Heading>
      <SimpleGrid
        column={4}
        minChildWidth={260}
        spacing="12px"
        p="50px"
        gap="1rem"
      >
        {movies &&
          movies.map((movie) => {
            return (
              <Card maxW="lg" key={movie.imdbId}>
                <CardBody>
                  <Image
                    src={movie?.Poster}
                    fallbackSrc="https://placehold.jp/daddfb/ffffff/239x354.png?text=...."
                  />
                  <Stack spacing={2}>
                    <Text fontSize="1.3rem" mt="5px">
                      {movie.Title}
                    </Text>
                    <Text>{movie.Released}</Text>
                    <Text fontSize="0.8rem">Rating : {movie.imdbRating}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button colorScheme="blue" leftIcon={<ViewIcon />}>
                      Watch
                    </Button>
                    <Tooltip label="Add to Wishlist">
                      <Button
                        colorScheme="whatsapp"
                        leftIcon={<PlusSquareIcon />}
                      >
                        Wishlist
                      </Button>
                    </Tooltip>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
      </SimpleGrid>
    </>
  );
}

export const movieLoader = async () => {
  const res = await fetch("http://localhost:5000/movie");
  return res.json();
};
