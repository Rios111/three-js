
const scene = new THREE.Scene();
scene.background = new THREE.Color();

var loader = new THREE.TextureLoader();
loader.load('../images/texture3.jpg', function(texture){
	scene.background = texture;

})

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CylinderGeometry( 3, 3, 15,105 );
const material = new THREE.MeshMatcapMaterial({})

const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 25;
camera.position.x = 5;
camera.position.y = 5;

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../images/texture3.jpg')
material.matcap = matcap;
material.flatShading = true

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );


function animate() {
	requestAnimationFrame( animate );

	line.rotation.x += 0.02;
	line.rotation.y += 0.02;
	line.rotation.z += 0.02;
	cylinder.rotation.x += 0.01;
	cylinder.rotation.y += 0.01;
	cylinder.rotation.z += 0.01;

	renderer.render( scene, camera );
};

animate();