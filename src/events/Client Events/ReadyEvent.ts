import { RunFunction } from "../../interfaces/Command";

export const run: RunFunction = async (client) => {
    client.logger.success(`Me is now online!`)
}
export const name: string = 'ready';