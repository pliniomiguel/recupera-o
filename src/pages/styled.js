import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0px;

}

.seila {
    display: flex;
    flex-direction: row;

    padding: 25px;
}

.h5 {
    text-align: center;
    font-family: montserrat;
    background-color: violet;

    padding: 5px;
}

.input input {
    margin: 0px 10px;
}

.botao button {
    margin: 0px 10px;
}
`;
