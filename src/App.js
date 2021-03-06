/* eslint-disable */

import React, { useState } from 'react';
import { Navbar,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';
import { Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);

  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Shoe Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">홈</Nav.Link>
            <Nav.Link as={Link} to="/Cart">장바구니</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    <Switch>

      <Route exact path="/">

        <Jumbotron className="background">
          <h1>20% season OFF</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
        </Jumbotron>

        <div className="container">
          <div className="row">
            {
              shoes.map((a, i) =>{
                return <Card shoes={shoes[i]} i={i} key={i}/>
              })
            }
          </div>
          <button className="btn btn-primary" onClick={()=>{

            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 
              shoes변경( [...shoes, ...result.data] )
            })
            .catch(()=>{ 
              console.log('실패했어요')
            })

          }}>더보기</button>
        </div>

      </Route>

      <Route path="/detail/:id">
        
        <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>

      </Route>

      <Route path="/cart">

        <Cart></Cart>

      </Route>

      <Route path="/:id">
        <div>우측 상단의 홈이나 좌측 상단의 Shoe Shop으로 이동해주세요!</div>
      </Route>

    </Switch>

      {/* component를 넣고 싶을때, <Route path="/주소" component={컴포넌트}> </Route> */}

      
      
    </div>
  );
}

function Card(props){
  let history = useHistory();
  return(
    <div className="col-md-4" onClick= { ()=> { history.push('/detail/' + props.shoes.id ) }}>
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) +'.jpg' } width="100%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App;
