import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state =
          { count: 0, };
      }
      increaseCount = () => {
        this.setState(
          {
            count: this.state.count + 1
          }
    
        );
      }
    render()
    {
return (
    <div>

 <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header> {this.props.title}</Card.Header>
          <Card.Body>
            <Card.Title> {this.props.title}</Card.Title>
            {/* <Card.Img>onClick= {this.increaseCount} src={this.props.img} alt="the img"</Card.Img> */}
            <Card.Img onClick={this.increaseCount} src={this.props.img} />
            <Card.Text>
              {this.props.disc}
            </Card.Text>
            <Card.Text>
              💖 {this.state.count}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

      </div>
    );
  }
}
export default HornedBeasts;