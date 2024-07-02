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
            <h1>Buscar Endereço Pelo CEP</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={cep}
                placeholder="Digite seu CEP"
                onChange={(e) => setCep(e.target.value)} 
                />
                <button type="submit" className="submit">Buscar</button>
            </form>

            {endereco && (
                <div>
                    <p>Rua: {endereco.logradouro}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>UF: {endereco.uf}</p>
                </div>
            )}
        </div>
    </>
  )
}
