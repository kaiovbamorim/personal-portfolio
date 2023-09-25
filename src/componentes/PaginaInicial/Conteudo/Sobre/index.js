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
                    <p>Meu nome é Kaio Amorim, estou no meu último período do curso de Análise e Desenvolvimento de Sistemas e sou um programador inovador com foco no aprendizado contínuo e no crescimento profissional. </p>
                    <p>Com experiência sólida no mercado de trabalho, tenho me destacado como um pensador criativo e especialista no desenvolvimento web e mobile.</p>
                    <p>Estou aberto a novas oportunidades que me permitam aplicar meu conhecimento e experiência para enfrentar novos desafios e contribuir para o sucesso de projetos inovadores.</p>
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