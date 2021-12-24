import { RunFunction } from "../../utils/interfaces/Command";

export const run: RunFunction = async (client) => {
    client.user?.setActivity("'세모야 도움말'을 입력해 주세요!")
    client.logger.success(`Pudding is now online!`)
}
export const name: string = 'ready';