import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokensReducer';
import './Navbar.css'
import { addToken } from '../../../store/token/actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        history.push('/login')

    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar   position="static">
        <Toolbar  variant="dense" className="cor-nave-bar">
            <Box  paddingTop={1} className='cursor'>
                <Typography variant="h5" color="inherit">
                <img src="https://i.imgur.com/URLrnFJ.png" alt="logo" height="30px" width="30px" />
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>
                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Novo Tema
                        </Typography>
                    </Box>
                </Link>

                <Box mx={1} className='cursor2' onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        Logout
                    </Typography>
                </Box>

            </Box>

        </Toolbar>
    </AppBar>
     }
    return (
        <>
         {navbarComponent}
        </>
    )
}

export default Navbar;