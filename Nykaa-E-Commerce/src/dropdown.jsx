import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function Dropdown(){
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
            title="My App"
            style={
              { 
                background:"#ffb400" //hex color values (yellow)
              }
            }
            titleStyle = {
              {
                color:"#FFFFF" //color of text (black)
              }
            }
            showMenuIconButton={false}
         />
         <DropDownMenu 
          value={this.state.selection} 
          onChange={this.handleChange}   
         >
          <MenuItem value={1} primaryText="English"  />
          <MenuItem value={2} primaryText="Spanish" />
          <MenuItem value={3} primaryText="French" />
  
        </DropDownMenu>
        <br/><br/><br/>
        <center>
        {this.pageControl()}
        </center>
        </MuiThemeProvider>
      </div>
    );
  }
  
  export default Dropdown;