// /src/services/commandService.ts
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export class CommandService {
    public executeCommands = async (): Promise<string> => {
    
    try {
        await execPromise('su deploy -c "cd /home/deploy/multi100/backend"');
        await execPromise('pm2 stop 0');
        await execPromise('npm remove @whiskeysockets/baileys');
        await execPromise('npm install @whiskeysockets/baileys');
        const { stdout } = await execPromise('pm2 start 0');
        const logo = this.getLogo();
        const successMessage = "Baileys updated successfully.";
        console.log(successMessage);
        return `${logo}\n${successMessage}\nOutput: ${stdout}`;
    } catch (error) {
        console.error(`Error during execution: ${error}`);
        throw error;
    }
}


private getLogo(): string {
    return `
    Update Baileys 
    By Guilherme Jansen
    https://github.com/guilhermejansen/update-baileys-whaticket

    OBRIGADO!
    `;
}
}
