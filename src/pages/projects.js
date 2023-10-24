import React from "react";
import Header from "../Components/header";

const Projects=()=>{
    return(
        <>
        <Header/>
        <section class="section-services">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">Professional Projects</h2>
						{/* <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p> */}
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">License Management <br/>(LM)</h3>
							<p class="description">EMS billing system, LM is responsible for the accountability of license usage in call data record and charging for different calls established. I have also worked on its migration from monolithic to a fully feldge microservices.</p>
							{/* <a href="#" class="learn-more">Learn More</a> */}
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-chart-pie"></i>
							</span>
							<h3 class="title">Element Management System</h3>
							<p class="description">Our focus was centered on ensuring "the six nines" assurance in our routers and policy servers. EMS, which is a FCAPS product, acts as a medium through which we can control and monitor overall functionality of these networking devices.</p>
							{/* <a href="#" class="learn-more">Learn More</a> */}
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-laptop-code"></i>
							</span>
							<h3 class="title">Metadata extraction in unified data foundry</h3>
							<p class="description">A micro service that extracts various fields from the raw data of Movies, Sports, Series, Episode and others or from the data provider and performs operations on it, transforms the
processed data to various clients according to their catalog.</p>
							{/* <a href="#" class="learn-more">Learn More</a> */}
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>
            <div class="row justify-content-center text-center-1">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">Academic Projects</h2>
						{/* <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p> */}
					</div>
				</div>
			</div>
            <div class="row">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">Earthquake Detection using Deep Neural networks</h3>
							<p class="description">Developed modified inception time model and improved overall accuracy from 75% to 83% and compared it with multiple
models like CNN, LSTM, Resnet, inception time, STEAD data set has been used for the experiment.</p>
							<a href="#" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-chart-pie"></i>
							</span>
							<h3 class="title">Movie genre predictor based in plot summary using Machine Learning</h3>
							<p class="description">Experimented with both Machine Learning and Deep Learning models for the classification. It has been found that Bi-LSTM out
performed all the models to give the best precision, recall and F1-score.</p>
							<a href="#" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-laptop-code"></i>
							</span>
							<h3 class="title">Folksonomy Mining</h3>
							<p class="description">This research employs natural language processing(NLP) techniques, specifically topic modeling, to uncover latent thematic structures within a significant collection
of U.S. race-related tweets extracted from Twitter. The study aims to automatically identify prevalent topics in the discourse surrounding racial issues.</p>
							<a href="#" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>
		</div>
	</section>
        
        </>
    )
}

export default Projects