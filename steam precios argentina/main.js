let precioBase = prompt("Ingresa el precio del juego de Steam o sc para salir");
const tipoIVA = 1.75;

    if (precioBase !== "esc") {
        Calcular()
    } else {
        
    }
    
    




function Calcular() {
    const base = Number(precioBase);
    const total = base * tipoIVA;
    return alert("El total de su juego es "+ total)
}
