
import './Home.css';
import '../../Composants/fonts/font.css'
import Navbar from '../../Composants/Navbar/Navbar';
import React from 'react';
import Smoke from '../../Composants/Smoke/smoke';
import { Canvas,  } from '@react-three/fiber'


export default function Home() {
  return (
    <>
    <div className="Header">
    <Navbar />
    <Canvas>
    <Smoke />
    </Canvas>
    
   </div>
   <div className="BAHOUAI">
    <h1>
        on est la 
    </h1>
   </div>
   </>
  )
}
