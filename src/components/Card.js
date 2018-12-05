import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';

class Cards extends Component{
  render(){
  return (
    <div>
      <Card style={{width : 300}}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Gambar tidak ada" />
        <CardBody className="Cards">
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card Subtitle</CardSubtitle>
          <CardText>card text</CardText>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default Cards;