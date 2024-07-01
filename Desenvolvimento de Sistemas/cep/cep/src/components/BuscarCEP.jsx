import { useState } from "react"

export default function BuscarCEP(){
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            setEndereco(data)
        }catch(error){
            console.error(error)
        }
    } 

    return(
    <div className="content">
        <h1>Buscar Endereço Pelo CEP</h1>
        <input 
        type="text"
        value={cep}
        placeholder="Digite seu CEP"
        onChange={(e) => setCep(e.target.value)} 
        />
        <button onClick={fetchData}>Buscar</button>

        {endereco && (
            <div>
                <p>Rua: {endereco.logradouro}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Cidade: {endereco.localidade}</p>
                <p>UF: {endereco.uf}</p>
            </div>
        )}
    </div>
  )
}
