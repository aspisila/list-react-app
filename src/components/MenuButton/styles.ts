import styled from 'styled-components';

export const Container = styled.div`
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primaryColor};
    padding: 13px;
    cursor: pointer;
    line-height: 0.1;
    align-self: center;
    padding-bottom: 20px;
    padding-top: 15px;
    font-weight: bold;
    border-radius: 4px;
    position: relative;
    
    ul {
        display: none;
    }
    
    :hover {
        background: ${(props) => props.theme.colors.default};
        
        ul {
            display: block;
            position: absolute;
            top: 43px;
            right: 0;
            border: 2px solid #ccc;
            color: ${(props) => props.theme.colors.color};
            border-radius: 4px;
            z-index: 99;
            
            li {
                text-align: center;
                padding: 20px 40px;
            }
    
            div {
                width: 130px;
                position: absolute;
                top: -20px;
                height: 20px;
                span {
                    display: inline-block;
                    position: absolute;
                    right: 5px;
                    width: 10px;
                    height: 10px;
                    border: 10px solid;
                    border-color: transparent transparent #ccc transparent;
                }
            } 
        }   
    }
`;