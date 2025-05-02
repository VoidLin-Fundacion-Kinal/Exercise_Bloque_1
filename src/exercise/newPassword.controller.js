//Ejercicio de Paolo
const letras = 'abcdefghijklmnñopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%&/_-+*';
 
export const createPassword = async (req, res) => {
    try {
        let { longitud, mayusculas, num, sim } = req.body;
        let contra = '';
        const opciones = [
            () => letras.charAt(Math.floor(Math.random() * letras.length))
        ];
 
        if (mayusculas == 1) {
            opciones.push(() => letras.charAt(Math.floor(Math.random() * letras.length)).toUpperCase());
        }
        if (num == 1) {
            opciones.push(() => numeros.charAt(Math.floor(Math.random() * numeros.length)));
        }
        if (sim == 1) {
            opciones.push(() => simbolos.charAt(Math.floor(Math.random() * simbolos.length)));
        }
 
 
        if (opciones.length === 0) {
            return res.status(400).send({
                success: false,
                message: 'Debe activar al menos una opción para generar la contraseña.'
            });
        }
 
        for (let i = 0; i < longitud; i++) {
            const randomFn = opciones[Math.floor(Math.random() * opciones.length)];
            contra += randomFn();
        }
 
        console.log(contra);
        return res.status(200).send({
            success: true,
            message: 'Contraseña generada:',
            contra
        });
    } catch (error) {
        console.error('ERROR: ' + error);
        return res.status(500).send({
            success: false,
            message: 'Error de servidor'
        });
    }
};