import { Link } from 'react-router-dom';

export default function Home(){
  return(
    <header>
        <nav>
            <div>
                <ul>
                    <li><Link to={'/busca-cep'}>Pesquisar um CEP </Link></li>
                    <li><Link to={'/busca-cep'}>Pesquisar um CEP </Link></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
