import React from "react";
import citySchema from '../data/citySchema';
//import C2C from '../components/c2c';
import Home from './Home';


const comps = {
    home: <Home></Home>
}
/*Loads Tableau data */
export default function Container(props) {
    const { link } = props
    const comp = link.indexOf("http")
    const red = link.indexOf("redirect")
    if(red >= 0){
        window.location.href = link.split(':')[1]
    }
    console.log(red,'l',link,comp)
    return (
        <div style={{ background: "#2f3333 important!" }}>
            {comp >= 0 ? (
                <iframe
                    title="w"
                    src={link}
                    width="100%"
                    height="955"
                    frameBorder="0"
                ></iframe>
            ) : (
                comps[link]
            )}
        </div>
    );
}