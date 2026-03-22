import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
    const points = useRef<THREE.Points>(null!);

    const particlesCount = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        points.current.rotation.y = time * 0.03;
        points.current.rotation.x = time * 0.02;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#f2c94c"
                transparent
                opacity={0.4}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const ThreeBackground: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none bg-black overflow-hidden">
            {/* Animated glowing orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[rgba(242,201,76,0.15)] blur-[120px] animate-blob"></div>
            <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[rgba(242,201,76,0.08)] blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full bg-[rgba(242,201,76,0.1)] blur-[150px] animate-blob" style={{ animationDelay: '4s' }}></div>
            
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} className="absolute inset-0 z-0">
                <ambientLight intensity={0.5} />
                <Particles />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;

