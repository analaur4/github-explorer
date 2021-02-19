import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import Logo from '../../images/logo-github.svg';
import { Header, RepositoryInfo, Issues } from './style';

import { RepositoryI }  from '../../interfaces/repository';
import { Issue } from '../../interfaces/issue';
import { RepositoryParams } from '../../interfaces/resporitory-params';

const Repository: React.FC = () => {

    const [repository, setRepository] = useState<RepositoryI | null>(null)
    const [issues, setIssues] = useState<Array<Issue>>([])
    const { params } = useRouteMatch<RepositoryParams>()

    useEffect(() => {
        api.get(`repos/${params.repository}`).then(resp => {
            setRepository(resp.data);
        })
        
        api.get(`repos/${params.repository}/issues`).then(resp => {
            setIssues(resp.data);
        })

    }, [params.repository])

    function openTab(link: string) {
        // tornar o âncora clicável
        // o target sempre dá problema, esta é uma forma de resolver
        window.open(link, "_blanck")
    }

    return (
        <>
            <Header>
                <img src={ Logo } alt="Logo App" />
                <Link to="/" > <FiChevronLeft size={20}/> Voltar </Link>
            </Header>

            { repository && (
                <RepositoryInfo>
                    <header>
                        <img src={ repository.owner.avatar_url } alt={ repository.full_name } />
                        <div>
                            <strong>{ repository.full_name }</strong>
                            <p>{ repository.description }</p>
                        </div>
                    </header>

                    <ul>
                        <li>
                            <strong>{ repository.stargazers_count }</strong>
                            <span>Starts</span>
                        </li>
                        <li>
                            <strong>{ repository.forks_count }</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{ repository.open_issues_count }</strong>
                            <span>Issues</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            ) }

            <Issues>
                { issues.map(issue => (
                    <a key={ issue.id } onClick={() => openTab(`${ issue.html_url }`)}>
                        <div>
                            <strong>{ issue.title }</strong>
                            <p>{ issue.user.login }</p>
                        </div>
                        <FiChevronRight size={40} />
                    </a>
                )) }
            </Issues>
        </>
    )
}

export default Repository;
