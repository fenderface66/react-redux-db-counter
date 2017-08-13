/*
 * ResultsTable
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getVariables } from 'containers/App/actions';
import { makeSelectResults } from 'containers/App/selectors';
import  Wrapper  from './Wrapper';
import Row from './Row';

export class ResultsTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderTableRows() {
    const rows = [];
    this.props.results.map((result, index) => {

      if (index < 99) {
        if (result.name === null) {
          result.name = 'Null';
          result.age = 'N/A';
        } else {
          result.age = Math.ceil(result.age);
        }
        rows.push(
           <Row key={'Index-' + index}>
             <td>{(result.name.charAt(0).toUpperCase() + result.name.slice(1))}</td>
             <td>{result.count}</td>
             <td>{result.age}</td>
           </Row>);
      } 
    })
    return rows;
  }

  renderUnlistedStats() {
    if (this.props.results.length > 100) {
      return(
        <div>
          <p>There are {(this.props.results.length - 100)} items not being shown</p>
        </div>
      );
    }
  }

  render() {
    return (
      <Wrapper>
        {this.renderUnlistedStats()}
        <table>
          <thead>
            <tr>
              <th>{(this.props.results[0].type.charAt(0).toUpperCase() + this.props.results[0].type.slice(1))}</th>
              <th>Count</th>
              <th>Avg Age</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      </Wrapper>
    );
  }
}

ResultsTable.propTypes = {
  results: React.PropTypes.array,
  chosenVariable: React.PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  results: makeSelectResults(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, null)(ResultsTable);
