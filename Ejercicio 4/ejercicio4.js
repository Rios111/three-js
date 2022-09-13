const scene = new THREE.Scene();
{
  const color = 0xffffff; // Color de la niebla
  const near = 1; //La distancia mínima para comenzar a aplicar niebla.
  const far = 100; // La distancia máxima a la que la niebla deja de calcularse y aplicarse.
  const density = 100; // Densidad de la niebla
  scene.fog = new THREE.Fog(color, near, far, density);
}

scene.background = new THREE.Color(0x6B4166);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 12, 3, 16, 100 );
const material = new THREE.MeshMatcapMaterial({});
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 55;
camera.position.x = 5;

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./texturas/mar.jpg')
material.matcap = matcap;
material.flatShading = true


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );




function animate() {
	requestAnimationFrame( animate );

  line.rotation.x += 0.01;
	line.rotation.y += 0.01;
	torus.rotation.x += 0.01;
	torus.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();