import React, { FormEvent, useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Logo from '../../images/logo-github.svg';
import { Title, Form, Repositories, Error } from './style';

import { RepositoryI } from '../../interfaces/repository';

const Home: React.FC = () => {

    const [newRepo, setNewRepo] = useState('')
    const [inputError, setInputError] = useState('')
    const [repositories, setRepositories] = useState<RepositoryI[]>(() => {
        const storageRepositories = localStorage.getItem('@githubexplorer')
        if(storageRepositories) {
            return JSON.parse(storageRepositories)
        } else {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('@githubexplorer', JSON.stringify(repositories))
    }, [repositories])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if(!newRepo) {
            setInputError('O campo de nome do repositório é obrigatório!')
            return;
        }
        
        try {
            // add novos repositórios
            const response = await api.get(`repos/${newRepo}`)
            const repository = response.data
            setRepositories([...repositories, repository])
            setNewRepo('')
            setInputError('');
            toast.success('Respositório listado com sucesso!')

        } catch (e) {
            toast.error('Oops, algo deu errado!')
        }
    }

    return (
        <>
            <img src={Logo} alt="Logo App" />
            <Title>Encontre repositórios no GitHub</Title>
            
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input 
                    type="text"
                    placeholder="Digite o nome do repositório"
                    value={newRepo}
                    onChange={ e => setNewRepo(e.target.value) }
                 />
                <button type="submit"> Pesquisar </button>
            </Form>
            { inputError && <Error>{ inputError }</Error> }

            <Repositories>
                { repositories.map((repo, index) => (
                    <Link to={`repository/${repo.full_name}`} key={index}>
                        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                        <div>
                            <strong>{repo.full_name}</strong>
                            <p>{repo.description}</p>
                        </div>
                        <FiChevronRight size={40} />
                    </Link>
                )) }
            </Repositories>
        </>
    )
}

export default Home;
