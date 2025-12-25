const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const scene = new THREE.Scene();
scene.background = new THREE.Color('gray');

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const light = new THREE.AmbientLight(0xFFFFFF, 0.4);
light.position.set(5, 5, 5);
scene.add(light);

// Directional light for clearer, matte face shading
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(3, 5, 2);
scene.add(dirLight);

// Create geometry
const geometry = new THREE.DodecahedronGeometry();


// Create material with matte blue panels
const material = new THREE.MeshLambertMaterial({ color: 0x1f6aa5, flatShading: true });
const dodecahedron = new THREE.Mesh(geometry, material);
scene.add(dodecahedron);

// Add thin white wireframe edges
const edges = new THREE.EdgesGeometry(geometry);
const edgeLines = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: 0xffffff })
);
dodecahedron.add(edgeLines);

function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.y += 0.005;
  dodecahedron.rotation.x += 0.005;
  renderer.render(scene, camera);
}

animate();



