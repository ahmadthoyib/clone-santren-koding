import React,{Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';

class JumboTron extends Component{
    render(){
        return (
            <div>
            <Jumbotron>
                <h1>Santren Koding</h1>
                <p>Intensive Coding Bootcamp for Yatim & Dhuafa</p>
                <Button color="success">Learn More</Button>
            </Jumbotron>
            </div>
        );
    }
}
export default JumboTron;