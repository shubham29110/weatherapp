import React from 'react';
import { css } from '@emotion/core';
import {connect} from 'react-redux'
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div name='loading'>
   
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.props.loading}
        />
      </div> 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.weather.loading
})

export default  connect(mapStateToProps,null)(Loading);