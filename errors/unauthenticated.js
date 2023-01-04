import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './custom-error.js'

class unauthenticatedError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED
    }
  }
  
  export default unauthenticatedError
  