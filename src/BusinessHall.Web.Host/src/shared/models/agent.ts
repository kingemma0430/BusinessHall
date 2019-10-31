/**
 * 代理商
 */
export class AgentDto {
    id: number;
    name: string;
    tenantId: number;
    description: string;
    creatorUserId: number;
    creationTime: Date;
    createUserName: string;
}

export class AgentAccountDto {
    id: number;
    tenantId: number;
    agentId: number;
    creatorUserId: number;
    creationTime: Date;
    totalAmount: number;
    avaliableAmount: number;
    createUserName: string;
    agentName: string;
}