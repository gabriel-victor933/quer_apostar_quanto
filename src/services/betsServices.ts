import betsRepositories from "@/repositories/betsRepositories";
import { betsDto } from "@/utils/types";

async function postBet(body: betsDto) {
    return await betsRepositories.postBet(body)
}

const betsServices = {
    postBet
}

export default betsServices