import styled from "styled-components";

function Header() {
    return(
        <Top>
            <Image src="https://i.imgur.com/0z4Ydpm.png"></Image>
        </Top>
    );
}

export default Header;

const Top = styled.div`
    width: 99%;
    margin: auto;
    background-color: #f8db67;
`


const Image = styled.img`
    height: 5%;
    width:7%;
    margin-left: 15px;
`