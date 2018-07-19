import React, {Component} from 'react';
import DbAction from '../../../store/action/dbAction';
import authAction from '../../../store/action/authAction';
import {connect} from 'react-redux';
import SideBar from '../main/sideBar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Selector from '../main/selector';

class Donor extends Component{
    constructor(props){
        super(props);
        this.state={
            numInput: '',
            bloodGroup: ''
        }
        console.log(props)
    }

    toggleDrawer = open => {
        this.setState({ openDrawer: open });
      };

    componentWillReceiveProps(nextProps) {
        if (!nextProps.user) {
          this.props.history.replace("/");
        }
      }

      inputHandler = (eve) =>{
          this.setState({[eve.target.name]: eve.target.value})
      }


      btnHandler = () => {
          let donorInfo = {
                uid: this.props.user.uid,
                name: this.props.user.displayName,
                email: this.props.user.email,
                phoneNumber:this.state.numInput,
              bloodGroup:this.state.bloodGroup
          }

          console.log("donor", donorInfo)
          this.props.pushDonor(donorInfo);
          this.setState({
              numInput: '',
              bloodGroup: '',
              openDrawer:false
          })
      }

      listHandler = text => {
        if(text == "Home"){
            this.props.replace("/home");
        }
        else if(text == "Donate Blood"){
            this.props.replace("/donor")
        }
        else{
            this.props.history.replace("/needer")
        }
      }

    render(){
        return(
            <div>
                <SideBar openDrawer={this.state.openDrawer} toggleDrawer={this.toggleDrawer} listHandler={this.listHandler} userName={this.props.user?this.props.user.displayName:""} signOut={this.props.signOut} />
                
                <Grid
                container
                direction="row"
                justify="center"
                style={{ padding: 10 }}
                >
                <Grid item xs={8}>
                    <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    className="nameInput"
                    disabled={true}
                    name="nameInput"
                    margin="normal"
                    value={this.props.user?this.props.user.displayName:""}
                    />
                </Grid>
                </Grid>
                
                
                
                
                <Grid container justify='center' direction='row' style={{padding:20}}>
                    <Grid item xs={8}>
                    <TextField
                    required
                    fullWidth
                    id='email'
                    label='email'
                    className='emailInput'
                    disabled={true}
                    name='emailInput'
                    margin='normal'
                    value={this.props.user?this.props.user.email:""}
                    />
                    </Grid>
                </Grid>



                
                <Grid
          container
          direction="row"
          justify="center"
          style={{ padding: 10 }}
        >
          <Grid item xs={8}>
            <TextField
              required
              fullWidth
              id="num"
              label="Enter phone number"
              className="numInput"
              disabled={false}
              name="numInput"
              margin="normal"
              onChange={this.inputHandler}
              value={this.state.numInput}
            />
          </Grid>
        </Grid>


                <Grid
                container
                direction="row"
                justify="center"
                style={{ padding: 10 }}
                >
                <Grid item xs={8} >
                <Selector valueInput={this.state.bloodGroup} name={"bloodGroup"} changeHandler={this.inputHandler} />
                </Grid>
                </Grid>

             
                    <Grid
                container
                direction="row"
                justify="center"
                style={{ padding:10,  }} 
                >
                <Grid item xs={8}  >
                    <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    style={{ backgroundColor: "#EF5350" }}
                    onClick={this.btnHandler}
                    
                    >
                    Donate Blood
                    <Icon ></Icon>
                    </Button>
                </Grid>
                </Grid>
        
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log('state', state)
    return{
        user: state.authReducer.user,
        isLoading: state.DbReducer.isLoading,
        isError: state.DbReducer.isError,
        errMsg: state.DbReducer.errMsg,
        donorList: state.DbReducer.donorList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: ()=> { 
            return dispatch(authAction.signOutSuc());
        },
       
        pushDonor: payload => {
            return dispatch(DbAction.addDonor(payload));
          },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donor);