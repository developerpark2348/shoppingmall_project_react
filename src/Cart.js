import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){
    return(
        <div>

            <div>
            <Table responsive="sm">
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>증가</th>
                    <th>감소</th>
                </tr>
                { props.state.map((a,i)=>{
                    return (
                    <tr key={i}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.quan}</td>
                        <td><button onClick={()=>{ props.dispatch({type: '수량증가'}) }}> + </button></td>
                        <td><button onClick={()=>{ props.dispatch({type: '수량감소'}) }}> - </button></td>
                    </tr>
                    )
                })}
            </Table>

            </div>

        </div>
    )
}

function 함수명(state){
    return {
        state : state
    }
}

export default connect(함수명)(Cart);