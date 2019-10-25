import { SupplierDto } from './supplier';
export class ProductDto {
    id: number;
    tenantId: number;
    name: string;
    supplierId: number;
    province: string;
    discount: number;
    status: ProductStatusEnum;
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
}

export class ProductOperatorDto {
    id: number;
    tenantId: number;
    productId: number;
    OperatorId: number;
}

export class OperatorDto {
    id: number;
    name: string;
    tenantId: number;
    description: string;
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