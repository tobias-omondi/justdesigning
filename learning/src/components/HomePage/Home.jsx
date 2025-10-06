import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import donatu from '/src/assets/donut-5279363_1280.png'



const Home = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene(); // this like a room where we put objects
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    ); // this is like our eyes
    const renderer = new THREE.WebGLRenderer(); //this creates the actual image
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    camera.position.z = 5; // postion the camera

    const textureLoader = new THREE.TextureLoader();
    const donutTexture = textureLoader.load(donatu); 


    // Example: add a cube
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100); // this is like the shape of the object
    const material = new THREE.MeshStandardMaterial({map: donutTexture, 
    roughness: 0.3,
    metalness: 0.1, });
     // this is like a the skin of the object
    const donut = new THREE.Mesh(geometry, material); // this puts the skin on the shape
    scene.add(donut); // put the object in the room
    scene.background = new THREE.Color("beige"); // set the bg color og the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    const lightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(lightHelper);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(2, 2, 2);
    scene.add(dirLight);

    dirLight.castShadow = true;
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(0, 5, 5);
    scene.add(spotLight);

    spotLight.angle = Math.PI / 6;

    const hemiLight = new THREE.HemisphereLight(0x00aaff, 0xffaa00, 0.6);
    scene.add(hemiLight);










    

    const animate = () => {
      requestAnimationFrame(animate);
      donut.rotation.x += 0.02;
      donut.rotation.y += 0.02;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className='bg-white'>
      <div ref={mountRef} />
    </div>
  );
}

export default Home
