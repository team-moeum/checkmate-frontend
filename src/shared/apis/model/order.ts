/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.19
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface Order
 */
export interface Order {
  /**
   *
   * @type {number}
   * @memberof Order
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof Order
   */
  petId?: number;
  /**
   *
   * @type {number}
   * @memberof Order
   */
  quantity?: number;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  shipDate?: string;
  /**
   * Order Status
   * @type {string}
   * @memberof Order
   */
  status?: OrderStatus;
  /**
   *
   * @type {boolean}
   * @memberof Order
   */
  complete?: boolean;
}

export const OrderStatus = {
  Placed: "placed",
  Approved: "approved",
  Delivered: "delivered"
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
