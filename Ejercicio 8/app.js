const scene = new THREE.Scene();
scene.background = new THREE.Color();

var loader = new THREE.TextureLoader();
loader.load('./texturas/fondo.jpg', function(texture){
	scene.background = texture;

})



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* 
const cubeTextureloader = new THREE.CubeTextureLoader();
const evm = cubeTextureloader.load([
  "./texturas/metal.1.jpg",
  "./texturas/metal.2.jpg",
  "./texturas/metal.3.jpg",
  "./texturas/metal.4.jpg",
  "./texturas/metal.5.jpg",
]) */

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshStandardMaterial( { color: 0x2b0d2a } );
const torusKnot = new THREE.Mesh( geometry, material );
material.metalness = 0.4;
material.roughness = 0.5;
/* material.envMap = evm; */
const directionalLight = new THREE.DirectionalLight( 0xb82864, 5 );
scene.add( directionalLight );
scene.add( torusKnot );





camera.position.z = 65;
camera.position.x = -2;

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./texturas/papel.jpg')
material.matcap = matcap;
material.flatShading = true


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );




function animate() {
	requestAnimationFrame( animate );
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();