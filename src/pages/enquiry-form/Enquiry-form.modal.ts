export interface IEnquiry {
  firstName: string
  lastName: string
  phoneNo: string
  email: string
  duration: string
  referal: string
  noOfPeople: string
  roomChoice: string
  location: string
  building: string
}

export interface IPostEnquiry {
  address: string
  buildings: number
  description: string
  email: string
  enquiryStatus: string
  id: number
  locations: number
  name: string
  numberOfPeople: number
  phoneNumber: string
  zipCode: string
}
