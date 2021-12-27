import { PREFIX } from "../../utils/constants";
import { RunFunction } from "../../utils/interfaces/Command";

export const run: RunFunction = async (client) => {
    client.user?.setActivity(`'${PREFIX} 도움말'을 입력해 주세요!`)
    client.logger.success(`Pudding is now online!`)
}
export const name: string = 'ready';