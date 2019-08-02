const rolesPoints = {
  K: 5,
  N: 2,
  V: 1
};

const verifyKingSign = (currentRole, actualValue) => {
  return actualValue || currentRole === "K";
};

const isValidator = currentRole => {
  return currentRole === "V";
};

const calculatePoints = signatures => {
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

const getWinner = parties => {
  return parties.reduce((max, party) =>
    max.points > party.points ? max : party
  );
};

module.exports = { getWinner, calculatePoints };
