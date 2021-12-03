import { ILocation, IRoom } from '@modal/location-building-room.modal'
import { IUserCreationForm } from '@modal/user-creation.modal'
import * as Yup from 'yup'

export const userCreationSchema: Yup.SchemaOf<IUserCreationForm> = Yup.object({
  address: Yup.mixed().required(),
  email: Yup.mixed().required(),
  name: Yup.mixed().required(),
  password: Yup.mixed().required(),
  phoneNumber: Yup.mixed().required(),
  userType: Yup.mixed().required(),
  zipCode: Yup.mixed().required(),
  buildingsDTO: Yup.array(),
  roomsDTO: Yup.object({
    id: Yup.number(),
  }),
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
  locationName: Yup.mixed().optional(),
  buildings: Yup.array().of(
    Yup.object({
      buildingAddress: Yup.mixed().optional(),
      buildingName: Yup.mixed().optional(),
      rooms: Yup.array().of(
        Yup.object({
          roomCapacity: Yup.mixed().optional(),
          roomFloor: Yup.mixed().optional(),
          roomName: Yup.mixed().optional(),
          roomType: Yup.mixed().optional(),
        }),
      ),
      zipCode: Yup.mixed().optional(),
    }),
  ),
})
