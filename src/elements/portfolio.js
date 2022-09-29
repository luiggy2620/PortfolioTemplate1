import styled, {css} from "styled-components";
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
    grid-template-rows: 10% 1fr;
    grid-template-areas:    "menu menu"
                            "presentation networks";
    height: 100vh;
`;

const Figures = styled(FontAwesomeIcon)`
    position: absolute;
    height: 5%;
    bottom: 50%;
`;

const Presentation = styled.div`
    grid-area: presentation;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10vh;
    padding-left: 15%;

    h2 {
        font-size: 70px;
    }
`;

const Menu = styled.div`
    grid-area: menu;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 4%;
    padding-right: 7%;
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
    border-radius: 5px;

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
    grid-area: networks;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 15vh;
    margin-left: -10vh;
`;

const SingleNetwork = styled.svg`
    margin-top: 15px;

    &:hover {
        fill: ${colors.yellow};

    }
`;

const SlidesInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 17vh;
`;

const ProjectDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 55%;
    min-width: 800px;
    height: 55vh;
    background: ${colors.darkBlue};
    opacity: .9999999;
    background-position: center;
    position: relative;
    margin-top: 16vh;
    margin-left: 100px;
    box-shadow: 10px 15px 30px 5px rgba(163,163,163);
    border-radius: 10px;
    cursor: pointer;
    
    &::before{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-image: url(${props => props.urlImage});
        background-size: cover;
        background-position: center;
        opacity: .30;
        transition: all .4s ease;
    }

    h1 {
        position: absolute;
        text-shadow: 5px 10px 30px #333;
        right: 40px;
        top: 0;
        font-size: 25vh;
        transition: all .4s ease;
        opacity: 0;
    }

    div {
        margin-left: 55px;
        padding-bottom: 55px;
        padding-right: 55px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    h2 {
        font-size: 50px;
    }

    &:hover {
        h1 {
            opacity: 1;
            top: -27%;
        }

        &::before {
            opacity: .60;
        }
    }

    ${props => props.direction === 'izquierda' && css`

    margin-left: -100px;
    box-shadow: -10px 15px 30px 5px rgba(163,163,163);

        h1 {
            left: 35px;
        }

        div {
            align-items: flex-start;
        }
    `}
`;

const ContactDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.darkBlue};
    padding-top: 15vh;
    padding-bottom: 15vh;

    div {
        display: flex;
        flex-direction: row;
    }
`;


export { Main, FirstScreen, ButtonAnimate, Menu, OptionMenu, IconMenu, Presentation, 
        Networks, SingleNetwork, SlidesInfo, ProjectDiv, Figures, IAM, ContactDiv }