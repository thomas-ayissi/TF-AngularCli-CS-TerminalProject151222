URL Gist Notes du projet : https://gist.github.com/thomas-ayissi/4e36825011dc3bd6d4066ab6c9378d48
                                                                                     
V1 - Découpage des modules
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
