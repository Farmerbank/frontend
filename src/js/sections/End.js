import React from 'react';

import InfographicSection from '../components/InfographicSection';
import EndButton from '../components/EndButton';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';
import Group from 'grommet/components/icons/base/Group';

export default function End(props) {
  return (
    <InfographicSection className="infographic__section infographic__section--end"
      colorIndex="light-2">
      <Box direction="row" justify="center" align="center">
        <Box pad="large" alignSelf="start">
          <Group size="huge" colorIndex="neutral-2" />
        </Box>
        <Box>
          <Headline size="large">We beleive Farmer Bank will be
            a disruptive innovation in the banking industry</Headline>
          <Button href="mailto:info@farmerbank.nl" label="Contact us"
            primary={true} />
        </Box>
      </Box>
      <EndButton onClick={props.onEndClick}/>
    </InfographicSection>
  );
};
