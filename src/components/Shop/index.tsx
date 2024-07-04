import React from "react";
import { useRouter } from "next/router";
import { Grid, Card, CardContent, Link, Block, Text } from "vcc-ui";

import api from "public/api/cars.json";

const Shop: React.FC = () => {
  const router = useRouter();
  const { carId } = router.query;
  let _currentCar = api.filter((_obj) => _obj?.id == carId)?.[0];

  return (
    <Card>
      <CardContent>
        <Grid>
          <span style={{ height: "var(--totalHeight)", display: "flex" }}>
            <Block extend={{ textAlign: "start" }}>
              <Text subStyle="inline-link">{_currentCar?.bodyType}</Text>
              <Text subStyle="emphasis">
                {_currentCar?.modelName}&nbsp;&nbsp;
                <Text subStyle="bates">{_currentCar?.modelType}</Text>
              </Text>
              <img src={_currentCar?.imageUrl} width="300px" />
              <Link href={"/"} arrow="right">
                Home
              </Link>
            </Block>
          </span>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Shop;
