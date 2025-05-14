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

    // rendererの作成
    renderer = new THREE.WebGLRenderer();

    // canvasをbodyに追加
    document.body.appendChild(renderer.domElement);

    // canvasをリサイズ
    renderer.setSize(windowWidth, windowHeight);

    // scene作成
    scene = new THREE.Scene();

    // camera作成
    camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.1, 1000);
    camera.position.z = 100;

    // Material作成
    let material = new THREE.ShaderMaterial({
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent,
    uniforms: uniforms
    });

    // Mesh作成
    let mesh = new THREE.Mesh(geometry,material);

    // Meshをシーンに追加
    scene.add(mesh);

    // uniformに値を格納
    uniforms.resolution.value.x = windowWidth;
    uniforms.resolution.value.y = windowHeight;

    animate();
};

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    var elapsedMilliseconds = Date.now() - startTime;
    var elapsedSeconds = elapsedMilliseconds / 1000.;
    uniforms.time.value = elapsedSeconds;

    // draw
    renderer.render(scene, camera);
}

window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
}
