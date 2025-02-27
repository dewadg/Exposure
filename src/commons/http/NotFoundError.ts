import * as status from 'http-status'
import HttpError from './HttpError'

export default class NotFoundError extends HttpError {
  constructor (message: any, previousError: any) {
    super(message, status.NOT_FOUND, previousError)
  }
}
