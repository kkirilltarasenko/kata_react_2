import {FetchResults} from "../types/types";

export class GetMovies {
    static async getAll(PATH_URL: string): Promise<FetchResults> {
        const response = await fetch(PATH_URL);
        return await response.json();
    }
}