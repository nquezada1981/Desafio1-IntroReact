import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Header from "./components/Header/Header";
import Card from './components/Card/Cards';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Container className='pt-5 pb-5 mb-5'>
      <Row>
        <Col>
          <Header title="Adopta un Perrito" />
        </Col>
      </Row>
      <Row className=''>
        <Col className='col-3 w-full'>
          <Card
            img="https://images.pexels.com/photos/16635254/pexels-photo-16635254/free-photo-of-animal-perro-mascota-sentado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Mancha"
            text="Lleno de energía y listo para jugar. ¡Dale a Mancha el hogar amoroso que se merece!"
            race="Gran Danés"
            bgColor="success"
          />
        </Col>
        <Col className='col-3'>
          <Card
            img="https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg"
            name="Lobo"
            text="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Lobo parte de tu familia hoy mismo! "
            race="Husky Siberiano "
            bgColor="primary"
          />
        </Col>
        <Col className='col-3'>
          <Card
            img="https://images.pexels.com/photos/1696589/pexels-photo-1696589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Gohan"
            text="Un perro de tamaño mediano con un corazón gigantesco. Hazte amigo de Gohan y experimenta un amor incondicional!"
            race="Labrador Retriever "
            bgColor="danger"
          />
        </Col>
        <Col className='col-3'>
          <Card
            img="https://images.pexels.com/photos/2695827/pexels-photo-2695827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Princesa"
            text="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
            race="Pastor Alemán "
            bgColor="warning"
          />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>

  )
}
export default App;