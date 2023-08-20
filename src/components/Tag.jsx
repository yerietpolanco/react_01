import { Badge } from "react-bootstrap"

export default function Tag(props) {
    return (
        <Badge bg={props.bg} className="card__badge">{props.text}</Badge>
    )
}