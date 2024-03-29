import Styled from "styled-components";
import { rem } from "polished";
import { maxQuery } from "../../../helpers";

export default Styled.div`
    div.modal-container {
        ${maxQuery("md")} {
            height: 100vh;
            width: 100vw;
            border-radius: 0px;
        }
    }
    div.productDetails-container {
        
        padding: 2.5em;
        p {
            font-weight: normal; 
            font-size: 14.5px;
            line-height: 20px;
            letter-spacing: 0px;
            color: #222222;
            opacity: 0.7;
        }
        main.flux-row {
            display: flex;
            ${maxQuery("md")} {
                padding-top: 2em;
                flex-direction: column;
            }
            div.flux-col {
                &:first-child {
                    padding-right: 2em;
                    div.img-container {                
                        width: ${rem("317px")};
                        height: ${rem("333px")};
                        box-shadow: 0px 0px 2px #00000029;
                        border-radius: 10px; 
                        overflow: hidden;
                        span {
                            width: 100%;
                            height: 100%;
                            img {
                                object-fit: cover;
                            }
                        }
                    }
                    ${maxQuery("md")} {
                        margin-bottom: 2em;
                    }
                }
                &:last-child {
                    width: 100%;
                    h2.productDetails-title {
                        margin-bottom: 1em;
                        width: 100%;
                        text-overflow: ellipsis;
                        height: ${rem("18px")};
                    }
                    p.product-details {
                        height: ${rem("76px")};
                        text-overflow: ellipsis;
                        overflow: hidden;
                        width: 100%;
                    }
                    p.product-status {
                        color: #47C479;
                    }
                    div.action-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        span.dot {
                            display: inline-block;
                            margin: 0 0.5em;
                        }
                        p {
                            margin: 0px;
                        }
                        div.action-label_row {
                            display: flex;
                            align-items: center;
                        } 
                        button.btn-unpublish {
                            padding-left: 0.5em;
                            padding-right: 0.5em;
                        }
                    }
                }
            }
            div.product-summary {
               div.flux-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    p {
                        margin: 0px;
                        &:last-child {
                            opacity: 1;
                        }
                    }
                    &:not(:last-child) {
                        p {
                            margin-bottom: 1em;
                        }
                    }
                }
            }
        }
   
        footer.flux-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1.5em;
           div.img-container_row {
                display: flex;
                width: ${rem("317px")};
                justify-content: center;
                ${maxQuery("md")} {
                    position: absolute;
                    top: 15vw;
                    left: 50vw;
                    flex-direction: column;
                    align-items: center;
                }
                div.sm-img {         
                    position: relative;           
                    width: ${rem("48px")};
                    height: ${rem("48px")};
                    box-shadow: 0px 0px 2px #00000029;
                    border-radius: 10px;
                    span {     
                        width: ${rem("48px")};
                        height: ${rem("48px")};
                        overflow: hidden;
                        box-shadow: 0px 0px 2px #00000029;
                        border-radius: 10px;
                        img {
                            object-fit: cover;
                        }
                    }
                    &:nth-child(2) {
                        margin: 0 1em;
                         ${maxQuery("md")} {
                             margin: 2em 0px;
                        }
                    }
                    &.active {
                        &:after {
                            content: "";
                            position: absolute;
                            bottom: -10px;
                            width: 40%;
                            height: 4px;
                            left: 50%;
                            transform: translateX(-50%);
                            border-radius: 5px;
                            background: ${({ theme }) => theme.primary};
                        }
                    }
                }
            }

            div.action-tray {
                display: flex;
                align-items: center;
                ${maxQuery("md")} {
                    justify-content: flex-end;
                    margin-top: 2em;
                    width: 100%;
                }
                button {                    
                    width: ${rem("35px")};
                    height: ${rem("36px")};    
                    &:nth-child(2) {
                        margin: 0 1em;
                        .icon {
                            font-size: 1.5em;
                        }
                    }
                    &:not(.btn-copy) {
                        .icon {
                            font-size: 1.7em;
                        }
                    }
                }
            }
        }
    }


`;
