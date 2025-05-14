var startTime = Date.now();
var uniforms;
var camera, scene, renderer;

window.onload = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    uniforms = {
        time: { type: "f", value: 1.0 },
        resolution: { type: "v2", value: new THREE.Vector2() }
    };

    animate();
};

function animate() {

}

function render() {

}

window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
}
