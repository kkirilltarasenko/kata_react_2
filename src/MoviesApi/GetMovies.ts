import { FetchResults } from "../types/types";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class GetMovies {
  static async getAll(PATH_URL: string): Promise<FetchResults> {
    const response = await fetch(PATH_URL);
    return await response.json();
  }
}
