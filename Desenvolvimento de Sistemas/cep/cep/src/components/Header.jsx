import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <>
        <header>
            <nav>
                <div className='header-align'>
                    <h1><img src="location-search.png" alt="" /></h1>
                    <ul>
                        <li><Link to={'/busca-cep'}>Pesquisar um CEP </Link></li>
                        <li><Link to={'/busca-cep'}>Pesquisar um CEP </Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
  )
}
