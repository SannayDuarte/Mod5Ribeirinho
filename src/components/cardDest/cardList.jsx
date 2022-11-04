import React from 'react'
import Card from './card'

export default function CardList(props) {
    return (
        <ul className="promo">
            <Card cidade={props.cidade1}
                descricao={props.desc1}
                img={props.img1} />
            <Card cidade={props.cidade2}
                descricao={props.desc2}
                img={props.img2} />
            <Card cidade={props.cidade3}
                descricao={props.desc3}
                img={props.img3} />
            <Card cidade={props.cidade4}
                descricao={props.desc4}
                img={props.img4} />
            <Card cidade={props.cidade5}
                descricao={props.desc5}
                img={props.img5} />
        </ul>
    )
}
