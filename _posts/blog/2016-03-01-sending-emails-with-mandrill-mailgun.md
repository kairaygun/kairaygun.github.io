---
title: Sending Emails With Mandrill and Mailgun API
categories: blog
date: March 01, 2016
layout: blog-post
permalink: /blog/:title
---

I don't want to use Apple's <a href="https://developer.apple.com/library/ios/documentation/MessageUI/Reference/MFMailComposeViewController_class/">MFMailComposeViewController</a>, since this has a custom view controller that swerves away from my application's user interface. I want to send emails immediately with one press, similar to a newsletter, and not do it one by one. An alternate solution is Mailgun's API. I used Mandrill separately for the web version of the application.

<strong>What are APIs?</strong>

API stands for Application Program Interface.  When a company provides an API, they are opening up their development tools to other developers outside of their team.  Granted, these APIs will still have restrictions, since they often only provide niche tools and not the whole development environment used by their respective companies. Mandrill and Mailgun are APIs that follow the RESTful architecture; allowing applications to communicate between clients and servers under a set number of actions, such as GET, POST, PUT, and DELETE.

<strong>For example:</strong>
{% highlight javascript %}
{ 
    "users": 
    [
        {
            "id": 290,
            "name": "Creep",
            "email": "shwoopt87@email.com"
        },
        
    ]
}

{% endhighlight %}


Let’s say there’s a company that provides a list of individuals that have been arrested for unethical conduct near the area. I want access to this information that is provided in the JSON snippet above. The list is clearly very short—one person is only listed.

<h3>GET</h3>

The client, myself, will call data from the company’s API, asking for the data that they have made available. GET retrieves data from the server and shows it to the client.  

Response:

{% highlight javascript %}
{ 
    "users": 
    [
        {
            "id": 290,
            "name": "Creep",
            "age" : "40",
            "email": "shwoopt87@email.com"
        },

    ]
}

{% endhighlight %}


<h3>POST</h3>

Encased within this hypothetical scenario, a friend called me and mentioned that he knows someone that should also be added to the list. The name is Kujo, id is 990 , age is unknown, and email is arfarf@email.com. I will use POST to add this unlawful citizen. Great, now I have two users! POST appends data to the source.

Response:

{% highlight javascript %}
{ 
    "users": 
    [
        {
            "id": 290,
            "name": "Creep",
            "age" : "40",
            "email": "shwoopt87@email.com"
        },


        {
            "id": 990,
            "name": "Kujo",
            "age" : "unknown",
            "email": "arfarf@email.com"
        }
    ]
}

{% endhighlight %}


<h3>PUT</h3>

Ah yes! For some magical reason, it came to me in a dream, that Kujo’s age is 80, so I will use PUT to update the information I just posted. PUT updates existing data.

Response:

{% highlight javascript %}
{ 
    "users": 
    [
        {
            "id": 290,
            "name": "Creep",
            "age" : "40",
            "email": "shwoopt87@email.com"
        },


        {
            "id": 990,
            "name": "Kujo",
            "age" : "80",
            "email": "arfarf@email.com"
        }
    ]
}

{% endhighlight %}


<h3>DELETE</h3>

There was a mishap, and Kujo turns out to be a vicious dog, and not a human, and this list is only for people, so I will have to delete Kujo for now. DELETE removes data from the source. Thus, I am back again with my one-person list.

Response:

{% highlight javascript %}
{ 
    "users": 
    [
        {
            "id": 290,
            "name": "Creep",
            "age" : "40",
            "email": "shwoopt87@email.com"
        }
    ]
}

{% endhighlight %}


<h3>Mandrill and Mailgun API Overview:</h3>

<strong>Mandrill</strong>

Mandrill is an email delivery API by Mailchimp. The difference between Mailchimp and Mandrill is that Mailchimp is an external platform for sending out newsletters. On the other hand, integrating Mandrill into your application will allow for more customization when sending out emails without being limited to preformatted templates. I used Mandrill API to send emails via custom web forms.

<strong>Mailgun</strong>

Unlike Mandrill, I went the other route and used Mailgun for an iOS application. I wanted to make the same application twice in different platforms while trying two mailing APIs. One of the many beautiful aspects about iOS development is CocoaPods. As I was setting up Mailgun API and quickly did a search if a CocoaPod exists for Mailgun API, and lo and behold, it does exist!   

Both applications are functional. However, be cautious, the Mandrill API code I will be providing is purely in vanilla JavaScript, and does not contain a wrapper. In other words, your API key will be completely visible to the world if you host that web application online unless you embed your API Key in another file that acts as a wrapper for your JavaScript.


<h3>Setting Up: Mandrill</h3>

•	Sign-up for an account [here](https://mandrill.com/signup/)

•	Make sure you have a domain ready. Mandrill does not provide you with a free domain

•	Check your domain server settings via [Mandrill](https://mandrillapp.com/settings/) in sending-domains to pass all the DNS tests.

•	Create your API Key.  Go to settings → SMTP & API Info

•	Once that is looking pretty spiffy, then you are good to go!

•	Setup your HTML & CSS based on your design preference

•	Add this to your HTML header:

{% highlight html %}<script type="text/javascript" src="https://mandrillapp.com/api/docs/js/mandrill.js"></script>

{% endhighlight %}

•	Implement Mandrill's [message call](https://mandrillapp.com/api/docs/messages.JSON.html):

{% highlight javascript %}


// Create a function to log the response from Mandrill API
function response(obj) {
    $('#response').text(JSON.stringify(obj));
}

// Create an instance of the Mandrill class that takes your API key.
var m = new mandrill.Mandrill('yourapikeygoeshere');


// Create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"your domain email",
        "to":[{"email":"youremail@email.com"}],
        "subject": "hey this is through mandrill",
        "text": "whaaaddup!"
    }
};

// Create a function that takes in the parametrs for sending messages
function sendTheMail() {
    m.messages.send(params, function(res) {
        reponse(res);
    }, 
    function(err) {
        response(err);
    });
}

// Send that email!
sendTheMail();

{% endhighlight %}


<h3>Setting Up: Mailgun</h3>

•	Sign-up for Mailgun [first](https://mailgun.com/signup).

•   Access the dashboard and check for <strong>Domain Name</strong> under <strong>Your Sandbox Domain</strong>

•   Start-up your Xcode project in Objective-C

•   Install Mailgun [CocoaPod](https://cocoapods.org/pods/mailgun).

•   Import Mailgun header file into your project:

{% highlight objective-c %}

#import <mailgun/mailgun.h>

{% endhighlight %}

•   Add this Objective-C snippet to send email:

{% highlight objective-c %}

    Mailgun *mailgun = [Mailgun clientWithDomain:@"APIBaseURL" 
                                          apiKey:@"APIKey"];

    [mailgun sendMessageTo:@"insert email"
                      from:@"APIBaseURL"
                      body:@"insert message"];

{% endhighlight %}
