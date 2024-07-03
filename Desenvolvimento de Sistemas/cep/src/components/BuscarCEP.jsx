import { useState } from "react"
import Header from "./Header"

export default function BuscarCEP(){
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            setEndereco(data)
        }catch(error){
            console.error(error)
        }
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(cep);
      };

    return(
    <>
        <Header />
        <div className="content">
            <h1 className="title">Buscar Endereço Pelo CEP</h1>
            <form onSubmit={handleSubmit}>
                <input 
                className="input"
                type="text"
                value={cep}
                placeholder="Digite seu CEP"
                onChange={(e) => setCep(e.target.value)} 
                />
                <button type="submit" className="submit">Buscar</button>
            </form>

            {endereco && (
                <div className="info">
                    <p><b>Rua: </b> {endereco.logradouro}</p>
                    <p><b>Bairro: </b>{endereco.bairro}</p>
                    <p><b>Cidade: </b>{endereco.localidade}</p>
                    <p><b>UF: </b>{endereco.uf}</p>
                </div>
            )}
        </div>
    </>
  )
}