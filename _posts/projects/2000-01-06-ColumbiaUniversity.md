---
title: Columbia
categories: projects
layout: project-post
permalink: /projects/:title
img-preview: /assets/images/projects/columbia/preview.png
---

<h2>Columbia University: Computational Design Lab - National Hurricane Center Home Page Redesign</h2>

<span class="tools">Figma, React, Python, Mixpanel</span>

<div class="post-section">
	<h3>Role</h3>
	<p class="role">Research, Interviews, Survey, Thematic Analysis, Ideation, Sketching, Heuristics, Prototyping, Designing, Evaluation, Testing, and Implementing</p>
</div>

<div class="post-section">
	<h3>Background</h3>
	<p>
		While working on my thesis, my advisor, Professor Robert Soden (http://robertsoden.io/) recruited me as a researcher where I collaborated with a team of sociologists, product designers, and computer scientists between Columbia University, University of Washington: Seattle, and University of Colorado: Boulder to assess a website redesign for the National Hurricane Center. As a result, we presented 18 design opportunities to the National Hurricane Center, and one of the opportunities they picked is designing for user localization, which is the focus of my thesis, “Exploring User Localization as a Design Opportunity through Human-Centered Design Principles for the National Hurricane Center Home Page (NHC.NOAA.GOV).”
	</p>
	<p><img class="centered-image" src="/assets/images/projects/columbia/designlab/1.png" /></p>	
</div>

<div class="post-section">
	<h3>Design Questions</h3>
	<p class="emphasize-paragraph">
		In a state of emergency during a hurricane, how do we provide users information relevant to their situation? Which information is important to display in order for them to make the best decision that would ethically suit their needs? What do users look for when assessing the risk of a hurricane?
	</p>
</div>

<div class="post-section">
	<h3>Research Findings</h3>
	<ul class="research-findings">
		<li>Defaulting the home page to utilize user localization.</li>
		<li>Making sure that geographical data are displayed through maps.</li>
		<li>Warning messages should be communicated based on a user's location.</li>
	</ul>
</div>

<div class="post-section">
	<h3>Literature Reviews</h3>
	<p>
		As part of my onboarding process, I was tasked with reading a list of literature reviews concerning disaster science and risk communication. These papers stemmed from different subjects, ranging from sociology to human-computer interaction. One of the readings that stood out is Rebecca Solnit’s Paradise Built in Hell which shows the resilience of communities through disasters. Another paper that helped me with my process is Melissa Bica’s “Communicating Hurricane Risks: Multi-Method Examination of Risk Imagery Diffusion” since the paper analyzes which hurricane graphic images persist through Twitter, and why they continue to thrive as explained through design methodologies.   
	</p>
</div>

<div class="post-section">
	<h3>Interviews</h3>
	<p>
		35 interviews were conducted remotely through Zoom. There are three categories of questions that we used: demographics, past experiences with disasters, and post concerns. We interviewed participants across the United States that were in locations susceptible to hurricane disasters. Out of the 35, I interviewed 12 participants from the northeastern region of the U.S., specifically New Jersey and New York.
	</p>
	<p>		
		The initial part of the process focuses on the demographics and background, mostly asking how long they have lived in their current residency, or if they have any prior training related to disasters or severe weather. These questions generally assess for experience and familiarity of users to hurricanes which would help in constructing the display of the home page. The next set of questions aimed at how they were able to retrieve hurricane information, and the actions that they have taken based on the lack of or known information.
	</p>
	<div class="highlight-chunk">
		<p>Sample Interview Questions</p>
		<p>Approximately how many sources of information were you checking regularly?</p>
		<p>How concerned were you at the time?</p>
		<p>Did you trust the information you received?</p>
		<p>Did you trust the information you received?</p>
	</div>	
</div>

<div class="post-section">
	<h3>Coding</h3>
	<p>
		After the 35 interviews were completed, I started coding the interviews. I referenced methods of thematic analysis as described by Virginia Braun and Victoria Clark. The process consists of doing an initial read of the interviews, and the in the second read of the interviews I highlighted parts that are relevant to their information-seeking behavior. And I started bucketing phrases or sentiments that were repeated into their own sections. For example, below are quotes from different participants but they have similarity because both quotes express that these two participants have experienced hurricanes.
	</p>
	<div class="highlight-chunk">
		<p>Coding Samples</p>
		<h1>Participant A</h1>
		<h2>CODE: Previous experience with hurricanes</h2>
		<p>"I was from North Carolina and experienced quite a few hurricanes living there."</p>		
		<h1>Participant B</h1>
		<h2>CODE: Previous experience with hurricanes</h2>
		<p>"I'm from Houston. I've lived here my whole life."</p>
	</div>		
	<p>		
		For a month or so, I kept consolidating the codes I was finding until all the possible themes were mostly exhausted. In total, there were four categories that were discovered: actions and decisions, information seeking and sources, prior experience, and how they were impacted. Under each category are codes. The category that had the most codes is information seeking and sources, totaling up to 82, with the least being prior experience, which has 16 codes. Finding these relevant themes are important for creating a design for hurricane risk-communication because this would further refine personas and this would be a good reference for conducting a competitor analysis. 
	</p>
</div>

<div class="post-section">
	<h3>Competitor Analysis</h3>
	<p>
		After all of the code reviews, 18 opportunities were presented to the National Hurricane Center. They provided their feedback and mentioned that they would like to see a design for user localization. From that point on, the first thing I did is conducted a competitor analysis to check how other applications are utilizing user localization on their home pages. Patterns started appearing, such as defaulting to user localization where the application would directly show the results without asking or a search input bar that asks for a zip code. Over 60 applications were audited for user localization.
	</p>
	<p><img class="centered-image" src="/assets/images/projects/columbia/designlab/2.png" /></p>		
	<p>
		Weather.com is interesting because this acts as two-fold: automatic and manual geolocation. The automatic geolocation is used on the front page, and since Weather.com relies on ads, they could take advantage of the automated geolocation to cater to a specific audience. The NHC could use this same technique, and on the front-page, it could automate the geolocation and check if the area has any upcoming hurricanes or alerts.
	</p>
	<p><img class="centered-image" src="/assets/images/projects/columbia/designlab/3.png" /></p>		
	<p>
		Websites that sell products are often given the option to pick up an item via store, and the stores listed are based on proximity to the user’s location (retrieved via geolocation). The crockpot below could be picked up at a location near me, which is Paramus, NJ. I have the option of buying the product and reserving it in the store. This could be used for the NHC in terms of safe houses when they are hurricanes, or places for shelter-in.
	</p>
</div>


<div class="post-section">
	<h3>Persona Development</h3>
	<p>
		The existing users for the client dashboard are managers. However, since the contact-tracing feature was released, the user analytics had to account for two types of activities from the managers: contact-tracing and injury reduction. The events that would be implemented for tracking user behaviors would be based around these two personas.
	</p>
	<div class="personas">
		<div>
			<h2>Kyle, 18 Years Old</h2>
			<img src="/assets/images/projects/columbia/designlab/7.png" />
			<p>
				You’re an 18-year-old student from Iowa studying at NYU. This is your first semester. You’ve experienced tornadoes and weathered through a couple of storms, but never had contact with hurricanes.
			</p>
		</div>
		<div>
			<h2>Maggie, 45 Years Old</h2>
			<img src="/assets/images/projects/columbia/designlab/6.png" />
			<p>
				You have experienced hurricanes before and followed procedures for evacuation. In your last experience, your next-door neighbor convinced you that the floods could potentially reach up to 9 ft.			
			</p>
		</div>
		<div>
			<h2>Chloe, 26 Years Old</h2>
			<img src="/assets/images/projects/columbia/designlab/4.png" />
			<p>
				You’re a 26-year-old bartender that recently moved to Hackensack, New Jersey. You formerly lived in Harlem, NY. You have not experienced a hurricane but have experienced heavy rainstorms.			
			</p>
		</div>
		<div>
			<h2>Desmond, 35 Years Old</h2>
			<img src="/assets/images/projects/columbia/designlab/5.png" />
			<p>
				You are a 35-year-old nurse who works in Hackensack NJ. You are ready to clock out from your shift. You’ve been inside the hospital for almost twenty-four hours and have not stepped out. 		
			</p>
		</div>
	</div><br><br>
	<div class="highlight-chunk">
		<p>Chloe, 26 Years Old</p>
		<p>
			You’re a 26-year-old bartender that recently moved to Hackensack, New Jersey. You formerly lived in Harlem, NY. You have not experienced a hurricane but have experienced heavy rainstorms. You don’t know anyone in Hackensack and most of your Harlem friends are sharing news about the incoming hurricane via text. One of them suggested that there may be flooding and surges in places within the general tri-state area of New York, New Jersey, and Connecticut. You go to Google and type “hurricane info” and the first result that comes up is The National Hurricane Center. You click the link and arrive at the home page, expecting to learn more about hurricanes and if this incoming hurricane could flood your neighborhood.
		</p>
	</div>	
</div>

<div class="post-section">
	<h3>Prototyping</h3>
	<p>
		The design must adhere to the original content of the National Hurricane Center home page, but the difference is that the design is centered around user localization. As mentioned previously on the research findings, the three important factors are: defaulting to user localization, displaying geographical data through maps, and communicating warning messages based on locations. These are all considered for prototyping. The result is a home page that utilizes all of these key findings.
	</p>
	<p><img class="centered-image" src="/assets/images/projects/columbia/designlab/8.png" /></p>	
	<p><img class="centered-image" src="/assets/images/projects/columbia/designlab/9.png" /></p>	
	<p><img class="centered-image" src="/assets/images/projects/columbia/designlab/10.png" /></p>	
</div>

<div class="post-section">
	<h3>Results</h3>
	<p>
		After the Chloe persona was tested with 12 participants on the current prototype, the general feedback was that everyone received the information they wanted as the Chloe persona. The only part that needed to change was adding the title heading for the informational page of the hurricane. Users wanted to have a clearer description of the information, hence “Hurricane Category 3” was added.
	</p>
</div>

<div class="post-section">
	<h3>Lessons Learned</h3>
	<div class="highlight-chunk">
		<p>Further Notes</p>
		<p>
			Link to full <a href="/assets/images/projects/columbia/designlab/kaira_villanueva_senior_thesis.pdf" target="_blank">thesis</a>.
		</p>
		<p>
			Link to full <a href="https://www.figma.com/file/b2bmkhPZQAcdATQKF73Ksw/NHC-User-Localization-Design-Prototype?node-id=1%3A1505" target="_blank">prototype</a>.
		</p>
	</div>
</div>



