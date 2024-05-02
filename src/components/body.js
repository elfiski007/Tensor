import React from 'react';
import '../App.js';
let Body = () => {
    const data =   [  {"nazvanie" :  "Труп невесты.", "opis" : " Что-то про невесту и про трупы"},
    {"nazvanie" :  "Таймлесс.", "opis" : " Что-то про путешествия во времени и плохие экранизации"},
    {"nazvanie" :  "Зачётный препод.", "opis" : " Что-то про классного препода-зэка"},
    {"nazvanie" :  "Барби. 12 танцующих Принцесс.", "opis" : " Что-то про 12 принцесс, которые любят танцевать. И злую тетю, куда же без неё"},
    {"nazvanie" :  "Чебурашка.", "opis" : " Ничего общего с настоящими крокодилами"},
    {"nazvanie" :  "Ку'дамм.", "opis" : " Вы знаете как жили девушки в Германии 50-60? А теперь узнаете"}
];
    return(
    <div>        
        <h2 id = "spi">Список всех произведений:</h2>
        {data.map((d) => (
        <div className = "osn">
            <h4 className = "knaz" key={d.nazvanie}>{d.nazvanie}</h4>
            <div className = "kopis" key={d.nazvanie}>{d.opis}</div>
        </div>
        ))}     
    </div>)
}
export default Body;