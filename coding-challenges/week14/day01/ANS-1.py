"""
Tiny URL:
        A free URL shortening service that produces short, memorable alias URLs for
        existing web pages. It enables users to enter a long URL and add a custom parameter
        to create the shortened URL. This URL then redirects to the web page from the
        original URL. The shortened URL never expires, so as long as the destination URL is
        the same, the shortened version will always be functional.

        These URLs are universally unique. These kinds of URLs are most commonly used in
        email campaigns, social media posts, print advertisements, and other marketing efforts
        where an easy-to-remember URL (or one with limited characters) is beneficial for
        driving traffic to a specific page. It’s also helpful for adding UTM parameters to a link
        without making them obvious to the audience.

        In addition to Tiny URL, other examples of URL shortening services include Bit.ly,
        Rebrandly, Owl.ly, Cut.ly, and Shorte.ST. Unlike some of its competitors, Tiny URL
        has always provided all of its features for free. Some social media platforms like
        Twitter and LinkedIn also have inherent URL shortening services, but users must
        create an account to draft a post and access those features.
        
        Software designing is more about “thinking” and “asking questions”. Get specific
        and minimum requirements for the project. When questioned about how to make a
        tiny URL, find out the requirements for the short URL.

        Few things that we should ask them is:

        1. MVP (Minimal Viable Project):
                        a. How many users do I have to serve? Asking about the scale of the project.
                        b. Do the system login / sign-up? Mostly, interviewer will not ask for this.
                        c. What is Read-to-Write ratio? (1:10, for every 1 write you have 10 reads)
                        d. Availability is important than consistency, highly available.
                        e. If some gives a big URL, the system should give short URL
                        f. Necessity of Analytics – to know how many people are visiting, how many
                        redirects, how many requests are failing and many such details can be
                        found. This is done by Analyst / Product Managers.
                        g. The above list of requirements is called Functional and Non-Functional
                        Requirements.

        2. Calculations:
                        a. The interview says 1 billion users, (1 Billion = 1010) are to be served. 
                           If we have 1 billion users are coming on daily basis, then we would have 
                           1,157,40 users / second. As per the read to write ratio (1:10), we would
                           have 11,574 would be writer and 104,166 would be readers. If interviewer 
                           says on an average, one computer can handle 200 users, then we need 
                           approximately 6 computers for master and the same number for
                           slaves. These are called back of the envelop calculations.
                        b. For sudden increase in the users, then we have to calculate for the number
                           of servers in addition as back up to handle the huge number of loads.
                        c. Storage Calculation: Now the length of the URL is 1000, but we are
                           giving Tiny URL. The original length of URL would be around 1000 bytes
                           (assume) so for Tiny URL, we have to 20 bytes. So, the total space we
                           need would be 1000 bytes + 20 bytes = 1020 bytes = 1 MB (approx.) for 1
                           sec, it would write 11,574, so for 1 second, the storage would be 11,574 X
                           1MB. And for one day, we would need 11574 X 1MB X 24 X 60 X 60. If we
                           are to run this website for 5 yrs. then we need 11574 X 1MB X 24 X 60 X 60
                           X 5 MB of storage capacity.

        3. High Level Picture:
                        a. The client in his browser hit Tiny URL. In the box, he will
                           have two options, one is a Tiny URL and the other is new URL. 
                        b. The Tiny URL will check the mapping if the Tiny URL is already 
                           mapped to a particular website previously.
                        c. This is the high-level view of the system.


        They basically deal with issues like:
        
         Portability
         Security
         Maintainability
         Reliability
         Scalability
         Performance
         Reusability
         Flexibility
"""

# Python3 code for above approach 
def idToShortURL(id): 
	map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	shortURL = "" 
	
	# for each digit find the base 62 
	while(id > 0): 
		shortURL += map[id % 62] 
		id //= 62

	# reversing the shortURL 
	return shortURL[len(shortURL): : -1] 

def shortURLToId(shortURL): 
	id = 0
	for i in shortURL: 
		val_i = ord(i) 
		if(val_i >= ord('a') and val_i <= ord('z')): 
			id = id*62 + val_i - ord('a') 
		elif(val_i >= ord('A') and val_i <= ord('Z')): 
			id = id*62 + val_i - ord('Z') + 26
		else: 
			id = id*62 + val_i - ord('0') + 52
	return id

if (__name__ == "__main__"): 
	id = 12345
	shortURL = idToShortURL(id) 
	print("Short URL from 12345 is : ", shortURL) 
	print("ID from", shortURL, "is : ", shortURLToId(shortURL)) 
