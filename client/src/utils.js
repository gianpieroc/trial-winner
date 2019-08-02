const rolesPoints = {
  K: 5,
  N: 2,
  V: 1
};

export const generateParty = name => ({
  name,
  signatures: "",
  points: 0
});

const verifyKingSign = (currentRole, actualValue) => {
  return actualValue || currentRole === "K";
};

const isValidator = currentRole => {
  return currentRole === "V";
};

export const validateCorrectRoles = value => {
  const lastSignatureRole = value[value.length - 1];
  if (
    lastSignatureRole !== "K" &&
    lastSignatureRole !== "N" &&
    lastSignatureRole !== "V"
  ) {
    return value.slice(0, -1);
  }
  return value;
};

export const calculatePoints = signatures => {
  let hasSignedByKing = false;

  const points = signatures
    .split("")
    .reduce((rolePointsCounter, currentRole) => {
      const currentRolePoints = rolesPoints[currentRole] || 0;
      hasSignedByKing = verifyKingSign(currentRole, hasSignedByKing);
      return (rolePointsCounter += currentRolePoints);
    }, 0);

  const pointsReducedIfKingHasSigned = signatures
    .split("")
    .reduce((currentPoints, currentRole) => {
      if (hasSignedByKing && isValidator(currentRole)) {
        return currentPoints - 1;
      }
      return currentPoints;
    }, points);

  return pointsReducedIfKingHasSigned;
};
