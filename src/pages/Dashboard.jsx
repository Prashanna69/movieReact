import {
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const movies = useLoaderData();

  return (
    <>
      <SimpleGrid
        column={4}
        minChildWidth={260}
        spacing="12px"
        p="50px"
        gap="2rem"
      >
        {movies &&
          movies.map((movie) => {
            const Poster =
              movie?.Poster ||
              " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNL-l1DzslAZMj7gcQsrVeAPiCRi-MTOTtgRUX19zSw&s";
            return (
              <Card maxW="lg" key={movie.Title}>
                <CardBody>
                  <Image src={Poster} borderRadius="lg" />
                  <Stack spacing={2}>
                    <Text fontSize="1.2rem" mt="5px">
                      {movie.Title}
                    </Text>
                    <Text>{movie.Released}</Text>
                    <Text fontSize="0.7rem">Rating : {movie.imdbRating}</Text>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
      </SimpleGrid>
    </>
  );
}

export const movieLoader = async () => {
  const res = await fetch("http://localhost:3000/movie");
  return res.json();
};
