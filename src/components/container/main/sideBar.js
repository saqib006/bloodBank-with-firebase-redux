import React, {Component} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from "@material-ui/icons/Inbox";
import Person from "@material-ui/icons/Person";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";


class SideBar extends Component {

    constructor(props){
        super(props);

        console.log('heheh', props)
    }



 

    render(){
        return(
            <div>
                <AppBar position="static">
                <Toolbar>
          <IconButton onClick={()=>this.props.toggleDrawer(true)} style={{
                marginLeft: -12,
                marginRight: 20
              }}  color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={{flex: 1}} >
            Blood Bank
          </Typography>
          <Button style={{ float: "right" }} color="inherit" onClick={this.props.signOut}>Sign Out</Button>


        </Toolbar>
                
    </AppBar>





                 <Drawer open={this.props.openDrawer} onClose={()=>this.props.toggleDrawer(false)}>
                 <div
            tabIndex={0}
            role="button"
            onClick={()=>this.props.toggleDrawer(false)}
            onKeyDown={()=>this.props.toggleDrawer(false)}
          >
          
          <List>
              <ListItem>
              <ListItemIcon>
                  <Person/>
                  </ListItemIcon>
                  <Typography variant='title'>{this.props.userName}</Typography>
              </ListItem>
          </List>
          
          <Divider/>
          {["Home", "Donate Blood", "Need Donor"].map(value =>{
              return (
                  <ListItem onClick={()=> {this.props.listHandler(value)}}>
                  <ListItemText primary={value}></ListItemText>
                      
                  </ListItem>
              )
          })}

          </div>
        </Drawer>

            </div>
        )
    }
}
export default SideBar;