import React from 'react';
import Aufgaben from './Aufgaben';
import logo from '../images/60logo.jpg';

function Spiel() {

    let allgemeinwissenArray = Aufgaben.allgemeinwissen;
    let freizeitArray = Aufgaben.freizeit;
    let sozialesArray = Aufgaben.soziales;


    /*let allgemeinwissenArray = ["Hauptstadt von Frankreich", "Bundeskanzler von Deutschland", "7 WW!"];
    let freizeitArray = ["Sprich mit einer fremden Person", "Zeige dein letztes Foto", "Trink einen Shot mit einer Person deiner Wahl"];
    let sozialesArray = ["Mache 10 Liegestütze", "Mache 10 Liegestütze", "Mache 10 Liegestütze"]
    */

    const [aufgabe, setAufgabe] = React.useState('Wähle eine Aufgabe :)');
    const [loesung, setLoesung] = React.useState('Lösung..');
    const [antwort1, setAntwort1] = React.useState('Antwort1');
    const [antwort2, setAntwort2] = React.useState('Antwort2');
    const [antwort3, setAntwort3] = React.useState('Antwort3');
    const [isAntwort1Richtig, setAntwort1Richtig] = React.useState(false);
    const [isAntwort2Richtig, setAntwort2Richtig] = React.useState(false);
    const [isAntwort3Richtig, setAntwort3Richtig] = React.useState(false);



    function getAllgemeinwissenAufgabe() {
        const randomNumber = Math.floor(Math.random() * allgemeinwissenArray.length)
        console.log(randomNumber)
        setAufgabe(allgemeinwissenArray[randomNumber].aufgabe);
        setLoesung(allgemeinwissenArray[randomNumber].loesung);
        setAntwort1(allgemeinwissenArray[randomNumber].A1);
        setAntwort2(allgemeinwissenArray[randomNumber].A2);
        setAntwort3(allgemeinwissenArray[randomNumber].A3);
        setAntwort1Richtig(false);
        setAntwort2Richtig(false);
        setAntwort3Richtig(false);
    }

    function getFreizeitAufgabe() {
        const randomNumber = Math.floor(Math.random() * freizeitArray.length)
        console.log(randomNumber)
        setAufgabe(freizeitArray[randomNumber].aufgabe);
        setAntwort1Richtig(false);
        setAntwort2Richtig(false);
        setAntwort3Richtig(false);
    }

    function getSozialeAufgabe() {
        const randomNumber = Math.floor(Math.random() * sozialesArray.length)
        console.log(randomNumber)
        setAufgabe(sozialesArray[randomNumber].aufgabe);

        sozialesArray = sozialesArray.filter(element => {
            return element.aufgabe !== sozialesArray[randomNumber].aufgabe;
        })
        console.log(sozialesArray)
        setAntwort1Richtig(false);
        setAntwort2Richtig(false);
        setAntwort3Richtig(false);
        /*
        sozialesArray = sozialesArray.filter(item => {
            return item.id != randomNumber;
        })
        console.log(sozialesArray)
        */
    }

    function getAllgemeinWissenLoesung() {
        if (antwort1 === loesung) {
            setAntwort1Richtig(true)
            setAntwort2Richtig(false)
            setAntwort3Richtig(false)
            console.log("1 ist richtig!")
        } else if (antwort2 === loesung) {
            setAntwort1Richtig(false)
            setAntwort2Richtig(true)
            setAntwort3Richtig(false)
            console.log("2 ist richtig")
        } else {
            setAntwort1Richtig(false)
            setAntwort2Richtig(false)
            setAntwort3Richtig(true)
            console.log("3 ist richtig!") 
        }
    }

//<p>the social game <br></br>-<br></br> das Spiel, das verbindet </p>
    return (
        <div className="spiel">
            <header className='header'>
                <img src={logo} className="logo" alt=""></img> 
            </header>

            <div className="spiel_aufgabe">
                <h1 className="aufgabenText">{aufgabe}</h1>
            </div>
            <div className='spiel_loesung'>
                <ul>
                    <li style={{color: isAntwort1Richtig ? 'green' : 'black'}} className='A1'> {antwort1}</li>
                    <li style={{color: isAntwort2Richtig ? 'green' : 'black'}} className='A2'> {antwort2}</li>
                    <li style={{color: isAntwort3Richtig ? 'green' : 'black'}} className='A3'> {antwort3}</li>
                </ul>
                <button onClick={getAllgemeinWissenLoesung}>Lösung</button>
            </div>
            <div className="spiel_buttons">
                <button className="btn_allgemeinwissen" onClick={getAllgemeinwissenAufgabe} >Allgemeinwissen</button>
                <button className="btn_freizeit" onClick={getFreizeitAufgabe}>Freizeit</button>
                <button className="btn_soziales" onClick={getSozialeAufgabe}>Soziales</button>
            </div>
        </div>
    );
}

export default Spiel;