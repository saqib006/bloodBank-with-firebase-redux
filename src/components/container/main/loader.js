import React, {Component} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {connect} from 'react-redux';
import Fade from '@material-ui/core/Fade';

class Loader extends Component {
    render(){
        return (
            <div style={{flexGrow:1}}>
                <Fade in={this.props.isLoading} unmountOnExit>
                <LinearProgress />
                </Fade>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        isLoading: state.authReducer.isLoading
    }
}


export default connect(mapStateToProps, null) (Loader);