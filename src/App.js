import { Main, FirstScreen, ButtonAnimate, Menu, OptionMenu, IconMenu, Presentation, 
        Networks, AboutMeDiv, ExperienceDiv, ContactDiv, Figures, IAM} from './elements/portfolio'
import { faUser, faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons'
import MenuOption from './components/OptionMenu'

function App() {
  return (
    <Main>

      <FirstScreen>

        <Menu>
            <MenuOption
                direccion="#contact"
                icon={faPhone}
                label="Contact"
            />

            <MenuOption
                direccion="#experience"
                icon={faBriefcase}
                label="Experience"
            />

            <MenuOption
                direccion="#aboutme"
                icon={faUser}
                label="About me"
            />
        </Menu>

        <Presentation>
          <IAM>Hi, I am Luiggy</IAM>
          <p>Welcome to my portfolio</p>
          <ButtonAnimate>About Me</ButtonAnimate>
        </Presentation>

        <Networks>
            <a href="" target="_blank">
              Instagram
            </a>
            <a href='' target="_blank">
              Github
            </a>
            <a href='' target="_blank">
              Facebook
            </a>  
        </Networks>

      </FirstScreen>

      <AboutMeDiv id='aboutme'>

          <h2>01</h2>
          <p>Lorem ipsum dolor sit.</p>
          About Me
      </AboutMeDiv>

      <ExperienceDiv id='experience'>
          Experience
      </ExperienceDiv>

      <ContactDiv id='contact'>
          Contact
      </ContactDiv>

    </Main>
    
  );
}

export default App;
