import { SupplierDto } from './supplier';
export class ProductDto {
    id: number;
    tenantId: number;
    name: string;
    supplierId: number;
    province: string;
    discount: number;
    status: ProductStatusEnum;

    creatorUserId: number;
    cretionTime: Date;
    presentValue: number;

    createUserName: string;
    suppliername: string;
    supplier: SupplierDto;

    productFaceValues: ProductFaceValueDto[];
    productOperators: ProductOperatorDto[];
}



export class ProductFaceValueDto {
    id: number;
    name: string;
    tenantId: number;
    productId: number;
    faceValue: number;
    creatorUserId: number;
    cretionTime: Date;
    createUserName: string;
    productName: string;
}

export class ProductOperatorDto {
    id: number;
    tenantId: number;
    productId: number;
    operatorId: number;
    creatorUserId: number;
    cretionTime: Date;
    createUserName: string;
}

export class OperatorDto {
    id: number;
    name: string;
    tenantId: number;
    description: string;
    creatorUserId: number;
    cretionTime: Date;
    createUserName: string;
}

export enum ProductStatusEnum {
    /// <summary>
    /// 上架
    /// </summary>
    Active = 1,

    /// <summary>
    /// 下架
    /// </summary>
    Inactive = 2
}