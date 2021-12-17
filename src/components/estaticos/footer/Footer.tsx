import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub'; import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, Box, Typography } from "@material-ui/core";
import './Footer.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/token/tokensReducer";


function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;


    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={2} display="flex" alignItems="center" justifyContent="center">

                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/FernandoFCardoso" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={2}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2020 Copyright: Fernando Cardoso</Typography>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;