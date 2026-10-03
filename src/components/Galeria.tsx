import type {KepAdat} from "../adatok"
import {KisKep} from "./KisKep"

interface GaleriaProps{
    adatLista: KepAdat[]
    onKepKattintas: (index: number) =>void
}
export function Galeria({adatLista, onKepKattintas}:GaleriaProps){
    return (
        <div className="galeria">
            //vegigmegyunk az adatokon es minden elemhez legeneralunk egy kiskep komponenst 
            {adatLista.map((elem, index)=>(
                <KisKep
                key={index}
                adat ={elem}
                index = {index}
                onClick = {onKepKattintas}
                />
            ))}
        </div>
    )
}