export type participantDto =  {
    name: string,
    balance: number
}

export type gameDto = {
	homeTeamName: string;
	awayTeamName: string;
}

export type ApplicationErrors = {
    type: "application",
    code: number,
    message: string,
    description?: string,
}