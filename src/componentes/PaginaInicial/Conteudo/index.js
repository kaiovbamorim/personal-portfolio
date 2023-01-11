import React from 'react';

import Header from '../../Header/';
import Home from './Home';
import Sobre from './Sobre';
import Projetos from './Projetos';
import Habilidades from './Habilidades';
import Contato from './Contato';
import NavLateral from './NavLateral';
import Scroll from './Scroll';




export default function Conteudo() {
    
    return (
        <main className='Conteudo'>
            <Header />
            <Home />
            <Sobre />
            <Projetos />
            <Habilidades />
            <Contato />
            <NavLateral />
            <Scroll />
        </main>
    )
}