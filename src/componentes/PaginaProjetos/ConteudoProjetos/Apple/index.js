import React from 'react';
import EstruturaPagina from '../../EstruturaPagina';

export default function Apple() {
    return (
        <div>
            <EstruturaPagina
                BackgroundImage={'/assets/apple.webp'}
                LogoImage={'/assets/logo-projeto/apple.webp'}
                TituloNome={'Apple'}
                LinkSite={'https://applepageclone.vercel.app'}
                LinkGit={'https://github.com/kaiovbamorim/Apple-Clone'}
                TextoDescricao={'Esse site trata-se de um clone do site da Apple, buscando tornar idêntico ao original, para aperfeiçoamento profissional.'}
                ImgTec1={'/assets/html_img.webp'}
                NomeTec1={'HTML'}
                ImgTec2={'/assets/css_img.webp'}
                NomeTec2={'CSS'}
                ImgTec3={'/assets/js_logo_img.webp'}
                NomeTec3={'JavaScript'}
                screenshots={[
                    { src: "/assets/apple.webp" },
                    { src: "/assets/img-slider/apple/apple_screenshot_1.webp" },
                    { src: "/assets/img-slider/apple/apple_screenshot_2.webp" },
                    { src: "/assets/img-slider/apple/apple_screenshot_3.webp" },
                    { src: "/assets/img-slider/apple/apple_screenshot_4.webp" },
                    { src: "/assets/img-slider/apple/apple_screenshot_5.webp" },
                    { src: "/assets/img-slider/apple/apple_screenshot_6.webp" },
                ]}
                video={"https://www.youtube.com/embed/kWYMlx_Y7Sk"}
            />
        </div>
    )
}