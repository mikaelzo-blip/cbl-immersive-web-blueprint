export interface LegalDocumentItem {
  id: string;
  title: string;
  category: string;
  description: string;
  availableOnRequest: boolean;
}

export interface K3ProcedureStep {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TechnicianQualification {
  id: string;
  area: string;
  description: string;
}

export interface VendorDocDownload {
  title: string;
  fileName: string;
  fileSize?: string;
  available: boolean;
  note: string;
}
