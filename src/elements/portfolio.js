import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colors = {
    darkBlue: '#18202E',
    white: '#fff',
    red: '#FF6149',
    yellow: '#FFE75E',
    blue: '#296FFF',
    black: '#161313'
}

const MainScreen = styled.div`
    display: flex;
    flex-direction: column;
`;

const FirstScreen = styled.div`
    background: ${colors.darkBlue};
    padding-left: 30px;
    padding: 0 45px 60px 45px;
    display: grid;
    grid-template-columns: 1fr 10%;
    
`;

const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    padding: 7%;


    h2 {
        margin-top: 5%;
        font-size: 70px;
    }
`;

const Menu = styled.div`
    padding: 25px;
    grid-column: span 2;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 2%;
`;

const OptionMenu = styled.a`
    color: ${colors.white};
    margin-left: 35px;
    text-decoration: none;

    &:hover{
        color: ${colors.yellow};
    }
`;

const IconMenu = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

const ButtonAnimate = styled.button`
    position: relative;
    background: ${colors.yellow};
    width: 200px;
    text-decoration: none;
    border: none;
    padding: 15px;
    margin-top: 60px;
    margin-bottom: 50px;
    cursor: pointer;
    transition: all .5s ease;
    overflow: hidden;
    color: ${colors.black};

    span {
        clip-path: inset(0 29% 0 32%);
        position: absolute;
        width: 130%;
        height: 100px;
        background: ${colors.blue};
        /* opacity: .2; */
        top: -50%;
        left: -130%;
        transition: .7s;
    }

    &:hover{
        span{
            left:100%;
        }
    }
`;

const Networks = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`;

const AboutMeDiv = styled.div`
    background: orange;
    height: 400px;
`;

const ExperienceDiv = styled.div`
    background: yellow;
    height: 400px;
`;

const ContactDiv = styled.div`
    background: blue;
    height: 400px;
`;



export { MainScreen, FirstScreen, ButtonAnimate, Menu, OptionMenu, IconMenu, Presentation, 
        Networks, AboutMeDiv, ExperienceDiv, ContactDiv }