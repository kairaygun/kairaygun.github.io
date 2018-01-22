---
title: Installing Firebase with iOS Swift
categories: blog
date: May 22, 2016
---

I think it's safe to assume that I will probably build another iOS app that needs Firebase down the line, so might as well document the installation process! Firebase is a cloud service for mobile and web applications. There are more options for web applications in terms of cloud service, but as for mobile, the choices aren't as vast. Before Firebase, I was using Parse, and <a href="http://techcrunch.com/2013/04/25/facebook-parse/">it was bought by Facebook</a>, so there goes that mobile-friendly cloud storage. 

Similar to what happened to Parse, Google bought Firebase. In succinct overview: Firebase provides an API that allows applications to connect to the database in real time. Their old website <a href="http://www.firebase.com">www.firebase.com</a> contains legacy documents that will no longer be updated. The current website is <a href="http://firebase.google.com/">firebase.google.com</a> so head over there. 

REQUIREMENTS: <a href="https://developer.apple.com/xcode/download/">Xcode</a>, <a href="https://guides.cocoapods.org/using/getting-started.html">CocoaPod</a>, and Google Account

Sign-in to your Gmail or Google account to access the Firebase dashboard.

Click the <em>GET STARTED FREE</em> button
<img width="50%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-00.png" />

Create a new project
<img width="50%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-01.png" />

Enter your project name and country region
<img width="50%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-02.png" />

The next page will bring you to your project dashboard--click the iOS option
<img width="50%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-03.png" />

We will minimize the Google window for now, and move over to a new project in Xcode. So fire up Xcode and start a new Xcode project in Swift. We want a single view application. After hitting next, you should see this window. Fill out your product name, organization name, and organization identifier.
<img width="70%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-08.png" />

Access your bundle identifier.
<img width="90%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-09.png" />

Your bundle identifier will default to a combined version of your organization identifier and product name joined together by a period. You can change your bundle identifier too. I changed mine to <em>testapplication</em>.
<img width="70%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-10.png" />  

Open up your browser window again, and it is now asking you to enter your bundle identifier. Copy the bundle identifer from  your Xcode project here.
<img width="50%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-04.png" />  

At this step, Google automatically downloads a GoogleService-info.plist for us. A plist is a structured text file that has our Firebase configurations. If you look into our Xcode project, we also have our local plist (Information Property List Files). To read more about plist, visit the <a href="https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html">Apple Documentation</a>.
<img width="50%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-05.png" />  

Let's go back to our Xcode project and add the plist into our project folder. Go to your Downloads directory and highlight GoogleService-info.plist. Drag this item into your project directory-- not under the blue but under the yellow folder like so. 
<img width="90%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-11.png" />  

We're almost there! Head back to the browser to finish up the rest of the requirements. The window displays information about installing Firebase with CocoaPod. Alright, here is where <em>things</em> may break. Let's go!
<img width="90%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-06.png" />  

Time to head over to our terminal. Go to your Xcode project's root directory. 
<img width="90%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-13.png" />  

Alright, it's time to initiate our pod. Enter this command:

{% highlight bash %}
	$ pod init
{% endhighlight %}

This will create a Podfile. Open up the Podfile and add Firebase:

{% highlight python %}
platform :ios, '9.0'

# Add the correct file path to your Xcode project
xcodeproj '/folder/folder/yourproject.xcodeproj'

target 'yourprojectTests' do
	use_frameworks!
	    
	pod 'Firebase'

	target 'yourprojectTests' do
	   inherit! :search_paths
	   # Pods for testing
	end

	target 'yourprojectTests' do
	   inherit! :search_paths
	   # Pods for testing
	end
end
{% endhighlight %}

Completely close your Xcode project so hit <strong>cmd</strong> + <strong>q</strong>. Now, at your terminal install the pod:

{% highlight bash %}
	$ pod install
{% endhighlight %}

In your root directory you should see a new item <strong>"yourprojectname".xcworkspace</strong>. Open that file and you're back at Xcode again, but this time around you now have Firebase installed.</p>
<img width="90%" style="display: block; margin-top: 5px" src="/assets/blogassets/052216/052216-14.png" />  

Before we import Firebase into any class files, let's clean and build our project. To clean: hold <strong>cmd</strong> + <strong>shift</strong> then click <strong>k</strong>. Great, it's clean, now onto the build: hold <strong>cmd</strong> and click <strong>b</strong>. Under your project folder, pop over to <strong>AppDelegate.swift</strong>. Below UIKit, import Firebase and within the function didFinishingLaunchingWithOptions initiate and configure the default Firebase application:

{% highlight swift %}
import UIKit
import Firebase

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        // Override point for customization after application launch.
        FIRApp.configure()
        return true
    }
{% endhighlight %}

Welp, that is it for installing a backend with Firebase in your iOS Swift application. Later on, we will use Firebase to build our own zombie photo album. Here is a <a href="https://firebase.google.com/docs/">link</a> if you want to read more about Firebase.

Cheers!
