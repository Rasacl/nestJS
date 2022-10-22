import { ApiService } from './api.service';
export declare class ApiController {
    private apiService;
    constructor(apiService: ApiService);
    index(): {
        result: string;
    };
    userIndex(): {
        result: string;
    };
    newsIndex(): {
        result: string;
    };
}
