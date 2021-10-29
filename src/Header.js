// Libraries
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
    return(
        <Top>
            <Image>
                <Link to="/">
                    <img src="https://i.imgur.com/enOEMyY.png" alt="To SUP or not to SUP?" title="To SUP or not to SUP?"/>
                </Link>
            </Image>
        </Top>
    );
}

export default Header;

const Top = styled.div`
    width: 99%;
    margin: auto;
    background-color: #f8db67;
    display: flex;
    font-family: 'Carter One', cursive;
    h1{
        margin: auto;
    }
`

const Image = styled.div`
    a{
        img{
            height: 120px;
            margin-left: 15px;
        }
    }
`