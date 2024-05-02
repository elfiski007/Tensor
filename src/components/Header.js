import React from 'react';
import App from '../App.js';
import Logo from '../images/logo.png'
import Search from '../images/search.png'
import Profil from '../images/profil.png'
import Acc from './acc.html'
let Header = () => {
    return(
        <header id='h'>
            <div id="head">
            <div className="search">
                <img src = {Search}></img>
                <form className = "form"> 
                    <input type="text" id = "sch" placeholder="введите название..." name = "s"/>
                    <ul className ="options">
                    </ul>
                </form>
            </div>
              <div className="film">
                Фильмы
              </div>
              <div className="series">
                Сериалы
              </div>
              <div className="logotip">
                <a href = "App"><img src = {Logo}></img></a>
              </div>
              <div className="animationseries">
                Мультсериалы
              </div>
                <div className="animationfilms">
                Мультфильмы
              </div>
              <a href = {Acc} className="profil">
              <img src = {Profil}></img>
                Войти
              </a>
            </div>
            </header>
    );
}
export default Header;