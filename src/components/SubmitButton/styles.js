import styled from "styled-components"

export const Button = styled.button`
    background: #1084F9;
    border-radius: 5px;
    color: white;
    border: 0.5px solid #3f3f3f;
    padding: 8px 4px;
    display: block;
    width: 100%;
    margin-bottom: 8px;
    &[disabled] {
        opacity: .5;
    }
`