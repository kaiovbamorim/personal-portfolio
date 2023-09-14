import React, { useEffect } from "react";
import './style.css'

export default function Home() {
    useEffect(() => {
        const h2 = document.querySelector('.h2-typewriter')
        const TypeWriter = (elemento) => {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = ''
            textoArray.forEach((letra, i) => {
                setTimeout(() => elemento.innerHTML += letra, 180 * i)
            })
        }
        TypeWriter(h2)
    }, []);

    return (
        <section className='Home' id="Inicio">
            <div className="conteudo-home">
                <div className='titulo-home'>
                    <p>Olá <span>&#x1F44B;</span>, eu sou</p>
                    <h1>Kaio Amorim</h1>
                    <h2 className="h2-typewriter">Desenvolvedor Full-Stack</h2></div>
                <div className="emote-home">
                    <img src='/assets/img-home.webp' alt="Imagem Emote"/>
                </div>
            </div>
        </section>
    )
} 
