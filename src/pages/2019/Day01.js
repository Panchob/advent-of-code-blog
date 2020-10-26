import React, { Component } from 'react';
import Prism from 'prismjs';
import "../../style/prism.css";
import "./Days.scss"


export class Day01 extends Component {

  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const code =
`import math
import os
import sys

def fuelMassToLift(moduleMass):
    return math.floor((int(moduleMass) / 3) - 2)


def fuelMass(previousFuelmass):
    if previousFuelmass <= 0:
        return 0
    else:
        return previousFuelmass + fuelMass(fuelMassToLift(previousFuelmass))


if __name__ == '__main__':
    part1 = 0
    part2 = 0

    with open(os.path.join(sys.path[0], "input.txt"), "r") as f:

        for module in f.readlines():
          fuel = fuelMassToLift(module)
          part1 += fuel
          part2 += fuelMass(fuel)

    print("PART 1:", part1)
    print("PART 2:", part2)
`

    return(
      <div className="Days">
        <main>
          <h1>Jour 1</h1>
          <p>
            Je pense que personne va avoir de PTSD avec le jour 1, it's not rocket science... oh wait it is (kinda). On doit ici calculer le 
            carburant nécessaire pour envoyer un fusée en orbite.<br/><br/>

            Pour ce problème on se fait donner un formule mathématique qui représente la quantité de carburant nécessaire pour soulever
            une masse ainsi qu'une liste... de masses (les modules de la fusée). Pour toutes les journées de l'advent, je copie les données
            fournies dans un fichier txt pour que l'algo fonctionne avec n'importe quelle entrée.
            J'ai donc à les extraire et leur appliquer la formule<br/><br/>

            Pour la deuxième partie, il faut appliquer récursivement cette formule à la masse du carburant ajouté dans la partie un.
            Jusqu'à avoir un résultat négligeable (zéro ou en dessous).<br/><br/>
          </p>
          <pre>
            <code className="language-js">
              {code}
            </code>
          </pre>
          <p>
            Super simple; une première fonction qui calcule la masse de carburant pour un module. Une seconde qui utilise la première récursivement
            pour accumuler la masse du carburant ajouté. Le tout afficher à l'écran avec un basic print.
          </p>
        </main>
        <footer/>
      </div>
    )
  }
}