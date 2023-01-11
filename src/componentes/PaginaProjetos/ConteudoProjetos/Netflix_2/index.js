import React from 'react';
import EstruturaPagina from '../../EstruturaPagina';

export default function Netflix_2() {
    return (
        <div className='Netflix_2'>
            <EstruturaPagina
                BackgroundImage={'/assets/netflix_2.webp'}
                LogoImage={'/assets/logo-projeto/netflix.webp'}
                TituloNome={'Netflix 2.0'}
                LinkSite={'https://netflixnewpage.vercel.app'}
                LinkGit={'https://github.com/kaiovbamorim/Netflix-Login-2.0'}
                TextoDescricao={'Esse é um site pessoal, de uma ideia de login diferente do original da Netflix, com design Landing Page de simples e fácil acesso.'}
                ImgTec1={'/assets/html_img.webp'}
                NomeTec1={'HTML'}
                ImgTec2={'/assets/css_img.webp'}
                NomeTec2={'CSS'}
                ImgTec3={'/assets/js_logo_img.webp'}
                NomeTec3={'JavaScript'}
                screenshots={[
                    { src: "/assets/netflix_2.webp" },
                    { src: "/assets/img-slider/netflix_2/netflix_2_screenshot_1.webp" },
                    { src: "/assets/img-slider/netflix_2/netflix_2_screenshot_2.webp" },
                    { src: "/assets/img-slider/netflix_2/netflix_2_screenshot_3.webp" },
                    { src: "/assets/img-slider/netflix_2/netflix_2_screenshot_4.webp" },
                    { src: "/assets/img-slider/netflix_2/netflix_2_screenshot_5.webp" },
                    { src: "/assets/img-slider/netflix_2/netflix_2_screenshot_6.webp" },
                ]}
                video={'https://www.youtube.com/embed/cXmLljMRzQ0'}
            />
        </div>
    )
}