import styled from "styled-components"

export const ListWrapper = styled.section`
  body#grid & {
    background-color: var(--borders);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); 
    /* Repetir as colunas grid enquantoa tela comportar
    Cada grid pode tem de ter no minimo 380px */
  }
`