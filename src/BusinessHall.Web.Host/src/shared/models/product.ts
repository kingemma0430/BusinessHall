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
    creationTime: Date;
    presentValue: number;

    createUserName: string;
    supplierName: string;
    operatorName:string;
    faceValue:string;

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
    creationTime: Date;
    createUserName: string;
    productName: string;
}

export class ProductOperatorDto {
    id: number;
    tenantId: number;
    productId: number;
    operatorId: number;
    creatorUserId: number;
    creationTime: Date;
    createUserName: string;
}

/**
 * 运营商
 */
export class OperatorDto {
    id: number;
    name: string;
    tenantId: number;
    description: string;
    creatorUserId: number;
    creationTime: Date;
    createUserName: string;
}


export class FaceValueDto {
    id: number;
    name: string;
    tenantId: number;
    description: string;
    actualValue: number;
    creatorUserId: number;
    creationTime: Date;
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
