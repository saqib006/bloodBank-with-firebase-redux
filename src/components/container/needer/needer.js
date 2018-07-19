import React, {Component} from 'react';
import {connect} from 'react-redux';
import SideBar from '../main/sideBar';
import Selector from '../main/selector';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DbAction from '../../../store/action/dbAction';
import authAction from '../../../store/action/authAction';

class Needer extends Component{
    constructor(props){
        super(props);

        this.state = { bloodInput: "", renderArray: [],openDrawer:false };
        console.log(props)
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.user) {
          this.props.history.replace("/");
        }
      }
      inputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      
      componentDidMount() {
        this.props.getDonor();
      }

      toggleDrawer = open => {
        this.setState({ openDrawer: open });
      };
      listHandler = text => {
        if (text == "Home") {
          this.props.history.replace("/home");
        } else if (text == "Donate Blood") {
          this.props.history.replace("/donor");
        } else {
          console.log("from" + text);
          this.props.history.replace("/needer");
        }
      };


      findAvailableUser(receipentArray){
        
          let array = [];
          console.log("at start sdfdsfds",array)
          this.props.donorList.find(obj => {
            receipentArray.forEach(value => {
                value.forEach(val => {
                    if(val == obj.bloodGroup){
                        array.push(obj)
                    }
                });
            });

            this.setState({renderArray: array})
          })

          
      }

      checkDonors = () => {
          let a = [];
          var b = this.state.bloodInput;
          switch(b){
            case "A+":
                a.push(["A+", "O+", "A-", "O-"]);
                this.findAvailableUser(a);
                break;
            case "B+":
                a.push(["B+", "O+", "B-", "O-"]);
                this.findAvailableUser(a);
                break;
        
            case "AB+":
                a.push(["AB+", "AB-", "O+", "O-", "A+", "A-", "B+", "B-"]);
                this.findAvailableUser(a);
                break;
        
            case "O+":
                a.push(["O+", "O-"]);
                this.findAvailableUser(a);
                break;
        
            case "A-":
                a.push(["A-", "O-"]);
                this.findAvailableUser(a);
                break;
        
            case "B-":
                a.push(["B-", "O-"]);
                this.findAvailableUser(a);
            break;
        
            case "AB-":
                a.push(["AB-", "O-", "A-", "B-"]);
                this.findAvailableUser(a);
                break;
        
            case "O-":
                a.push(["O-"]);
                this.findAvailableUser(a);
                break;
          }
      }

    render(){

      console.log("after render", this.state.renderArray)
        
        return(
            <div>
                <SideBar openDrawer={this.state.openDrawer} toggleDrawer={this.toggleDrawer} listHandler={this.listHandler} userName={this.props.user?this.props.user.displayName:""} signOut={this.props.signOut} />

                <Grid
          container
          direction="row"
          justify="center"
          style={{ padding: 10 }}
        >
        <Selector name="bloodInput" valueInput={this.state.bloodInput} changeHandler={this.inputHandler} />
        </Grid>


<Grid
          container
          direction="row"
          justify="center"
          style={{padding:50, }}
        >
          <Grid item xs={1}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ backgroundColor: "#E040FB",fontWeight:"bold" }}
              onClick={this.checkDonors}
            >
              Find Donor
            </Button>
          </Grid>
        </Grid>
       
<Grid
          container
          direction="row"
          justify="center"
          style={{padding:50, }}
        >
<Grid item xs={12}>
        <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Blood Group</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell numeric>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.renderArray.map((obj,index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {obj.bloodGroup}
                </TableCell>
                <TableCell >{obj.name}</TableCell>
                <TableCell >{obj.email}</TableCell>
                <TableCell numeric>{obj.phoneNumber}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
</Grid>
</Grid>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
    user: state.authReducer.user,
    donorList: state.DbReducer.donorList,
    isLoading: state.DbReducer.isLoading,
    isError: state.DbReducer.isError,
    errorMsg: state.DbReducer.errorMsg
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getDonor: () => {return dispatch(DbAction.getDonor())},
        signOut : () => {return dispatch(authAction.signOut())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Needer);