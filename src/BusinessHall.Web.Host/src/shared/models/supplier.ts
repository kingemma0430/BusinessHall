export class SupplierDto {
    id: number;
    name: string;
    tenantId: number;
    isAutoReturnMoney: boolean;
    status: SupplierStatusEnum;
    creatorUserId: number;
    cretionTime: Date;
}


export enum SupplierStatusEnum {
    Open = 1,
    Close = 2
}