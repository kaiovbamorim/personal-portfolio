import React from "react";
import EstruturaPagina from "../../EstruturaPagina";

export default function Nike_Snkrs() {
  return (
    <div>
      <EstruturaPagina
        BackgroundImage={"/assets/nike_snkrs.webp"}
        LogoImage={"/assets/logo-projeto/nike_snkrs.webp"}
        TituloNome={"Nike SNKRS"}
        LinkSite={"https://nikesnkrs.vercel.app"}
        LinkGit={"https://github.com/kaiovbamorim/Nike-SNKRS"}
        TextoDescricao={
          "Site pessoal, e-commerce de Sneakers da Nike, tênis raros e estilosos."
        }
        ImgTec1={"/assets/react_img.webp"}
        NomeTec1={"React"}
        ImgTec2={"/assets/js_logo_img.webp"}
        NomeTec2={"JavaScript"}
        screenshots={[
          { src: "/assets/nike_snkrs.webp" },
          { src: "/assets/img-slider/nike_snkrs/nike_snkrs_screenshot_1.webp" },
          { src: "/assets/img-slider/nike_snkrs/nike_snkrs_screenshot_2.webp" },
          { src: "/assets/img-slider/nike_snkrs/nike_snkrs_screenshot_3.webp" },
          { src: "/assets/img-slider/nike_snkrs/nike_snkrs_screenshot_4.webp" },
          { src: "/assets/img-slider/nike_snkrs/nike_snkrs_screenshot_5.webp" },
          { src: "/assets/img-slider/nike_snkrs/nike_snkrs_screenshot_6.webp" },
          { src: "/assets/img-slider/nike_snkrs/nike_snkrs_screenshot_7.webp" },
        ]}
        video={'https://www.youtube.com/embed/e4Y9CHhE8d8'}
      />
    </div>
  );
}
