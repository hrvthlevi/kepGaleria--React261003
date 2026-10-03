import type {KepAdat} from "../adatok"
import './nagykep.css'

//definialjuk mit var a NagyKep a szulotol
interface NagyKepProps{
    adat: KepAdat
    onKovetkezo: ()=> void
    onElozo: ()=> void
}
export function NagyKep({adat,onKovetkezo,onElozo}:NagyKepProps){
    return(
        <div className="nagyKepKontener">
            {/* bal oldali lepteto */}
            <button onClick={onElozo}>Előző</button>
            {/* fokep es a hozzatartozo adatok */}
            <div className="fokep">
                <h3>{adat.alt}</h3>
                <img src={adat.src} alt={adat.alt} />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, expedita eum pariatur deleniti repudiandae, dolorum molestias facere aspernatur maiores corrupti blanditiis hic obcaecati sit perferendis aperiam nihil mollitia veritatis laboriosam.</p>
            </div>
            {/* jobb oldali lepteto */}
            <button onClick={onKovetkezo}>Következő</button>
        </div>
    )
}
