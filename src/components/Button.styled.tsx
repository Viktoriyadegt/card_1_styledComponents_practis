import styled, {css} from "styled-components";

export type SuperButtonPropsTYpe = {
    color?:string
    fontSize?:string
    typeBtn: 'primary' | 'outlined'
    active?:boolean
}

export const SuperButton = styled.button<SuperButtonPropsTYpe>`
    border: none;
    border-radius: 5px;
    font-size: 10px;
    width: 86px;
    height: 30px;
    color: #FFFFFF;
  
    padding: 0.25em 1em;


    ${(props) => props.typeBtn === 'primary' && css<SuperButtonPropsTYpe>`
        background-color: ${props => props.color || '#4E71FE'
        };
    `}
    ${(props) => props.typeBtn === 'outlined' && css<SuperButtonPropsTYpe>`
        border: 2px solid ${props => props.color ||  '#4E71FE'};
        color: ${props => props.color ||  '#4E71FE'};
        background-color: transparent;
    `}
    &:hover {
        cursor: pointer;
    }
    
    ${props=>props.active &&css<SuperButtonPropsTYpe>`
        box-shadow: 5px 5px 5px 5px rgba(128, 128, 128, 0.36);
    `}
`