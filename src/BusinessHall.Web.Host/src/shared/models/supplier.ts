/**
 * 供应商
 */
export class SupplierDto {
    id: number;
    name: string;
    tenantId: number;
    isAutoReturnMoney: boolean;
    status: SupplierStatusEnum;
    creatorUserId: number;
    creationTime: Date;
    createUserName: string;
}

export class SupplierAccountDto {
    id: number;
    name: string;
    tenantId: number;
    supplierId: number;
    totalAmount: number;
    avaliableAmount: number;
    creatorUserId: number;
    creationTime: Date;
    createUserName: string;
    supplierName: string;
}

export class SupplierPayDto {
    id: number;
    name: string;
    tenantId: number;
    supplierId: number;
    totalValue: number;
    creatorUserId: number;
    creationTime: Date;
    createUserName: string;
    supplierName: string;
}

export class SupplierPaySearchCondition {
    startDate: Date;
    endDate: Date;
}

export enum SupplierStatusEnum {
    Open = 1,
    Close = 2
}