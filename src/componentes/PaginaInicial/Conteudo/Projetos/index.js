import React from "react";
import ContainerProjetos from "./ContainerProjetos";
import './style.css'

export default function Projetos() {
    return (
        <section className='Projetos' id="Projetos">
            <h2 className='titulo-section'>Projetos</h2>
            <div className='conteudo-projetos'>
                <ContainerProjetos link={'/Project/Portfolio'}title={'Portfólio'} bgImage={'/assets/portfolio.webp'} />
                <ContainerProjetos link={'/Project/Nike-SNKRS'} title={'Nike SNKRS'} bgImage={'/assets/nike_snkrs.webp'} />
                <ContainerProjetos link={'/Project/Netflix_2'} title={'Netflix 2.0'} bgImage={'/assets/netflix_2.webp'} />
                <ContainerProjetos link={'/Project/Apple'}title={'Apple'} bgImage={'/assets/apple.webp'} />
                <ContainerProjetos link={'/Project/GitFinder'} title={'GitFinder'} bgImage={'/assets/gitfinder.webp'} />
                <ContainerProjetos link={'/Project/Netflix'} title={'Login Netflix'} bgImage={'/assets/netflix_login.webp'} />                
            </div>
        </section>
    )
}