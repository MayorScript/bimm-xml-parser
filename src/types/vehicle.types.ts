export interface VehicleTypes {
  typeId: string;
  typeName: string;
}
export interface VehicleType {
  makeId: string;
  makeName: string;
  vehicleTypes: Array<VehicleTypes>;
}
