import React, { useEffect } from 'react';
import './style.css'

export default function Header() {

    function toggleMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active')
    }
    return (
        <header>
            <a href='#' className='logo'><span>Kaio</span> Amorim</a>
            <nav className='links-nav'>
                <div onClick={toggleMenu} className='mobile-menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className='menu'>
                    <li><a href='#Inicio'>Início</a></li>
                    <li><a href='#Sobre'>Sobre</a></li>
                    <li><a href='#Projetos'>Projetos</a></li>
                    <li><a href='#Habilidades'>Habilidades</a></li>
                    <li><a href='#Contato'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}