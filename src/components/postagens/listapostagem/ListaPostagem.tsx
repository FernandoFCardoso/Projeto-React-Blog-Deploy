import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokensReducer';

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );


    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <>
            {
                posts.map(post => (
                    <Box  m={4} >
                        <Card variant="outlined">
                            <CardContent className="fundoPost" >
                                <Typography className="corTexto" color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography className="corTexto" variant="h5" component="h2">
                                    {post.titulo}
                                </Typography>
                                <Typography className="corTexto" variant="body2" component="p">
                                    {post.texto}
                                </Typography>
                                <Typography className="corTexto" variant="body2" component="p">
                                    {post.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions className="fundoPost2">
                                <Box display="flex" justifyContent="center" mb={0.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                        <Box mx={3}>
                                            <Button className ="cor-boton2" variant="contained"  size='small'>
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={4}>
                                            <Button className ="cor-boton2" variant="contained" size='small' >
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaPostagem;