import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { PaperclipIcon, MarkGithubIcon, ArrowLeftIcon } from "@primer/octicons-react";
import { Link } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
import 'react-awesome-button/dist/styles.css';
import './style.css';



export default function EstruturaPagina({ BackgroundImage, LogoImage, TituloNome, LinkSite, LinkGit, TextoDescricao, ImgTec1, NomeTec1, ImgTec2, NomeTec2, ImgTec3, NomeTec3, ImgTec4, NomeTec4, ImgTec5, NomeTec5, ImgTec6, NomeTec6, screenshots, video }) {
    return (
        <main className="EstruturaPagina">
            <section className="background-projeto">
                <img key={BackgroundImage} className="background-image" src={BackgroundImage} />
                <div className="container-logo-projeto">
                    <div className="logo-titulo">
                        <div className="logo-projeto">
                            <img key={LogoImage} src={LogoImage} />
                        </div>
                        <div className="titulo-logo-projeto">
                            <h1 key={TituloNome}>{TituloNome}</h1>
                            <p>Website</p>
                        </div>
                    </div>
                    <div className="button-projeto">
                        <a key={LinkSite} href={LinkSite} target="_blank"><AwesomeButton type="primary" after={<PaperclipIcon size={18} />}>Link</AwesomeButton></a>
                        <a key={LinkGit} href={LinkGit} target="_blank"><AwesomeButton type="primary" after={<MarkGithubIcon size={18} />}>GitHub</AwesomeButton></a>

                    </div>
                </div>
            </section>
            <section className="description">
                <div className="text-description">
                    <h2 className="titulo-section">Descrição</h2>
                    <p key={TextoDescricao}>{TextoDescricao}</p>
                </div>
                <div className="tecnologias">
                    <p>Tecnologias</p>
                    <div>
                        <div className="content-tecnologias">
                            <img key={ImgTec1} src={ImgTec1} />
                            <p key={NomeTec1}>{NomeTec1}</p>
                        </div>
                        <div className="content-tecnologias">
                            <img key={ImgTec2} src={ImgTec2} />
                            <p key={NomeTec2}>{NomeTec2}</p>
                        </div>
                        <div className="content-tecnologias">
                            <img key={ImgTec3} src={ImgTec3} />
                            <p key={NomeTec3}>{NomeTec3}</p>
                        </div>
                        <div className="content-tecnologias">
                            <img key={ImgTec4} src={ImgTec4} />
                            <p key={NomeTec4}>{NomeTec4}</p>
                        </div>
                        <div className="content-tecnologias">
                            <img key={ImgTec5} src={ImgTec5} />
                            <p key={NomeTec5}>{NomeTec5}</p>
                        </div>
                        <div className="content-tecnologias">
                            <img key={ImgTec6} src={ImgTec6} />
                            <p key={NomeTec6}>{NomeTec6}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="screenshots">
                <h2 className="titulo-section">Screenshots</h2>
                <div className="content-slide">
                    <UncontrolledCarousel key={screenshots}
                        items={screenshots}
                    />
                </div>

            </section>
            <section className="video">
                <h2 className="titulo-section">Vídeo</h2>
                <div className="video-content">
                    <iframe key={video} src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </section>
            <div className="button-back">
                <Link to="/"><AwesomeButton type="primary" before={<ArrowLeftIcon />}>Voltar</AwesomeButton></Link>
            </div>
        </main>
    )
}