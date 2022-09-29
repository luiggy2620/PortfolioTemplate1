import { Main, FirstScreen, ButtonAnimate, Menu, Presentation, 
        Networks, SlidesInfo, IAM, ContactDiv } from './elements/portfolio'
import { faUser, faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons'
import MenuOption from './components/OptionMenu'
import Project  from './components/ProjetcDiv';

import Github from './icons/Github';
import Instagram from './icons/Instagram';
import Twiter from './icons/Twiter';

function App() {
  return (
    <Main>

      <FirstScreen>

        <Menu>
            <MenuOption
                direccion="#aboutme"
                icon={faUser}
                label="About me"
            />
            <MenuOption
                direccion="#experience"
                icon={faBriefcase}
                label="Experience"
            />
            <MenuOption
                direccion="#contact"
                icon={faPhone}
                label="Contact"
            />
        </Menu>

        <Presentation>
          <IAM>Hi, I am Luiggy</IAM>
          <p>Welcome to my portfolio</p>
          <ButtonAnimate>About Me</ButtonAnimate>
        </Presentation>

        <Networks>
            <a href='' target="_blank">
              <Instagram/>
            </a>
            <a href='https://github.com/luiggy2620' target="_blank">
              <Github/>
            </a>
            <a href='https://www.facebook.com/luiggy.7902564' target="_blank">
              <Twiter/>
            </a>  
        </Networks>

      </FirstScreen>

      <SlidesInfo>

          <Project
            number='01'
            nameProject="My Fist Project"
            description="This is my first project."
            urlImage='./../../Images/japon.png'
          />      
  
          <Project
            number="02"
            nameProject="My Second Project"
            description="This is my second project."
            urlImage=''
            direction="izquierda"
          />

          <Project
            number="03"
            nameProject="My Third Project"
            description="This is my third project."
            urlImage=''
          /> 

          <Project
            number="04"
            nameProject="My Fourth Project"
            description="This is my fourth project."
            urlImage=''
            direction="izquierda"
          />
      </SlidesInfo>

      <ContactDiv>
        <div>
          <MenuOption
                direccion="https://github.com/luiggy2620"
                label="Github"
            />
          <MenuOption
                direccion=""
                label="Instragram"
            />
          <MenuOption
                direccion="https://www.facebook.com/luiggy.7902564"
                label="Twiter"
            />
        </div>
        <p>© 2022 Luiggy Mamani</p>
      </ContactDiv>

    </Main>
    
  );
}

export default App;
