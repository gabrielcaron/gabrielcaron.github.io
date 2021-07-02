<img src="liaisons/images/iv-gabrielcaron.svg" width="300" alt="">

Ce dépôt contient mon site personnel.

## CSS

* SASS
* Méthodologie BEM

## Images

* La plupart des images sont au format SVG.
* Les aperçus des projets sont au format PNG.

### Icônes

* Le symbole occupe 60% à 75% de la largeur de l'élévation. Un dégradé **radial** est utilisé pour l'état par défaut et pour l'état survol.
* L'élévation est gris, en aplat. Au survol, un dégradé **linéaire** est utilisé.

#### Exporter une icône à partir de Figma
1. Retirer les ombres et les contours de l'élévation (le cas échéant)
2. Aplatir le symbole
3. Exporter en SVG
4. Optimiser dans ImageOptim
5. Ajouter des classes aux endroits suivants :
   * sur la balise SVG : nom du projet
   * sur l'élévation : elevation
   * sur les formes : donner des noms explicites
6. Ajouter `aria-hidden="true"` sur la balise SVG
7. Retirer :
   * width
   * height
   * arrondi sur l'élévation
8. Ajouter dans le SVG par défaut les dégradés du SVG de l'état survol
9. Pour conserver la validité du HTML, préfixer avec des ID uniques les dégradés avec le nom du projet, exemple : `#mexico-orange-radial`.
10. Lier les ID à l'état survol dans les CSS


### Projets

La plupart des projets sont présentés avec des périphériques mobiles (iPhone et/ou iPad).

#### Exporter les aperçus à partir de Photoshop

1. Exporter en PNG via Exporter sous...
2. Optimiser avec ImageOptim à 80% de qualité
3. Nommer sous la forme **projet-largeur en px**, exemple : `mexico-1400.png`

#### Formats normalisés

Toutes les images au format PNG sont à 1x et 2x. Le site est optimal sur une tablette ou un poste de table avec un écran avec une densité de 2x.

|          | 1x     | 2x     |
|----------|--------|--------|
| Mobile   | 600px  | 1200px |
| Tablette | 1000px | 2000px |
| Table    | 1400px | 2880px |

Nommer les fichiers selon la forme suivante : `nomduprojet-largeur.ext`, exemple: `mexico-1000.png`. Ne pas rajouter de référence aux périphériques : mobile, tablette, etc.

## Javascript

Pour une meilleure accessibilité, il n'y a aucun JavaScript requis pour afficher de l'information, tel un menu hamburger. Le site utilise Google Analytics 4, qui demeure facultatif pour les internautes.

## Dépendances

Aucune dépendance requise.

## Historique de ce projet

### En résumé

Un premier portfolio imprimé a été réalisé à l'hiver 2007 dans le cadre du cours Projet graphique 3D lors de la 3e année en Graphisme au Cégep de Rivière-du-Loup. Aucune version Web n'avait été prévue à ce moment.

À l'été 2019, suite à la fin de ma première année en Techniques d'intégration multimédia au Cégep de Sainte-Foy, j'ai amorcé le projet d'un portfolio révisé en version Web. Il rassemblera les projets réalisés en Graphisme ainsi qu'en Techniques d'intégration multimédia.

À la fin de l'hiver 2020, le projet est mis sur la glace. Le prototype intégré n'est pas concluant et le projet est plus complexe que prévu.

À l'automne 2020, le projet est relancé et la version 1.0 est abandonnée. Le projet est presque recommencé du début : recherche visuelle, esquisses préliminaires, esquisses fonctionnelles, maquettes, etc.

À l'été 2021, le projet entre dans sa phase d'intégration du design. La mise en ligne d'une nouvelle version de développement est effectuée.

La mise en ligne officielle est prévue au mois d'août 2021.

### 2021

#### 30 juin 2021

* Mise en ligne du projet Alaia

#### 26 juin 2021

* Mise en ligne du projet Mexico

#### 24 juin 2021

* Fin de l'intégration des composantes principales du design (en-tête, pied de page, gabarits des menus et pages des projets, sélecteur de projets et icônes)

#### 23 juin 2021

* Réservation du nom de domaine

#### 11 juin 2021

* Fin de la révision de mon identité visuelle

#### 9 juin 2021

* Début de l'intégration de la version 2.0 du site
* Mise en ligne de la version de développement

#### 1er mai 2021

* Refonte du projet Boréal Magazine
  * Retrait des floats
  * Conversion vers CSS Grid
  * Utilisation de SASS
  * Nouvelle page d'accueil

#### 12 février 2021

* Début des maquettes de la version 2.0

#### 3 janvier 2021

* Début des esquisses fonctionnelles

### 2020

#### 11 décembre 2020

* Établissement de l'architecture de l'information

#### 15 septembre 2020

* Relance du projet de portfolio
* Version 1.0 du projet abandonnée
* Démarrage de la version 2.0 du projet
    * Nouvelle recherche visuelle    
    * Début des esquisses préliminaires

#### 2 avril 2020

* Mise sur pause du projet en raison du résultat non concluant du prototype.

#### 30 mars 2020

* Fin de l'intégration du prototype 1.0 du site

#### 3 mars 2020

* Début de la révision de mon identité visuelle
* Début de la conception des maquettes et de l'intégration de la version 1.0 du site Web

#### 4 janvier 2020

* Refonte des projets :
    * Grosse-Île
    * Mexico

### 2019

#### 18 décembre 2019

* Refonte du projet Aquafina

#### Juin 2019

* Lancement du projet de portfolio Web
    * Recherche et idéation
    * Début du retraçage et de la sélection des projets

### 2007

#### Mai 2007

* Réalisation du portfolio imprimé
* Dévoilement de la version 1.0 de mon identité visuelle lors de l'exposition des finissants de Graphisme
