export interface inputInterface {
  onChange?: () => void;
  onChangeText: () => void;
  defaultValue?: string | null;
  secureTextEntry?: boolean | undefined;
  placeholder?: string | null;
}

export interface passwordInputInterface {
  onChange?: (text: string) => void;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  defaultValue?: string | null;
  placeholder: string | null;
  statusIcon: boolean | undefined;
}

export interface buttonConfirmInterface {
  onPress: () => void;
  titleButton: string | null;
}

export interface buttonNextInterface {
  onPress: () => void;
  titleButton: string | null;
  backgroundColor: string | null;
  borderWith: string | null;
  textColor: string | null;
}

export interface loginInputBoxInterface {
  inputPassword?: boolean | undefined;
  onChangeText?: (text: string) => void;
  value?: string | null;
  defaultValue: string | null;
  placeholder: string | null;
  requireImage: any;
  onPress?: () => void;
  statusShowPass?: boolean | undefined;
  onBlur?: () => void;
}

export interface filterSearchInterface {
  isVisible: boolean | undefined;
  onPress: () => void;
  onBackdropPress: () => void;
  onChangeTextEmail: (text: string) => void;
  onChangeTextPhone: (text: string) => void;
  defaultValueEmail: string;
  defaultValuePhone: string;
}

// document of company

export interface ParamsGetAllDocumentCompany {
  page: number;
  size: number;
  sorts?: Record<string, string>;
  nodeId: string;
  parentId: string;
  nodeType: string;
  keyword?: string;
  dateTo?: string;
  dateFrom?: string;
  documentTypeIdList?: string[];
  statusList?: Array<string>;
}

export interface InterfaceDataNodeTree {
  id: string;
  name: string;
  parentId: string;
  type: string;
  subTrees?: Array<any>;
}

export interface InterfaceCompanyDocument {
  code: string;
  createdDate: string;
  documentId: string;
  documentTypeName: string;
  managedUserFullName: string;
  managedUserId: string;
  name: string;
  namePartner: string;
  status: string;
  unitId: string;
  unitName: string;
}
