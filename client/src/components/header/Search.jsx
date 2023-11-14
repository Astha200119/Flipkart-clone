import { InputBase, Box, styled} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { blue } from "@mui/material/colors";

const Searchcontainer= styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`;
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size:unset;
`;
 const searchIconWrapper= styled(Box)`
 color:blue;
 `



const Search = () =>{
    return(

        <Searchcontainer>
            <InputSearchBase
                placeholder='Search for products, brand and others'/>
                <searchIconWrapper>  
                        <SearchIcon/>

                </searchIconWrapper>
                    
        </Searchcontainer>

    )





}
export default Search;