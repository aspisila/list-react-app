import styled from 'styled-components';

export const LoginPage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('https://source.unsplash.com/random');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        text-align: center;
        margin-bottom: 15px;
    }
`;

export const LoginBgMask = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6 );
    width: 100%;
`;