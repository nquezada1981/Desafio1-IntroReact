import Badge from "react-bootstrap/Badge";

const Tags = ({ bgColor, race }) => {
    return (
        <div>
            <Badge pill bg={bgColor}>{race} </Badge>
        </div>
    )
}

export default Tags