import { exec } from 'child_process';
import axios from 'axios';
import { promises as fs } from 'fs';
import util from 'util';

const execPromise = util.promisify(exec);

export class CommandService {
    public async executeCommands(): Promise<string> {
        try {
            const scriptUrl = 'https://raw.githubusercontent.com/guilhermejansen/update-baileys-whaticket/master/update-baileys.sh';
            const filePath = '/tmp/update-baileys.sh';

            // Baixar o script
            const response = await axios.get(scriptUrl, { responseType: 'arraybuffer' });
            await fs.writeFile(filePath, response.data);

            // Tornar o script executável
            await execPromise(`chmod +x ${filePath}`);

            // Executar o script como o usuário 'deploy'
            const { stdout } = await execPromise(`sudo -u deploy ${filePath}`);
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
