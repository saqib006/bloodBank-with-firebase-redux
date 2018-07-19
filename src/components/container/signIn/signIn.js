import React, { Component}  from 'react';
import {connect} from 'react-redux';
import authAction from '../../../store/action/authAction';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';



class SignIn extends Component{


  constructor(props){
    super(props);

    console.log("dsasd",props)

    this.state = {
      email: "",
      pass: "",
      modal: false

    }
  }

  inputHandler = (eve) =>{
    this.setState({[eve.target.name]: eve.target.value})
  }

  signInHandler = () => {
    let user = {
      email: this.state.email,
      pass: this.state.pass
    }
    this.props.signIn(user)
    console.log('user', user)
  }

  componentDidMount(){
    this.props.checkUser();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user){
      this.props.history.replace("/home")
    }
    if(nextProps.isError){
      this.modalHandler(true);
    }
  }

  modalHandler = (state) => {
    this.setState({modal:state})
  }

  modalStyle() {
    const top = 50 + (Math.random() * 20) -10;
    const left = 50 + (Math.random() * 20) -10;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }
    render(){
        return(
            <div>
                <AppBar position="static">
        <Toolbar>
          
          <Typography variant="title" color="inherit" >
            Blood Bank
          </Typography>
         
        </Toolbar>
      </AppBar>


        <Grid container direction="column" alignItems="center">
        <Grid container direction="row" justify="center">
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                className="email"
                name="email"
                margin="normal"
                onChange={this.inputHandler}
                value={this.state.email}
                disabled={this.props.isLoading}
                
              />
            </Grid>
          </Grid>

          
          <Grid container direction="row" justify="center">
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="pass"
                label="Password"
                className="passInput"
                type="password"
                autoComplete="current-password"
                margin="normal"
                name="pass"
                onChange={this.inputHandler}
                value={this.state.pass}
                disabled={this.props.isLoading}
               
              />
            </Grid>
          </Grid>


          <Grid container direction="row" justify="center">
            <Grid item xs={12} md={6}>
              <Button
                color="primary"
                className="singIn"
                variant="outlined"
                onClick={this.signInHandler}
               disabled={this.props.isLoading}
               
              >Sign In</Button>
            </Grid>
          </Grid>

        </Grid>
       
        <Grid container direction="row" justify="center">
          <a
            onClick={() => (this.props.isLoading)?"":
              () => {
              this.props.history.replace("./signUp");
            }}
           
          >
            <Typography
              variant="body1"
              align="center"
              style={{ color: "blue", padding: "20px" }}
            >
              Don't have an account? SignUp here
            </Typography>
          </a>
        </Grid>
      
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return{
    user: state.authReducer.user,
    isLoading: state.authReducer.isLoading,
    isError: state.authReducer.isError,
    errMsg: state.authReducer.errMsg,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signIn: userPayload => { return dispatch(authAction.signIn(userPayload)); },
    checkUser : () => {return dispatch(authAction.checkUser());}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);