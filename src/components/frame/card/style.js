import styled from "styled-components"
// import image from "../../../Images/deadpool-wolverine_ifqe5dtr_500x749.jpg";
export default Abc = styled.div`
    background: url("https://cdn.shopify.com/s/files/1/0057/3728/3618/files/deadpool-wolverine_ifqe5dtr_500x749.jpg?v=1715286528");
    background-size: cover;
    overflow: hidden;
    // /* scale: 0.7; */
    background-position: center;  
    width: 200px;
    height: 300px ;
    /* aspect-ratio: 5/3 auto; */
    border-radius: 15px;

    position: relative;
    mask-image: black;
    padding: 15px;
    padding-top: 10px;
    margin: 7px;

    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    text-overflow: ellipsis " [..]";
    `

export const textContent = styled.div`
    visibility:hidden;
    height: 80%;
    width: 100%;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis " [..]";
    font-size: large;
    text-shadow: 1px 1px 2px black;`

export const watch = styled.div`
    visibility:hidden;
    position: absolute;
    align-self: center;
    bottom: 5%;
    cursor: pointer;`