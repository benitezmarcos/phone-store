import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;

border: 0.2rem solid;
border-image-source: ${
    props => props.cart?"linear-gradient(45deg, #5d9bec, #0d64d7)":
        "linear-gradient(45deg, #ed5565, #d52739)"
};
border-image-slice: 1;
color: ${
    props => props.cart?"var(--btnBlue)":
    "var(--mainRed)"
};
border-radius: .5rem;
padding: 0.3rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background-image: ${
        props => props.cart?"linear-gradient(45deg, #5d9bec, #0d64d7)":
        "linear-gradient(45deg, #ed5565, #d52739)"
    };
    
    color: white;
}
&: focus{
    outline:none;
}
`;
