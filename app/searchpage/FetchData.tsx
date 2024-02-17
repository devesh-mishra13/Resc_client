const fetchData = async (query:string,n_words:string) => {
    try {
      const response = await fetch('http://localhost:8000/summarizer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query , n_words }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Received data:', data); 
      return data;
    } catch (error) {
    //   console.error('Error:', error.message);
      throw error;
    }
  };
  
  export default fetchData;
  