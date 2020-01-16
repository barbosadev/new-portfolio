import React, { Component } from 'react';
import imgDev from '../images/perfil.png';

var stylePerfil= {
    maxWidth:'250px'
}

class Main extends Component{
    render(){
        return <main role="main" className="mx-5">
            <div className="row">
                <div className="col-12 mt-5">
                    <h2 className="text-white">Procurando um desenvolvedor?<br/>Achou!</h2>
                    <img src={imgDev} className="img-fluid rounded-circle" style={stylePerfil} alt="a"/>
                </div>
            </div>
        </main>
    }
}
export default Main;