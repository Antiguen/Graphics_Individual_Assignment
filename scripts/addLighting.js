import * as THREE from "three";

export function addLighting(scene) {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
  scene.add(ambientLight);

  // Main directional light (like sun)
  const dirLight = new THREE.DirectionalLight(0xfff8e7, 1);
  dirLight.position.set(5, 10, 7);
  dirLight.castShadow = true;

  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.shadow.camera.near = 0.5;
  dirLight.shadow.camera.far = 20;
  dirLight.shadow.camera.left = -5;
  dirLight.shadow.camera.right = 5;
  dirLight.shadow.camera.top = 5;
  dirLight.shadow.camera.bottom = -5;

  scene.add(dirLight);

  // Soft fill light from below/front
  const fillLight = new THREE.DirectionalLight(0xbfe3ff, 0.3);
  fillLight.position.set(-5, 2, 5);
  scene.add(fillLight);

  // Rim light for subtle highlight
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.18);
  rimLight.position.set(0, 6, -8);
  scene.add(rimLight);
}
