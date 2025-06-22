import * as THREE from "three";

export function createProduct(scene) {
  const group = new THREE.Group();

  // Professional, neutral color palette
  const colors = {
    seat: 0xd6ccc2, // Warm light beige
    legs: 0x222831, // Matte black
    backrest: 0x3a5a40, // Deep green accent
  };

  // Materials with subtle reflectivity for realism
  const seatMat = new THREE.MeshPhysicalMaterial({
    color: colors.seat,
    roughness: 0.35,
    metalness: 0.1,
    clearcoat: 0.2,
    clearcoatRoughness: 0.1,
  });
  const legMat = new THREE.MeshPhysicalMaterial({
    color: colors.legs,
    roughness: 0.7,
    metalness: 0.4,
  });
  const backrestMat = new THREE.MeshPhysicalMaterial({
    color: colors.backrest,
    roughness: 0.4,
    metalness: 0.2,
  });

  // Seat (box)
  const seat = new THREE.Mesh(new THREE.BoxGeometry(2, 0.2, 2), seatMat);
  seat.position.y = 1;
  seat.name = "Seat";
  seat.castShadow = true;
  seat.receiveShadow = true;
  group.add(seat);

  // Legs (cylinders)
  const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1);
  const legPositions = [
    [-0.8, 0.5, -0.8],
    [0.8, 0.5, -0.8],
    [-0.8, 0.5, 0.8],
    [0.8, 0.5, 0.8],
  ];

  legPositions.forEach((pos, i) => {
    const leg = new THREE.Mesh(legGeometry, legMat);
    leg.position.set(...pos);
    leg.name = `Leg ${i + 1}`;
    leg.castShadow = true;
    leg.receiveShadow = true;
    group.add(leg);
  });

  // Backrest (box)
  const backrest = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 0.2),
    backrestMat
  );
  backrest.position.set(0, 2, -0.9);
  backrest.name = "Backrest";
  backrest.castShadow = true;
  backrest.receiveShadow = true;
  group.add(backrest);

  // Ground plane for shadow
  const groundMat = new THREE.ShadowMaterial({ opacity: 0.18 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  ground.receiveShadow = true;
  scene.add(ground);

  scene.add(group);

  return group;
}
