import React, { Component } from 'react';

import scrollToTop from '../utils/scroll';

// import Tabs from 'grommet/components/Tabs';
// import Tab from 'grommet/components/Tab';
// import Box from 'grommet/components/Box';

// import InfographicSection from './InfographicSection';
// import Source from './Source';
// import ChartHeader from './ChartHeader';
import Title1 from '../sections/Title1';
import Title2 from '../sections/Title2';
// import Title3 from '../sections/Title3';
import Title4 from '../sections/Title4';
import Intro from '../sections/Intro';
// import LargerCohert from '../sections/LargerCohert';
// import FirstDigitalNatives from '../sections/FirstDigitalNatives';
// import SocialAndConnected from '../sections/SocialAndConnected';
// import SearchingForValue from '../sections/SearchingForValue';
// import LessMoneyToSpend from '../sections/LessMoneyToSpend';
// import BeyondTheBrand from '../sections/BeyondTheBrand';
// import ClickingToBuy from '../sections/ClickingToBuy';
// import RenterGeneration from '../sections/RenterGeneration';
// import ChangingOwnership from '../sections/ChangingOwnership';
import End from '../sections/End';

export default class Content extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.layout !== nextProps.layout) return true;
    else return false;
  }

  _onEndClick() {
    scrollToTop.scroll(200);
  }

  render() {
    return (
      <div>
      <Intro />
        <Title1 />



        <Title2 />



        <Title4 />

        <End onEndClick={this._onEndClick} />
      </div>
    );
  }
};
