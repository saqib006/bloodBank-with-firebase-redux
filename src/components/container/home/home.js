import React, {Component} from 'react';
import SideBar from '../main/sideBar';
import authAction from '../../../store/action/authAction';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

class Home extends Component{


    constructor(props){
        super(props);

        this.state = { openDrawer: false };
    }

    toggleDrawer = open => {
        this.setState({ openDrawer: open });
      };

    componentWillReceiveProps(nextProps){
        if(!nextProps.user){
            this.props.history.replace("/");
        }
    }

    listHandler = (text) => {
        if(text == "Home"){
            this.props.history.replace("/home")
        }
        else if (text == "Donate Blood"){
            this.props.history.replace("/donor")
        }
        else{
            this.props.history.replace("/needer");
        }
    }

    render(){
        return(
            <div>
                <SideBar openDrawer={this.state.openDrawer} toggleDrawer={this.toggleDrawer} listHandler={this.listHandler} userName={this.props.user?this.props.user.displayName:""} signOut={this.props.signOut} />
           
            

            <Grid container direction="row" justify="center" style={{padding: 50,}}>

           

            <Grid item xs={2}>
                <Button variant="contained" size="large" color="primary" onClick={()=>{this.props.history.replace("/donor")}}> Donor </Button>
            </Grid>
           

            <Grid item xs={2}>
                <Button variant="contained" size="large" color="primary" onClick={()=>{this.props.history.replace("/needer")}}> Needer </Button>
            </Grid>
            </Grid>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.authReducer.user,
        isLoading: state.authReducer.isLoading,
        isError: state.authReducer.isError,
        errMsg: state.authReducer.errMsg,
    }
  }


const mapDispatchToProps = (dispatch) => {
    return{
        signOut: ()=> { return dispatch(authAction.signOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);