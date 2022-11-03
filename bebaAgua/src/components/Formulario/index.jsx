import './styles.css'
import copo from './img/copo-01.svg'
import copoVazio from './img/Copo-vazio.svg'
import copo02 from './img/Copo-umQuarto.svg'
import copoMetade from './img/Copo-metade.svg'
import copo04 from './img/Copo-tresQuartos.svg'
import copoCheio from './img/Copo-cheio.svg'
import { useState } from 'react'

function Formulario() {
    // const [count, setCount] = useState(0)
    const [meta, setMeta] = useState(0);
    const [quantMl, setQuantMl] = useState(0);
    const [quantTotal, setQuantTotal] = useState(0);
    const [copos, setCopos] = useState(1)
    const [metaAtual, setMetaAtual] = useState("")

    const clique = () => {
        if(quantMl>0){
            if(meta>0){
                const coposAgora = copos + 1
                const quantAgora = ((quantTotal*1) + (quantMl*1))
                setCopos(coposAgora)
                setQuantTotal(quantAgora)
                console.log(copos)
                console.log(quantAgora)
                console.log(quantTotal)
                // somarTotal()
                metaDiaria()
            }
            else {
                setMetaAtual("A sua meta deve ser maior que zero")
            }
        }
        else {
            setMetaAtual("A quantidade informada deve ser maior que zero")
        }
    }

    const metaDiaria = () => {
        if(quantTotal < meta){
            setMetaAtual("Você está quase lá, continue bebendo água!")
        }
        else {
            setMetaAtual("Parabéns! Você atingiu sua meta diária!")
        }
        
    }

    function ImgCopo() {
        if(quantTotal == 0){
            return(
            <img src={copoVazio} className="imagem" alt="ImagemCopo" />
            )
        }else if(quantTotal <= (meta*0.5)) {
            return(
            <img src={copo02} className="imagem" alt="ImagemCopo" />
            )
        }else if(quantTotal == (meta*0.5)) {
            return(
            <img src={copoMetade} className="imagem" alt="ImagemCopo" />
            )
        }else if(quantTotal < (meta)) {
            return(
            <img src={copo04} className="imagem" alt="ImagemCopo" />
            )
        }else if(quantTotal >= (meta)){
            return(
            <img src={copoCheio} className="imagem" alt="ImagemCopo" />
            )
        }
    }

    return (
        <div className='geral'>

            <div className='form'>
                <h2>Meta diária:</h2>
                <br/>
                <input 
                    type="number"
                    min={0}
                    // value={meta}
                    placeholder='Digite sua meta em ml'
                    onChange={e => setMeta(parseInt(e.target.value))}
                />
    
                <br/>
                <h2>Quantos ml você bebeu?</h2>
                <br/>
                <input
                    type="number"
                    min={0}
                    // value={quantMl}
                    placeholder='Digite os ml do copo'
                    onChange={e => setQuantMl(parseInt(e.target.value))}
                />
    
                <br/>
                <button onClick={clique}>
                    Inserir novo copo!
                </button>
                <br/>
                <h2>Total: {quantTotal} ml - {copos-1} copos</h2>
                <br/>
                <br/>
                <h2 style={{color: "white"}}>{metaAtual}</h2>
    
            </div>
            {/* <img src={copo} className="imagem" alt="ImagemCopo" />  */}
            <ImgCopo />
        </div>
    )
}

export default Formulario