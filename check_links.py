# Install the requests library if you haven't already by running `pip install requests`.
# you can check dead link by running this command - `python check_links.py`.

import re
import requests

def check_links(readme_path):
    with open(readme_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all URLs in the README using a regular expression
    urls = re.findall(r'\bhttps?://[^\s()<>"\]]+', content)

    # Check each URL
    for url in urls:
        # Clean the URL to remove any trailing punctuation or characters
        cleaned_url = re.sub(r'[.,;:)\]]*$', '', url)

        try:
            # Follow redirects
            response = requests.head(cleaned_url, allow_redirects=True, timeout=10, headers={'User-Agent': 'Mozilla/5.0'})
            final_url = response.url

            if response.status_code >= 400:
                print(f"Dead link found: {url}")
            elif cleaned_url != final_url:
                print(f"Redirected link: {url} (redirects to {final_url})")

        except requests.ConnectionError:
            print(f"Error checking link {url}: Connection error")
        except requests.Timeout:
            print(f"Error checking link {url}: Connection timed out")
        except requests.RequestException as e:
            print(f"Error checking link {url}: {str(e)}")

if __name__ == "__main__":
    readme_file = "README.md"  # Update with README file path
    check_links(readme_file)
