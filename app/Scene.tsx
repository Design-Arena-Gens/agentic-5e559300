'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Text3D, Center, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useState, useRef } from 'react'
import * as THREE from 'three'

function ElonHead() {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <group>
      {/* Head */}
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#ffdbac"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.3, 0.2, 0.85]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#2c2c2c" />
      </mesh>
      <mesh position={[0.3, 0.2, 0.85]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#2c2c2c" />
      </mesh>

      {/* Eye highlights */}
      <mesh position={[-0.28, 0.25, 0.92]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.32, 0.25, 0.92]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, -0.1, 0.95]} castShadow>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshStandardMaterial color="#ffdbac" roughness={0.8} />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, -0.5, 0.85]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.9, 0, 0.3]} rotation={[0, 0, Math.PI / 6]} castShadow>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#ffdbac" roughness={0.8} />
      </mesh>
      <mesh position={[0.9, 0, 0.3]} rotation={[0, 0, -Math.PI / 6]} castShadow>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#ffdbac" roughness={0.8} />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <sphereGeometry args={[0.9, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#3d2817" roughness={0.9} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, -1.2, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 0.6, 16]} />
        <meshStandardMaterial color="#ffdbac" roughness={0.8} />
      </mesh>

      {/* Body/Torso */}
      <mesh position={[0, -2.2, 0]} castShadow>
        <boxGeometry args={[1.6, 1.4, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.7} />
      </mesh>

      {/* Shoulders */}
      <mesh position={[-0.9, -1.7, 0]} castShadow>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.7} />
      </mesh>
      <mesh position={[0.9, -1.7, 0]} castShadow>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.7} />
      </mesh>
    </group>
  )
}

function Rocket() {
  return (
    <group position={[3, 0, 0]}>
      {/* Body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.3, 0.3, 2, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Nose cone */}
      <mesh position={[0, 1.3, 0]} castShadow>
        <coneGeometry args={[0.3, 0.6, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Fins */}
      <mesh position={[0.3, -0.8, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.05]} />
        <meshStandardMaterial color="#cc0000" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[-0.3, -0.8, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.05]} />
        <meshStandardMaterial color="#cc0000" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.8, 0.3]} rotation={[Math.PI / 4, 0, 0]} castShadow>
        <boxGeometry args={[0.05, 0.8, 0.6]} />
        <meshStandardMaterial color="#cc0000" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.8, -0.3]} rotation={[-Math.PI / 4, 0, 0]} castShadow>
        <boxGeometry args={[0.05, 0.8, 0.6]} />
        <meshStandardMaterial color="#cc0000" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Engine */}
      <mesh position={[0, -1.3, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.35, 0.4, 16]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Flame */}
      <mesh position={[0, -1.7, 0]} scale={[1, 1.5, 1]}>
        <coneGeometry args={[0.2, 0.6, 16]} />
        <meshStandardMaterial
          color="#ff6600"
          emissive="#ff3300"
          emissiveIntensity={1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

function Car() {
  return (
    <group position={[-3, -2, 0]} scale={0.8}>
      {/* Body */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[2, 0.6, 1]} />
        <meshStandardMaterial color="#cc0000" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[1.2, 0.4, 0.95]} />
        <meshStandardMaterial color="#cc0000" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Windows */}
      <mesh position={[0.3, 0.8, 0.48]}>
        <boxGeometry args={[1, 0.35, 0.02]} />
        <meshStandardMaterial color="#87ceeb" metalness={0.5} roughness={0.1} transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.3, 0.8, -0.48]}>
        <boxGeometry args={[1, 0.35, 0.02]} />
        <meshStandardMaterial color="#87ceeb" metalness={0.5} roughness={0.1} transparent opacity={0.6} />
      </mesh>

      {/* Wheels */}
      <mesh position={[-0.7, -0.1, 0.6]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.7, -0.1, -0.6]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.7, -0.1, 0.6]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.7, -0.1, -0.6]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Headlights */}
      <mesh position={[1.05, 0.2, 0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[1.05, 0.2, -0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

function Scene3D() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 8]} fov={50} />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={15}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} />
      <pointLight position={[0, 3, 0]} intensity={0.5} />

      <Suspense fallback={null}>
        <ElonHead />
        <Rocket />
        <Car />
        <ContactShadows
          position={[0, -3, 0]}
          opacity={0.5}
          scale={20}
          blur={2}
          far={4}
        />
        <Environment preset="sunset" />
      </Suspense>
    </>
  )
}

export default function Scene() {
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <>
      <div className="info">
        <h1>Elon Musk 3D Interactive</h1>
        <p>🚀 Drag to rotate • Scroll to zoom • Right-click to pan</p>
        <p>Interactive model featuring SpaceX rocket and Tesla</p>
      </div>

      <div className="controls">
        <button
          className={autoRotate ? 'active' : ''}
          onClick={() => setAutoRotate(!autoRotate)}
        >
          {autoRotate ? '⏸ Pause' : '▶ Auto-Rotate'}
        </button>
      </div>

      <Canvas shadows gl={{ antialias: true }}>
        <Scene3D />
      </Canvas>
    </>
  )
}
