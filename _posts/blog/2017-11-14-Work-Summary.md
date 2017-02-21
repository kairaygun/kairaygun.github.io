---
layout: post
title: Work Summary 11/14/2017
categories: blog
tags: standard
date: January 14, 2017
---

### Last worked
Jan 14, 2017

1:11 AM

### Summary:

After updating the partials, views, models, routes, along with the other shenanigans that were scrambled during  the migration, I was able to put it back in working order. I did not stop there and wanted to create the relationships between FoodSafetyQuestion and FoodSafetyAnswer.

Given errors after changing the values of the attributes, I looked up the cause and it was the syntax that I was using— it wasn’t saving directly to the database. i needed something that will update instance and the database. I was led to this website: http://www.davidverhasselt.com/set-attributes-in-activerecord/ and found a tiny cheat-sheet for these attribute updates, such as <code>User.update(1, name: "Rob”)</code>. Pretty neat.

### Left to do:

Flesh out the food safety method and check how many answers are logged by the user. Dive deeper into understanding the relationship between FoodSafetyQuestion and FoodSafetyAnswer. I don’t think it’s necessary to have a lot of answers per question because there should only be one answer per question. Instead of has_many maybe change it to one_to_one?

I also don’t like how some of the attributes are setup for FoodSafetyQuestion because some are repeating themselves. I can add a next_index to replace both next_num_yes and next_num_no. I also left out something important, which is the user’s answer! Unless I can create a new instance of FoodSafetyAnswer for each FoodSafetyQuestion and have that as the answer, and depending on the answer, I will show the results from each FoodSafetyQuestion (i.e. attributes from answer_no or answer_yes). 