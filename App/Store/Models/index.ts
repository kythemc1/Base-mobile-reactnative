export interface IAuthState {
    isLogged: boolean;
    token: string | null;
    refreshToken: string | null;
    refreshTokenExpiredDate: number | null;
    type: string | null;
}

export interface IUserState {
  id: number | null;
  address: string | null;
  taxCodeCompany: string | null;
  avatar: string | null;
  birthday: Date | null;
  firstName: string | null;
  gender: string | null;
  email: string | null;
  fullNameUser: string | null;
  status: string | null;
  username: string | null;
  showAlertRecovery: boolean | null;
  showAlertSignIn: boolean | null;
  showAlertSignIn5: boolean | null;
  user_keycloak_id: string | null;
  showPasswordnotmatch: boolean | null;
  showPassworderror: boolean | null;
}

export interface GetCustomerInterface {
  id: string | null;
  name: string | null;
  certificateNo: string | null;
  taxCode: string | null;
  certificateOrTaxCode: string | null;
  type: string | null;
  address: string | null;
  email: string | null;
  phone: string | null;
  userCreatedName: string | null;
}

export interface ListCustomerInterface {
  idCustomer: string | null;
  nameCustomer: string | null;
  numberPapersCustomer: string | null;
  typeCustomer: string | null;
  adressCustomer: string | null;
  emailCustomer: string | null;
  phoneNumberCustomer: string | null;
  createPerson: string | null;
}

export interface Filter {
  page: number | null;
  size: number | null;
  sorts: {} | undefined;
  customerType?: string | null;
  email?: string | null;
  phone?: string | null;
  keyword?: string | null;
  sort?: string | null;
  usersCreated: any;
}

export interface ParamsCreator {
  filter: string | null;
  page: number | null;
  size: number | null;
}

export interface Creator {
  isLoading: boolean | undefined;
  error: string | null;
  listCreator: [] | undefined;
  creator: any;
  valueCreator: [] | undefined;
  valueDropdownCreator: string | null;
  isFocusCreator: boolean | undefined;
}

export interface CustomerInterface {
  customer: any;
  listCustomers: [];
  valueCustomer: any;
  isLoading: boolean;
  error: string;
  valueDropdownCustomer: string;
  isFocusCustomer: boolean;
  totalPages: number;
  listSearchCustomer: [];
  loadingPagination: boolean;
}

export interface GetCreatorInterface {
  userId: string | null;
  username: string | null;
  email: string | null;
  fullName: string | null;
  phoneNumber: string | null;
  type: string | null;
  branchId: string | null;
  companyId: string | null;
  position: null;
  mainDepartment: null;
  orderDepartment: null;
  orderUser: null;
}

export interface NotificationInterface {
  type: string;
  content: string;
  userId: string;
  notificationId: string;
  title: string;
  dataId: any | null;
  hasRead: boolean;
  createTime: string;
}

export interface InitialNotificationInterface {
  listNotification: [];
  isLoading: boolean;
  isError: string;
  deviceId: string;
  uniqueId: string;
}

export interface ParamsNotification {
  page: number;
  size: number;
  sorts: {};
}

//  models document
export interface ParamsMyDocument {
  page: number;
  size: number;
  status?: string;
  sorts?: any;
  keyword?: string;
  documentTypeIds?: any;
  dateTo?: string;
  dateFrom?: string;
}

export interface MyDocumentInterface {
  documentId: string;
  name: string;
  code: string;
  documentTypeName: string;
  emailPartner: string;
  namePartner: string;
  createdDate: string;
  status: string;
}

export interface ListMyDocumentInterface {
  contractingParties: string;
  createdDate: string;
  documentCode: string;
  documentId: string;
  documentName: string;
  documentTypeName: string;
  emailPartner: string;
  status: number;
  imgDocument: string;
}

/**NOTE**/
// documentType Interface
export interface DocumentTypeInterface {
  documentTypeId: string;
  code: string;
  name: string;
  description: string;
  companyId: string;
  status: string;
  version: number;
}
export interface AmountTextInterface {
    processingDocumentNumber : number,
    expireDocumentNumber: number,
    doneDocumentNumber: number,
    manageDocumentNumber: number,

}

export interface localUser {
  userName: string,
  password: string
}
