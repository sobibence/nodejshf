/**
 * Betolt egy fuggoseget az adatbazisbol
 */

module.exports = function requireOption(objectRepository, propertyName) {
  if (objectRepository && objectRepository[propertyName]) {
    return objectRepository[propertyName];
  }
  throw new TypeError(propertyName + ' required');
}
