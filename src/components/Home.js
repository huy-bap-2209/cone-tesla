import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        lefBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        lefBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        lefBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        lefBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        lefBtnText="Order Now"
        RightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Solar Panels"
        backgroundImg="solar-roof.jpg"
        lefBtnText="Order Now"
        RightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        lefBtnText="Shop Now"
        RightBtnText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
`;
