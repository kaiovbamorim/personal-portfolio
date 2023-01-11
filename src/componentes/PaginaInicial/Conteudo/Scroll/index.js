import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Scroll() {
    useEffect(() => {
        
        ScrollReveal().reveal('.conteudo-home', {
            origin: 'top',
            duration: 3000,
            distance: '-80px',
        })
        ScrollReveal().reveal('.titulo-section', {
            origin: 'right',
            duration: 1800,
            distance: '-120px'
        })
        ScrollReveal().reveal('.conteudo-sobre', {
            duration: 2100,
            distance: '-80px',
        })
        ScrollReveal().reveal('.conteudo-projetos', {
            duration: 2100,
            distance: '-80px',
        })
        ScrollReveal().reveal('.conteudo-habilidades', {
            duration: 2100,
            distance: '-80px',
        })
        ScrollReveal().reveal('.conteudo-contato', {
            origin: 'top',
            duration: 2100,
            distance: '-80px',
        })
        ScrollReveal().reveal('.NavLateral', {
            origin: 'right',
            duration: 3000,
            distance: '100px'
        })
        ScrollReveal().reveal('.logo', {
            origin: 'top',
            duration: 1200,
            distance: '100px',
            container: 'body'
        })
        ScrollReveal().reveal('.menu li:nth-child(1)', {
            origin: 'top',
            duration: 1200,
            distance: '100px',
            container: 'body'
        })
        ScrollReveal().reveal('.menu li:nth-child(1)', {
            origin: 'top',
            duration: 1200,
            distance: '100px',
            container: 'body'
        })
        ScrollReveal().reveal('.menu li:nth-child(2)', {
            origin: 'top',
            duration: 1600,
            distance: '100px',
            container: 'body'
        })
        ScrollReveal().reveal('.menu li:nth-child(3)', {
            origin: 'top',
            duration: 2000,
            distance: '100px',
            container: 'body'
        })
        ScrollReveal().reveal('.menu li:nth-child(4)', {
            origin: 'top',
            duration: 2600,
            distance: '100px',
            container: 'body'
        })
        ScrollReveal().reveal('.menu li:nth-child(5)', {
            origin: 'top',
            duration: 3000,
            distance: '100px',
            container: 'body'
        })
    })
}