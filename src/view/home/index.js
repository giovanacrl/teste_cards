import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import CardEx from '../../components/card/';
import Cardz from '../../components/cardsz';
import cognition from './cognition.json';
import { Chart } from "react-google-charts";

function Home() {
    const cognitionTeste = Object.entries(cognition)

    const [optionsBar, setOptionsBar] = useState({
        title: 'Gráfico de Barra'
    });

    const [dataBar, setDataBar] = useState([
        ['Cidades', '2010 População', '2000 População'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000],
    ])
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="container col">
                    <div className="container-item">

                        {cognitionTeste.map(([key, item]) => {
                            return (

                                <div className="am">

                                    <Cardz
                                        caracteristica={key}
                                        descricao={item.label} />
                                </div>


                            );
                        })}


                    </div>

                </div>
                <div className="col grafico" style={{ display: "flex" }}>
                    <Chart
                        width={'700px'}
                        height={'300px'}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            [
                                'Element',
                                'Density',
                                { role: 'style' },
                                {
                                    sourceColumn: 0,
                                    role: 'annotation',
                                    type: 'string',
                                    calc: 'stringify',
                                },
                            ],
                            ['Motivado ao Sucesso', 8.94, '#C93B59', null],
                            ['Disciplina', 10.49, '#C93B59', null],
                            ['Intelecto', 19.3, '#C93B59', null],
                            ['Zelo', 21.45, '#C93B59', null],
                            ['Atividade', 21.45, '#C93B59', null],
                            ['Imaginação', 21.45, '#C93B59', null],
                            ['Competência', 21.45, '#C93B59', null],
                            ['Ações', 21.45, '#C93B59', null],
                            ['Receptividade', 21.45, '#C93B59', null],
                            ['Cordialidade', 21.45, '#C93B59', null],
                            ['Gregarismo', 21.45, '#C93B59', null],
                            ['Assertividade', 21.45, '#C93B59', null],
                            ['Honestidade', 21.45, '#C93B59', null],
                            ['Cooperação', 21.45, '#C93B59', null],
                            ['Altruísmo', 21.45, '#C93B59', null],
                            ['Deliberação', 21.45, '#C93B59', null],
                            ['Aventura', 21.45, '#C93B59', null],
                            ['Liderança', 21.45, '#C93B59', null],
                            ['Comprometimento', 21.45, '#C93B59', null],
                        ]}
                        options={{
                            title: 'Subfatores',
                            width: 700,
                            height: 1200,
                            bar: { groupWidth: '80%' },
                            legend: { position: 'none' },
                            backgroundColor: '#D4D8DA',
                            
                        
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '6' }}
                    />
                </div>

            </div>


        </>
    )

}

export default Home;