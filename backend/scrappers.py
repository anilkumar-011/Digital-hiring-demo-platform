import requests
from bs4 import BeautifulSoup
import re

def leetcode_scrapper(url):
    leetcode_stats = []
    try:
        element_class = "lc-xl:max-w-[228px]"
        mt_class = "lc-md:flex-row lc-md:items-center lc-md:space-y-0 flex flex-col flex-wrap space-y-2"  # Replace with the class of the outer div
        inner_div_class = "mr-4.5 space-x-1"  # Replace with the class of the inner div
        # Send an HTTP GET request to the URL
        response = requests.get(url)

        # Check if the request was successful
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')

            # Find the element with the specified class
            target_element = soup.find('div', class_=element_class)
            # Find the div with the specified class (mt_class)
            mt_div = soup.find('div', class_=mt_class)

            if target_element:
                # Extract and print all text within the target element
                element_text = target_element.get_text()
                leetcode_stats.append(element_text.split("%"))
            else:
                print(f"No element with class '{element_class}' found on the page.")

            
            if mt_div:
                # Find the inner div with the specified class (inner_div_class)
                inner_div = mt_div.find('div', class_=inner_div_class)

                if inner_div:
                    # Extract and print the text within the inner div
                    inner_text = inner_div.get_text(strip=True).replace("Total active days:","")
                    leetcode_stats.append(inner_text)
                else:
                    print(f"No inner div with class '{inner_div_class}' found inside div with class '{mt_class}'.")
            else:
                print(f"No div with class '{mt_class}' found on the page.")

        else:
            print(f"Failed to retrieve content. Status code: {response.status_code}")


        return leetcode_stats

    except Exception as e:
        print(f"An error occurred: {str(e)}")

    return leetcode_stats

def github_scrapper(url):
    github_stats = []
    try:
        # Send an HTTP GET request to the URL
        response = requests.get(url)

        # Check if the request was successful
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')

            # Extract and print the username from the specified element
            username_element = soup.find('span', class_='p-name vcard-fullname d-block overflow-hidden')

            if username_element:
                username = username_element.get_text(strip=True)
            else:
                username = "Not found"
            github_stats.append(username)

            # Find the div with the class "js-yearly-contributions"
            yearly_contributions_div = soup.find('div', class_='js-yearly-contributions')

            if yearly_contributions_div:
                # Find the first h2 element within the div
                h2_element = yearly_contributions_div.find('h2')

                if h2_element:
                    text_content = h2_element.get_text(strip=True)

                    contribution = ""
                    for i in text_content:
                      if i in "0123456789":
                        contribution += i
                      else:
                        break
                else:
                  contribution = "not found"

                github_stats.append(contribution)

                return github_stats

        else:
            print(f"Failed to retrieve content. Status code: {response.status_code}")
            github_stats.append(0)

    except Exception as e:
        print(f"An error occurred: {str(e)}")

    return github_stats

def activate_scrappers(github_link, leetcode_link):
    github_stats = github_scrapper(github_link)
    leetcode_stats = leetcode_scrapper(leetcode_link)

    return(github_stats + leetcode_stats)

if __name__ == "__main__":
    # Provide the URL of the website you want to scrape
    # github_stats = github_scrapper("https://github.com/sreekanth726")
    # leetcode_stats = leetcode_scrapper("https://leetcode.com/2010040084__pavan/")

    # print(github_stats, leetcode_stats)
    print()