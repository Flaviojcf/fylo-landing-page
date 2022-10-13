import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    min-width: 25rem;
    justify-content: space-between;
    contain: content;
`

export const ListContainer = styled.ul`

    display: flex;
    gap: 2rem;

    li {
        list-style: none;
        color: ${props=>props.theme.colors.Gray};
       
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover {
            color:${props=>props.theme.colors.White} ;
            text-decoration: underline;

        }
    }


`