import styled from "styled-components";

function Header() {
    return(
        <Top>
            <Image src="https://i.imgur.com/2Y1IaIG.png"></Image>
        </Top>
    );
}

export default Header;

const Top = styled.div`
    background: rgb(255,171,0);
    background: linear-gradient(0deg, rgba(255,171,0,1) 0%, rgba(255,220,0,1) 0%, rgba(255,169,0,1) 100%);
    border: 1px solid black;
`


const Image = styled.img`
    height: 7%;
    width:7%;
`