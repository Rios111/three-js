const scene = new THREE.Scene();

scene.background = new THREE.Color(0x6B4166);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.RingGeometry( 1, 5, 10 );
const material = new THREE.MeshStandardMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );


camera.position.z = 20;
camera.position.x = 5;

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./texturas/metal.jpg')
material.matcap = matcap;
material.flatShading = true

material.metalness = 1;
material.roughness = 0.2;
material.envMap = 1; 

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );




function animate() {
	requestAnimationFrame( animate );
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.02;
    line.rotation.x += 0.02;
    line.rotation.y += 0.02;

	renderer.render( scene, camera );
};

animate();


