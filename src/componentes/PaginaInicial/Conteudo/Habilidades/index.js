import React from "react";
import ContainerHabilidades from "./ContainerHabilidades";

import './style.css';

export default function Habilidades() {
    return (
        <section className="Habilidades" id="Habilidades">
            <h2 className="titulo-section" data-aos="fade-right">Habilidades</h2>
            <div className="conteudo-habilidades" data-aos="fade-down">
                <ContainerHabilidades link={'https://www.devmedia.com.br/certificado/tecnologia/html/kaio-amorim'}img={'/assets/html_img.webp'} />
                <ContainerHabilidades link={'https://www.devmedia.com.br/certificado/tecnologia/css/kaio-amorim'}img={'/assets/css_img.webp'} />
                <ContainerHabilidades link={'https://www.devmedia.com.br/certificado/tecnologia/javascript/kaio-amorim'} img={'/assets/js_img.webp'} />
                <ContainerHabilidades img={'/assets/ts_img.webp'} />
                <ContainerHabilidades link={'https://www.devmedia.com.br/certificado/tecnologia/react/kaio-amorim'} img={'/assets/react_img.webp'} />
                <ContainerHabilidades img={'/assets/angular_img.webp'} />
                <ContainerHabilidades img={'/assets/jquery_img.webp'} />
                <ContainerHabilidades img={'/assets/ionic_img.webp'} />
                <ContainerHabilidades img={'/assets/bootstrap_img.webp'} />
                <ContainerHabilidades img={'/assets/php_img.webp'} />
                <ContainerHabilidades img={'/assets/laravel_img.webp'} />
                <ContainerHabilidades img={'/assets/mysql_img.webp'} />
            </div>
        </section>
    )
}