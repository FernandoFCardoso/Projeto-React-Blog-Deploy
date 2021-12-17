import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext  value={value}>
                <AppBar className="fundo2"  position="static">
                    <Tabs  centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar >
                <TabPanel className="fundo" value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center" >
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel className="fundo" value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary"  className="titulo" align="justify">Salve família tricolor! Como estão?! Venho aqui por meio desse blog unir todos os são paulinos e são paulinas que querem falar sobre nosso time de coração. Sabe quando bate aquela raiva?! Pois é aqui é o lugar! E quando acontece uma virada aos 45' do segundo tempo? Venha comemorar aqui também! Infos, mercado da bola e muito mais, aqui no Salve o Tricolor Paulista!!!</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;