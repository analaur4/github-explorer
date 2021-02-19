import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    color: #3A3A3A;
    font-size: 48px;
    line-height: 56px;
    margin-top: 56px;
    max-width: 500px;
`

export const Form = styled.form<FormProps>`
    display: flex;
    margin-top: 40px;
    max-width: 700px;

    input {
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #040404;
        flex: 1;
        height: 70px;
        padding: 0 24px;

        ${(props) => props.hasError && css`
            border: 1px solid #F00;
        `}

        &::placeholder {
            color: #B1AFB3;
        }

        &:focus {
            border: 1px solid #5B57AA;
        }
    }

    button {
        background: #5B57AA;
        border: 0;
        border-radius: 0 5px 5px 0;
        color: #FFF;
        font-weight: bold;
        height: 70px;
        width: 200px;
        transition: .5s;

        &:hover {
            transition: .5s;
            background: ${shade(0.1, '#5B57AA')};
        }
    }
`

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

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

        img {
            border-radius: 50%;
            height: 50px;
            width: 50px;
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

export const Error = styled.span`
    color: #F00;
    display: block;
    margin-top: 10px;
`
