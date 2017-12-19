import React  from 'react'
import $ from 'jquery'; 
import FormNewWallet from './FormNewWallet'


class ContainerApp extends React.Component {
    constructor(props) {
        super(props)
        this.deleteWalet = this.deleteWalet.bind(this)
    }
    clickNewWallet(){
        $("#buttonNewWallet").slideToggle();
        $("#containerFormNewWallet").slideToggle();
    }
    deleteWalet(wallet_oid){
        var current = this
        var urlApi = 'http://127.0.0.1:3000/v1/'

        fetch(urlApi+'wallets/'+wallet_oid,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(resp){
            if(resp.ok)
                return resp
            else
                throw 'status: '+resp.status
        })
        .then(function(resp){
            current.props.getUserWallets()
            swal(
            'Correcto',
            'Has borrado correctamente la wallet '+wallet_oid,
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
        if(this.props.usuario_oid){
            $(function(){
                $("#containerFormAcceso").slideUp();
                $("#containerApp").slideDown();
            })
        }
        var cuerpo = 'Cargando...'
        if(this.props.usuario_oid)
            cuerpo = 'Tus wallets:'
        var listado = [];
        for(var elemento in this.props.wallets){
                listado.push(<tr key={this.props.wallets[elemento]._id}>
                    <td>{this.props.wallets[elemento].titulo}</td>
                    <td>{this.props.wallets[elemento].moneda_symbol}</td>
                    <td>{this.props.wallets[elemento].saldo}</td>
                    <td>
                        <a onClick={this.deleteWalet.bind(this,this.props.wallets[elemento]._id)}>
                            <span className="glyphicon glyphicon-trash" aria-hidden="true" 
                            data-toggle="tooltip" data-placement="top" title="Borrar Wallet"></span>
                        </a>
                    </td>
                    </tr>)
        }

        listado = <table id="ulListadoWallets" className="table table-striped"> 
            <thead> 
                <tr>
                <th>Titulo</th>
                <th>Moneda</th>
                <th>Saldo</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {listado}
            </tbody>
        </table>

        return <div id="containerApp" className="container">
            <h2>{cuerpo}</h2>
            <button  className="btn btn-success" id="buttonNewWallet" onClick={this.clickNewWallet} >Nueva wallet</button>
            <FormNewWallet usuario_dni={this.props.usuario_dni} getUserWallets={this.props.getUserWallets} formDone={this.clickNewWallet}/>
            {listado}
        </div>
    }
}

export default ContainerApp



