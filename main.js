import * as THREE from "three";
// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(0, 15, 0);
camera.lookAt(0, 0, 0);

// Renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Set background color - IMPORTANT: must match fog color
const backgroundColor = 0xcccccc;
renderer.setClearColor(backgroundColor);
// Add GridHelper
const size = 1000; // Size of the grid
const divisions = 1000; // Number of squares along one axis
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);
scene.fog = new THREE.Fog(backgroundColor, 200, 500);
// Animation loop
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();
