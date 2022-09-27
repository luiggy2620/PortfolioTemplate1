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

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

const FirstScreen = styled.div`
    position: relative;
    background: ${colors.darkBlue};
    display: grid;
    grid-template-columns: 1fr 10%;
    height: 100vh;
`;

const Figures = styled(FontAwesomeIcon)`
    position: absolute;
    height: 5%;
    bottom: 50%;
`;

const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15%;

    h2 {
        font-size: 70px;
    }
`;

const Menu = styled.div`
    grid-column: span 2;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 4%;
    padding-right: 7%;
    height: 10%;
`;

const OptionMenu = styled.a`
    position: relative;
    color: ${colors.white};
    margin-left: 45px;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 23px 0 23px 0;
    transition: all 450ms ease;
    overflow: hidden;

    &::before, &::after {
        content: '';
        position: absolute;
        transition: width 540ms, opacity 300ms ease;
        top: 0;
        bottom: -60%;
        margin: auto 0;
        height: 5px;
        width: 0;
        border-radius: 4px;
    }

    &::before {
        left: 0;
    }

    &::after {
        background: ${colors.yellow};
        right: 0;
    }

    &:hover{
        &::before {
            width: 100%;
            transition: width 250ms ease;
            background-color: ${colors.yellow};
        }

        &::after {
            width: 100%;
            background-color: transparent;
        }

        color: ${colors.yellow};
    }

    /* @keyframes animateOption {
        
    } */
`;

const IconMenu = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

const IAM = styled.h2`
    /* white-space: nowrap;
    border-right: 4px solid;
    width: 12ch;
    animation: typing 2s steps(15), blink .5s infinite step-end alternate;
    overflow: hidden;

    @keyframes typing {
        from {
            width: 0;
        }
    }

    @keyframes blink {
        50% {
            border-color: transparent;
        }
    } */
`;

const ButtonAnimate = styled.button`
    position: relative;
    background: ${colors.yellow};
    width: 200px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all .75s ease;
    overflow: hidden;
    color: ${colors.black};
    padding: 20px;
    margin-top: 4%;
    color: ${colors.black};
    font-weight: 700;
    font-size: 110%;
    border-radius: 10px;

    &::before {
        content: '';
        clip-path: inset(0 29% 0 32%);
        position: absolute;
        width: 130%;
        height: 100px;
        background: ${colors.blue};
        top: -50%;
        left: -130%;
        transition: .75s;
    }

    &:hover{
        &::before {
            left: 100%;
        }
    }
`;

const Networks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200%;
    height: 100%;
`;

const AboutMeDiv = styled.div`
    background: orange;
    height: 100vh;
`;

const ExperienceDiv = styled.div`
    background: yellow;
    height: 100vh;
`;

const ContactDiv = styled.div`
    background: blue;
    height: 100vh;
`;



export { Main, FirstScreen, ButtonAnimate, Menu, OptionMenu, IconMenu, Presentation, 
        Networks, AboutMeDiv, ExperienceDiv, ContactDiv, Figures, IAM }