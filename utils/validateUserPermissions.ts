type User = {
  permissions: string[],
  roles: string[]
}

type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
}

export function validateUserPermissions({ 
  user,
  permissions, 
  roles
}: ValidateUserPermissionsParams) {
  if (permissions?.length > 0) {
    const hasSomePermissions = permissions?.some(permission => {
      return user.permissions?.includes(permission);
    });

    if (!hasSomePermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasSomeRoles = roles?.some(role => {
      return user.roles?.includes(role);
    });

    if (!hasSomeRoles) {
      return false;
    }
  }

  return true;
}