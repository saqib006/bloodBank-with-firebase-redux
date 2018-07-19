import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";


class Error extends Component {

constructor(props){
    super(props);
    this.state={ modalState: false}

}
componentWillReceiveProps(nextProps){
    if(nextProps.isError){
        this.modalHandler(true);
      }
}


  modalHandler = state => {
    this.setState({ modalState: state });
  };
  render() {
    return (
      <Grid container direction="row" justify="center" style={{ padding: 50 }}>
        <Grid item xs={8}>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.modalState}
            onClose={() => this.modalHandler(false)}
          >
            <Paper>
              {" "}
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "#FFF",
                  top: "40%",
                  paddingTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  left: "32%"
                }}
              >
                <Typography
                  variant="display1"
                  id="modal-title"
                  style={{ color: "red" }}
                >
                  Error
                </Typography>
                <Typography variant="subheading" id="simple-modal-description">
                  {this.props.errorMsg}
                </Typography>
              </div>
            </Paper>
          </Modal>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
    console.log(state);
    return {
      isError: state.authReducer.isError,
      errorMsg: state.authReducer.errMsg
    };
  };
  export default connect(
    mapStateToProps,
    null
  )(Error);
  
