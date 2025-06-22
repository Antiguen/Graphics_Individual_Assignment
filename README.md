# Interactive 3D Product Viewer

This project is an **Interactive 3D Product Viewer** built with [Three.js](https://threejs.org/). Users can explore a 3D chair model composed entirely of basic geometries, interact with its parts, and enjoy smooth camera controls and animations.

## Features

- **3D Scene Setup:** Responsive Three.js scene with PerspectiveCamera and WebGLRenderer.
- **Product Modeling:** Chair built from basic meshes (boxes, cylinders).
- **Realistic Materials:** Uses MeshPhysicalMaterial for lifelike lighting.
- **Lighting:** Ambient and directional lights for depth and realism.
- **User Interaction:**  
  - Click on any part to highlight it and see its name.
  - Info panel appears near the mouse.
  - Subtle hover and click feedback.
- **Camera Controls:**  
  - Automatic camera rotation around the product.
  - OrbitControls for manual zoom and pan.
  - Auto-rotation pauses when user interacts.
- **Smooth Animations:** Floating effect and smooth transitions.
- **Modern UI:** Clean info panel and instructions.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
   cd YOUR-REPO
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Project Structure

```
interactive-viewer/
├── index.html
├── style.css
├── scripts/
│   ├── initScene.js
│   ├── createProduct.js
│   ├── addLighting.js
│   ├── interaction.js
│   └── cameraAnimation.js
└── ...
```

- **initScene.js:** Sets up the Three.js scene, camera, and renderer.
- **createProduct.js:** Builds the chair model from basic meshes.
- **addLighting.js:** Adds and configures scene lighting.
- **interaction.js:** Handles mouse interaction and UI feedback.
- **cameraAnimation.js:** Manages automatic camera rotation and animation loop.

## Credits

- Built with [Three.js](https://threejs.org/)
- Inspired by the "Discover three.js" learning path

## License

This project is for
