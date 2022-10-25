import { NavLink as LinkRouter } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Nav = styled.nav`
align-items: center;
background: black;
bottom: 0;
display: flex;
height: 50px;
justify-content: space-around;
left: 0;
margin: 0 auto;
max-width: 500px;
position: fixed;
right: 0;
width: 100%;
z-index: 100;
`
export const Link = styled(LinkRouter)`
align-items: center;
color: gray;
display: inline-flex;
height: 100%;
justify-content: center;
text-decoration: none;
width: 100%;

&[aria-current]{
    color: white;
    font-weight: bold;
    &:after{
        ${fadeIn({time:"0.5s"})};
        content:"•";
        color: white;
        position: absolute;
        bottom: 0;
    }
}
`