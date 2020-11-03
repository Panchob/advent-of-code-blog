import React, { Component } from 'react';
import Gist from "react-gist";
import "./Days.scss"


export class Day extends Component {
  render() {
    return(
      <div className="Days">
        <main>
          <h1>Jour 1</h1>
          {this.props.text.map((d, i) =>{
            return(
              <p key={i}>{d}</p>
            )
          })}
          <Gist id="0def4c0f6f79dbc2510d92bc20c4d7dd"></Gist>
          <p>
            Super simple; une première fonction qui calcule la masse de carburant pour un module. Une seconde qui utilise la première récursivement
            pour accumuler la masse du carburant ajouté. Le tout afficher à la console avec un basic print.
          </p>
        </main>
        <footer/>
      </div>
    )
  }
}