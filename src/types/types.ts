export interface Make {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number
    VehicleTypeName: string
}


export interface VehicleModel {
    Model_ID: string;
    Model_Name: string;
    Make_Name: string;
}