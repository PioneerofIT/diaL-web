

created() {
    this.fetchAssetData();
  }



async fetchAssetData() {
    this.loading = true;
    this.error = null;
    try {
      const API_URL = `https://p3j7hfgon0.execute-api.us-west-2.amazonaws.com/`;
     
      const response = await axios.get(API_URL);
      this.data = response.data;
    } catch (error) {
      console.error('Error fetching asset data:', error);
    } finally {
      this.loading = false;
    }
  }


