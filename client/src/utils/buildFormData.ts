export default function buildFormData(data: object): FormData {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'number') {
      formData.append(key, value.toString());
    } else if (typeof value === 'string') {
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((element) => formData.append(`${key}[]`, element));
    }
  });

  return formData;
}