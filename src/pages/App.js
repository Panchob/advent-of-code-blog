import React, { Component } from 'react';
import { LangConsumer, LangProvider } from '../contexts/LangContexts'
import '../style/App.css';


export default class App extends Component {


  mainTitle(lang) {
    if(lang === "fr") {
      return(`SOLUTIONS POUR "L'ADVENT OF CODE 2019"`)
    } else {
      return("ADVENT OF CODE 2019 SOLUTIONS")
    }
  }

  mainDescription(lang) {
    if(lang === "fr") {
      return(`Ok, si t'es sur ce site c'est que tu as probablement entendu parler du advent of code OU 
              que je t'ai personnellement shooté le lien pour show off. L'advent of code c'est un calendrier de l'avent, mais
              au lieu d'avoir du chocolat on a un "petit" problème de programmation qui peut être régler avec n'importe
              quel langage, ben plus nice, non?
              
              Évidemment cet event génère des objectifs différents d'une personne à l'autre. Dans mon cas c'est
              premièrement une raison pour pratiquer un langage de programmation et deuxièmement ça me force à sortir de ma zone 
              de confort et de ressortir des principes d'algo, structure de donné et même d'AI. Mon langage de choix pour cette année
              est Python parce que why not.

              Je ne me suis pas mis de contrainte de temps (à revoir pour 2020) ce que est en partie la raison pour laquelle je n'ai
              pas encore terminé. Ça et que les derniers puzzle son particulièrement hard. Je suis quand même fier de mes solutions so
              here you go!
              `)
    } else {
      return ("English coming soon")
    }
  }


  
  render() {
    return (
      <LangProvider>
        <div className="App">
          <LangConsumer>
            {({lang}) => 
            <div>
              <h1>{this.mainTitle(lang)}</h1>
              <p>{this.mainDescription(lang)}</p>
              
            </div>}
          </LangConsumer>
          <LangConsumer>
            {({toggleLang}) => <button onClick={() => toggleLang()}>TEST</button>}
          </LangConsumer>
        </div>
      </LangProvider>

    );
  }
}