export interface DevicesData {
    DeviceID: string;
    DevicePK: number;
    IP: string;
    Description: string;
    Type: string;
    Status: string;
    BatteryStatus: number;
    isDelete: boolean;
    PersonID: number;
}

export interface DeviceInfo {
    DeviceID: string;
    DevicePK: number;
    IP: string;
    Description: string;
    Type: string;
    Status: string;
    PersonID: number;
    Person: string;
}

export interface Select {
    value: string;
    viewValue: string;
}

