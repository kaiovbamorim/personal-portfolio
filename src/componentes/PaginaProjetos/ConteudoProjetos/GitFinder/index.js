import React from "react";
import EstruturaPagina from "../../EstruturaPagina";

export default function GitFinder() {
  return (
    <div>
      <EstruturaPagina
        BackgroundImage={"/assets/gitfinder.webp"}
        LogoImage={"/assets/logo-projeto/gitfinder.webp"}
        TituloNome={"GitFinder"}
        LinkSite={"https://gitfinder-api.vercel.app"}
        LinkGit={"https://github.com/kaiovbamorim/GithubApi"}
        TextoDescricao={
          "Site de pesquisa de dados de usuários do GitHub, com integração da API GitHub. O usuário digita o username do GitHub, a aplicação retorna os seus dados."
        }
        ImgTec1={"/assets/react_img.webp"}
        NomeTec1={"React"}
        ImgTec2={"/assets/js_logo_img.webp"}
        NomeTec2={"JavaScript"}
        screenshots={[
          { src: "/assets/gitfinder.webp" },
          { src: "/assets/img-slider/gitfinder/gitfinder_screenshot_1.webp" },
          { src: "/assets/img-slider/gitfinder/gitfinder_screenshot_2.webp" },
          { src: "/assets/img-slider/gitfinder/gitfinder_screenshot_3.webp" },
        ]}
        video={'https://www.youtube.com/embed/_KE8VhSRcMM'}
      />
    </div>
  );
}
