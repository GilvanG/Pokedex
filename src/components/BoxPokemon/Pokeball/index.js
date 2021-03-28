import styled from 'styled-components';

const white = '#f0f0f0';
const red = '#f00000';
const black = '#222224';

const Pokeball = styled.div`
    flex: 1;
    height: 180px;
    min-width: 300px;
    max-width: 300px;
    background-color: ${black};
    border-style: groove;
    border-color: ${black};
    border-radius: 5px;
    /* margin: 5px; */
    overflow: hidden;
    color: blue;
    align-items:center;
    box-shadow: 0 1px 6px rgba(34, 34, 36, 1)
    
`;

Pokeball.Topper = styled.div`
    height: 80px;
    width: 300px;
    background-color: ${red};
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

Pokeball.Downer = styled.div`    
    height: 80px;
    width: 300px;
    background-color: ${white};
    color: ${white};
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;

`;

Pokeball.Center = styled.div`
    position: absolute;
    margin-left: 70px;
    margin-right: 70px;
    /* padding: 2px; */
    height: 120px;
    width: 120px;
    border-radius: 150px;
    border-style: solid;
    border-width: 20px;
    border-color: ${black};
    background-color: ${white};
    align-items: center;
    text-align: center;
    /* overflow: hidden */
`;

export default Pokeball;
