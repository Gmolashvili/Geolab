import React from "react";
import useStyles from './style';


const Footer = () => {

  const classes = useStyles();

    return (
      <div className={classes.root} >
        <div className={classes.h4}>
          <h4>ყველა უფლება დაცულია</h4>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://www.geolab.edu.ge/"> http://www.geolab.edu.ge/ </a>
        </div>
      </div>
    );
  }
  
  export default Footer;