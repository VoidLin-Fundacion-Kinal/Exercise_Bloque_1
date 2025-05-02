//Ejercicio de Retana
export const numerosRomanos =async (req,res) => {
    try {
        const romanNunber = req.body.romanNunber.toUpperCase()
        const roman ={
            'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
        }
        let total = 0
        for (let i = 0; i<romanNunber.length; i++){
            const current =roman[romanNunber[i]]
            const next = roman[romanNunber[i+1]]
            if(current < next){
                total-=current
            }else{
                total += current
            }
        }      
        if(!romanNunber.match(/^[IVXLCDM]+$/)){
            return res.status(500).send({ message: "No es un número romano válido" });
        }  
        res.status(200).send({ entero: total })
    } catch (error) {
        console.error('ERROR HAGA ALGO BIEN',error)
        return res.status(500).send({
            success:false,
            message:'general error',
            error
        })
    }
   
}