import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

/** Compact orb — motion tuned to match hero `HeroBlobScene` (Float + distort + yaw rate) */
function MiniDistortOrb() {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.11;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.24} floatIntensity={0.32}>
      <Sphere ref={ref} args={[1, 48, 48]} scale={0.92}>
        <MeshDistortMaterial
          color="#6ecfb5"
          emissive="#4a9d86"
          emissiveIntensity={0.1}
          roughness={0.52}
          metalness={0.38}
          distort={0.32}
          speed={1.9}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroMiniBlobScene() {
  return (
    <Canvas
      className="hero-mini-webgl-canvas"
      camera={{ position: [0, 0, 4.85], fov: 38 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
        stencil: false,
        depth: true,
      }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.78} color="#e6f4ed" />
        <directionalLight position={[6, 8, 5]} intensity={1.05} color="#fdfdfb" />
        <directionalLight position={[-5, 0, -4]} intensity={0.48} color="#b8e8d4" />
        <pointLight position={[-2.5, -1.5, 3.5]} intensity={0.4} color="#dff5ec" />
        <MiniDistortOrb />
      </Suspense>
    </Canvas>
  );
}
