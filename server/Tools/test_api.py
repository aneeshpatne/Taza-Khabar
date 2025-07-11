import requests
import json
import asyncio

# Example usage of the Tool API
async def test_tool_api():
    base_url = "http://localhost:8000"
    
    # Test data
    test_query = {
        "query": "latest technology news",
        "num_results": 5
    }
    
    try:
        # Make request to the /tool endpoint
        response = requests.post(f"{base_url}/tool", json=test_query)
        
        if response.status_code == 200:
            result = response.json()
            print("✅ API Request Successful!")
            print(f"Query: {result['query']}")
            print(f"Found {len(result['search_results']['links'])} links")
            print(f"Scraped {len(result['scraped_data'])} pages")
            print("\nFirst scraped result:")
            if result['scraped_data']:
                first_result = result['scraped_data'][0]
                print(f"  URL: {first_result['url']}")
                print(f"  Title: {first_result.get('title', 'N/A')}")
                print(f"  Success: {first_result['success']}")
        else:
            print(f"❌ API Request Failed: {response.status_code}")
            print(response.text)
            
    except requests.exceptions.ConnectionError:
        print("❌ Connection Error: Make sure the API server is running on http://localhost:8000")
    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    asyncio.run(test_tool_api())
