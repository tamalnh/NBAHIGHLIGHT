import React from 'react'
import {Link} from 'react-router-dom';
import Reaveal from 'react-reveal';
import 'animate.css/animate.css';

const generateBlocks = ({blocks}) => {
    if(blocks){
        return blocks.map((item) => {
            return(
                <Reaveal key={item.id} effect="animated fadeInUp">
                    <div  className={`item ${item.type}`}>
                        <div className="veil"></div>

                        <div 
                        className="image"
                        style={{background: `URL('/images/blocks/${item.image}') no-repeat`}}>
                        </div>

                        <div className="title">
                            <Link to={item.link}> {item.title} </Link>
                        </div>
                    </div>
                </Reaveal>
            )
        })
    }
}


const Blocks = (props) =>  { 
    
    // console.log(props)
        return (
            <div className="home-blocks">
                {generateBlocks(props)}
            </div>
        ) 
}

export default Blocks;