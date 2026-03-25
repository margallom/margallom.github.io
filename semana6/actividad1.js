import os from 'os';
function mostrarInfo() {
    console.log('Sistema operativo:', os.platform());
    console.log('Memoria total:', os.totalmem());
    console.log('Memoria libre:', os.freemem());
}
mostrarInfo();
