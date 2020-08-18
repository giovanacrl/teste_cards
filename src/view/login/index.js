import React, {useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';
import 'firebase/auth';
import {useSelector, useDispatch} from 'react-redux';

function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();    
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function logar(){

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado =>{
            setMsgTipo('sucesso')
            dispatch({type: 'LOG_IN',usuarioEmail: email});
        }).catch(erro =>{
            setMsgTipo('erro');
        });
        
    }
    return(
        <>
        <Navbar/>
        <div className= "login-content d-flex align-items-center">

            {
                useSelector(state => state.usuarioLogado)> 0 ? <Redirect to='/'/>: null
            }

            <form className="form-signin mx-auto">
            <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input onChange={(e)=> setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email"></input>
            <input onChange={(e)=> setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha"/>
            
            <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button">Logar</button>
            
            <div className="msg-login text-white text-center my-5">
                {msgTipo === 'sucesso' && <span><strong>WOW!</strong> Você está conectado! &#128526;</span>}
                {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão conectados! &#128546;</span>}
            </div>

            <div className= "opcoes-login mt-5 text-center">
                <a href='#' className="mx-2">Recuperar Senha</a>
                <span className="text-white"> &#9733;</span>
                <Link to= 'novousuario'  className="mx-2">Quero Cadastrar</Link>
            </div>

            </form>
        </div>
        </>

    )
}

export default Login; 
