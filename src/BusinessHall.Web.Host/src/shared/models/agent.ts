
export enum AgentStatusEnum {
    Open = 1,
    Close = 2
}
/**
 * 代理商
 */
export class AgentDto {
    id: number;
    name: string;
    code: string;
    nickName: string;
    tenantId: number;
    description: string;
    status: AgentStatusEnum;
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
    avaliableAmount: number;
    usedAmount: number;
    chargedAmount: number;
    withDrawAmount: number;
    creditPercentAmount: number;
    createUserName: string;
    agentName: string;
    agentCode: string;
    agentNickName: string;
    agentStatus: AgentStatusEnum;
}
