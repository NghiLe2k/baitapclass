import React, { Component } from 'react'

export default class index extends Component {
    state = {
        imgGlass : "./img/glassesImage/v2.png",
    };
    changGlass = (imgGlass) =>{
        this.setState({
            imgGlass : imgGlass,
        });
    }
    render() {
        return (
            <div>
                <section className="glasses-app bg-dark" style={{ height: '100vh' }}>
                    <h2 className="text-center h2 text-white py-1">Glasses App</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="container row">
                            <section className="model d-flex justify-content-center col-5">
                                <div className="card text-left" style={{ width: 300, position: 'relative' }}><img className="card-img-top" src="./img/glassesImage/model.jpg" alt="hinh model" /><img src= {this.state.imgGlass} alt="kinh" style={{ width: 170, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '16%' }} />
                                    <div className="card-body">
                                        <span className="card-title badge-danger h3 px-2 rounded">$50</span>
                                        <p className="card-text mt-2">GUCCI G8759H</p>
                                    </div>
                                </div>
                            </section>
                            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                                <div className="col-3"><button className="btn btn-outline-secondary" onClick={()=>this.changGlass("./img/glassesImage/v1.png")}><img src="./img/glassesImage/v1.png" alt="hinh" style={{ width: 100, borderRadius: 20 }} /></button></div>
                                <div className="col-3"><button className="btn btn-outline-secondary" onClick={()=>this.changGlass("./img/glassesImage/v2.png")}><img src="./img/glassesImage/v2.png" alt="hinh" style={{ width: 100, borderRadius: 20 }} /></button></div>
                                <div className="col-3"><button className="btn btn-outline-secondary" onClick={()=>this.changGlass("./img/glassesImage/v3.png")}><img src="./img/glassesImage/v3.png" alt="hinh" style={{ width: 100, borderRadius: 20 }} /></button></div>
                                <div className="col-3"><button className="btn btn-outline-secondary" onClick={()=>this.changGlass("./img/glassesImage/v4.png")}><img src="./img/glassesImage/v4.png" alt="hinh" style={{ width: 100, borderRadius: 20 }} /></button></div>
                                <div className="col-3"><button className="btn btn-outline-secondary" onClick={()=>this.changGlass("./img/glassesImage/v5.png")}><img src="./img/glassesImage/v5.png" alt="hinh" style={{ width: 100, borderRadius: 20 }} /></button></div>
                                <div className="col-3"><button className="btn btn-outline-secondary" onClick={()=>this.changGlass("./img/glassesImage/v6.png")}><img src="./img/glassesImage/v6.png" alt="hinh" style={{ width: 100, borderRadius: 20 }} /></button></div>
                                <div className="col-3"><button className="btn btn-outline-secondary" onClick={()=>this.changGlass("./img/glassesImage/v7.png")}><img src="./img/glassesImage/v7.png" alt="hinh" style={{ width: 100, borderRadius: 20 }} /></button></div>
                                <div className="col-3"><button className="btn btn-outline-secondary" onClick={()=>this.changGlass("./img/glassesImage/v8.png")}><img src="./img/glassesImage/v8.png" alt="hinh" style={{ width: 100, borderRadius: 20 }} /></button></div>
                                <div className="col-3"><button className="btn btn-outline-secondary" onClick={()=>this.changGlass("./img/glassesImage/v9.png")}><img src="./img/glassesImage/v9.png" alt="hinh" style={{ width: 100, borderRadius: 20 }} /></button></div>
                            </section>
                        </div>
                    </div></section>
            </div>


        )
    }
}
