import React, {Component} from 'react';

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

export default class Title4 extends Component {

    constructor() {
        super();

        this._onSubmit = this._onSubmit.bind(this);
        this._onBeneficiaryChange = this._onBeneficiaryChange.bind(this);
        this._onAmountChange = this._onAmountChange.bind(this);

        this.state = {
            submitted: false,
            submitMsg: '',
            Amount: 0,
            Beneficiary: ''
        };
    }

    _onSubmit(event) {
        event.preventDefault();
        console.log('Send to the api', this.state);

        const data = {Amount: this.state.Amount, Beneficiary: this.state.Amount};

        fetch('https://farmerbank.nl/transactions/Micro', { body: JSON.stringify(data), method: 'post'}).then((result) => {
            console.log('result: ', result);
            this.setState({submitted:true, submitMsg: 'Just kidding ;-)'});
        }).catch(() => {
            this.setState({submitted:true, submitMsg: 'Something went wrong.'});
        });
    }

    _onBeneficiaryChange(event) {
        this.setState({Beneficiary: event.target.value});
    }

    _onAmountChange(event) {
        this.setState({Amount: event.target.value});
    }

    render() {
        const {submitted, submitMsg} = this.state;
        let classes = classnames([
            CLASS_ROOT,
            `${CLASS_ROOT}--left-align`,
            `${CLASS_ROOT}--column-reverse`
        ]);

        return (
            <InfographicSection className={classes} direction="row" colorIndex="neutral-1">
                <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
                    <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>Get FREE money!</Headline>
                    <Headline className={`${CLASS_ROOT}__desc`} size="small">All Farmer Bank custumers receive free
                        money. It really is free</Headline>
                    <Box direction="row" responsive={false} align="center" wrap={true}>
                        {!submitted &&
                        <Form onSubmit={this._onSubmit}>
                            <header><h1>Money dispenser</h1></header>
                            <FormFields>
                                <fieldset>
                                    <FormField label="Name" htmlFor="taskInput"
                                               help="what's your name?">
                                        <input id="taskInput" name="name" type="text"
                                               ref="taskInput" onChange={this._onBeneficiaryChange}/>
                                    </FormField>
                                    <FormField label="Money" htmlFor="taskInput"
                                               help="how much € do you want?">
                                        <input id="taskInput" name="money" type="number"
                                               ref="taskInput" onChange={this._onAmountChange}/>
                                    </FormField>
                                </fieldset>
                            </FormFields>
                            <Footer pad={{vertical: 'medium'}}>
                                <Button label="Make it rain!" primary={true}
                                        onClick={this._onSubmit} type="submit"/>
                            </Footer>
                        </Form>}
                        {submitted &&
                            <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h4" strong={true}>{submitMsg}</Heading>
                        }


                    </Box>
                    {!submitted &&
                    <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h4" strong={true}>in expected Sharing Economy
                        revenues by 2025</Heading>}
                </Box>
                <Box className={`${CLASS_ROOT}__col-1`} pad={{vertical: "medium"}}>
                    <Home size="huge" colorIndex="light-1"/>
                </Box>
            </InfographicSection>
        );
    }
};
