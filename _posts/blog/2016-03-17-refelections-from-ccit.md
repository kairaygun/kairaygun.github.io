---
title: Reflections from the Underground Columbia Web Development Lair
categories: blog
date: March 17, 2016
--- 

One week from now, it will be March 25th, which marks the day last year when I submitted my application to Columbia College Information Technology (CCIT). Before interning at CCIT, I was roughly prototyping static websites and CMS (content management systems) were foreign; handling the bare-bones functionality of WordPress was the extent of my knoweldge in CMS. CCIT's development stack is wrapped around Drupal, an open-source CMS. When I thought of Drupal then, I rememeber words like <em>open-source</em> and <em>CMS</em> that hoisted a sense of caliber, but these are merely technical jargon and nothing more. Instilling prestige in software or culture is unheatlhy, and I'm glad I broke this pattern of thought before it broke me down. Having said that, the experiece I had at CCIT was irreplaceable and valuable.

<strong>Web Development Skills Before CCIT: </strong>  
HTML, CSS, JavaScript, jQuery, and Jekyll  

<strong>Web Development Skills After CCIT: </strong>  
HTML, CSS, JavaScript, jQuery, Jekyll, Drupal, PHP, phpMyAdmin, and Vagrant 

<strong>Summer 2015 Projects:</strong>

•	Redesign and Implement Columbia Core Website 

•	Improve Bill Estimator’s Loan Input in Columbia’s Financial Aid website

•	Generate Columbia College Fall 2015 Web Pages  

In the second week of June 2015, I was tasked with redesigning Columbia University’s Core website. This was mildly intimidating. Templating designs in Drupal, and Drupal in general flustered me. I did not know where to start. My head felt like it was being deep-fried into oblivion. Onboarding in a Drupal stack consisted of setting-up a vagrant box and locally developing within that space. It took me two weeks until I started feeling <em>okay</em> with Drupal. And when I did not feel comfortable, I asked questions.   

The hardest part was admitting that I did not know what I was doing. I signed-up for an internship that posits a place for learning, hence asking questions should be expected, yet I had difficulty with inquring for assistance whenever I was stuck or lost. I tried to save face but that only brought more anxiety. What is more important: your ego or you? Waiting for a premonition to a solution is not going to happen. I didn't have a Nostradamus excerpt to all the bugs I have to fix. I reached a breaking point, and from there on, I discovered how to embrace humility. I am grateful that my boss, along with co-workers answered my questions with care and concern. 

Generating Columbia College Today (CCT) web pages consisted of referencing a completed InDesign template for that semester’s magazine. I had to match the structure, or the look-and-feel of the article in PDF, and re-create the post online. This experience taught me the nitpicky nature of clients; a letter that is not bolded or italicized is immediately marked as a new ticket. 

Along with publishing CCT web pages, I completed the loan input for Columbia’s Financial Aid website right before the fall semester started. This was a pleasant introduction to refactoring another developer’s code. There were several moving parts, and I was slightly petrified at the thought that if I end up programming the wrong calculations, then a student would be duped! So that was another lesson in carefully checking for edge cases, especially when you’re dealing with input from students and parents estimating their yearly tuition. 

As for the redesign of Columbia College’s Core website, I did not finish it, so that project carried over in the fall semester.

<strong>Fall 2015 Projects: </strong>

•	Redesign and Implement Columbia Core Website 

•	Generate Columbia College Winter 2015-2016 Web Pages  

•	Redesign Parents and Family Programs Website

•	Visitor Center Wireframes

•	Carousel Images 

The first project that I tackled this semester was redesigning the Columbia Core website. I finished all my prototypes in JS Bin, and I submitted my branch. There were a few kinks that caused some content to disappear in specific author pages, and that took me almost two weeks to establish the root of its vanishing. The design was not used, but it did give me solid foundation on using Sass and styling multiple Drupal webpages. 

Shortly after, I asked about an opened ticket concerning a carousel image-slideshow, and five minutes later, I was given that ticket. jQuery’s built-in functionality made it manageable to create a custom carousel that changed based on automation. I placed a timer that clicked the next index, which loaded up the following image in the queue. I estimated that it would only take me a couple of days and it didn’t.

Columbia College also wanted a mobile ready Visitor Center webpage, and I mocked-up a few wireframes adhering to Columbia University’s color scheme—baby blue, white, and gray. Columbia’s shade of blue reminds me of soft, palpable, items, such as facial cotton or blanket fleece—I’m not really a big fan of it.

Finally, I was given my second redesign task. Columbia College has a Parents and Family Program website, and it was only available to developers at the time. It needed a sticky header, responsive content collection, and a few adjustments in extending div heights. The size changes in the footer were effortlessly done in one day. The sticky navigation bar was a little tricky. I did meet the end goal, and when I consulted my boss with this solution, he recommended doing it in another way, and he briefly showed me that instead of directly changing each affected component in the style sheets, a div encasement and tagging that div with a class would make for a cleaner and effective implementation. I followed up with his suggestions, and I was able to replicate the work I did in one week in one day. 

<strong>Winter 2016 </strong>

•	Redesign Parents and Family Programs Website

Around this time, I had the aha moment. Everything in Drupal all of the sudden made sense, even when I was introduced to new features or setup. Granted, I did understand and knew how to navigate around Drupal, but Drupal itself did not jive with me until that light bulb clicked. 

During winter recess, I continued working on the Parents and Family Programs website. My boss advised that I should use Masonry, a JavaScript library, to display the current list content in a grid structure. I prototyped a quick test to check Masonry’s features, and I was sold. I converted the content to a tumblr-like grid, which accustomed to various media queries. At first, this task seemed overwhelming but as I kept developing, the task became less and less daunting.

<strong> Spring 2016 </strong>

•	Migrate CCIT Website from Drupal 6 to 7

This was my final contribution to CCIT, and it was by far the most challenging. I made a new host in my Vagrant box, assessed and updated modules for Drupal 7, scraped nodes off a database, matched the correct URL file paths to its rightful image source, and dived into Drupal like never before. The process was brutal and hair pulling, but it was equally cathartic and satisfying. On my last day, I spent it on documenting the protocol for migrating CCIT from Drupal 6 to 7, and it was fitting. 

