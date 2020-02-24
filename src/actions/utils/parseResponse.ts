export const parseResponse = (
  response: any,
  dataField: string,
  storeField: string
) => {
  const {
    data: { items },
    data: {
      includes: { Asset: images },
    },
  } = response;

  const byId = [];
  const content = {};

  items.forEach(el => {
    const photo = images.filter(
      photo => photo.sys.id === el.fields.photo.sys.id
    )[0].fields.file.url;
    const id = el.sys.id;
    const data = el.fields[dataField];
    byId.push(id);
    content[id] = { ...data, photo, id };
  });

  return { byId, [storeField]: content };
};
