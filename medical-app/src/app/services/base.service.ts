/**
 * Created by yana on 27.03.18.
 */
export class BaseService {

  protected apiUrl = 'https://medical-base.herokuapp.com/api/v1/patients/';

  handleError(error: Error): any {
    console.log(error);
    return null;
  }
}
