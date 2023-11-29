import httpStatus from "http-status";

export function invalidBodyException(description?: string){
    return {
        code: httpStatus.BAD_REQUEST,
        message: "Invalid Body",
        description: description,
    }
}