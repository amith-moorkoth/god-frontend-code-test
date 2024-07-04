import React from "react";
import { View, Logo, Flex } from "vcc-ui";

function LearnPage() {
  return (
    <View marginTop="4" marginBottom="4">
      <Logo
        type="spreadmark"
        height={32}
        style={{ filter: "brightness(0) invert(1)" }}
      />
      {/**<div
        style={{
          marginTop: "10px",
          marginBottom: "30px",
          height: "2px",
          backgroundColor: "#e1dfdd",
          boxShadow: "0px 0px 2px 1px #e1dfdd",
        }}
      /> */}
    </View>
  );
}

export default LearnPage;
