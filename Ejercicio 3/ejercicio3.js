const scene = new THREE.Scene();
{
  const color = 0xffffff; // Color de la niebla
  const near = 1; //La distancia mínima para comenzar a aplicar niebla.
  const far = 100; // La distancia máxima a la que la niebla deja de calcularse y aplicarse.
  const density = 100; // Densidad de la niebla
  scene.fog = new THREE.Fog(color, near, far, density);
}

scene.background = new THREE.Color(0xFDBE16);


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 10 );
const geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );
const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 20;
camera.position.x = 5;




function animate() {
	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();