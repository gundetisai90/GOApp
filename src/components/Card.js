import React from 'react'

export default function Card(props) {
    let options = props.options[0];
    let priceOptions = Object.keys(options);

    return (
        <div>
            <div className="card mt-3" style={{ "width": "20rem", "maxHeight": "450px" }}>
                <img src={props.imgurl} className="card-img-top" style={{"height":"200px","maxHeight":"200px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodname}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success rounded'>
                            {
                                Array.from
                                    (
                                        Array(6), (e, i) => {
                                            return (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            )
                                        }
                                    )
                            }
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            {priceOptions.map((data)=>{
                                return(
                                    <option key={data} value={data}>{data}</option>
                                )
                            })}
                        </select>
                        <div className='d-inline fs-5 h-100'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
