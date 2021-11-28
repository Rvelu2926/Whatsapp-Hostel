export interface ILocation {
  buildings: Building[]
  createAt: string
  createdBy: string
  deleted: boolean
  id: number
  locationName: string
  publish: boolean
  updateAt: string
  updatedBy: string
}

export interface Building {
  buildingAddress: string
  buildingName: string
  createAt: string
  createdBy: string
  deleted: boolean
  id: number
  latitude: string
  longitude: string
  publish: boolean
  rooms: Room[]
  updateAt: string
  updatedBy: string
  zipCode: string
}

export interface Room {
  buildings: any
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
