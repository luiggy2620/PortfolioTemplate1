import { MainScreen, FirstScreen, ButtonAnimate, Menu, OptionMenu, IconMenu, Presentation, 
        Networks, AboutMeDiv, ExperienceDiv, ContactDiv} from './elements/portfolio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBriefcase, faPhone, faInstagram } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <MainScreen>

      <FirstScreen>

        <Menu>
            <OptionMenu href="#contact">
              <IconMenu icon={faPhone}/>
              Contact
            </OptionMenu>

            <OptionMenu href="#experience">
              <IconMenu icon={faBriefcase}/>
              Experience
            </OptionMenu>

            <OptionMenu href="#aboutme">
              <IconMenu icon={faUser}/>
              About me
            </OptionMenu>

        </Menu>

        <Presentation>
          <h2>Hi, I am Luiggy</h2>
          <p>Welcome to my portfolio</p>
          <ButtonAnimate>About Me</ButtonAnimate>
        </Presentation>

        <Networks>
            <a href="https://www.instagram.com/020__luiggy/">
              IG
            </a>
          <div>GH</div>
          <div>TW</div>
        </Networks>

      </FirstScreen>

      <AboutMeDiv id='aboutme'>
          About Me
      </AboutMeDiv>

      <ExperienceDiv id='experience'>
          Experience
      </ExperienceDiv>

      <ContactDiv id='contact'>
          Contact
      </ContactDiv>

    </MainScreen>
    
  );
}

export default App;
