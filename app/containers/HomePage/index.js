/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getVariables } from 'containers/App/actions';
import { makeSelectVariables, makeSelectResults, makeSelectLoadingResults } from 'containers/App/selectors';
import ResultsTable from 'containers/ResultsTable';
import LoadingIndicator from 'components/LoadingIndicator';
import SelectForm from './SelectForm';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoad();
  }

  renderSelectForm() {
    if (this.props.variables !== null && !this.props.loadingResults) {
      return <SelectForm />;
    }
  }

  renderResultsTable() {
    if (this.props.results !== null && !this.props.loadingResults) {
      return <ResultsTable />;
    }
  }

  renderLoadingIndicator() {
    if (this.props.loadingResults) {
      return ( <LoadingIndicator />);
    }
  }

  render() {
    return (
      <div>
        {this.renderSelectForm()}
        {this.renderLoadingIndicator()}
        {this.renderResultsTable()}
      </div>
    );
  }
}

HomePage.propTypes = {
  variables: React.PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(getVariables());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  variables: makeSelectVariables(),
  results: makeSelectResults(),
  loadingResults: makeSelectLoadingResults(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
