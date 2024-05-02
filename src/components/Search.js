import React from 'react';
//import db from './database.json'
import '../App.css';

let Sea = () =>{
 const data = [
    {"nazvanie" :  "Труп невесты.", "opis" : " Что-то про невесту и про трупы"},
    {"nazvanie" :  "Таймлесс.", "opis" : " Что-то про путешествия во времени и плохие экранизации"},
    {"nazvanie" :  "Зачётный препод.", "opis" : " Что-то про классного препода-зэка"},
    {"nazvanie" :  "Барби. 12 танцующих Принцесс.", "opis" : " Что-то про 12 принцесс, которые любят танцевать. И злую тетю, куда же без неё"},
    {"nazvanie" :  "Чебурашка.", "opis" : " Ничего общего с настоящими крокодилами"},
    {"nazvanie" :  "Ку'дамм.", "opis" : " Вы знаете как жили девушки в Германии 50-60? А теперь узнаете"}
];
 
 const { search } = window.location;
 const query = new URLSearchParams(search).get('s');
 const filterData = (data, query) => {
    return data.filter((d) => {
        const postName = d.nazvanie.toLowerCase();
        return postName.includes(query);
    });
};
const FilteredData = filterData(data,query)
return(
<div>
        {FilteredData.map((d) => (
        <div className = "poisk" key={d.nazvanie}>{d.nazvanie + " " + d.opis}</div>
        ))}
 </div>
);
}

export default Sea;