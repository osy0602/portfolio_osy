import { Canvas, useThree } from '@react-three/fiber';
import { City } from "../components/City";
import { Environment, Float, Lightformer } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import AnimatedNameSection from '../components/AnimatedNameSection';


const CameraController = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(0, 4, 3); 
  }, [camera]);

  return null;
};


const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 853});
    const text = "portfolio";
    
    return (
      <section id="home" className='flex flex-col justify-end min-h-screen'>
          <AnimatedNameSection subTitle={`"Flying beyond borders, Thinking beyond limits"`} title={"Seyoung Oh"} text={text}/>
          
          <figure 
              className='absolute inset-0 -z-50' 
              style={{width : "100vw", height:"100vh"}}>
              
              <Canvas shadows camera={{position:[5, 8, 10], fov:30, near:1, far:50 }}>
                  
                  <CameraController />

                  <ambientLight intensity={0.5}/>
                  
                  <Float speed={0.5}>
                      <City scale={isMobile ? 3 : 5}/>
                  </Float>
                  
                  <Environment resolution={256}>
                      <group rotation={[-Math.PI / 3,4,1]}>
                          <Lightformer form={"circle"}
                              intensity={2}
                              position={[0, 5, -9]}
                              scale={10}
                          />
                          <Lightformer form={"circle"}
                              intensity={2}
                              position={[0, 3, 1]}
                              scale={10}
                          />
                          <Lightformer form={"circle"}
                              intensity={2}
                              position={[-5, -1, -1]}
                              scale={10}
                          />
                          <Lightformer form={"circle"}
                              intensity={2}
                              position={[10, 1, 0]}
                              scale={16}
                          />
                      </group>
                  </Environment>
              </Canvas>
          </figure>
      </section>
    );
};

export default Hero;
