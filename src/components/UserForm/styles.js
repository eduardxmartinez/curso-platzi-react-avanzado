import styled from "styled-components";

export const Form = styled.form`
    padding: 16px 70px;
`

export const Input = styled.input`
    background: #1F1F1F;
    color: white;
    border: 0.5px solid #3f3f3f;
    border-radius: 5px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
    &[disabled] {
        opacity: .5;
    }
`

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

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
    text-align: center;
`
export const Text = styled.p`
    text-align: center;
`
export const Error = styled.p`
    color: red;
    font-size: 14px;
    text-align: center;
`

