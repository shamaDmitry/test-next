const fetcher = async (input: RequestInfo | URL) => {
  try {
    const res = await fetch(input);

    return await res.json();
  } catch (error) {
    throw error;
  }
};

export default fetcher;
