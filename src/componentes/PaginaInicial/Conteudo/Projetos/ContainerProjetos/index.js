import React from "react";
import { Link } from 'react-router-dom'

export default function ContainerProjetos({ title, bgImage, link }) {
    return (
        <Link key={link} to={link}>
            <div className='container-projetos'>
                <img key={bgImage} src={bgImage} />
                <div className="texto-content">
                    <h3 key={title}>{title}</h3>
                    <h4>Website</h4>
                </div>

            </div>
        </Link>
    )
}