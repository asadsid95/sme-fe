export type Example = {
    id: number,
    inputText: string,
    outputText: string,
    explanation?: string,
    img?: string
}

export type Problem = {
    id: String,
    title: String,
    problemStatement: String,
    examples: Example[],  // means array of Example type
    constraints: String,
    order: Number,
    starterCode: String,
    handlerFunction: ((fn: any) => Boolean) | String,
    starterFunctionName: String
}