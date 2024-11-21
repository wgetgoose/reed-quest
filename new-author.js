const fetch = require('node-fetch');

const createAuthorProfile = async (API, SITEID, AUTHORNAME, AUTHORBIO) => {
  const apiKey = API;  // Replace with your actual API key
  const siteId = SITEID; // Replace with your Squarespace Site ID
  const endpoint = `https://api.squarespace.com/1.0/commerce/authors`; // Author endpoint

  const authorData = {
    name: AUTHORNAME, // Replace with the author's name
    bio: AUTHORBIO, // Replace with the author's bio
    // do authors have websites? prob not lol
    // websiteUrl: 'https://example.com', // Replace with the author's website URL (optional)
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authorData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Author created successfully:', result);
  } catch (error) {
    console.error('Error creating author profile:', error);
  }
};

createAuthorProfile();