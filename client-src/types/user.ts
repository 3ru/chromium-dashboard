export interface User {
  email: string;
  can_create_feature: boolean;
  can_comment: boolean;
  can_edit_all: boolean;
  approvable_gate_types?: number[];
  editable_features: number[];
  is_admin: boolean;
  paired_user?: User;
}


