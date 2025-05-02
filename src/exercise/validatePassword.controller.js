//Ejercio de Jose Luis
export const validatePassword = async (req, res) => {
    try{
        const { password } = req.body
        const errores = [];
 
        // Valida si es tipo String
        if (!password || typeof password !== 'string') {
            return res.status(400).send({
                valida: false,
                errores: ["No valid password received."]
            })
        }
       
        if (password.length < 8) {
            errores.push("Must be at least 8 characters.")
        }
        if (!/[A-Z]/.test(password)) {
            errores.push("Must contain at least one capital letter.")
        }
        if (!/[a-z]/.test(password)) {
            errores.push("Must contain at least one lowercase letter.")
        }
        if (!/\d/.test(password)) {
            errores.push("Must contain at least one lowercase letter.")
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errores.push("Must contain at least one symbol.")
        }
 
        return res.status(200).send({
            valida: errores.length === 0,
            errores
        })
 
    }catch(err) {
        console.error('General error', err);
        return res.status(500).send({
            success: false,
            message: 'General error',
            err
        })
    }
}