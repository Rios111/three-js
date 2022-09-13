
const scene = new THREE.Scene();
scene.background = new THREE.Color();

var loader = new THREE.TextureLoader();
loader.load('../images/texture2.jpg', function(texture){
	scene.background = texture;

})

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshMatcapMaterial({color: 0xFFFF00})
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./texturas/madera.jpg')
material.matcap = matcap;
material.flatShading = true



const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );




function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	line.rotation.x += 0.01;
	line.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();