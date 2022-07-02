import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import { Main, Sidebar, Wrapper } from "../../components";

export const Home: FC = () => {
  return (
    <Wrapper>
      <Box w="full">
        <Grid h="100vh" templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={7}>
            <Main />
          </GridItem>
          <GridItem colSpan={2}>{/* ads */}</GridItem>
        </Grid>
      </Box>
    </Wrapper>
  );
};
