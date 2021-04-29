import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Model extends React.Component {

    render()
    {
       
        console.log(this.props.state.data);
        if (this.props.state.oneBeast )
        {

       
        return (
        <>
     

        <Modal show={this.props.state.show} onHide={this.props.closing}>
          {/* <Modal.Header closeButton>
            <Modal.Title>{this.props.state.oneBeast[0].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={this.props.state.oneBeast[0].image_url} alt={this.props.state.oneBeast[0].title} />
              <p>{this.props.state.oneBeast[0].description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closing}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.closing}>
              Save Changes
            </Button>
          </Modal.Footer> */}
           <Card border="primary" >
          <Card.Header> {this.props.state.oneBeast[0].title}</Card.Header>
          <Card.Body>
            <Card.Title> {this.props.state.oneBeast[0].title}</Card.Title>
            {/* <Card.Img>onClick= {this.increaseCount} src={this.props.img} alt="the img"</Card.Img> */}
            <Card.Img   src={this.props.state.oneBeast[0].image_url} data-target="#carouselExample" data-slide-to="0" />
            <Card.Text>
              {this.props.state.oneBeast[0].description}
            </Card.Text>
            <Card.Text>
              💖 {this.props.state.oneBeastlikes}
            </Card.Text>
          </Card.Body>
        </Card>
        </Modal>
      </>
        )
        }
        else 
        {
            return <> </>
        }
    };
}
export default Model;