import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Selector extends Component{
    constructor(props){
        super(props);

        console.log(props)
    }

    render(){
        return(
            <div>
            <FormControl>
                <InputLabel htmlFor="bloodGroup"></InputLabel>
                <InputLabel htmlFor="bloodGroup">BloodGroup</InputLabel>
          <Select
            value={this.props.valueInput}
            onChange={this.props.changeHandler}
            input={<Input name={this.props.name} id="bloodGroup" />}
          >      <MenuItem value="">
                <em></em>
                </MenuItem>
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value={"B+"}>B+</MenuItem>
                <MenuItem value={"AB+"}>AB+</MenuItem>
                <MenuItem value={"A-"}>A-</MenuItem>
                <MenuItem value={"B-"}>B-</MenuItem>
                <MenuItem value={"AB-"}>AB-</MenuItem>
                <MenuItem value={"O-"}>O-</MenuItem>


                </Select>
                <FormHelperText>Select Blood Group carefully</FormHelperText>
            </FormControl>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);