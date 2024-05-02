import axios from 'axios';
import {LoginRequest} from "../type/user";

const BASE_URL = '/api';

export class ApiService {
  private baseURL = BASE_URL;

  static async login(req: LoginRequest) {
    try {
      const response = await axios.post(`http://localhost:3001/api/users/login`, req, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      return response.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  static async getVendors(unit: number = 1) {
    try {
      const response = await axios.get(`http://localhost:3001/api/vendors?unit=${unit}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // 'X-API-TOKEN': localStorage.getItem('token'),
          'X-API-TOKEN': 'b92950b0-2834-4e97-b8e2-60be67d04863'
        }
      })

      return response.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  static async logout(req: LoginRequest) {
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, req);

      return response.data;
    } catch (e) {
      throw new Error(e);
    }
  }
}
