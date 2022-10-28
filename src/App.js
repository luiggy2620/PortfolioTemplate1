import React, {useState} from 'react';
import { Main, FirstScreen, ButtonAnimate, Menu, Presentation, 
        Networks, SlidesInfo, IAM, ContactDiv, BottonSwitchTheme, IconMenu } from './elements/portfolio'
import { faUser, faBriefcase, faPhone, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import MenuOption from './components/OptionMenu'
import Project  from './components/ProjetcDiv';

import japon from './Images/japon.png'
import newyork from './Images/newyork.jpg'
import london from './Images/london.jpg'
import paris from './Images/paris.png'

import Logo from './icons/Logo'
import Github from './icons/Github';
import Instagram from './icons/Instagram';
import Twiter from './icons/Twiter';
import Square from './icons/Square'
import Triangle from './icons/Triangle'
import Circle from './icons/Circle'

function App() {

  const parallax = (e) => {
    var content = document.getElementById('firstcontent');
    content.querySelectorAll('.figure').forEach(figure => {
        const speed = figure.getAttribute('speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        figure.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }

  const [isDark, setIsDark] = useState('true');

  const switchTheme = () => {
    if(isDark === 'true') {
      setIsDark('false');
    } else {
      setIsDark('true');
    }
  }

  return (
    <Main>

      <FirstScreen id='firstcontent' onMouseMove={parallax} isDark={isDark}>

        <Logo width='100%' height='100%' stroke='#748DA6' isAbsolute='true'/>
        <Square
          fill='coral'
          top='80%'
          left='80%'
          speed='5'
        />
        <Triangle
          fill='pink'
          top='85%'
          left='25%'
          speed='-5'
        />
        <Circle
          fill='yellow'
          top='70%'
          left='5%'
          speed='2'
        />
        <Square
          fill='coral'
          top='25%'
          left='8%'
          speed='8'
        />
        <Square
          fill='coral'
          top='15%'
          left='75%'
          speed='5'
        />
        <Circle
          fill='yellow'
          top='10%'
          left='25%'
          speed='-2'
        />
        <Square
          fill='coral'
          top='55%'
          left='45%'
          speed='3'
        />
        <Triangle
          fill='pink'
          top='25%'
          left='50%'
          speed='6'
        />
        <Circle
          fill='yellow'
          top='70%'
          left='65%'
          speed='-6'
        />

        <Menu isDark={isDark}>
            <MenuOption
                direccion="#aboutme"
                icon={faUser}
                label="About me"
                isDark={isDark}
            />
            <MenuOption
                direccion="#experience"
                icon={faBriefcase}
                label="Experience"
                isDark={isDark}
            />
            <MenuOption
                direccion="#contact"
                icon={faPhone}
                label="Contact"
                isDark={isDark}
            />

            <BottonSwitchTheme isDark={isDark} onClick={switchTheme}>
                <IconMenu icon={faCircleHalfStroke}/>
            </BottonSwitchTheme>
        </Menu>

        <Presentation>
          <IAM>Hi, I am Luiggy</IAM>
          <p>Welcome to my portfolio</p>
          <ButtonAnimate>About Me</ButtonAnimate>
        </Presentation>

        <Networks>
            <a href='' target="_blank">
              <Instagram isDark={isDark}/>
            </a>
            <a href='https://github.com/luiggy2620' target="_blank">
              <Github isDark={isDark}/>
            </a>
            <a href='https://www.facebook.com/luiggy.7902564' target="_blank">
              <Twiter isDark={isDark}/>
            </a>  
        </Networks>

      </FirstScreen>

      <SlidesInfo id="experience">

          <Project
            number='01'
            nameProject="My Fist Project"
            description="This is my first project."
            urlImage={newyork}
          />      
  
          <Project
            number="02"
            nameProject="My Second Project"
            description="This is my second project."
            urlImage={japon}
            direction="izquierda"
          />

          <Project
            number="03"
            nameProject="My Third Project"
            description="This is my third project."
            urlImage={london}
          /> 

          <Project
            number="04"
            nameProject="My Fourth Project"
            description="This is my fourth project."
            urlImage={paris}
            direction="izquierda"
          />
      </SlidesInfo>

      <ContactDiv id='contact'>
        <Logo width='150px' height='150px'/>

        <div>
         <MenuOption
                direccion="https://www.facebook.com/luiggy.7902564"
                label="Facebook"
          />
          <MenuOption
                direccion=""
                label="Instragram"
          />
          <MenuOption
                direccion="https://github.com/luiggy2620"
                label="Github"
            />
        </div>
        <p>© 2022 Luiggy Mamani</p>
      </ContactDiv>

    </Main>
    
  );
}

export default App;
