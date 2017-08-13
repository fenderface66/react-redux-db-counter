/*
 * SelectForm
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectVariables, makeSelectResults, makeSelectChosenVariable } from 'containers/App/selectors';
import { getResults, changeVariable } from 'containers/App/actions';
import Wrapper from './Wrapper';
import Option from './Option';

export class SelectForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
		const element = document.getElementById('varSelect');
    element.value = this.props.chosenVariable;
	}
	
	renderVariables() {
      const options = [];
      this.props.variables.map((variable, index) => {
        const key = `option${index}`;
        options.push(<Option key={key}>{variable}</Option>);
      })
      return options;
  }

  render() {
    let positionClass; 
    if (this.props.results === null) {
     positionClass = 'intro';
    }
    return (
      <Wrapper className={positionClass}>
          <form onSubmit={(evt) => this.props.onFormSubmit(evt)}>
              <label htmlFor="varSelect">
                  Please select the variable you would like to view
              </label>
              <select id="varSelect" name="varSelect" onChange={(evt) => this.props.onVariableChange(evt)}>
                {this.renderVariables()}
              </select>
              <input type="submit" value="Search" />
          </form> 
      </Wrapper>
    );
  }
}

SelectForm.propTypes = {
  variables: React.PropTypes.array,
	results: React.PropTypes.array,
	chosenVariable: React.PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
      onFormSubmit: (evt) => { 
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(getResults()) 
        },
      onVariableChange: (evt) => { 
        dispatch(changeVariable(evt.target.value)); 
    },
  };
}

const mapStateToProps = createStructuredSelector({
  variables: makeSelectVariables(),
  results: makeSelectResults(),
	chosenVariable: makeSelectChosenVariable(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SelectForm);
