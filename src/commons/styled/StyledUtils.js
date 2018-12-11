import styled from "styled-components";

export const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form1 = styled.form`
    display: inline;
    width: 300px;
`;

export const Input = styled.input`
    width: 300px;
    height: 35px;
    border: ${props => props.border || "1px solid #ccc"}
    background-color: #fff;
`;
export const Input1 = styled.input`
    width: 200px;
    height: 20px;
    border: ${props => props.border || "1px solid #ccc"}
    background-color: #fff;
    float: left;
`;

export const Input2 = styled.input`
    width: 200px;
    height: 20px;
    border: ${props => props.border || "1px solid #ccc"}
    background-color: #fff;
    float: right;
`;

export const Button = styled.button`
    width: 300px;
    height: 35px;
    background-color: #5995ef;
    color: #fff;
    border-radius: 3px;
`;

export const Title = styled.h2`
    font-family: "Raleway", sans-serif;
    color: Black;
    text-align: center;
    font-weight: lighter;
`;

export const Text = styled.p`
    font-family: "Raleway", sans-serif;
    color: ${props => props.color || "#4d4d4d"};
`;

export const Anchor = styled.a`
    color: ${props => props.color || "#4d4d4d"};
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: #777;
    font-family: "Raleway", sans-serif;
    font-size: 0.8em;
    margin: 0.5em 0;
    position: relative;
`;

export const StyledContainer = styled.div`
    width: 650px;
    margin-top: 80px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
`;

export const StyledDiv = styled.div`
    width: 550px;
    margin-top: 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    display: inline-block !important;
`;

export const StyledUl = styled.ul`
    padding: 0;
`;

export const StyledList = styled.li`
    list-style: none;
    overflow: hidden;
    width: 100%;
    margin-bottom: 10px;
`;

export const StyledLabel = styled.label`
    float: left;
    cursor: pointer;
    background-color: ${props => {
        if(props.color === "High")
            return "tomato"
        else if(props.color === "Medium")
            return "lightyellow"
        else return "lightgreen"
    }};
`;

export const StyledButton = styled.button`
    float: right;
    background: palevioletred;
    color: #fff;
    border-radius: 3px;
    border: 2px solid palevioletred;
    padding: 3px 10px;
    outline: none;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
`;
