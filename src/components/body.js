import React, { Component } from 'react';
import '../App.js';
let Body = () => {
    const data = [
    {"nazvanie" :  "Труп невесты.", "opis" : " Что-то про невесту и про трупы"},
    {"nazvanie" :  "Таймлесс.", "opis" : " Что-то про путешествия во времени и плохие экранизации"},
    {"nazvanie" :  "Зачётный препод.", "opis" : " Что-то про классного препода-зэка"},
    {"nazvanie" :  "Барби. 12 танцующих Принцесс.", "opis" : " Что-то про 12 принцесс, которые любят танцевать. И злую тетю, куда же без неё"}];
    let i = data.length;
    let naz =[]
    let op = []
    let a;
    for(i-1; i >= 0; i--){
        const even = data.filter(function(n) {
            if(i >= 0) {
                naz.push(...n.nazvanie);
                op.push(...n.opis);
                console.log(naz, op);
                console.log(n.nazvanie, n.opis);
                console.log(i);
            }
        })
    }
    return(<div>        
        <div>
            <img src ="" ></img>
            <div>{naz[15]}</div>
            <div>{op[16]}</div>
        </div>
        <div>ygthfvbygvbf</div>
        <div></div>
        <div></div>
    </div>)
}
export default Body;