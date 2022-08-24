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
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 55;
camera.position.x = 5;




function animate() {
	requestAnimationFrame( animate );

	torus.rotation.x += 0.01;
	torus.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();