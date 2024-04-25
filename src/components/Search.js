import React, { Component } from 'react';
//import db from './database.json'

let Sea = () =>{
 const data = [
    {"nazvanie" :  "Труп невесты", "opis" : "что-то про невесту и про трупы"},
    {"nazvanie" :  "Таймлесс", "opis" : "что-то про путешествия во времени и плохие экранизации"},
    {"nazvanie" :  "Зачётный препод", "opis" : "что-то про классного препода-зэка"},
    {"nazvanie" :  "Барби. 12 танцующих Принцесс", "opis" : "что-то про 12 принцесс, которые любят танцевать. И злую тетю, куда же без неё"}];
 <div>
    <ul>
        {data.map((d) => (
        <li key={d.nazvanie}>{d.opis}</li>
        ))}
    </ul>
 </div>
 const { search } = window.location;
 const query = new URLSearchParams(search).get('s');
 const filterData = (data, query) => {
    if (!query) {
        return data;
    }
    return data.filter((d) => {
        const postName = d.nazvanie.toLowerCase();
        return postName.includes(query);
    });
};

}

export default Sea;