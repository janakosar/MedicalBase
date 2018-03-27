/**
 * Created by yana on 27.03.18.
 */
export class BaseService {

  handleError(error: Error): any {
    console.log(error);
    return null;
  }
}
