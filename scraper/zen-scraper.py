#!/usr/bin/python
from bs4 import BeautifulSoup
import requests
import sys
import time
sys.dont_write_bytecode = True
import ps_db

main_url = "http://deoxy.org"

def base_req(url):
    time.sleep(2)
    hasPassed = False
    while not hasPassed:
        try:
            response = requests.get(url)
            hasPassed = True
        except:
            print("[-] Connection Failed Waiting To Retry")
            time.sleep(5)
    return BeautifulSoup(response.content, "lxml")

def scrape_for_que(url):
    result = []
    doc = base_req(url)
    outer_layer = doc.find_all("table")[1]
    inner_layer = outer_layer.find_all("a")

    for i in range(0, len(inner_layer)):
        if(i > 7):
            result.append(inner_layer[i]["href"])

    return result

def scrape_for_story(url):
    doc = base_req(url)
    title_div = doc.find("div", {"id": "koan_title"})
    title = title_div.text

    text_outer = doc.find("div", {"id": "koan_body"})
    text_cont = text_outer.find_all("p")
    text = ""
    for p_tag in text_cont:
        text += p_tag.text + "\n"
    return {"title": title, "text": text}

def main():
    print("[+] Starting Zen Scraper")
    print("[+] Generating Que")
    que =  scrape_for_que(main_url + "/koan")

    print("[+] Iterating Through Que")
    for story in que:
        data = scrape_for_story(main_url + story)
        ps_db.add_story(data["title"], data["text"])
    print("[+] Que Complete Data Is Now Stored")

if __name__ == "__main__":
    main()
