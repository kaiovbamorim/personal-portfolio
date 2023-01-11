import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../componentes/PaginaInicial/Conteudo/index.js'
import ScrollToTop from '../componentes/ScrollToTop/ScrollToTop.js'
import Netflix_2 from '../componentes/PaginaProjetos/ConteudoProjetos/Netflix_2/index.js';
import NetflixLogin from '../componentes/PaginaProjetos/ConteudoProjetos/NetflixLogin/index.js';
import Apple from '../componentes/PaginaProjetos/ConteudoProjetos/Apple/index.js';
import Nike_Snkrs from '../componentes/PaginaProjetos/ConteudoProjetos/Nike_Snkrs/index.js'
import GitFinder from '../componentes/PaginaProjetos/ConteudoProjetos/GitFinder/index.js';
import Portfolio from '../componentes/PaginaProjetos/ConteudoProjetos/Portfolio/index.js';

const Rotas = () => (
    <BrowserRouter>
    <ScrollToTop />
        <Routes>
            <Route exact path='/' element={<PaginaInicial />} />
            <Route path='/Project/Netflix_2' element={<Netflix_2 />} />
            <Route path='/Project/Netflix' element={<NetflixLogin />}/>
            <Route path='/Project/Apple' element={<Apple />}/>
            <Route path='/Project/Nike-SNKRS' element={<Nike_Snkrs />}/>
            <Route path='/Project/GitFinder' element={<GitFinder />}/>
            <Route path='/Project/Portfolio' element={<Portfolio />}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas