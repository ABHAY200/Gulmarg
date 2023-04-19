export const parseErrorMessage = (obj?: {data: {error: string}} | any) =>
  obj?.data?.error || 'Something went wrong. Please try again.';

export const uniqueObjectArray = (array, key) =>
  Array.from(new Set(array.map(a => a[key]))).map(itemKey =>
    array.find(a => a[key] === itemKey),
  );
