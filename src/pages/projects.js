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
								<i class="fas fa-laptop-code"></i>
							</span>
							<h3 class="title">Metadata extraction in unified data foundry</h3>
							<h3 class="subtitle">Apr 2022 – Dec 2022</h3>
							<p class="description">A micro service that extracts various fields from the raw data of Movies, Sports, Series, Episode and others or from the data provider and performs operations on it, transforms the
processed data to various clients according to their catalog.</p>
							{/* <a href="#" class="learn-more">Learn More</a> */}
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">License Management (LM)</h3>
							<h3 class="subtitle"> Sep 2020 – Nov 2021</h3>
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
							<h3 class="subtitle">Apr 2022 – Dec 2022</h3>
							<p class="description">Our focus was centered on testing and automating Element managemnet system(EMS), which is a FCAPS product, acts as a medium through which we can control and monitor overall functionality of networking devices like routers and policy servers.</p>
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
							<h3 class="title">Financial Operations Management System</h3>
							<h3 class="subtitle">May 2024 – Jun 2024</h3>
							<p class="description">Created a comprehensive financial management system with a dynamic React and Bootstrap frontend, integrated with a robust
Ktor backend and MongoDB database. Implemented critical features for managing partners, products, invoices, transactions,
and ledgers, optimizing the system for secure and efficient financial operations.</p>
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
							<h3 class="title">Multi-Tiered Cloud-Based Facial Recognition System</h3>
							<h3 class="subtitle">Jan 2024 – Mar 2024</h3>
							<p class="description">Developed a scalable, elastic facial recognition application on AWS Infrastructure as a Service (IaaS), that dynamically adjusts
computing resources according to demand. It employs machine learning for real-time image classification and
effectively handling 50 concurrent requests within 120 seconds.</p>
							<a href="https://github.com/iisshh/Multi-Tier-Cloud-Based-Face-Recognition-System" class="learn-more">Source Code</a>
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
							<h3 class="title">Serverless Video Analysis Pipeline on AWS</h3>
							<h3 class="subtitle">Apr 2024 – May 2024</h3>
							<p class="description">Developed and deployed a serverless, auto-scaling video processing pipeline leveraging AWS Lambda and S3. The system
streamlines video uploads by performing frame extraction and face recognition using FFmpeg and deep learning models. It
consistently processes 100 concurrent requests within 200 seconds.</p>
							<a href="https://github.com/iisshh/Serverless-Video-Analysis-Pipeline-on-AWS" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-laptop-code"></i>
							</span>
							<h3 class="title">Folksonomy Mining</h3>
							<h3 class="subtitle">Aug 2023 – Dec 2023</h3>
							<p class="description">Using topic modeling, I analyzed a large set of tweets from the United States that discussed race issues on Twitter. This
approach uncovered hidden patterns and themes within the messages, allowing us to categorize the tweets by the topics
discussed. The classification was done using BERTopic and the Llama2 model.</p>
							<a href="https://github.com/iisshh/Folksonomy-Mining" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">Earthquake Detection Using Deep Neural networks</h3>
							<h3 class="subtitle">Jan 2023 – May 2023</h3>
							<p class="description">Developed modified inception time model and improved overall accuracy from 75% to 83% and compared it with multiple
models like CNN, LSTM, Resnet, inception time, STEAD data set has been used for the experiment.</p>
							<a href="https://github.com/iisshh/Earthquake-Detection-using-Deep-Neural-networks" class="learn-more">Source Code</a>
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
							<h3 class="title">Library Management Application</h3>
							<h3 class="subtitle">Nov 2023 – Dec 2023</h3>
							<p class="description">Developed a comprehensive Library Management System with Java for core functionalities and password encryption, using
MySQL for data management and storage. Designed and implemented a user-friendly interface with HTML, CSS, and
JavaScript, incorporating features for book management, student records, and fine generation.</p>
							<a href="https://github.com/iisshh/Library-Management-System-CSE-565" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">Movie genre predictor based in plot summary using Machine Learning</h3>
							<h3 class="subtitle">Jan 2023 – May 2023</h3>
							<p class="description">Experimented with both Machine Learning and Deep Learning models for the classification. It has been found that Bi-LSTM out
performed all the models to give the best precision, recall and F1-score.</p>
							<a href="#" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>

			<div class="row justify-content-center text-center-1">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">GenAI Projects</h2>
						{/* <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p> */}
					</div>
				</div>
			</div>
            <div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">Natural language to SQL</h3>
							<h3 class="subtitle">Jul 2024 – Aug 2024</h3>
							<p class="description">Developed a Natural Language to SQL (NL2SQL) converter using the Llama 3 70B model and LangChain, enabling non-technical
users to generate SQL queries from natural language input. Implemented dynamic few-shot prompting and session management
to enhance query accuracy and user experience.</p>
							<a href="https://github.com/iisshh/NL2SQL" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				{/* <div class="col-md-6 col-lg-4">
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
				</div> */}
			</div>
		</div>
	</section>
        
        </>
    )
}

export default Projects