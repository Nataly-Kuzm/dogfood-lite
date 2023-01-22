import React from "react";
import {Card, Button} from "react-bootstrap";
import { Justify } from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";

const MyCard = (props) => {
    const navigate = useNavigate();

    const handler = () => {
        console.log(props);
        navigate(`/product/${props._id}`);
    }

    return <Card onClick={handler} className=" h-100 " style={{br: "30px"}}>
       
        <Card.Body className="d-flex flex-column">
             <Card.Img src={props.pictures} style={{height: "200px", "background": "no-repeat center / contain", width: "100%"}}></Card.Img>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description.slice(0, 11)}...</Card.Text>
            <Button variant={"warning"} className= "mt-auto">Просмотреть информацию</Button>
        </Card.Body>
    </Card>
}

export default MyCard;