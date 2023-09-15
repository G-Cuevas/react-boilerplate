export const getItems = async (item) => {
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(
    item
  )}&limit=20`;
  const resp = await fetch(url);
  const data = await resp.json();

  const items = data.results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      address: item.address.state_name,
      permalink: item.permalink,
    };
  });

  return items;
};
