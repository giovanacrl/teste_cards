import React from 'react';
import '../card/card.css';
import Card from 'react-bootstrap/Card'

function Cardz ({caracteristica, descricao}){
    return( 
        // <div className="cardTotal">
        //     <div class="card-escrita text-white text-center p-3">
        //         <div class="flip-container">
        //             <div class="flipper">
        //                 <div class="mb-0 card-body front ">
        //                     <h2>{caracteristica}</h2>
        //                 </div>
        //                 <div class="mb-0 card-body back">
        //                     <h5>{descricao}</h5>
        //                 </div>
        //             </div>
        //         </div>            
        //     </div>
        // </div>

        <div class="col ">
            <div class="text-white  p-3">
                <div class="flip-container">
                    <div class="flipper">
                        <div class=" card-text  front">
                            <h4 className="text-center frente">{caracteristica}</h4>
                        </div>
                        <div class="mb-0 card-body back costa">
                            <h8>{descricao}</h8>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}      
 
export default Cardz;

/*dúvidas sobre o posicionamento do texto e o espaço entre os blocos*/
