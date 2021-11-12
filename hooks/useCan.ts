import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
}

export function useCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  if (permissions?.length > 0) {
    const hasSomePermissions = permissions.some(permission => {
      return user.permissions.includes(permission);
    });

    if (!hasSomePermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasSomeRoles = roles.some(role => {
      return user.roles.includes(role);
    });

    if (!hasSomeRoles) {
      return false;
    }
  }

  return true;
}