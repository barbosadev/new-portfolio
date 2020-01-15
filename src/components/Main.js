import React, { Component } from 'react';
import imgDev from '../images/dev.svg';
class Main extends Component{
    render(){
        return <main role="main" className="mx-3">
            <div className="jumbotron">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1>Busca um bom desenvolvedor?<br/>Achou!</h1>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={imgDev} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </main>
    }
}
export default Main;