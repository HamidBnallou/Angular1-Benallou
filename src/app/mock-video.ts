import { Videos } from "./videos";

export const VIDEOS: Videos[] = [

    { 
        nom: 'Diffetents type de voiture',
        description: 'Categories des voiture, avec leur description',
        code: 'TR23VOIT26', 
        image: 'https://picsum.photos/id/237/200/100',
        categories: 'Mécanique',
        date_publication : '2022-03-14',
        duree : 300,
        nombre_vues: 86,
        score: 8000,
        sous_titres: 'Sous-titre de Diffetents type de voiture',
        avis:{
            note : 7894,
            commentaire:'Riche d information'
            },
        utilisateur: {
            nom : 'Carl Forban',
            utilisateur: '@forban',
            verifie: true,
            coordonnees : 'cforban@outlook.ca',
            description : 'Carl Forban, le mécano'
            },
    },

    {
        nom: 'Conduite de voiture electrique',
        description: 'Bien conduire une voiture electrique pour l economie de l energie',
        code: 'D0023VERT',
        image: 'https://picsum.photos/id/227/200/100',
        categories: 'Environnement',
        date_publication : '2023-06-24',
        duree : 155,
        nombre_vues: 2654,
        score: 2003,
        sous_titres: 'Sous-titre de COnduite de voiture electrique',
        avis:{
            note : 365,
            commentaire:'Aide beaucoup a optimiser l energie sur e-car'
            },
        utilisateur: {
        nom : 'Dabby Belamger',
        utilisateur: 'Dabby SP',
        verifie: true,
        coordonnees : 'saveus@gmail.com',
        description : 'Dabby ensemble pour la planete'
        },
    },
    {
        nom: 'Test Voiture Hydrogéne',
        description: 'Description de Test voiture Hydrogéne',
        code: 'HY201GENE',
        categories: 'Sport',
        image: 'https://picsum.photos/id/147/200/100',
        date_publication : '2021-02-05',
        duree : 125,
        nombre_vues: 60,
        score: 4554,
        sous_titres: 'Sous-titre de la video Test Voiture Hydrogéne',
        avis:{
            note : 48,      
            commentaire:'Belle vidéo qui montre l evolution des energie vertes'
            },
        utilisateur: {
            nom : 'Shaw Tremblay',
            utilisateur: 'Shaw',
            verifie: true,
            coordonnees : 'Shaw',
            description : 'Desciprion de Test voiture Hydrogéne'
            },
    },
    {
        nom: 'Formule 1',
        description: 'Description de la video Formule 1',
        code: 'FORMU001',
        image: 'https://picsum.photos/id/238/200/100',
        date_publication : '2022-10-30',
        categories: 'Sport',
        duree : 495,
        nombre_vues: 7006,
        score: 5900,
        sous_titres: 'Sous-titre de la video Formule 1',
        avis:{
            note : 8478,
            commentaire:'Adrénaline est au RDV'
           },
        utilisateur: {
        nom : 'Jack Riche',
        utilisateur: 'Riche',
        verifie: false,
        coordonnees : 'Jack Riche//linkedin',
        description : 'Description de Jack Riche'
        },
    },
    {
        nom: 'Eco Conduite',
        description: 'description de la video Echo Conduite',
        code: 'ECIO2315',
        image: 'https://picsum.photos/id/220/200/100',
        categories: 'Eco-enegrie',
        date_publication : '2021-10-15',
        duree : 149,
        nombre_vues: 686,
        score: 1265,
        sous_titres: 'Sous-titre de la Eco Conduite',
        avis:{
            note : 105,
            commentaire:'Eco conduite pour prevenir la sur consommation'
            },
        utilisateur: {
        nom : 'Karine Dami',
        utilisateur: 'Karine',
        verifie: true,
        coordonnees : 'Karine//Instagram',
        description : 'Salut, C,est Karine'
        },
    }



]