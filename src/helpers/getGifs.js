export const getGifs = async (category) => {
 
  let gifs;

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=yz069TFcu2US6CEJP5DH6AVTKlCiNLCi`;

  try {
    
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(
        `Status: ${resp.status}, ${
          resp.statusText ? resp.statusText : "What's wrong?"
        }`
      );
    }

    const { data } = await resp.json();

    gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      };
    });
  } catch (err) {
    console.log(err);
  }

  return gifs;
};
