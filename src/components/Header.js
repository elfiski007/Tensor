import React from 'react';
import '../App.js';
import Logo from '../images/logo.png'
import Search from '../images/search.png'
import Profil from '../images/profil.png'

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
                <img src = {Logo}></img>
              </div>
              <div className="animationseries">
                Мультсериалы
              </div>
                <div className="animationfilms">
                Мультфильмы
              </div>
              <div className="profil">
              <img src = {Profil}></img>
                Войти
              </div>
            </div>
            </header>
    );
}
export default Header;