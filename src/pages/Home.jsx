import React from "react";
import {Row, Col} from "react-bootstrap";
import AdBlock from "../components/AdBlock";

let ads =[
    {
        caption: "Подарки новым знакомым",
        text: "Получите скидку 30 % на первый заказ",
        bg: "palegreen",
        pic: "https://centr-sobak.ru/image/data/porodi/velsh-korgi.png"
    },
    {
        caption: "Ням-Ням",
        text: "Лучшее лакомство для собак за пол цены",
        bg: "plum",
        pic: "https://zoo-lecnayabratva96.ru/uploadedFiles/eshopimages/big/pack-intensive-beef.png"
       
    },
    {
        caption: "Акция 3+1",
        text: "Четвертая упаковка в подарок",
        bg: "lightblue",
        pic: "https://ozerki.ru/er-pics/images/goods/90538/main"
    },
    {
        caption: "Акция",
        text: "-20% на натуральные лакомства",
        bg: "palegreen",
        pic: "https://static.tildacdn.com/tild3534-3936-4030-b037-343631313464/2cans.png"
    },
    {
        caption: "Все самое необходимое с первых дней",
        text: "Советы по уходу, выбору рациона и воспитанию",
        bg: "greenyellow",
        pic: "https://avatars.dzeninfra.ru/get-zen_doc/3420563/pub_600975a9fc8f1029f73a84e7_60097652da2b0069732e0563/scale_1200"
    },
    {
        caption: "Доставляем бесплатно",
        text: "Бесплатная доставка от 1500 рублей",
        bg: "thistle",
        pic: "https://thumb.tildacdn.com/tild3435-3862-4364-a235-306636326634/-/resize/504x/-/format/webp/photo.png"
    },
]

    const Home = () => {
        return <>
       
            <Row >
                <Col xs={12}>
                    <AdBlock {...ads[0]}/>
                </Col>
                <Col xs={12} md={6}>
                    <AdBlock {...ads[1]}/>
                </Col>
                <Col xs={12} md={6}>
                    <AdBlock {...ads[2]}/>
                </Col>
                <Col xs={12}>
                    <AdBlock {...ads[3]}/>
                </Col>
                <Col xs={12} md={6}>
                    <AdBlock {...ads[4]}/>
                </Col>
                <Col xs={12} md={6}>
                    <AdBlock {...ads[5]}/>
                </Col>
            </Row>
            
        </>
    }

export default Home;