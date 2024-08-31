import React from 'react'
import { Canvas } from '@react-three/fiber'
import './style.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica']">
      <div className="navbar flex gap-10 py-7 absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "iPhone", 
          "iPad", 
          "services", 
          "ios", 
          "Mac", 
          "products"
        ].map(e => 
          <a href="" className='text-white font-[500] text-md capitalize'>
            {e}
          </a>
        )}
      </div>
      <div className="text-white flex flex-col items-center absolute top-32 left-1/2 -translate-x-1/2">
        <h3 className="masked text-7xl tracking-tighter font-[700]">macbook pro</h3>
        <h5>Oh so pro!</h5>
        <p className="text-center w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, neque in. Sequi assumenda doloremque</p>
      </div>
      <Canvas camera={{fov: 12, position: [0, -10, 220]}}>
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
} 

export default App