export interface IUserCreationForm {
  address: string
  buildingsDTO?: any
  email: string
  id?: number
  name: string
  password: string
  phoneNumber: string
  roomsDTO: Partial<IRoomsDto>
  userType: string
  zipCode: string
}

export interface IBuildingsDto {
  buildingName: string
  id: number
}

export interface IRoomsDto {
  id: number
  roomCapacity: number
  roomFloor: number
  roomName: string
}
