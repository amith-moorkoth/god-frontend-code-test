import React from "react";
import {
  SelectInput,
  Grid,
  Row,
  Col,
  Card,
  CardContent,
  Text,
  Spacer,
  Block,
  Link,
  Flex,
  View,
} from "vcc-ui";
import api from "public/api/cars.json";
import Image from "next/image";
import Chervon from "docs/chevron-circled.svg";

const GreatestRechargeCars: React.FC = () => {
  const [optionSelected, setoption] = React.useState(0);
  const [carselected, setcarselected] = React.useState("");

  React.useEffect(() => {
    // Check if window is defined to prevent errors during SSR or non-browser environment
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setoption(0);
        document.getElementById("scrollGenerator").scrollLeft = 0;
      };

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid>
          <select
            value={carselected}
            onChange={(e) => {
              setcarselected(e.target.value);
            }}
            style={{ width: "120px" }}
          >
            <option value="">--Select--</option>
            <option value="suv">SUV</option>
            <option value="estate">Estate</option>
            <option value="sedan">Sedan</option>
          </select>
          <span
            id="scrollGenerator"
            style={{
              height: "var(--totalHeight)",
              display: "flex",
              scrollBehavior: "smooth",
              overflow: "hidden",
            }}
          >
            {(api || []).map((_obj, i) => {
              if (carselected !== "") {
                if (_obj?.bodyType != carselected) {
                  return;
                }
              }
              return (
                <span key={"carloop" + i} style={{ margin: "10px" }}>
                  <Block extend={{ textAlign: "start" }}>
                    <Text subStyle="inline-link">{_obj?.bodyType}</Text>
                    <Text subStyle="emphasis">
                      {_obj?.modelName}&nbsp;&nbsp;
                      <Text subStyle="bates">{_obj?.modelType}</Text>
                    </Text>
                  </Block>
                  <img src={_obj?.imageUrl} width="300px" />

                  <Flex
                    extend={{
                      flexDirection: "row",
                      paddingLeft: "60px",
                    }}
                  >
                    <Link href={_obj?.id + "/learn"} arrow="right">
                      Learn
                    </Link>

                    <Link href={_obj?.id + "/shop"} arrow="right">
                      Shop
                    </Link>
                  </Flex>
                </span>
              );
            })}
          </span>

          <span style={{ position: "relative" }}>
            <span
              style={{ position: "absolute", right: "-20px", top: "-32px" }}
              className="hidden-on-mobile"
            >
              <img
                style={{ transform: "rotate(180deg)", marginRight: "10px" }}
                src={Chervon?.src}
                height={Chervon?.height}
                width={Chervon?.width}
                onClick={() => {
                  document.getElementById("scrollGenerator").scrollLeft -= 320;
                }}
              />

              <img
                src={Chervon?.src}
                height={Chervon?.height}
                width={Chervon?.width}
                onClick={() => {
                  setoption(optionSelected + 1);
                  document.getElementById("scrollGenerator").scrollLeft += 320;
                }}
              />
            </span>
            <span className="hidden-on-large" style={{ width: "100%" }}>
              <center>
                {(carselected != ""
                  ? (api || []).filter(
                      (__obj) => __obj?.bodyType == carselected,
                    )
                  : api || []
                ).map((_obj, i) => {
                  return (
                    <span key={"carloop-key" + i}>
                      <input
                        type="radio"
                        checked={optionSelected == i}
                        onClick={() => {
                          setoption(i);
                          document.getElementById(
                            "scrollGenerator",
                          ).scrollLeft = 320 * i;
                        }}
                      />
                    </span>
                  );
                })}
              </center>
            </span>
          </span>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GreatestRechargeCars;
