
import { Box, Button, Typography} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";

const Wrapper= styled(Box)`
display:flex;
margin: 0 3% 0 auto;
& > button, &> p{
    margin-right:50px;
    font-size:16px;
}
`
const Container=styled(Box)`
display:flex;

`
const Loginbutton=styled(Button)`
color: #2874f0;
background: #fff; 
text-transform: none;
padding: 5px 40px;
border-radius: 2px;
box-shadow: none;
font-weight: 600;
height: 32px;

`

const CustomButtons= ()=>{
    return(         
        <Wrapper>
            <Loginbutton variant="contained">Login</Loginbutton>

            <Typography style={{marginTop: 3,width: 135}}>Become a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>

            <Container>
                <Typography style={{marginTop: 3}}> <ShoppingCartIcon/> Cart</Typography>
            </Container>
        </Wrapper>

    )

}
export default CustomButtons;