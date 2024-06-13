// /src/controllers/commandController.ts
import { Request, Response } from 'express';
import { CommandService } from '../services/commandService';

export class CommandController {
    private commandService: CommandService;

    constructor() {
        this.commandService = new CommandService();
    }

    public updateBaileys = async (req: Request, res: Response) => {
        try {
            const output = await this.commandService.executeCommands();
            res.send(output);
        } catch (error) {
            console.error(`Error: ${error}`);
            res.status(500).send(`Error executing commands: ${error}`);
        }
    }
}
