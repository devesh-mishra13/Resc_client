const fetchData = async (query: string): Promise<string> => {
  try {
    const response = await fetch('https://dc75-34-74-27-4.ngrok-free.app/generate_report', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain', // Sending plain text
      },
      body: query, // Directly send the string
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text(); // Expect plain text response
    console.log('Received data:', data);
    return data;
  } catch (error) {
    console.error('Error:');
    throw error;
  }
};

export default fetchData;
