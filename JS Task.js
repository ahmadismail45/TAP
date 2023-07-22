function getAllUniqueTags(mediaData) {
    // Create an empty object to store tags as keys for efficient lookup
    const uniqueTagsMap = {};
  
    // Loop through the media data and extract tags
    for (const media of mediaData) {
      if (media.tags && media.tags.length > 0) {
        for (const tag of media.tags) {
          // Use the tag as a key in the object to ensure uniqueness
          uniqueTagsMap[tag] = true;
        }
      }
    }
  
    // Extract the keys (tags) from the object to get the final unique tags array
    const uniqueTags = Object.keys(uniqueTagsMap);
  
    return uniqueTags;
  }

const mediaData = [
    { title: "Show 1", tags: ["action", "drama"] },
    { title: "Show 2", tags: ["comedy", "romance"] },
    { title: "Show 3", tags: ["action", "adventure"] },
    { title: "Show 4", tags: ["drama", "crime"] },
    { title: "Show 5", tags: ["comedy", "action"] },
  ];
  
  const uniqueTags = getAllUniqueTags(mediaData);
  console.log(uniqueTags);