<img src="liaisons/images/design/iv-gabrielcaron.svg" width="285px" height="70px">

Ce dépôt contient mon site personnel.

## Sommaire
* [Configurations ciblées](#configurations-ciblées)
* [CSS](#css)
* [Dépendances](#dépendances)
* [Historique](#historique-de-ce-projet)
* [Images](#images)
* [Javascript](#javascript)

## Configurations ciblées

* Poste de table : MacBook Pro 15/16 pouces
* Tablette : iPad Pro
* Mobile : iPhone X

## CSS

* SASS
* Méthodologie BEM

## Dépendances

Aucune dépendance requise.

## Historique

### En résumé

Un premier portfolio imprimé a été réalisé à l'hiver 2007 dans le cadre du cours Projet graphique 3D lors de la 3e année en Graphisme au Cégep de Rivière-du-Loup. Aucune version Web n'avait été prévue à ce moment.

À l'été 2019, le projet d'un nouveau portfolio Web est amorcé. Il rassemblera les projets réalisés en Graphisme ainsi qu'en Techniques d'intégration multimédia.

À l'hiver 2020, un premier prototype est intégré. Le résultat visuel n'était pas concluant; le projet est mis sur la glace temporairement.

À l'automne 2020, le projet est relancé et la première version est abandonnée. Le projet est recommencé avec de nouvelles recherches visuelles, esquisses préliminaires, esquisses fonctionnelles, maquettes, etc.

À l'été 2021, une seconde version est intégrée. La mise en ligne d'une version de développement est effectuée.

### 2021

#### 22 juillet 2021

* Mise en ligne du projet Destinations Canada (Design graphique)

#### 16 juillet 2021

* Mise en ligne du projet Danse en boîtes

#### 11 juillet 2021

* Mise en ligne du projet 100 ans de SOS

#### 10 juillet 2021

* Mise en ligne du projet Aquafina

#### 7 juillet 2021

* Mise en ligne du projet Grosse-Île

#### 3 juillet 2021

* Mise en ligne du projet Destinations Canada (Web)

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

* Mise sur pause du projet en raison du prototype non concluant.

#### 30 mars 2020

* Fin de l'intégration du prototype 1.0 du site

#### 3 mars 2020

* Début de la révision de mon identité visuelle
* Début de la conception des maquettes et de l'intégration de la version 1.0 du site Web

#### 4 janvier 2020

* Refonte des projets
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
* Réalisation de la première version de mon identité visuelle

## Images

* La plupart des images sont au format SVG.
* Les aperçus des projets sont au format PNG.

### Icônes

* Le symbole occupe 60% à 65% de la largeur de l'élévation. Un dégradé **radial** est utilisé pour l'état par défaut et pour l'état survol.
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

La plupart des projets sont présentés avec des périphériques mobiles (iPhone et/ou iPad). Adobe Publish Online a été préféré à Adobe Publish Online pour les raisons suivantes :
* On peut désactiver le téléchargement du document PDF
* On peut zoomer autant qu'on souhaite
* La qualité d'affichage est supérieure

#### Formats normalisés

Toutes les images au format PNG sont à 1x et 2x. Le site est optimal sur une tablette ou un poste de table avec un écran avec une densité de 2x.

#### Exporter les aperçus à partir de Photoshop

1. Exporter en PNG via Exporter sous... Choisir le rééchantillonage **Bicubique plus net**
2. Optimiser avec ImageOptim à 80% de qualité
3. Nommer sous la forme **projet-largeur en px**, exemple : `mexico-1400.png`

#### Projets sans contexte

1. Exporter en SVG et nommer sous la forme **projet-largeur en px**, exemple : `altitude-1400.svg`.
2. Optimiser avec ImageOptim.
3. Dans `<svg>` retirer `width` et `height`.
4. Dans `<rect>` conserver seulement `fill` `height` `width`. Exemple: `fill="#fcfcfc" height="500" width="1400"`
5. Intégrer avec une balise `<img>`.

##### 12 colonnes (pleine largeur)

|          | 1x     | 2x     |
|----------|--------|--------|
| Mobile   | 600px  | 1200px |
| Tablette | 1000px | 2000px |
| Table    | 1400px | 2800px |

##### 6 colonnes (design graphique seulement)

|          | 1x     | 2x     |
|----------|--------|--------|
| Mobile   | 600px  | 1200px |
| Tablette+| 690px  | 1380px |

##### 8 colonnes (design graphique seulement)

|          | 1x     | 2x     |
|----------|--------|--------|
| Mobile   | 600px  | 1200px |
| Tablette+| 927px  | 1854px |

Nommer les fichiers selon la forme suivante : `nomduprojet-largeur.ext`, exemple: `mexico-1000.png`. Ne pas rajouter de référence aux périphériques : mobile, tablette, etc.

#### Exporter des PDF

InDesign n'affiche pas correctement les PDF annotés avec Fichiers dans iOS. Dans Acrobat Pro :
1. Aller dans Acrobat > Fichier > Exporter vers > PostScript. Enregistrer.
2. Ouvrir ce fichier dans Acrobat Distiller. Utiliser les paramètres «PDF qualité max».
3. Importer le PDF converti dans InDesign.

## Javascript

Pour une meilleure accessibilité, il n'y a aucun JavaScript requis pour afficher de l'information, tel un menu hamburger. Le site utilise Google Analytics 4, qui demeure facultatif pour les internautes.
