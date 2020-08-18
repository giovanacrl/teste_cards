import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'; 

function Navbar(){
    return(
      <nav  className="navbar navbar-expand-lg">
        <span  className="navbar-brand text-white font-weight-bold">Eventos</span>
        <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars text-white"></i>
        </button>

      <div  className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul  className="navbar-nav mr-auto">
          <li  className="nav-item"><Link  to='/'className="nav-link" >Home </Link></li>
          <li  className="nav-item"><Link  to='usuario_novo'className="nav-link" >Cadastrar </Link></li>
          <li  className="nav-item"><Link  to='login'className="nav-link" >Login </Link></li>
        </ul>
        <form  className="form-inline my-2 my-lg-0">
          <input  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button  className="btn my-2 my-sm-0 btn-pesquisa" type="submit">Search</button>
        </form>
      </div>
      </nav>
    )
}

export default Navbar;