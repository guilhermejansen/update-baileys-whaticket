// /src/utils/healthCheckUtil.ts
import { HealthCheckResponse } from '../models/healthCheckModel';

export class HealthCheckUtil {
    public static getHealthCheck(): HealthCheckResponse {
        return {
            status: 'OK',
            uptime: process.uptime(),
            message: 'Everything is running smoothly!',
            timestamp: Date.now()
        };
    }
}
