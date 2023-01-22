import React from "react";
import {Row, Col} from "react-bootstrap";


const Block = ({pic, bg, caption, text}) => {
    let style = {
        backgroundImage: "url(https://abrakadabra.fun/uploads/posts/2022-01/1643130833_19-abrakadabra-fun-p-pattern-lapki-41.png)",
        backgroundSize: "auto 200%",
        backgroundColor: bg,
        borderRadius: "20px"
    };
    return <Row style={style}>
        <Col xs={8}>
        <h3>{caption}</h3>
        <p>{text}</p>
        </Col>
        <Col xs={4}>
          <img src={pic} alt={caption} className="w-75"/>
        </Col>
    </Row>
}
export default Block;

const ads = ["https://centr-sobak.ru/image/data/porodi/velsh-korgi.png", "https://zoo-lecnayabratva96.ru/uploadedFiles/eshopimages/big/pack-intensive-beef.png", "https://ozerki.ru/er-pics/images/goods/90538/main", "https://static.tildacdn.com/tild3534-3936-4030-b037-343631313464/2cans.png", "https://thumb.tildacdn.com/tild3435-3862-4364-a235-306636326634/-/resize/504x/-/format/webp/photo.png"]