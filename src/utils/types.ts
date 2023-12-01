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

export type finishGameDto = {
	homeTeamScore: number;
	awayTeamScore: number;
}

export type bet = {
	id: number;
	homeTeamScore: number;
	awayTeamScore: number;
	amountBet: number; // representado em centavos, ou seja, R$ 10,00 -> 1000
	gameId: number; 
	participantId: number;
	status: "PENDING" | "WON" | "LOST"; // podendo ser PENDING, WON ou LOST
	amountWon: number | null; // nulo quando a aposta ainda está PENDING; number caso a aposta já esteja WON ou LOST, com o valor ganho representado em centavos
}

export type ApplicationErrors = {
    type: "application",
    code: number,
    message: string,
    description?: string,
}