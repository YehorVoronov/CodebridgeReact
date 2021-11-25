import style from "./OneInform.module.css"
import {NavLink} from "react-router-dom";

let OneInform=(props)=>{
    return(
        <div>
            <div className={style.header}>
                <img src={props.imageUrl}/>
            </div>
            <div className={style.information}>
                <h1>{props.title}</h1>
                <p>{props.summary}</p>
                <hr/>
                <p> Chciałbym, żeby intencje były opiekuńcze, żeby intencją było wsparcie dla kobiet w ciąży,
                    ale żadne z działań tego rządu nie wskazuje, żeby to była ich intencja - powiedział się podczas
                    konferencji prasowej Donald Tusk zapytany o rejestr ciąż, który planuje wprowadzić rząd. Informacje
                    na ten temat opublikował we wtorek w mediach społecznościowych Krzysztof Brejza.
                    "Rząd wprowadza rejestrację ciąż. Wszelkie podmioty lecznicze będą wprowadzać do Systemu Informacji
                    Medycznej info o pacjentkach z ciążami. Skierowałem w tej sprawie interwencję do Min. Zdrowia. Domagam
                    się wyjaśnień: - kto zainicjował tę zmianę? - jaki jest jej faktyczny cel?" - napisał we wtorek na Twitterze
                    senator KO Krzysztof Brejza.</p>
                <p> Chciałbym, żeby intencje były opiekuńcze, żeby intencją było wsparcie dla kobiet w ciąży,
                    ale żadne z działań tego rządu nie wskazuje, żeby to była ich intencja - powiedział się podczas
                    konferencji prasowej Donald Tusk zapytany o rejestr ciąż, który planuje wprowadzić rząd. Informacje
                    na ten temat opublikował we wtorek w mediach społecznościowych Krzysztof Brejza.
                    "Rząd wprowadza rejestrację ciąż. Wszelkie podmioty lecznicze będą wprowadzać do Systemu Informacji
                    Medycznej info o pacjentkach z ciążami. Skierowałem w tej sprawie interwencję do Min. Zdrowia. Domagam
                    się wyjaśnień: - kto zainicjował tę zmianę? - jaki jest jej faktyczny cel?" - napisał we wtorek na Twitterze
                    senator KO Krzysztof Brejza.</p>
            </div>
            <div className={style.foot}>
                <NavLink to="/">Back to home</NavLink>
            </div>
        </div>
    )
}
export default OneInform;