import { ILocation, IRoom } from '@modal/location-building-room.modal'
import { IUserCreationForm } from '@modal/user-creation.modal'
import * as Yup from 'yup'

export const userCreationSchema: Yup.SchemaOf<IUserCreationForm> = Yup.object({
  id: Yup.number(),
  address: Yup.string().required(),
  email: Yup.string().required(),
  name: Yup.string().required(),
  password: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  userType: Yup.string().required(),
  zipCode: Yup.string().required(),
  buildingsDTO: Yup.array(),
  roomsDTO: Yup.object({
    id: Yup.number(),
    roomCapacity: Yup.number(),
    roomFloor: Yup.number(),
    roomName: Yup.string(),
  }).optional(),
})

export const roomCreationSchema: Yup.SchemaOf<IRoom> = Yup.object({
  buildings: Yup.array().required(),
  createAt: Yup.string().optional(),
  createdBy: Yup.string().optional(),
  deleted: Yup.boolean().optional(),
  id: Yup.number().optional(),
  publish: Yup.boolean().optional(),
  roomCapacity: Yup.number().required(),
  roomFloor: Yup.number().required(),
  roomName: Yup.string().required(),
  roomType: Yup.string().required(),
  updateAt: Yup.string().optional(),
  updatedBy: Yup.string().optional(),
})

export const locationCreationSchema: Yup.SchemaOf<ILocation> = Yup.object({
  locationName: Yup.string().required(),
  buildings: Yup.array().of(
    Yup.object({
      buildingAddress: Yup.string().optional(),
      buildingName: Yup.string().optional(),
      rooms: Yup.array().of(
        Yup.object({
          roomCapacity: Yup.number().optional(),
          roomFloor: Yup.number().optional(),
          roomName: Yup.string().optional(),
          roomType: Yup.string().optional(),
        }),
      ),
      zipCode: Yup.string().optional(),
    }),
  ),
})
