export const sliceString = (
  stringItem: string | null,
  stringLength: number
) => {
  return stringItem !== null && stringItem.length > stringLength
    ? stringItem.slice(0, -stringItem.length / 2) + "..."
    : stringItem;
};
