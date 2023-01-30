URL Gist Notes du projet : https://gist.github.com/thomas-ayissi/4e36825011dc3bd6d4066ab6c9378d48
                                                                                     
V1 - Découpage des modules



###TF - Lun 30 Jan 2023 - Laboratoire Développement - Application Angular

####(1) Evolution du schéma - représentation de l’application

Présentation du projet  : mardi 7 jan 2023

URL Doc Officielle Angular :  https://angular.fr/modules/feature-modules.html

Structure d'un projet simple en Angular
<project root>
app
navbar
navbar.module.ts
navbar.component.ts
app.component.ts
app.module.ts
main.ts
index.html


Structure de mon projet (Appli Pour librairie)
<project root>
app
navbar
sousNavbar
sousNavbar.Module.ts
sousNavbar.component.ts

          navbar.module.ts
          navbar.component.ts

        main
               article
                    imageArticle 
                        imageArticle.module.ts
                        imageArticle.component.ts 

                    descriptionArticle 
                        descriptionArticle.module.ts
                        descriptionArticle.component.ts 

               article.module.ts
               article.component.ts 
                                           
          main.module.ts
          main.component.ts  
                
          footer
                   navbar
                         sousNavbar
                                  sousNavbar.Module.ts
                                  sousNavbar.component.ts 
                   navbar.module.ts
                   navbar.component.ts

           footer.module.ts
           footer.component.ts  

app.component.ts
app.module.ts

main.ts
index.html






TF - Laboratoire - Développement Application en angular - Lun 23 Jan 202 »

Nom Du Projet :  /Users/thomasayissi/Documents/TF-AngularCli-CS-TerminalProject151222-V22122022/TF-Angular-Store-Management-Project-0414122

Port sur lequel est "écouté" : http://localhost:4200/

Erreur de compilation :

Erreur : j’ai un problème avec le NGInit
(img)


Componments
Nous aurons un

A/ Pour les produits proposés à la vente :

LibrairieComponment
Contenant plusieurs
LivresComponments
Contenant plusieurs
( FicheArticleComponment
+
ImageArticleComponment)


B/ Pour le visuel du site

Header Componment
Main Componment
FooterComponment

MainComponment
Contient un
MenuComponment
Contient plusieurs
SousMenuComponments


MainComponment
Contient plusieurs
ArticleComponments
Contenant plusieurs
( FicheArticleComponment
+
ImageArticleComponment)



MainComponment
Contient un
AsideComponment


Vu la "forêt" de "components"
Il vaut mieux faire un arbre qui schématise l’ensemble


Schéma récapitulatif des "components" ci-dessous :
(img)

URL fichier PDF du même schéma :
[https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:3542c1bc-378b-3cff-828c-edc5892eb05f]


16h42
Après la modification intégrale du nom, les données "en dur" s’affichent
J’ai choisi de "changer de port d’écoute"
http://localhost:52613/ 
