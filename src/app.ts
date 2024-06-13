// /src/app.ts
import express from 'express';
import { CommandController } from './controllers/commandController';
import { HealthCheckController } from './controllers/healthCheckController';

const app = express();
const port = 5000;
const commandController = new CommandController();
const healthCheckController = new HealthCheckController();

app.get('/update', commandController.updateBaileys);
app.get('/health', healthCheckController.healthCheck);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
