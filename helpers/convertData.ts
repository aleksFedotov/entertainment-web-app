const convertData = (doc: any) => {
  const convertedData = doc.toObject();
  convertedData._id = convertedData._id.toString();
  return convertedData;
};

export default convertData;
