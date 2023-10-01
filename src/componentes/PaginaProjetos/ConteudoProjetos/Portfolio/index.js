import React from "react";
import EstruturaPagina from "../../EstruturaPagina";

export default function Portfolio() {
  return (
    <div>
      <EstruturaPagina
        BackgroundImage={"/assets/portfolio.webp"}
        LogoImage={"/assets/logo-projeto/portfolio.webp"}
        TituloNome={"Portfólio"}
        LinkSite={"https://kaioamorim.vercel.app"}
        LinkGit={"https://github.com/kaiovbamorim/personal-portfolio"}
        TextoDescricao={
          "Meu portfólio criado com intuito de mostrar meus projetos e minhas experiências como Desenvolvedor Web."
        }
        ImgTec1={"/assets/react_img.webp"}
        NomeTec1={"React"}
        ImgTec2={"/assets/js_img.webp"}
        NomeTec2={"JavaScript"}
        screenshots={[
          { src: "/assets/portfolio.webp" },
          { src: "/assets/img-slider/portfolio/portfolio_screenshot_1.webp" },
          { src: "/assets/img-slider/portfolio/portfolio_screenshot_2.webp" },
          { src: "/assets/img-slider/portfolio/portfolio_screenshot_3.webp" },
          { src: "/assets/img-slider/portfolio/portfolio_screenshot_4.webp" }
        ]}
        video={"https://www.youtube.com/embed/iWq28IUODr8"}
      />
    </div>
  );
}
