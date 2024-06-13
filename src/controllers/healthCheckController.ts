// /src/controllers/healthCheckController.ts
import { Request, Response } from 'express';
import { HealthCheckUtil } from '../utils/healthCheckUtil';

export class HealthCheckController {
    public healthCheck = (req: Request, res: Response) => {
        const healthCheck = HealthCheckUtil.getHealthCheck();
        res.send(healthCheck);
    }
}
