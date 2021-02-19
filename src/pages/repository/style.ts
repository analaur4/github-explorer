import styled from 'styled-components';

export const Header = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    
    // A tags <Link> é uma âncora:
    a {
        align-items: center;
        color: #A8A8B3;
        display: flex;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        align-items: center;
        display: flex;
    
        img {
            border-radius: 50%;
            height: 120px;
            width: 120px;
        }
    
        div {
            margin-left: 24px;

            strong {
                color: #545454;
                font-size: 36px;
            }

            p {
                color: #929292;
                font-size: 18px;
                margin-top: 5px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 80px;
            }

            strong {
                color: #343434;
                display: block;
                font-size: 36px;
            }

            span {
                color: #949494;
                display: block;
                margin-top: 5px;
            }
        }
    }

`

export const Issues = styled.section`
    margin-top: 80px;

    a {
        align-items: center;
        background-color: #FFF;
        border-radius: 5px;
        display: flex;
        padding: 24px;
        position: relative;
        text-decoration: none;
        transition: .5s;
        width: 100%;

        &:hover {
            transform: translateX(10px);
            transition: .5s;
        }

        // essa margem só existirá a partir do próximo elemento
        & + a {
            margin-top: 18px;
        }

        div {
            margin-left: 16px;

            strong {
                color: #3D3D4D;
                font-size: 20px;
            }

            p {
                font-size: 18px;
                color: #CBCBD6;
            }
        }

        svg {
            color: #CBCBD6;
            margin-left: auto;
        }

    }
`
