import httpStatus from "http-status";

export function invalidBodyException(description?: string){
    return {
        type: "application",
        code: httpStatus.BAD_REQUEST,
        message: "Invalid Body",
        description: description,
    }
}

export function notFoundException(description?: string){
    return {
        type: "application",
        code: httpStatus.NOT_FOUND,
        message: "Not Found!",
        description: description,
    }
}

export function insufficientFundsExceptions(description?: string){
    return {
        type: "application",
        code: httpStatus.BAD_REQUEST,
        message: "Insufficient Funds!",
        description: description,
    }
}

export function badRequestException(description?: string){
    return {
        type: "application",
        code: httpStatus.BAD_REQUEST,
        message: "Bad Request!",
        description: description,
    }
}