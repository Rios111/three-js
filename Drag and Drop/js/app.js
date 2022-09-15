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

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshStandardMaterial( { color: 0x2b0d2a } );
const torusKnot = new THREE.Mesh( geometry, material );
material.metalness = 0.4;
material.roughness = 0.5;
/* material.envMap = evm; */
const directionalLight = new THREE.DirectionalLight( 0xb82864, 5 );
scene.add( directionalLight);
scene.add( torusKnot);


const torusKnot1 = new THREE.Mesh( geometry, material );
scene.add( torusKnot1);

const torusKnot2 = new THREE.Mesh( geometry, material );
scene.add( torusKnot2);

const torusKnot3 = new THREE.Mesh( geometry, material );
scene.add( torusKnot3);

torusKnot.position.y = 25;
torusKnot.position.x = 70;

torusKnot3.position.y = 25;
torusKnot3.position.x = -50;

torusKnot1.position.y = -10;
torusKnot1.position.x = 70;

torusKnot2.position.y = -10;
torusKnot2.position.x = -50;


camera.position.z = 60
camera.position.x = 10
camera.position.y = 10


const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./texturas/papel.jpg')
material.matcap = matcap;
material.flatShading = true


/* const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line ); */


const objects = [torusKnot, torusKnot1, torusKnot2, torusKnot3];

const dControls = new THREE.DragControls( objects, camera, renderer.domElement)
dControls.deactivate()
dControls.activate()


dControls.addEventListener("hoveron", function (e) {
    e.object.material.wireframe = true;
    e.object.scale.y *=4

});

dControls.addEventListener("hoveroff", function (e) {
    e.object.material.wireframe = false;
    e.object.scale.y /=4

});

// flycontrols

    const flycontrols = new THREE.FlyControls( camera, renderer.domElement)
    flycontrols.movementSpeed = 50
    flycontrols.rollSpeed = 0.01
    flycontrols.autoForward = false
    flycontrols.dragToLock = false

// flycontrols


function animate() {
	requestAnimationFrame( animate );
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    torusKnot1.rotation.x += 0.01;
    torusKnot1.rotation.y += 0.01;
    torusKnot2.rotation.x += 0.01;
    torusKnot2.rotation.y += 0.01;
    torusKnot3.rotation.x += 0.01;
    torusKnot3.rotation.y += 0.01;
    /* line.rotation.x += +0.01;
    line.rotation.y += 0.01; */

    flycontrols.update(0.5)

	renderer.render( scene, camera );
};

animate();