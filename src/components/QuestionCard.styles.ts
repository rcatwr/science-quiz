import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 400px;
    /* background: #ebfeff; */
    /* border-radius: 10px; */
    /* border: 2px solid #0085a3; */
    padding: 20px;
    /* box-shadow: 0px 5px 10px rgba(0,0,0, 0.25); */
    color: #fff;
    text-align: center;

    p{
        font-size: 1rem;

    }

`
type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`

    /* transition: all 0.5s ease;

    :hover {
        opacity: 1;
    } */

    button {
        cursor: pointer;
        user-select: none;
        /* font-size: 0.8rem; */
        /* opacity: 0.8; */
        font-size: 1em;
        width: 100%;
        padding: 1em 2.5em;
        margin: 5px 0;
        background: ${({ correct, userClicked }) => correct
        ? 'hsl(141, 53%, 53%)'
        : !correct && userClicked
            ? 'hsl(348, 100%, 61%)'
            : 'hsl(204, 86%, 53%)'};
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0,0,0, 0.1);
        border-radius: 10px;
        color: #fff;
        box-shadow: 1px 1px 0px rgba(0,0,0, 0.25);
    }
    


`