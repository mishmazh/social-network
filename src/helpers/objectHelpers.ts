export const updateObjectInArray = (
  items: any[],
  itemId: number,
  objectName: string,
  newObjectValue: {}
) => {
  return items.map((item) => {
    if (item[objectName] === itemId) {
      return { ...item, ...newObjectValue };
    }

    return item;
  });
};
