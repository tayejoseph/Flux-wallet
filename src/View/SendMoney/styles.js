import Styled from "styled-components";
import { rem } from "polished";

export default Styled.div`
    div.modal-container {
        p {
            font-size: ${rem("14px")};
            letter-spacing: 0px;
            color: #222222;
            opacity: 0.7;
        }
        form {
            div.form-inputs {
                padding: 1em 1.5em;  
                padding-top: 2em;          
            }
            
            div.flux-name {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 1.2em;
                p {
                    color: #47C479;
                    letter-spacing: 0.14px;
                    border: 1px solid #AEAEAE;
                    border-radius: 4px;
                    padding: 1em;
                    margin: 0px;
                }
            }
            footer {
                padding: 0px;
                padding: 1.5em;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 0px 1px #00000029;
                border-radius: 0px 0px 10px 10px;
            }
        }
    }
`;
