import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { PaperAirplaneIcon } from "@primer/octicons-react";
import 'react-awesome-button/dist/styles.css';


import './style.css'

export default function Contato() {

    const handleFocus = ({ target }) => {
        const label = target.previousElementSibling;
        label.classList.add('label-active')
    }
    const handleFocusOut = ({ target }) => {
        if (target.value === '') {
            const label = target.previousElementSibling;
            label.classList.remove('label-active');
        }
    }
    const [name, setName] = useState();

    return (
        <section className="Contato" id="Contato">
            <h2 className="titulo-section" data-aos="fade-right">Contato</h2>
            <div className="conteudo-contato" data-aos="fade-up">
                <div className="icons-contato">
                    <a href="https:/wa.me/+5581995286212" target="blank"> <i className="bi bi-whatsapp"></i></a>
                    <a href="mailto:kaiovbamorim@gmail.com"><i className="bi bi-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/kaio-amorim-a47160244/" target="blank"><i className="bi bi-linkedin"></i></a>
                </div>
                <p>Envie-me uma mensagem</p>
                <form target="_blank" action="https://formsubmit.co/kaiovbamorim@gmail.com" method="POST">
                    <div className="label-input">
                        <label htmlFor='name'>Nome<i className="bi bi-person"></i></label>
                        <input onFocus={handleFocus} onBlur={handleFocusOut} onChange={(e) => setName(e.target.value)} type='text' id="name" name="name" value={name} required />
                    </div>
                    <div className="label-input">
                        <label htmlFor='email'>E-mail<i className="bi bi-at"></i></label>
                        <input onFocus={handleFocus} onBlur={handleFocusOut} type='email' id="email" name="email" required />
                    </div>
                    <div className="label-input">
                        <label htmlFor='assunto'>Assunto<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                            <line x1="8" y1="9" x2="16" y2="9"></line>
                            <line x1="8" y1="13" x2="14" y2="13"></line>
                        </svg></label>
                        <input onFocus={handleFocus} onBlur={handleFocusOut} type='text' id="assunto" name="_subject" required />
                    </div>
                    <div className="label-input">
                        <label className='label-textarea' htmlFor='mensagem'>Mensagem<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                        </svg></label>
                        <textarea onFocus={handleFocus} onBlur={handleFocusOut} id="mensagem" name="message"></textarea>
                    </div>
                    <AwesomeButton type="primary" ref={null} after={<PaperAirplaneIcon />}>Enviar</AwesomeButton>
                </form>
                <nav className="NavFooter">
                    <a href="https://github.com/kaiovbamorim" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    <a href="https://www.linkedin.com/in/kaio-amorim-a47160244/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                    <a href="https://www.instagram.com/kaioamorim9/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                    <a href="https://wa.me/+5581995286212" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg></a>
                </nav>
            </div>
        </section >
    )
}