//Ejercicio de Alfredo
export const conversionTemperature = async (req, res) => {
    try {
        const { unidad, valor } = req.body;

        let result = {};

        if (unidad === 'C') {
            result.C = valor;
            result.F = (9 / 5) * valor + 32;
            result.K = valor + 273.15;

            return res.send({
                success: true,
                message: 'Sus conversiones son:',
                result,
            });
        } else if (unidad === 'F') {
            result.F = valor;
            result.C = (5 / 9) * (valor - 32);
            result.K = (5 / 9) * (valor - 32) + 273.15;

            return res.send({
                success: true,
                message: 'Sus conversiones son:',
                result,
            });
        } else if (unidad === 'K') {
            result.K = valor;
            result.C = valor - 273.15;
            result.F = (9 / 5) * (valor - 273.15) + 32;

            return res.send({
                success: true,
                message: 'Sus conversiones son:',
                result,
            });
        } else {
            return res.status(404).send({
                success: false,
                message: 'No es una unidad válida.',
            });
        }
    } catch (error) {
        console.error('General error', error);
        return res.status(500).send({
            success: false,
            message: 'General error',
            error,
        });
    }
};