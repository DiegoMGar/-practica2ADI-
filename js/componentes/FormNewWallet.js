import React  from 'react'
import $ from 'jquery'; 

class FormNewWallet extends React.Component {
    constructor(props) {
        super(props)
        this.sendNewWallet = this.sendNewWallet.bind(this)
    }

    sendNewWallet(){
        var current = this
        var urlApi = 'http://127.0.0.1:3000/v1/'
        if($('#tituloWallet').val()=='' ||
        $('#descripcionWallet').val()=='' ||
        $('#saldoWallet').val()=='' ||
        $('#symbolMoneda').val()==''){
            swal(
                'Ooppss...',
                'Algo ha ido mal: Todos los campos son obligatorios.',
                'error'
                )
            return;
        }
        var data = {usuario_dni:this.props.usuario_dni,
        titulo:$('#tituloWallet').val(),
        descripcion:$('#descripcionWallet').val(),
        saldo:$('#saldoWallet').val(),
        moneda_symbol:$('#symbolMoneda').val()}

        fetch(urlApi+'wallets',{
            body:JSON.stringify(data),
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(resp){
            if(resp.ok)
                return resp.json()
            else
                throw 'status: '+resp.status
        })
        .then(function(resp){
            current.props.getUserWallets()
            current.props.formDone()
            swal(
            'Correcto',
            'Has insertado correctamente la wallet nueva',
            'success'
            )
        })
        .catch(function(error){
            swal(
            'Ooppss...',
            'Algo ha ido mal: '+error,
            'error'
            )
        })
    }
    
    render() {
        return <div id="containerFormNewWallet" key={2}>
        <h2>Inserta una wallet nueva</h2>
        <form id="formRegistro">
            <div className="form-group" key={4}>
                <label htmlFor="tituloWallet">Titulo Wallet</label>
                <input type="text" className="form-control" id="tituloWallet" name="tituloWallet" placeholder="Título de la wallet"/>
            </div>
            <div className="form-group" key={5}>
                <label htmlFor="descripcionWallet">Descripción</label>
                <input type="text" className="form-control" id="descripcionWallet" name="descripcionWallet"
                placeholder="Esta wallet es para llevar el registro de blablabla...."/>
            </div>
            <div className="form-group" key={6}>
                <label htmlFor="saldoWallet">Saldo</label>
                <input type="text" className="form-control" id="saldoWallet" name="saldoWallet" placeholder="123.45" />
            </div>
            <div className="form-group" key={2}>
                <label htmlFor="symbolMoneda">Símbolo moneda (EUR, USD...)</label>
                <input type="text" className="form-control" id="symbolMoneda" name="symbolMoneda" placeholder="Bitcoin" />
            </div>
            <div className="form-group" key={3}>
                <button  className="btn btn-success" id="buttonRegistro"
                onClick={this.sendNewWallet} >
                Insertar wallet
                </button>
                <span className="marginleft25px"></span>
                <button className="btn btn-danger" id="buttonRegistro"
                onClick={this.props.formDone} >
                Cancelar
                </button>
            </div>
        </form>
    </div>
    }
}

export default FormNewWallet

/* ejemplo estructura
http post localhost:3000/v1/wallets titulo="Título de la wallet" 
descripcion="Descripcion de la wallet" saldo="100" moneda_symbol="EUR" usuario_dni="123456789X"
*/

