
import Search from './Search';
import {AppBar, Toolbar, Typography, styled, Box} from '@mui/material';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
    
`;
const Component= styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;
// const subHeading= styled(Typography)`
//     font-size: 5px;
//     font-style: italic;
// `;

const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    return (
        <StyledHeader>
            <Toolbar>
                <Component>
                    <img src={logoURL} alt= "logo" style={{ width:75}}/>
                    <Box>
                        <Typography fontSize={10} fontStyle={'italic'}>Explore <Box component="span" color={'yellow'}>Plus</Box></Typography>
                    </Box>
                </Component>
                <Search/>
                <CustomButtons/>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;