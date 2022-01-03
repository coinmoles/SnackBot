import { Bot } from "../../client/Client";
import { PREFIX } from "../../utils/constants";

export const onReady = async (client: Bot) => {
    client.user?.setActivity(`'${PREFIX} 도움말'을 입력해 주세요!`)
    client.logger.success(`Pudding is now online!`)
}