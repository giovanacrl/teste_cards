import React from 'react';
import './card.css';
import Card from 'react-bootstrap/Card'

function CardEx (){
    return( 
        <div className="row row-cols-1 row-cols-md-2">

            <div class="col mb-4 card">
                <div class="text-white text-center p-3">
                    <div class="flip-container">
                        <div class="flipper">
                            <div class="mb-0 card-body front ">
                                <h2>Autonomia</h2>
                            </div>
                            <div class="mb-0 card-body back">
                                <h5>Habilidade de solucionar problemas e cumprir tarefas com grande dedicação e proatividade. Pessoas com alta autonomia também possuem uma motivação intrínseca de entregar resultados de alta qualidade.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    

            <div class="col mb-4 card">
                <div class="text-white text-center p-3">
                    <div class="flip-container">
                        <div class="flipper">
                            <div class="mb-0 card-body front">
                                <h2>Disciplina</h2>
                            </div>
                            <div class="mb-0 card-body back">
                                <h5>Indica uma habilidade de controlar impulsos e desejos momentâneos, permitindo que o indivíduo foque em cumprir seus deveres profissionais e acadêmicos com uma alta qualidade e dentro de prazos estabelecidos.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="col mb-4 card">
                <div class="text-white text-center p-3">
                    <div class="flip-container">
                        <div class="flipper">
                            <div class="mb-0 card-body front">
                                <h2>Comunicação</h2>
                            </div>
                            <div class="mb-0 card-body back">
                                <h5>Presente em indivíduos que sabem expressar suas opiniões, mesmo que complexas, em qualquer situação; também se sentem confortáveis falando com outras pessoas e apresentando para  grupos grandes.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="col mb-4 card">
                <div class="text-white text-center p-3">
                    <div class="flip-container">
                        <div class="flipper">
                            <div class="mb-0 card-body front">
                                <h2>Vontade De Aprender</h2>
                            </div>
                            <div class="mb-0 card-body back">
                                <h5>Presente em pessoas que gostam de desafios intelectuais e tem uma alta capacidade para assimilar conteúdo. Essa característica também indica um alto nível de comprometimento  com responsabilidades profissionais e dedicação em tarefas e planejamentos.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   

        </div>
    )
}

export default CardEx;