import { Utilisateur } from "./utilisateur"
import { Avis } from "./avis"

export interface Videos {
    nom: string,
    description: string,
    code: string,
    image: string,
    categories: string,
    utilisateur: Utilisateur,
    date_publication : string,
    duree : number,
    nombre_vues: number,
    score: number,
    sous_titres: string,
    avis?: Avis,

}
