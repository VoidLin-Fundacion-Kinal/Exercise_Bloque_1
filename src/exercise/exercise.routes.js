import { Router } from 'express'


import {conversionTemperature} from './temperature.controller.js'
import {createPassword} from './newPassword.controller.js'
import {validatePassword} from './validatePassword.controller.js'
import {numerosRomanos} from './numberRomano.controller.js'


const api = Router()

api.post('/temperature', conversionTemperature)

api.post('/newPassword', createPassword)

api.post('/valiPassword', validatePassword)

api.post('/numberRomano', numerosRomanos)

export default api