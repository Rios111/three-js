
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
const material = new THREE.MeshBasicMaterial( {color: 0xB87F9E} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 25;
camera.position.x = 5;
camera.position.y = 5;


function animate() {
	requestAnimationFrame( animate );

	cylinder.rotation.x += 0.01;
	cylinder.rotation.y += 0.01;
	cylinder.rotation.z += 0.01;

	renderer.render( scene, camera );
};

animate();