import React from 'react';
import Aufgaben from './Aufgaben';

function Spiel() {

    let allgemeinwissenArray = Aufgaben.allgemeinwissen;
    let freizeitArray = Aufgaben.freizeit;
    let sozialesArray = Aufgaben.soziales;

    const [aufgabe, setAufgabe] = React.useState('Drücke einen Button');


    function getAllgemeinwissenAufgabe() {
        const randomNumber = Math.floor(Math.random() * allgemeinwissenArray.length)
        console.log(randomNumber)
        setAufgabe(allgemeinwissenArray
        [randomNumber].aufgabe);
    }

    function getFreizeitAufgabe() {
        const randomNumber = Math.floor(Math.random() * freizeitArray.length)
        console.log(randomNumber)
        setAufgabe(freizeitArray[randomNumber].aufgabe);
    }

    function getSozialeAufgabe() {
        const randomNumber = Math.floor(Math.random() * sozialesArray.length)
        console.log(randomNumber)
        setAufgabe(sozialesArray[randomNumber].aufgabe);

        sozialesArray = sozialesArray.filter(element => {
            return element.aufgabe != sozialesArray[randomNumber].aufgabe;
        })
        console.log(sozialesArray)
        /*
        sozialesArray = sozialesArray.filter(item => {
            return item.id != randomNumber;
        })
        console.log(sozialesArray)
        */
    }


    return (
        <div className="spiel">
            <div className="spiel_buttons">
                <button className="btn_allgemeinwissen" onClick= {getAllgemeinwissenAufgabe} >Allgemeinwissen</button>
                <button className="btn_freizeit" onClick={getFreizeitAufgabe}>Freizeit</button>
                <button className="btn_soziales" onClick={getSozialeAufgabe}>Soziales</button>
            </div>
            <div className="Aufgabe">
                <h1 className="aufgabenText">{aufgabe}</h1>
            </div>
        </div>
    );
}

export default Spiel;