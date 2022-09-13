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

const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshMatcapMaterial( {} );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );






camera.position.z = 65;
camera.position.x = 5;

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./texturas/papel.jpg')
material.matcap = matcap;
material.flatShading = true


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );




function animate() {
	requestAnimationFrame( animate );
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();