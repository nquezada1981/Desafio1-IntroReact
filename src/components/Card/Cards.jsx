import { Card as CardBt } from 'react-bootstrap';
import Tags from '../Tags/Tags';


const Cards = ({ img, name, text, race, bgColor }) => {
    return (
        <CardBt className='text-center' style={{ width: '15rem', height: '600px' }}>
            <CardBt.Img variant="top" src={img} />
            <CardBt.Body>
                <CardBt.Title>{name}</CardBt.Title>
                <CardBt.Text>
                    {text}
                </CardBt.Text>
                <Tags bgColor={bgColor} race={race} />
            </CardBt.Body>
        </CardBt>
    )
}

export default Cards