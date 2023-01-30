import React, { useRef } from 'react'
import { Canvas, useFrame, } from '@react-three/fiber'
import { OrbitControls, useCamera, } from '@react-three/drei'
import { TextureLoader, } from 'three'


function Smoke() {
  const smokeRef = useRef()
  const camera = useCamera()

  useFrame((state, delta) => {
    smokeRef.current.rotation.z -= delta * 0.2
  },1,[smokeRef])

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={smokeRef}>
        <planeGeometry args={[300, 300]} />
        <meshLambertMaterial
          map={new TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png')}
          emissive={0x00d8ec}
          opacity={0.1}
          transparent
        />
      </mesh>
      <OrbitControls args={[camera]} />
    </Canvas>
  )
}

export default Smoke