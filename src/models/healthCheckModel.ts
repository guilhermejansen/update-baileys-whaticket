// /src/models/healthCheckModel.ts
export interface HealthCheckResponse {
    status: string;
    uptime: number;
    message: string;
    timestamp: number;
}
