import styled, {css} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colors = {
    darkBlue: '#18202E',
    white: '#fff',
    red: '#FF6149',
    yellow: '#FFCB42',
    blue: '#296FFF',
    black: '#161313'
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

const FirstScreen = styled.div`
    transition: all 450ms ease;
    position: relative;
    overflow: hidden;
    background: ${colors.darkBlue};
    display: grid;
    grid-template-columns: 1fr 10%;
    grid-template-rows: 10% 1fr;
    grid-template-areas:    "menu menu"
                            "presentation networks";
    height: 100vh;

    ${props => props.isDark === 'false' && css`
        background: ${colors.white};
        color: ${colors.darkBlue};
    `}
`;

const Figure = styled.svg`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
`;

const LogoIcon = styled.svg`
    ${props => props.isAbsolute === 'true' && css`
        opacity: .3;
        position: absolute;
        top: ${props => props.top};
        left: ${props => props.left};
    `}
`;

const Presentation = styled.div`
    grid-area: presentation;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10vh;
    padding-left: 15%;
    z-index: 1;

    h2 {
        font-size: 4.375em;
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
    margin: 0 20px 0 20px;
    padding: 20px 5px 20px 5px;
    position: relative;
    color: ${colors.white};
    text-decoration: none;
    font-weight: 700;
    transition: all 450ms ease;
    overflow: hidden;

    &::before, &::after {
        content: '';
        position: absolute;
        transition: width 540ms, opacity 300ms ease;
        top: 0;
        bottom: -50%;
        margin: auto 0;
        height: 3px;
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

    &:hover {
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

    ${props => props.label === '' &&  css`
        padding-left: 13px;
    `}

    ${props => props.isDark === 'false' && css`
        color: ${colors.darkBlue};
    `}
`;

const IconMenu = styled(FontAwesomeIcon)`
    margin-right: 10px
`;

const BottonSwitchTheme = styled.button`
    text-decoration: none;
    position: relative;
    overflow: hidden;
    background: transparent;
    color: ${colors.white};
    margin: 0 20px 0 20px;
    padding: 20px 0 20px 10px;
    cursor: pointer;
    z-index: 1;
    border: none;
    transition: all 450ms ease;

    &::before, &::after {
        content: '';
        position: absolute;
        transition: width 540ms, opacity 300ms ease;
        top: 0;
        bottom: -50%;
        margin: auto 0;
        height: 3px;
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

    &:hover {
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

    ${props => props.isDark === 'false' && css`
        color: ${colors.darkBlue};
    `}
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
    color: ${colors.darkBlue};
    padding: 20px;
    margin-top: 4%;
    font-weight: 700;
    font-size: 1.125rem;
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
    z-index: 1;
`;

const SingleNetwork = styled.svg`
    margin-top: 15px;

    &:hover {
        fill: ${colors.yellow};
    }

    ${props => props.isDark === 'false' && css`
        fill: ${colors.darkBlue};
    `}
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
    min-height: 450px;
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
        font-size: 15em;
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
        font-size: 3.125em;
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
        Networks, SingleNetwork, SlidesInfo, ProjectDiv, Figure, IAM, ContactDiv, LogoIcon, BottonSwitchTheme }