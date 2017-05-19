import React, { Component } from 'react';


import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
// import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';

import InfographicSection from '../components/InfographicSection';
import Home from 'grommet/components/icons/base/Home';

const CLASS_ROOT = "title-section";

// export default function Title4() {
//   let classes = classnames([
//     CLASS_ROOT,
//     `${CLASS_ROOT}--left-align`,
//     `${CLASS_ROOT}--column-reverse`
//   ]);

export default class Title4 extends Component {


  constructor () {
    super();

    this._onSubmit = this._onSubmit.bind(this);
    this._onItemChange = this._onItemChange.bind(this);
    this._onStatusChange = this._onStatusChange.bind(this);

    this.state = {
      item: undefined,
      status: undefined
    };
  }

  _onSubmit (event) {
    event.preventDefault();
    if (this.state.item) {
      this.props.onSubmit({
        item: this.state.item,
        status: this.state.status || 'ok'
      });
    }
  }

  _onItemChange (event) {
    this.setState({item: event.target.value});
  }

  _onStatusChange (event) {
    this.setState({status: event.target.value});
  }

  render () {
    let classes = classnames([
      CLASS_ROOT,
      `${CLASS_ROOT}--left-align`,
      `${CLASS_ROOT}--column-reverse`
    ]);

    return (
      <InfographicSection className={classes} direction="row" colorIndex="neutral-1">
        <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
          <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>Get FREE money!</Headline>
          <Headline className={`${CLASS_ROOT}__desc`} size="small">All Farmer Bank custumers receive free money. It really is free</Headline>
          <Box direction="row" responsive={false} align="center" wrap={true}>

          <Form onSubmit={this._onSubmit}>
              <header><h1>Add Task</h1></header>
              <FormFields>
                <fieldset>
                  <FormField label="Task" htmlFor="taskInput"
                    help="what's to be done?">
                    <input id="taskInput" name="task" type="text"
                      ref="taskInput" onChange={this._onItemChange} />
                  </FormField>
                  <FormField label="Status" htmlFor="statusInput">
                    <select id="statusInput" name="status"
                      onChange={this._onStatusChange}>
                      <option value="ok">Done</option>
                      <option value="warning">Due Soon</option>
                      <option value="critical">Past Due</option>
                    </select>
                  </FormField>
                </fieldset>
              </FormFields>
              <Footer pad={{vertical: 'medium'}}>
                <Button label="OK" primary={true}
                  onClick={this._onSubmit} type="submit"/>
              </Footer>
            </Form>

          </Box>
          <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h4" strong={true}>in expected Sharing Economy revenues by 2025</Heading>
        </Box>
        <Box className={`${CLASS_ROOT}__col-1`} pad={{vertical:"medium"}}>
          <Home size="huge" colorIndex="light-1" />
        </Box>
      </InfographicSection>
    );
  }
};
