// react
import React, { useEffect } from "react";
// react-router-dom
import { useHistory } from "react-router-dom";
// styles
import { Contain, Block } from "../../styles/global/structure";
import { Paragraph } from "../../styles/global/type";

export default function ThankYou() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push(`/`);
    }, 4000);
  }, []);

  return (
    <Contain
      width="80%"
      height="80vh"
      display="flex"
      justify="center"
      align="center"
    >
      <Block
        width="100%"
        display="flex"
        direction="column"
        justify="center"
        align="center"
      >
        <Paragraph fontSize="2.4rem" margin="0 0 2rem 0">
          Thank you for submitting a missing item. We will research its safety
          and make sure it gets added to the database!
        </Paragraph>

        <Paragraph fontSize="1.4rem">Taking you back home...</Paragraph>
      </Block>
    </Contain>
  );
}
