import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { DownloadIcon } from "@primer/octicons-react";
import 'react-awesome-button/dist/styles.css';
import './style.css';

export default function Sobre() {
    return (
        <section className='Sobre' id='Sobre'>
            <h2 className='titulo-section'>Sobre</h2>
            <article className='conteudo-sobre'>
                <div className="emote-sobre">
                    <img src='/assets/img-sobre.webp' />
                </div>
                <div className='texto-sobre'>
                    <p>Me chamo Kaio Amorim e atualmente estou cursando o 5° período do ensino superior de Análise e Desenvolvimento de Sistemas.</p>
                    <p>Sempre buscando novos métodos e tecnologias para aperfeiçoamento profissional.</p><p>Estou em buscar da minha primeira oportunidade profissional para ampliar os conhecimentos, seja como Estagiário, Júnior ou Trainee.</p>
                    <div className="button-cv">
                        <a href="CurriculoKaioAmorim.pdf" target="_blank">
                            <AwesomeButton type="primary" ref={null} after={<DownloadIcon />}>Currículo</AwesomeButton>
                            </a>
                    </div>
                </div>
            </article>
        </section>
    )
}