export interface ILocation {
  buildings: IBuilding[]
  locationName: string
}

export interface IBuilding {
  buildingAddress?: string
  buildingName?: string
  rooms?: IRoom[]
  zipCode?: string
}

export interface IRoom {
  roomCapacity?: number
  roomFloor?: number
  roomName?: string
  roomType?: string
}

export interface ILocationApi {
  buildings: IBuilding[]
  createAt: string
  createdBy: string
  deleted: boolean
  id: number
  locationName: string
  publish: boolean
  updateAt: string
  updatedBy: string
}

export interface IBuildingApi {
  buildingAddress: string
  buildingName: string
  createAt: string
  createdBy: string
  deleted: boolean
  id: number
  latitude: string
  longitude: string
  publish: boolean
  rooms: IRoom[]
  updateAt: string
  updatedBy: string
  zipCode: string
}

export interface IRoomApi {
  createAt: string
  createdBy: string
  deleted: boolean
  id: number
  publish: boolean
  roomCapacity: number
  roomFloor: number
  roomName: string
  roomType: string
  updateAt: string
  updatedBy: string
}
