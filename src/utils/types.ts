export type participantDto =  {
    name: string,
    balance: number
}

export type gameDto = {
	homeTeamName: string;
	awayTeamName: string;
}

export type betsDto = { 
	homeTeamScore: number;
	awayTeamScore: number; 
	amountBet: number; 
	gameId: number; 
	participantId: number;
}

export type ApplicationErrors = {
    type: "application",
    code: number,
    message: string,
    description?: string,
}