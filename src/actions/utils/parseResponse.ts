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

    let gallery = el.fields.gallery ? el.fields.gallery : [];
    const galleryIds = gallery.map(galleryItem => galleryItem.sys.id);
    gallery = images
      .filter(photo => galleryIds.includes(photo.sys.id))
      .map(el => el.fields.file.url);

    const id = el.sys.id;
    const data = el.fields[dataField];
    byId.push(id);
    content[id] = { ...data, photo, id, gallery };
  });

  return { byId, [storeField]: content };
};
