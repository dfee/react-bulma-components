import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Container, Title } from "@/elements";
import { Section } from "@/layout";
import { SECTION_SIZES } from "@/layout/section/section";

import { iterableToSelectObject } from "../helpers";

export const knobs = {
  size: (title: string = "Size") =>
    select(title, iterableToSelectObject(SECTION_SIZES, { undefined: "" }), ""),
};

storiesOf("Layout/Section", module).add("Default", () => {
  const size = knobs.size();
  return (
    <div>
      <Section size={size || undefined}>
        <Container>
          <Title>Section</Title>
          <Title<"h2"> as="h2" subtitle>
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you are currently reading
          </Title>
        </Container>
      </Section>
    </div>
  );
});
