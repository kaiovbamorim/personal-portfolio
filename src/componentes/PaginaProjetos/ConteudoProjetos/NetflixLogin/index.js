import React from "react";
import EstruturaPagina from "../../EstruturaPagina";

export default function NetflixLogin() {
  return (
    <EstruturaPagina
      BackgroundImage={"/assets/netflix_login.webp"}
      LogoImage={"/assets/logo-projeto/netflix.webp"}
      TituloNome={"Netflix Login"}
      LinkSite={"https://netflixlogin.vercel.app"}
      LinkGit={"https://github.com/kaiovbamorim/Netflix-Login"}
      TextoDescricao={
        "Esse site trata-se de um clone da página de login da Netflix, buscando tornar idêntico ao original, para aperfeiçoamento profissional."
      }
      ImgTec1={"/assets/html_img.webp"}
      NomeTec1={"HTML"}
      ImgTec2={"/assets/css_img.webp"}
      NomeTec2={"CSS"}
      ImgTec3={"/assets/js_img.webp"}
      NomeTec3={"JavaScript"}
      screenshots={[
        { src: "/assets/netflix_login.webp" },
        {
          src: "/assets/img-slider/netflix_login/netflix_login_screenshot_1.webp",
        },
      ]}
      video="https://www.youtube.com/embed/wukGe-i51N4"
    />
  );
}
