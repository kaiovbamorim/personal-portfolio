import React from "react";

export default function ContainerHabilidades({ img, link }) {
    return (
        <div className="container-habilidades">
            <a key={link} href={link} target="_blank"><img key={img} src={img} /></a>
        </div>
    )
}