function calcularCubo() {
    let valor = document.getElementById("numeroInput").value;
    let entero = parseInt(valor);
    
    if (isNaN(entero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let cubo = Math.pow(entero, 3); // o entero * entero * entero
    alert("El cubo de " + entero + " es: " + cubo);
}