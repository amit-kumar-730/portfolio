import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html, Sparkles } from '@react-three/drei';
import { 
  Github, Linkedin, Twitter, Code2, FileCode, ExternalLink
} from 'lucide-react';

// Social Data (Keep these as Icons)
const NODE_POSITIONS = [
  { key: 'linkedin', pos: [-2.5, 2.0, 1.0], color: '#3b82f6', label: 'LinkedIn', icon: Linkedin },
  { key: 'github', pos: [2.5, 2.5, -1.0], color: '#a855f7', label: 'GitHub', icon: Github },
  { key: 'leetcode', pos: [-3.0, 0.5, 2.0], color: '#eab308', label: 'LeetCode', icon: Code2 },
  { key: 'gfg', pos: [3.0, 0.0, 1.5], color: '#22c55e', label: 'GFG', icon: FileCode },
  { key: 'twitter', pos: [0, -1.0, 2.5], color: '#0ea5e9', label: 'Twitter', icon: Twitter },
];

// Tech Stack with User Provided Images
const TECH_STACK = [
  { label: 'Python', img: 'https://image.similarpng.com/file/similarpng/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png' },
  { label: 'C++', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12SMucV1yoXW-nEEb70ZXugC-RC7VM43xFg&s' },
  { label: 'JS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSee8pJZVk6B-1IUSVdhFP1_HCJlHsMrFVVQ&s' },
  { label: 'TS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZHeG-tBHgHgc65BT-f11UqSq3xQ00wQ4LA&s' },
  { label: 'Google', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBquzEYSv5suS2LpgsHTR7Kwh58mMWDwiJLg&s' },
  { label: 'React', img: 'https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png' },
  { label: 'VS Code', img: 'https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-svg-vector.svg' },
  { label: 'Git', img: 'https://img.icons8.com/color/512/git.png' },
  { label: 'MongoDB', img: 'https://images.seeklogo.com/logo-png/48/2/mongodb-logo-png_seeklogo-481256.png' },
  { label: 'VectorDB', img: 'https://pypi-camo.freetls.fastly.net/0dff2817a1c53fd57e681e0bcbdcfb1a35b8d6b5/68747470733a2f2f6769746875622e636f6d2f6a696e612d61692f766563746f7264622f626c6f622f6d61696e2f2e676974687562253246696d61676573253246766563746f7264622d6c6f676f2e706e673f7261773d74727565' },
  { label: 'Postgres', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png' },
  { label: 'ChatGPT', img: 'https://images.seeklogo.com/logo-png/46/2/chatgpt-logo-png_seeklogo-465219.png' },
  { label: 'n8n', img: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/n8n-color.png' },
  { label: 'Gemini', img: 'https://brandlogos.net/wp-content/uploads/2025/03/gemini_icon-logo_brandlogos.net_aacx5-300x300.png' },
  { label: 'Redis', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvinjxr8MVZ69diNIbNNMfcUljy04dIjkqPQ&s' }
];

// Pre-calculate positions near branches
const TECH_WITH_POS = TECH_STACK.map((tech, i) => {
  const angle = (i / TECH_STACK.length) * Math.PI * 2;
  const radius = 2.5 + Math.random() * 1.5; 
  const yHeight = 0.8 + Math.random() * 3.0;
  const x = Math.cos(angle * 2.5 + i) * radius; 
  const z = Math.sin(angle * 2.0 + i) * radius;
  return { ...tech, pos: [x, yHeight, z] };
});

const LogoNode = ({ position, img, label }) => {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
        const t = state.clock.getElapsedTime();
        groupRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Html center distanceFactor={8}>
        <div 
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: hovered ? '55px' : '45px',
            height: hovered ? '55px' : '45px',
            transition: 'all 0.3s ease'
          }}
        >
          <img 
            src={img} 
            alt={label}
            className="w-full h-full object-contain"
            style={{
              filter: hovered ? 'brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.5))' : 'brightness(1)',
              transition: 'filter 0.3s ease',
              pointerEvents: 'none'
            }}
          />
          {hovered && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded border border-white/30 whitespace-nowrap backdrop-blur-sm">
              {label}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
};

const GlowingMesh = ({ position, color, icon: Icon, label, url }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.position.y += Math.sin(t * 2) * 0.002;
    }
  });

  return (
    <group position={position}>
      <mesh 
        ref={meshRef} 
        onClick={(e) => { e.stopPropagation(); if(url !== '#') window.open(url, '_blank'); }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <dodecahedronGeometry args={[0.25, 0]} />
        <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={hovered ? 3 : 1.5} 
            wireframe 
        />
        
        <pointLight distance={1.5} intensity={3} color={color} />
        
        <Html distanceFactor={8} transform position={[0, 0.4, 0]} style={{ pointerEvents: 'none' }}> 
          <div 
             style={{ pointerEvents: 'auto' }}
             className="group relative cursor-pointer"
             onClick={(e) => {
               e.stopPropagation();
               if(url !== '#') window.open(url, '_blank');
             }}
          >
             <div className={`p-2 rounded-lg bg-black/80 border border-${color}/50 backdrop-blur-md flex items-center gap-2 transform transition-all ${hovered ? 'scale-110 opacity-100' : 'scale-100 opacity-80'} shadow-[0_0_15px_${color}]`}>
               <Icon size={18} color={color} />
               <span className="text-white font-bold text-xs whitespace-nowrap">
                 {label}
               </span>
               {url !== '#' && <ExternalLink size={10} className="text-white/50" />}
             </div>
          </div>
        </Html>
      </mesh>
    </group>
  );
};

// Simplified Branch Component
const Branch = ({ position, rotation, length, radius, depth }) => {
    if (depth === 0) return null;

    const nextLength = length * 0.8;
    const nextRadius = radius * 0.7;
    const yOffset = length / 2;

    return (
        <group position={position} rotation={rotation}>
            <mesh position={[0, yOffset, 0]}>
                <cylinderGeometry args={[nextRadius, radius, length, 8]} />
                <meshStandardMaterial 
                    color="#06b6d4" 
                    emissive="#06b6d4" 
                    emissiveIntensity={0.5} 
                    transparent 
                    opacity={0.8}
                    wireframe={false} 
                />
            </mesh>
            
            <mesh position={[0, yOffset, 0]}>
                <cylinderGeometry args={[nextRadius * 1.05, radius * 1.05, length, 8]} />
                <meshStandardMaterial color="#22d3ee" wireframe transparent opacity={0.3} />
            </mesh>

            <group position={[0, length, 0]}>
                 <Branch 
                    position={[0, 0, 0]} 
                    rotation={[0.5, 0, 0.5]} 
                    length={nextLength} 
                    radius={nextRadius} 
                    depth={depth - 1}
                 />
                 <Branch 
                    position={[0, 0, 0]} 
                    rotation={[0.5, 0, -0.5]} 
                    length={nextLength} 
                    radius={nextRadius} 
                    depth={depth - 1}
                 />
                 <Branch 
                    position={[0, 0, 0]} 
                    rotation={[-0.5, 0, 0]} 
                    length={nextLength} 
                    radius={nextRadius} 
                    depth={depth - 1}
                 />
            </group>
        </group>
    );
};

const CyberTree = ({ socialLinks }) => {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas camera={{ position: [0, 2, 10], fov: 45 }} dpr={[1, 2]}>
        <React.Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Sparkles 
            count={200} 
            scale={[6, 6, 6]} 
            position={[0, 2, 0]}
            size={4} 
            speed={0.2} 
            opacity={0.6} 
            color="#22d3ee" 
        />

        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <group position={[0, -2.5, 0]}>
            <Branch 
                position={[0, 0, 0]} 
                rotation={[0, 0, 0]} 
                length={2.5} 
                radius={0.3} 
                depth={4}
            />

            {NODE_POSITIONS.map((node) => {
                 const social = socialLinks[node.key];
                 if (!social) return null;
                 return (
                    <GlowingMesh 
                        key={node.key}
                        position={node.pos} 
                        color={node.color} 
                        icon={node.icon} 
                        label={node.label}
                        url={social.url}
                    />
                 );
            })}

            {TECH_WITH_POS.map((tech) => (
                <LogoNode 
                    key={tech.label}
                    position={tech.pos} 
                    img={tech.img}
                    label={tech.label}
                />
            ))}
          </group>
        </Float>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          target={[0, 1, 0]}
          minDistance={5}
          maxDistance={20}
        />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default CyberTree;
