import { Fragment } from "react";

import NavBar from "./NavBar";
import Banner from "./Banner";

import { Box , styled} from "@mui/system";
import { Component } from "react";


const Components= styled(Box)`
    padding:10px;
    background: #F2F2F2;
`

const Home = () => {
    return(
            <Fragment>
                
                    <NavBar/>
                    <Components>
                    <Banner/>
                </Components>
            </Fragment>
            
        
    


    )
}

export default Home;