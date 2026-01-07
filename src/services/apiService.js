const API_BASE_URL = 'https://api.api-ninjas.com/v1/textsimilarity';
const API_KEY = process.env.REACT_APP_API_NINJAS_KEY;

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export const calculateSimilarity = async (text1, text2) => {
  if (!API_KEY) {
    throw new ApiError('API key is not configured. Please add REACT_APP_API_NINJAS_KEY to your .env file', 500);
  }

  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text_1: text1,
        text_2: text2
      })
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new ApiError('Invalid API key. Please check your configuration.', 401);
      }
      if (response.status === 429) {
        throw new ApiError('Rate limit exceeded. Please try again later.', 429);
      }
      if (response.status === 404) {
        throw new ApiError('API endpoint not found. Please verify your API subscription.', 404);
      }
      throw new ApiError(`API request failed with status ${response.status}`, response.status);
    }

    const data = await response.json();
    
    if (typeof data.similarity !== 'number') {
      throw new ApiError('Invalid response format from API', 500);
    }

    return {
      similarity: data.similarity,
      score: Math.round(data.similarity * 100)
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Network error. Please check your connection and try again.', 0);
  }
};