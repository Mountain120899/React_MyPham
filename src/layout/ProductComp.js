import {React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {addItem} from '../redux/cartProducts';

export default function ProductComp({item}) {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cartProducts);
    const addProduct = (e) => {
        e.preventDefault();
        dispatch(addItem(item));
    }

    useEffect(() => {
        var classStar = "rate-" + item.id;
        var arr = document.getElementsByClassName(classStar);
        for (let i = arr.length - 1; i >= 4 - item.stars + 1; i--) {
            arr[i].style.color = "#fd4";
        }
    }, [])

    return (
        <div className="card" style={{width: "600px", height: "600px"}} key = {item.name}>
            <img className="card-img-top" src={item.image} />
            <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <div className="container-star">
                    <div className="star-widget">
                      <input type="radio" name={"rate" + item.id} id={"rate-" + item.id + "-5"}/>
                      <label for={"rate-" + item.id + "-5"} className={"fas fa-star" + " rate-" + item.id}></label>
                      <input type="radio" name={"rate" + item.id} id={"rate-" + item.id + "-4"}/>
                      <label for={"rate-" + item.id + "-4"} className={"fas fa-star" + " rate-" + item.id}></label>
                      <input type="radio" name={"rate" + item.id} id={"rate-" + item.id + "-3"}/>
                      <label for={"rate-" + item.id + "-3"} className={"fas fa-star" + " rate-" + item.id}></label>
                      <input type="radio" name={"rate" + item.id} id={"rate-" + item.id + "-2"}/>
                      <label for={"rate-" + item.id + "-2"} className={"fas fa-star" + " rate-" + item.id}></label>
                      <input type="radio" name={"rate" + item.id} id={"rate-" + item.id + "-1"}/>
                      <label for={"rate-" + item.id + "-1"} className={"fas fa-star" + " rate-" + item.id}></label>
                    </div>
                </div>
                <p className="price">Giá sản phẩm: {item.price} VND</p>   
                <p className="reviews">{item.totalReviews} Views</p>
                <button type="button" class="btn btn-primary mr-3" data-toggle="modal" data-target="#myModal">
                    Chi tiết sản phẩm
                </button>
                <a href="#" className="btn btn-success" onClick = {(e) => addProduct(e)}>Mua Sản Phẩm</a>
                <div class="modal fade" id="myModal">
                    <div class="modal-dialog">
                      <div class="modal-content">

                         {/* Modal Header */} 
                        <div class="modal-header">
                          <h4 class="modal-title">{item.name}</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div class="modal-body">
                          {item.details}
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
