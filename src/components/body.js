import React from 'react';
import '../App.js';
let Body = () => {
    const data = [
    {"nazvanie" :  "Труп невесты.", "opis" : " Что-то про невесту и про трупы"},
    {"nazvanie" :  "Таймлесс.", "opis" : " Что-то про путешествия во времени и плохие экранизации"},
    {"nazvanie" :  "Зачётный препод.", "opis" : " Что-то про классного препода-зэка"},
    {"nazvanie" :  "Барби. 12 танцующих Принцесс.", "opis" : " Что-то про 12 принцесс, которые любят танцевать. И злую тетю, куда же без неё"}];
    return(
    <div>{data.filter(function(n) {
        let a = n.nazvanie;
        let b = n.opis;
        <div>{a}</div>;
        <div>{b}</div>;
})}       
    </div>)
}
export default Body;