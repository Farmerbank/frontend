import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';
import InfographicSection from '../components/InfographicSection';
import Cart from 'grommet/components/icons/base/Cart';

const CLASS_ROOT = "title-section";

export default function Title2() {
  let classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="accent-2">
      <Box className={`${CLASS_ROOT}__col-1`} pad={{vertical: "medium"}}>
        <Cart size="huge" colorIndex="grey-1" />
      </Box>
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>Recent Studies</Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">take care of your banking needs while you cook, watch television, make breakfast of even do the dishes</Headline>
        <Box direction="row" responsive={false} align="center">
          <Value
            value={97}
            colorIndex="grey-1"
            size="xlarge"
            units="%"
          />
        </Box>
        <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h4" strong={true}>
          of users are very enthusiastic about Farmer Bank
        </Heading>
      </Box>
    </InfographicSection>
  );
};
