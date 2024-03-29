import { IBaseResponse } from "./base-interface";

export class BaseController {
    protected baseResponse({ statusCode, message, data }): IBaseResponse {
      return { statusCode, message, data };
    }
  }