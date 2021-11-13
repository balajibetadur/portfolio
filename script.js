let barLength = 300;

let data = {
    'menu': [
        // {'class' : 'uil uil-estate icon', 'text' : 'Home'},
        { 'class': 'uil uil-user icon', 'text': 'About', 'to': '#about' },
        { 'class': 'uil uil-university icon', 'text': 'Education', 'to': '#education' },
        { 'class': 'uil uil-file-alt icon', 'text': 'Skills', 'to': '#skills' },
        { 'class': 'uil uil-briefcase-alt icon', 'text': 'Research', 'to': '#work' },
        { 'class': 'uil uil-briefcase-alt icon', 'text': 'Experience', 'to': '#sub__title indus' },
        { 'class': 'uil uil-browser icon', 'text': 'Projects', 'to': '#projects' },
        { 'class': 'uil uil-trophy icon', 'text': 'Achievements', 'to': '#achievements' },
        { 'class': 'uil uil-postcard icon', 'text': 'Certificates', 'to': '#certifications' },
        { 'class': 'uil uil-message icon', 'text': 'Contact', 'to': '#contact__me' }

    ],
    'socialMedia': [
        { 'class': 'uil uil-envelope social__icon', 'to': 'mailto:balajibetadur@gmail.com' },
        { 'class': 'uil uil-linkedin-alt social__icon', 'to': 'https://www.linkedin.com/in/balaji-betadur/' },
        { 'class': 'uil uil-github social__icon', 'to': 'https://github.com/balajibetadur' },
    ],

    'whatIdo': [
        {
            'title': 'Data Science & AI',
            'image': 'DSAI.svg',
            'description': [
                '⚡Developing highly scalable production-ready models for various deep learning and statistical use cases.',
                '⚡ Experience of working with Computer Vision and NLP projects.',
                '⚡ Complex quantitative modeling for dynamic forecasting and time series analysis.'
            ]
        },
        {
            'title': 'Web development',
            'image': 'web.svg',
            'description': [
                '⚡ Building responsive websites for deploying Machine Learning algorithms.',
                '⚡ Developing front end using react.',
                '⚡ Creating simple UI using javascript, firebase, MongoDB, NodeJS, flask, bootstrap.'
            ]
        }, {
            'title': 'Cloud Development',
            'image': 'cloud.svg',
            'description': [
                '⚡ Hosting and maintaining websites on virtual machine instances along with the integration of databases.',
                '⚡ Deploying deep learning models on the cloud to use on mobile devices.',
                '⚡ Training deep learning models on GCP Auto ML for faster training and better accuracy.'
            ]
        },
        // {
        //     'title' : 'Freelance',
        //     'image' : 'freelance.svg',
        //     'description' : [
        //     '⚡ Delivering full-stack projects on upwork, freelancer.com, and fiverr.',
        //     '⚡ Worked on machine learning, quantitative development, automation and web development related projects.',            
        //     '⚡ Completed 12+ end-to-end projects.'
        //     ]
        // },
        {
            'title': 'UI/UX Design',
            'image': 'design.svg',
            'description': [
                '⚡ Designing an attractive user interface for web applications.',
                '⚡ Customizing logo designs and building logos from scratch.',
                '⚡ Creating the flow of application functionalities to optimize the user experience.'
            ]
        }
    ],
    'skills': [
        { 'skill': 'Pyhton', 'Level': 0.9 },
        { 'skill': 'Machine Learning', 'Level': 0.8 },
        { 'skill': 'Deep Learning', 'Level': 0.8 },
        { 'skill': 'Keras', 'Level': 0.7 },
        { 'skill': 'Tableau', 'Level': 0.7 },
        { 'skill': 'Neural Networks', 'Level': 0.75 },
        { 'skill': 'SQL', 'Level': 0.8 },
        { 'skill': 'Flask', 'Level': 0.8 },
        { 'skill': 'Javascript', 'Level': 0.9 },
        { 'skill': 'MongoDB', 'Level': 0.8 },
        { 'skill': 'DBMS', 'Level': 0.9 },
        { 'skill': 'ReactJS', 'Level': 0.8 },
        { 'skill': 'Firebasae', 'Level': 0.8 },
        { 'skill': 'AWS', 'Level': 0.5 },
        { 'skill': 'C', 'Level': 0.7 },
        { 'skill': 'Bootstrap', 'Level': 0.9 },
        { 'skill': 'C++', 'Level': 0.7 },
        { 'skill': 'Git', 'Level': 0.8 },
        { 'skill': 'NodeJS ', 'Level': 0.7 },
        { 'skill': 'HTML 5', 'Level': 0.9 },
        { 'skill': 'CSS 3', 'Level': 0.8 },
        { 'skill': 'Figma', 'Level': 0.7 },
        { 'skill': 'Mentoring', 'Level': 1 },
        { 'skill': 'Teaching', 'Level': 1 }
    ]
    ,
    'work':
    {
        'Research_Internships': [
            {
                'image': 'nlp.jpeg',
                'name': 'Deep Learning Research Intern',
                'location': '@ Indian Institute of Technology, Guwahati',
                'duration': 'Sep 20 - Present',
                'description': `
                        
                        ✔ Worked on <b>Creativity Index evaluation</b> for Q&A systems like CEED, UCEED (Subjectivity index module) <br><br>
                        
                        ✔ Evaluation of both questions and answers is implemented using 2 methods.<br>
                        &nbsp;&nbsp;&nbsp; - Evaluation of creativity using subjectivity features.<br>
                        &nbsp;&nbsp;&nbsp; - Evaluation of creativity using variance in corpus.<br><br>
                        
                        ✔ For text questions and answers, the input is classified as a single word and subjective answer before evaluating the creativity index.<br><br>

                        ✔ Further, the <b>BERT NLP model</b> will assess the subjectivity of text using <b>21 factors</b> like polarity and question intent. <br><br>
                        
                        ✔ Creativity of images is measured by <b>similarity index. Lesser the similarity, the more the creativity</b> (there are other factors that contribute to text creativity).<br><br>
                        

                 `,
                'outcome': `
                
                        ✔ Successfully implemented a module for evaluating creativity index by using subjectivity features.<br><br>

                        ✔ This module, along with a few other modules of image evaluation, will be able to assess the questions and answers automatically.<br><br>

                        ✔ Working on a research paper that includes both approaches for creativity evaluation in the text and the variance approach for images.

                
                 `
            },
            {
                'image': 'robot.jpg',
                'name': 'Deep Learning Research Intern',
                'location': '@ Indian Institute of Technology, Bhubaneshwar',
                'duration': 'Sep 20 - Present',
                'description': `
                
                    ✔ I Worked on path-planning algorithms for a biped robot in a static environment.<br><br>

                    ✔ Implemented and compared multiple algorithms, namely<br>
                            &nbsp;&nbsp;&nbsp;- fast-marching<br>
                            &nbsp;&nbsp;&nbsp;- fast-sweeping<br>
                            &nbsp;&nbsp;&nbsp;- a-star<br><br>
                    
                    ✔ Implemented border collision function to avoid collision of the object with the borders/edges of the obstacles.<br><br>
                `,
                'outcome': `
                
                    ✔ Implemented Fast Sweeping algorithm executed efficiently among all other algorithms.<br><br>

                    ✔ Time taken to find a path between 2 points in static environment for FSM was lesser than FMM and a-star.<br><br>
                `
            },

            {
                'image': 'farmer.jpg',
                'name': 'NLP Research Intern',
                'location': '@ GIT, belgaum',
                'duration': 'Sep 20 - Present',
                'description': `

                        ✔ Developed a chatbot (Smart Sampark) for farmers that help to solve their queries using Cosine Similarity and natural Language Processing.<br><br>
                        
                        ✔ Dynamic data updating module will automatically download data from multiple online resources (for ex: data.gov.in) every time after a certain period.<br><br>

                        ✔ Once the user enters the query, the best solution, along with the top 10 related solutions, will be provided.<br><br> 
                        
                        ✔ The solution is fetched based on multiple features like sector (Agriculture, Horticulture..), query category (vegetables, pulses, general..), crop type (onion, chilies..), query type (Market info, weather, mandi prices..), etc.<br><br> 
                        
                        ✔ The response includes immediate solution, related solutions, related/referred online links for each solution, contact number based on query type and query domain.<br><br>
                        `,
                'outcome': `
                        ✔ Successfully developed a chatbot that resolves user queries with 96.8% accuracy in less than 0.002 seconds. (1000 queries in 1.7 seconds)<br><br>

                        ✔ Integrating the chatbot with farmer related official government and un-official mobile applications and websites (ongoing).<br><br>
                        
                        ✔ Published a research paper "Smart Sampark-An approach towards building a responsive system for Kisan Call Center" at "IEEE Explore" (co-author).<br><br>

                `
            },
            // {
            //     'image' : 'chatBot.jpg', 
            //     'name' : 'Machine Learning Research Intern', 
            //     'location' : '@ GIT, belgaum', 
            //     'duration' : 'Sep 20 - Present',
            //     'description' : `
            //     Implemented and compared multiple machine learning algorithms for multi-label classification for the sponsered project.<br><br>

            //     Algorithms like Decision Tree, KNN, Logistic regression, SVM, Random Forest, Naive Bayes
            //     `,
            //     'outcome' : 'jhgdf</br></br>sdfh'
            // }
        ],
        'Publications': [

            {
                'image': 'nlp.jpeg',
                'name': 'Creativity Evaluation in Text and Images - variance evaluation and subjectivity feature analysis',
                'location': '@ Indian Institute of Technology, Guwahati',
                'duration': 'Sep 20 - Present',
                'description': ['test'],
                'outcome': ['test'],
                'progress': 'in progress'
            },

            {
                'image': 'robot.jpg',
                'name': 'An Efficient Path Planning Algorithm for the Biped Robot in a Static Environment using Fast Sweeping Method',
                'location': '@ Indian Institute of Technology, Bhubaneshwar',
                'duration': 'Sep 20 - Present',
                'description': ['test'],
                'outcome': ['test'],
                'progress': 'publishing in sage publication'
            },

            {
                'image': 'chatBot.jpg',
                'name': 'System Model to Effectively Understand Programming Error Messages Using Similarity Matching and Natural Language Processing',
                'location': '@ Gogte Institute of Technology, belgaum',
                'duration': 'Sep 20 - Present',
                'description': ['test'],
                'outcome': 'jhgdf</br></br>sdfh',
                'progress': 'published in ICCCMLA Springer'
            },

            {
                'image': 'farmer.jpg',
                'name': 'Multi-label Question Classification for Agricultural Questions',
                'location': '@ Gogte Institute of Technology, belgaum',
                'duration': 'Sep 20 - Present',
                'description': ['test'],
                'outcome': 'jhgdf</br></br>sdfh',
                'progress': 'published in IEEE Explore'
            }
        ],

        'Industrial_Internships': [

            {
                'image': 'stockMarket.jpg',
                'name': 'Stock Market Automation Developer',
                'name_': `
             Stock Market Automation Developer<br>
                    <span class ="project__skill">Python</span>
                    <span class ="project__skill">Neural Networks</span>
                    <span class ="project__skill">Pandas</span>
                    <span class ="project__skill">Sklearn</span>
                    <span class ="project__skill">Keras</span>
                    <span class ="project__skill">GCP</span>
                    <span class ="project__skill">Tradingview</span>
                    <span class ="project__skill">MongoDB</span>
                    <span class ="project__skill">AWS</span>
                    <span class ="project__skill">Git</span>
                    <span class ="project__skill">JavaScript</span>
                    <span class ="project__skill">Firebase</span>
                    <span class ="project__skill">VSCode</span>
                    <span class ="project__skill">Putty</span>
                    <span class ="project__skill">Jupyter Notebook</span>
             `,
                'location': '@ Bluebery Capital',
                'duration': 'Sep 20 - Present',
                'description': `

                    ✔ Designed an automated quantitative trading cloud-based platform to monitor, trade, generate signals, perform analytical operations, and backtest historical data.<br><br>

                    ✔ Implemented Machine Learning pipeline for time-series forecasting and what-if analysis.<br><br>

                    ✔ Responsible for technology infrastructure systems development, which includes connectivity,
                    maintenance, and internal automation processes.<br><br>

                    ✔ Developing backtesting, booking, position keeping, and reconciliation mechanism.<br><br>

                    ✔ Worked on general efficiency improvement and optimization of the analytical library.<br><br>

                    ✔ Implemented an optimized way of placing a market order to reduce slippage.<br><br>

                    ✔ Developed ALO (Advanced Limit Orders) for placing target and stop-loss limit orders with triggers.<br><br>

             `,
                'outcome': `

                    ✔ High-performance and low-latency trading components/strategies optimized algorithm flow that
                    resulted in reducing slippage (loss) by 70%. <br><br>
                    
                    ✔ Features like copy-trading, multi-account-trading, dynamic infrastructure are not available with any other broker/third party applications in the market.<br><br>

                    ✔ Increased overall profit by 25%. ALO orders reduced execution time by more than 30%.<br><br>

                    ✔ Dynamic infrastructure enables the user to modify any variables before and in between execution.<br><br>

                    ✔ Dynamic infrastructure enables to switch to multiple APIs within 2 seconds by user input. <br><br>


             `
            },

            {
                'image': 'computerVision.jpg',
                'name': 'Computer Vision Intern',
                'name_': `Computer Vision Intern<br>
             
                    <span class ="project__skill">Pyhton</span>
                    <span class ="project__skill">Heroku</span>
                    <span class ="project__skill">JavaScript</span>
                    <span class ="project__skill">OpenCV</span>
                    <span class ="project__skill">MongoDB</span>
                    <span class ="project__skill">SQL</span>
                    <span class ="project__skill">Keras</span>
                    <span class ="project__skill">AutoML</span>
                    <span class ="project__skill">Git</span>
                    <span class ="project__skill">Google Collab</span>
                    <span class ="project__skill">VSCode</span>
                    <span class ="project__skill">GCP</span>

             `,
                'location': '@ Naaniz Pvt Ltd',
                'duration': 'Sep 20 - Present',
                'description': `
               
                    ✔ Deployed deep learning model to classify 250+ dishes to an AI module in a food delivery application.<br><br>

                    ✔ Implemented a hotel surveillance system to monitor<br>
                    &nbsp;&nbsp;&nbsp;- number of people<br>
                    &nbsp;&nbsp;&nbsp;- detect un-hygienic places<br>
                    &nbsp;&nbsp;&nbsp;- workers wearing masks<br>
                    &nbsp;&nbsp;&nbsp;- gloves and cooking hats<br>
                    &nbsp;&nbsp;&nbsp;- common pests<br><br>

                    ✔ Built Object Detection Model for detecting possible veggies/fruits visible in a dish using Yolo v3.<br><br>

                    

               `,
                'outcome': `
               
                    ✔ AI-based Food assistant helps people search for a dish by an image and publishes detailed
                    information about the dish like <br>
                    &nbsp;&nbsp;&nbsp;- hotels that serve that dish<br>
                    &nbsp;&nbsp;&nbsp;- ingredients<br>
                    &nbsp;&nbsp;&nbsp;- nutrition distribution<br><br>

                    ✔ Hotel surveillance system has been installed in all Naaniz approved restaurants.



               `
            },

            {
                'image': 'jobs.jpg',
                'name': 'Machine Learning Intern',
                'name_': `Machine Learning Intern <br>

                    <span class ="project__skill">Python</span>
                    <span class ="project__skill">Flask</span>
                    <span class ="project__skill">JavaScript</span>
                    <span class ="project__skill">MongoDB</span>
                    <span class ="project__skill">Bootstrap</span>
                    <span class ="project__skill">Git</span>
                    <span class ="project__skill">AWS</span>
                    <span class ="project__skill">Selenium</span>
                    <span class ="project__skill">Web Scraping</span>
                    <span class ="project__skill">Pandas</span>
                    <span class ="project__skill">API</span>
                    <span class ="project__skill">Putty</span>

             
             `,
                'location': '@ Conscript Pvt ltd',
                'duration': 'Sep 20 - Present',
                'description': `
               
                    ✔ Designed an advanced cloud-based platform for autonomous hiring using machine learning and cosine similarity matching.<br><br>

                    ✔ Collected job opening by scraping multiple online resources like LinkedIn jobs, Naukri.com, monster.com, etc. <br><br>

                    ✔ When a user enters the keyword (job role, location, salary range, job type...) all the openings are fetched in parallel simultaneously based on the filters applied.<br><br>

                    ✔ User can also add his profile on the portal (skills, experience, certifications...) to get related job openings based on the cosine similarity index between the job requirement/ job description with the user's profile.<br><br>
                    
                    ✔ Jobs, once fetched, are labeled based on the features like location, role, type, etc. By using machine learning, the user will get the most relevant jobs based on their profile. <br><br>
               
               `,
                'outcome': `
               
                    ✔ This platform is not only used by the person who is looking for a job, but also by employers.<br><br>

                    ✔ Employers add the user's profile on the portal to check the job-profile match index.<br><br>

                    ✔ New feature: Employer can upload the pdf on the portal, which proceeds with extracting the data from the pdf using OCR and other python frameworks. This further is matched with the job description/job requirement to get the job-profile index.<br><br>
                    
               `
            },

            {
                'image': 'webd.png',
                'name': 'Web development Intern',
                'name_': `Web development Intern<br>

                    <span class ="project__skill">Python</span>
                    <span class ="project__skill">Flask</span>
                    <span class ="project__skill">SQL</span>
                    <span class ="project__skill">Javascript</span>
                    <span class ="project__skill">MongoDB</span>
                    <span class ="project__skill">GUI</span>
                    <span class ="project__skill">Tkinter</span>
                    <span class ="project__skill">Git</span>
                    <span class ="project__skill">AWS</span>

             `,
                'location': '@ Uniq Technologies',
                'duration': 'Sep 20 - Present',
                'description': `

                    ✔ This is my first internship. I worked as a python developer.<br><br>

                    ✔ I developed a blog along with a shopping cart for a client using flask.<br><br>

                    ✔ The website enables the admin to add posts and tag items in the post along with the details related to each item. (cost, color, size, exchange, etc...)<br><br>

                    ✔ If the user is interested in any item in the post, he can click and add it to the cart.<br><br>

                    ✔ Admin can also add users with admin privileges so that a new user can add posts with items he wants to sell.<br><br>
               
               `,
                'outcome': `
               
                    ✔ Converted an initial simple gallery website to a blog, which can also be used as a shopping website.<br><br>

                    ✔ Redirecting posts from social media to blog and vice versa increased the number of users visiting the website by 40%.<br><br>
                    
                    ✔ Allowing other users to add posts widened the reach and increased the revenue by 5%.
               `
            }
        ],

        'Volunteerships': [
            {
                'image': 'campusHero.jpg',
                'name': 'Campus Hero',
                'location': '@ Girlscript Technologies',
                'duration': 'Sep 20 - Present',
                'description': `

                        ✔ Girlscript is India's First & Biggest Indian Origin Technical Community
                        and a section-8 NON PROFIT company registered under the government of India.<br><br>
                        
                        ✔ It is open for all organizations and supports beginners in technology and programming. It promotes diversity by reserving 50% seats for women & IGBT in all its programs worldwide.<br><br>

                        ✔ I was elected as a campus hero for my university among 4000+ students.<br><br>

                        ✔ Represented my university at national-level events held by Girlscript technologies.<br><br>

                        ✔ Organized webinars and hackathons to help students improve and develop programming skills.<br><br>

                        ✔ Weekly events were held and coordinated by each team member every week to get creative ideas, which gradually led our team in the top 10 nation-wide.

                
                `,
                'outcome': 'jhgdf</br></br>sdfh'
            },
            {
                'image': 'leader.jpg',
                'name': 'Club Coordinator',
                'location': '@ GIT, Belgaum',
                'duration': 'Sep 20 - Present',
                'description': `
                
                        ✔ I co-ordinated student clubs in my university, namely<br>
                        &nbsp;&nbsp;&nbsp;- Technical Paper Presentation Club<br>
                        &nbsp;&nbsp;&nbsp;- Fine Arts Club<br>
                        &nbsp;&nbsp;&nbsp;- National Service Scheme Club (NSS)<br><br>

                        ✔ As a part of the technical paper presentation club, I organized local conferences at my university. I also wrote four research papers (2 yet to publish)<br><br>

                        ✔ I represented my university at the 21st Janani event held by VTU and won a state-level collage event (painting/craft from waste).<br><br>

                        ✔ As a part of NSS, we visited rural schools and spread educational and social awareness among young students. 
                        
                        <br><br>✔ We painted classrooms and planted trees around the school to promote green and healthy environment<br><br><br><br>
                
                `,
                'outcome': 'jhgdf</br></br>sdfh'
            },
            {
                'image': 'internshala.jpg',
                'name': 'Internshala Student Partner',
                'location': '@ Internshala',
                'duration': 'Sep 20 - Present',
                'description': `
                
                        ✔ Internshala is India's no.1 internship and training platform with 40000+ paid internships in Engineering, MBA, media, law, arts, and other streams.<br><br>  

                        ✔ Internshala Student Partner 11 (ISP) is India's largest student community. It is a 50 - day transformational program aimed at building the leaders of tomorrow. <br><br>
                        
                        ✔ During this program, we learned to lead from the front and develop essential skills like marketing and communication while representing Internshala in our college and understood how it all comes together for a cause.<br><br>

                        I was selected as a super candidate for three consecutive batches.<br><br>

                        ✔ We spread awareness among students about courses, internships, and other services provided by Internshala for free. <br><br>

                        ✔ I stood first in the Internshala referral program consecutively two times, where a total of 2600+ new students joined the Internshala platform with my referral.<br><br>

                        ✔ I stood 2nd among 40,000+ students in ISP'19 program.<br><br>

                
                `,
                'outcome': 'jhgdf</br></br>sdfh'
            },
            {

                'image': 'teaching.jpg',
                'name': 'Uplift Project Mentor',
                'location': '@ Girlscript Technologies',
                'duration': 'Sep 20 - Present',
                'description': `
                
                        ✔ Uplift project aims at helping everyone who is looking for opportunities to leverage their knowledge, skills, and potential up to higher levels.<br><br>


                        ✔ I lead two major communities of Data Science and Artificial Intelligence.<br><br>


                        ✔ I mentored 20+ teams and taught python, machine learning, computer vision, and deep learning for 300+ students.<br><br>


                        ✔ Two out of ten selected projects (250+ in total) were mentored by me.<br><br>


                
                `,
                'outcome': 'jhgdf</br></br>sdfh'
            },
            {
                'image': 'onlineTeaching.jpg',
                'name': 'Machine Learning Trainee',
                'location': '@ Girlscript Foundation',
                'duration': 'Sep 20 - Present',
                'description': `

                        ✔ I joined as a Machine Learning trainee at Girlscript technology's core program.<br><br>

                        ✔ I taught pyhton and machine learning concepts for 50+ engineering students that includes<br>
                        &nbsp;&nbsp;&nbsp;- Machine Learning algorithms<br>
                        &nbsp;&nbsp;&nbsp;- Deep Learning Algorithms<br>
                        &nbsp;&nbsp;&nbsp;- Pyhton core concepts<br>
                        &nbsp;&nbsp;&nbsp;- Pyhton packaging<br>
                        &nbsp;&nbsp;&nbsp;- Pandas, Numpy and Matplotlib<br>
                        &nbsp;&nbsp;&nbsp;- Sklearm, kereas and fastai<br>
                        &nbsp;&nbsp;&nbsp;- Deployment on heroku<br><br>


                        ✔ We developed five projects on machine learning and deep learning and deployed them on Heroku.<br><br>

                `,
                'outcome': 'jhgdf</br></br>sdfh'
            },
            // {
            //     'image' : 'mentor.jpg', 
            //     'name' : 'Uplift Project Trainee', 
            //     'location' : '@ Girlscript Technologies', 
            //     'duration' : 'Sep 20 - Present',
            //     'description' : ['test'],
            //     'outcome' : 'jhgdf</br></br>sdfh'
            // }
        ]
    },
    'projects': [
        {
            'title': 'Auto AI Modelling',
            'purpose': `

                    ✔ One of my cousins, with limited technical expertise, approached me asking to develop a machine learning module for his business website.<br><br>
                    
                    ✔ I realized that this technical barrier prevents people from accessing the advantages of machine learning and deep learning.<br><br>

                    ✔ I wanted to break this barrier, so I created a website, 'Auto Modelling', where people without or with limited technical knowledge can train and use machine learning models with a single click.<br><br>
                
                `,
            'description': `
                    
                    ✔ Auto Modelling is a platform where anyone can train, retrain and use machine learning models irrespective of their technical expertise.<br><br>
                
                    ✔ User can upload data in any format(.txt, .csv, .xlsx, folders, .msg, .zip etc), data preparation module will format the uploaded data into standard format.<br><br>

                    ✔ If the user is completely unaware of machine learning, he can select a standard training option that will train the model with different algorithms, a different combination of parameters, and different features from the dataset.<br><br>

                    ✔ If the user is partially aware of technicalities, he can modify select any algorithms, filter algorithms based on training time, modify any parameter of selected algorithm, enable/disable grid search (try different parameters in different combinations to get the model with the best accuracy) and return the model with the best accuracy.<br><br>



                `,
            'outcome': `

                    ✔ Many students from non-It backgrounds used this website to use machine learning and deep learning in their projects without coding anything themselves.<br><br>

                    ✔ Apart from a few algorithms like transformers and deep learning algorithms, other algorithms will be trained in less than 2 seconds.<br><br>

                    ✔ Average time for standard training (all algorithms, all parameters, different combinations) is less than 10 seconds.<br><br>

                    ✔ This platform also provides an interface for predicting new samples (single document and bulk collection) and enables users to download the output in any required format.<br><br>

                    ✔ Not only can the user train the models, but he can also save every trained model. If the user wishes to revert to the previous model, he can select the required model and download it or use the model to predict new samples.<br><br>
                    
                `,
            'image': 'autoML.jpg',
            'skills': ['Pyhton', 'JavaScript', 'Machine Learning', 'Neural Networks', 'Keras', 'fastai', 'Pandas', 'Sklearn', 'Bootstrap', 'Git', 'MongoDB', 'VSCode', 'Jupyter Notebook'],
            'github': 'https://github.com/balajibetadur/AI-Email-Classifier'
        },
        {
            'title': 'COVID-19 prediction',
            'purpose': `
                
                    ✔ During the beginning of the COVID-19 outburst, there were limited ways to diagnose the spread of the infection.<br><br>

                    ✔ People were worried due to the lack of facilities to get tested for COVID-19 and prevent spreading the infection to others.<br><br>
                    
                    ✔ Many websites displayed the number of deaths and number of infected people, but there was no website enabling people to know whether they had the infection.<br><br>
                    
                    ✔ So I designed a platform where users can enter their symptoms (fever, cold, cough, age, body pain, etc.) and rate the intensity for each symptom.<br><br>
                
                `,
            'description': `
                
                    ✔ The website takes user symptoms as input and predicts the infection probability using machine learning.<br><br> 

                    ✔ It also classified the user under four categories, namely<br>
                    &nbsp;&nbsp;&nbsp;- Infected<br>
                    &nbsp;&nbsp;&nbsp;- Sensitive<br>
                    &nbsp;&nbsp;&nbsp;- Cautious  <br>  
                    &nbsp;&nbsp;&nbsp;- Safe<br><br>
                    ✔ Based on the category, there were precautions displayed to the user.<br><br>
                    
                    ✔ Not only symptoms, but users can also upload x-ray scans to know the infection status. The image classification model (X-Ray) was 98.8 % accurate.<br><br>
                    
                    ✔ Further, I included a mask detection software that will detect whether the person is wearing the mask and notify the admin if anyone without a face mask is found.<br><br>

                `,
            'outcome': `

                    ✔ Users determined the probability of infection sitting at home without contacting or visiting any test centers.<br><br>

                    ✔ The face mask detection software has been installed in 3 societies of my locality.   <br><br>            

                `,
            'image': 'covid.jpg',
            'skills': ['Pyhton', 'Machine Learning', 'Heroku', 'javascript', 'Sklearn', 'Pandas', 'Git', 'Firebase', 'Bootstrap', 'VSCode'],
            'github': 'https://github.com/balajibetadur/COVID-19-system'
        },
        {
            'title': 'Lookinat - Abrod study prep website',
            'purpose': `
                
                    ✔ I was preparing for GRE (Graduate Record Examinations), and I needed to learn new words daily to understand the passage and sentences in the verbal section of the exam.<br><br>

                    ✔ There are third-party applications that provide flashcards (decks of 30 words). But these flashcards had no other features, which made them difficult to use. I realized that many other students are facing the same issue.<br><br>
                    
                    ✔ So I developed an application where there were multiple features that will help students to add, search, study, revise, star, shuffle, sort, filter words. <br><br>
                    
                    ✔ I also found that there are limited resources online to help students with abroad study, so I am adding new modules to the application that will help a student from the beginning until he completes education abroad and get a job.<br><br>
                
                `,
            'description': `
                
                    ✔ The current application has around 3000 words. It also has a separate word set for the Sentence Equivalence Section, where one word with its contextual synonym words will be available.<br><br>

                    ✔ There are 48 decks of words, each containing 30 to 50 words in each deck. These decks are designed based on the difficulty and frequency of the words appearing in the actual GRE.<br><br>
                    
                    ✔ New features that are introduced
                        &nbsp;&nbsp;&nbsp;- Star a word: user can star/mark a word and revise them later at any point in time.<br>
                        &nbsp;&nbsp;&nbsp;- Add words: The user can add new words into a new deck.<br>
                        &nbsp;&nbsp;&nbsp;- Seach word: The user can search for any new word that he encounters during practice. New words that are searched are also saved in the database as a new deck of words. <br>
                        &nbsp;&nbsp;&nbsp;- word Tone: Every word is marked with any one of the labels (positive, negative, neutral). This helps in the text completion section, where one can get correct answers just by knowing the tone of the word.<br>
                        &nbsp;&nbsp;&nbsp;- Shuffle: The user can shuffle the words for robust practice.<br>
                        &nbsp;&nbsp;&nbsp;- Filter: The user can filter the words by deck number and perform shuffle action for filtered words.<br>
                        &nbsp;&nbsp;&nbsp;- Synonyms: For every word, there will be a meaning, description, example, and set of synonyms. Definitions of these synonyms can also be viewed just by hovering on the synonym.<br>
                        &nbsp;&nbsp;&nbsp;- Study/Practice Mode: These modes help users to study and practice words in an effective manner.<br><br>
                    ✔ New modules like GRE quant preparation, voting and ranking system for students solving doubts asked by peers, IELTS preparation, university shortlisting based on the students profile, detailed description of each university (application requirements, ranking, courses, tuition fees, application fees, deadline, etc.), VISA interview preparation and a job portal.<br><br>
                `,
            'outcome': `
                
                    ✔ This application overcomes the shortcomings of existing systems.<br><br>
                
                    ✔ More than 450 students use the current version.<br><br>

                    ✔ Voting and ranking system motivated students to answer more questions that lead to healthy preparation.<br><br>

                    ✔ Periodic question sets and word quiz helps students to keep the preparation on track. <br><br>

                `,
            'image': 'ms.jpg',
            'skills': ['JavaScript', 'ReactJS', 'Firebase', 'Git', 'VSCode', 'Material UI', 'Google API', 'Selenium', 'JSON', 'Netlify'],
            'github': 'https://github.com/balajibetadur/Study-Abroad'
        },
        {
            'title': 'Moving Window Object detection',
            'purpose': `
                
                    ✔ There was a hackathon on Computer Vision held by the Indian Institute of Technology, Bombay. We were required to classify/detect the traffic signals in such images, where there is a crowd, multiple symbols, and the size of the signs varied from 100% to 2% to image ratio.<br><br>

                    ✔ I needed a unique way to solve this because conventional methods would fail to give better accuracy on tiny signs than regular and large signs.<br><br>
                    
                    ✔ So, I developed a simple moving window to overcome this issue.<br><br>
                
                
                `,
            'description': `
                
                    ✔ The moving window method is a unique way of solving an object detection task with a classification algorithm.<br><br>

                    ✔ When the user adds an image, the window of smaller resolution is created and rolled over the image.<br><br>
                    
                    ✔ Every time this window moves by a specific distance/pixel, an image classification algorithm is executed.<br><br>
                    
                    ✔ At a certain point, if the image classification algorithm classifies the window/sub-image as a sign, that window is marked as a sign/object, and a sign-label is tagged to that image.<br><br>
                    
                    ✔ In the end, we have all possible signs in the image along with the coordinates of the sign, no matter the size of the sign.<br><br>
                `,
            'outcome': `
                
                    ✔ I won 2nd prize with this project in a national level hackathon held by the Indian Institute of Technology, Bombay.<br><br>

                    ✔ The accuracy, especially for tiny signs in the image, is 30% more than the conventional methods.<br><br>
                                
                `,
            'image': 'object.png',
            'skills': ['Pyhton', 'Keras', 'Neural Networks', 'Matplotlib', 'openCV', 'fastai', 'GCP', 'Git', 'Google Collab GPU', 'VSCode'],
            'github': 'https://github.com/balajibetadur/Traffic-sign-Recognition-2-methods'
        },
        {
            'title': 'Auto EDA',
            'purpose': `
                    
                    ✔ After I learned EDA skills up to some level, I realized many steps are being repeated in all projects/datasets.<br><br>

                    ✔ So, I created a simple module that takes any dataset and performs basic EDA steps.<br><br>
                    
                    ✔ Gradually, I started adding more features that enable the user to perform minimal possible EDA himself during the process.<br><br>

                `,
            'description': `
                    
                    ✔ Auto EDA is an application where users can upload the data and get the EDA reports generated automatically. <br><br>

                    ✔ I included both automated and manual options if the user wants to make any changes or add new inputs in the EDA.<br><br>
                    
                    ✔ I also used python packages like pandas-profiling, sweetviz, D-Tale, and Auto viz to generate charts and reports in a single click.<br><br>
                    
                    ✔ The auto EDA application generates insights like charts, tables, heatmap, correlation matrix, etc. that helps users to understand the data clearly.<br><br>
                
                
                `,
            'outcome': `
                
                    ✔ It reduced repetitious tasks while exploring any dataset.<br><br>

                    ✔ Charts and plots helped to understand data in a better way.<br><br>
                    
                    ✔ Data with 600,000 rows was analyzed in less than 2 seconds.<br><br>
                    
                    ✔ These analyses and reports can be exported, which helped them import easily using python.<br><br>

                `,
            'image': 'eda.jpg',
            'skills': ['Pyhton', 'Javascript', 'Pandas', 'Numpy', 'Bootstrap', 'profiling', 'Git', 'Heroku',],
            'github': 'https://github.com/balajibetadur/EDA'
        },
        {
            'title': 'Automation',
            'purpose': `
                
                    ✔ There were many activities that I used to carry out every day. Once I started learning to program, I was curious if can automate everything, and it happens every day without my input at a given time.<br><br>

                    ✔ So, I started writing automation scripts. It began with simple alarms, notifications, sending WhatsApp messages.<br><br>
                    
                    ✔ And soon, I started exploring new things that help to optimize automation; web scraping and selenium.<br><br>
                    
                    ✔ I now can automate any monotonous activities, primarily browser-based tasks (filling google forms,  copy paste work, repetitive tasks, etc.)<br><br>

                `,
            'description': `
                
                    ✔ Automation scripts are simple programs that automate monotonous and repetitious tasks.<br><br>

                    ✔ I automate most of the activities I perform in my day-to-day life by putting my knowledge into use.<br><br>
                    
                    ✔ I used selenium to write python scripts that help to perform specific tasks on the browser.<br><br>
                    
                    ✔ Chrome driver helps to access the chrome web browser using selenium in python.<br><br>
                    
                    ✔ If the task is repetitive, then automation will carry out the job effectively in a very short time.   <br><br>             
                
                `,
            'outcome': `
                    
                    ✔ Won 2nd in Internshala Student Partner (ISP 19) among 40,000+ students by automating given tasks without human intervention.<br><br>

                    ✔ Automated multiple web scraping tasks that reduced time consumption by ten times compared to manually performing the same task.<br><br>

                    ✔ Automated login for Zerodha API for multiple accounts to get request tokens with a single click.<br><br>
                                
                `,
            'image': 'automate.jpg',
            'skills': ['Pyhton', 'Selenium', 'Pandas', 'Chromedriver', 'Scrapy', 'Git', 'MongoDB', 'Google Collab'],
            'github': 'https://github.com/balajibetadur/Automation'
        },
        {
            'title': 'Buggy - Debugging programming errors',
            'purpose': `

                    ✔ When I was a beginner in programming, I used to make many mistakes. My code was not perfect, and it had many errors. <br><br>

                    ✔ I was a self-learner, and sometimes I used to spend hours together to fix the errors. <br><br>

                    ✔ So I designed a simple python script, which helps the user find a solution in less than a second.<br><br>
                
                `,
            'description': `
                
                    ✔ Buggy is the python script that enables the user to find a solution for the error encountered during programming.<br><br>

                    ✔ Users can copy-paste the question as an input; the algorithm using cosine-similarity matching searches for a similar question and provide answers to the user.<br><br>

                    ✔ It also provides the top 10 related solutions to the error the user entered.<br><br>

                    ✔ Along with the solution for the error, the results also provide links, blogs, and related code snippet references.  <br><br>

                    ✔ I also wrote and published a research paper on this work named 'System Model to Effectively Understand Programming Error Messages Using Similarity Matching and Natural Language Processing' at International Conference on Cybernetics, Cognition and Machine Learning Applications.<br><br>

                `,
            'outcome': `
                
                    ✔ Although I developed this project when I was a beginner, It helped me solve many errors during my learning phase and saved hundreds of hours.<br><br>

                    ✔ I shared this with my peers and received positive feedback.<br><br>
                    
                    ✔ Future Work: We are working on the next version of this project, i.e., an extension for IDE's and browsers. <br><br>
                    
                    ✔ When the user encounters an error, the extension will automatically detect the error and provide the solution to the user.<br><br>
                    
                    ✔ Users can click on the suggestion by the extension to replace the original piece of code with the correct version of code.<br><br>

                `,
            'image': 'debug.jpg',
            'skills': ['Pyhton', 'Cosine Similarity MAtching', 'NLP', 'Sklearn', 'Keras', 'Google Collab', 'Neural Networks', 'VSCode', 'Selenium', 'Git'],
            'github': 'https://github.com/balajibetadur/Human-Machine-interaction-Chat-bots/tree/master/Error-Solution-Generator'
        },
        {
            'title': 'Spotty - Desktop Assisstant',
            'purpose': `
                
                    ✔ Spotty is my first project, which I developed during my first semester in college.<br><br>

                    ✔ There is a character called 'Iron Man' in MCU (Marvel Cinematic Universe). The character designs a natural language UI using Artificial Intelligence. I was intrigued by how technology can be used and was interested in building an AI bot myself.<br><br>
                    
                    ✔ So, I wrote a basic python script that works as a desktop assistant. It performs most of the generic tasks that humans do every day.<br><br>

                `,
            'description': `
                
                    ✔ Spotty is an entirely voice-based assistant that listens to your command and replies with an audio output.<br><br>

                    ✔ Users can ask questions or assign any task by saying it in the everyday language (English).<br><br>
                    
                    ✔ Few basic tasks performed are<br>
                        &nbsp;&nbsp;&nbsp;- Play music<br>
                        &nbsp;&nbsp;&nbsp;- Play videos (youtube, server, local storage)<br>
                        &nbsp;&nbsp;&nbsp;- Increase and decrease volume<br>
                        &nbsp;&nbsp;&nbsp;- Increase and decrease brightness<br>
                        &nbsp;&nbsp;&nbsp;- Search something on the web<br>
                        &nbsp;&nbsp;&nbsp;- Daily updates<br>
                        &nbsp;&nbsp;&nbsp;- Logout/Login<br>
                        &nbsp;&nbsp;&nbsp;- Shutdown/Restart<br>
                        &nbsp;&nbsp;&nbsp;- Keep an alarm<br><br>
                
                `,
            'outcome': `
                
                    ✔ A basic UI that helped me perform simple daily tasks just by sitting at my work table.<br><br>

                    ✔ There are two voices available; male and female voices.<br><br>
                    
                    ✔ New functions can be added explicitly to the program/code without any complications.<br><br>
                
                `,
            'image': 'spotty.jpg',
            'skills': ['Pyhton', 'Testing', 'Pyttx3', 'Speech Recognition', 'Panads', 'VSCode', 'Git'],
            'github': 'https://github.com/balajibetadur/spotty'
        },
        {
            'title': 'Portfolio',
            'purpose': `

                    ✔ I always wanted to build my portfolio website because I like to talk about my work<br>
                        &nbsp;&nbsp;&nbsp;- why I do something<br>
                        &nbsp;&nbsp;&nbsp;- what did I do<br>
                        &nbsp;&nbsp;&nbsp;- what are the outcomes/advantages <br><br>
                    
                    ✔ It also shows how good I am at what I do. A good, responsive website will reflect my skills in web development.<br><br>
                    
                    ✔ Additionally, It wasn't easy to cover my four-year journey on a single-page resume, so I built a website to showcase my skills and describe my work in detail.<br><br>

                `,
            'description': `
                
                    ✔ My portfolio website consists of ten sections<br>
                        &nbsp;&nbsp;&nbsp;- Home<br>
                        &nbsp;&nbsp;&nbsp;- About<br>
                        &nbsp;&nbsp;&nbsp;- Education<br>
                        &nbsp;&nbsp;&nbsp;- Skills<br>
                        &nbsp;&nbsp;&nbsp;- Research<br>
                        &nbsp;&nbsp;&nbsp;- Work Experience<br>
                        &nbsp;&nbsp;&nbsp;- Projects<br>
                        &nbsp;&nbsp;&nbsp;- Achievements<br>
                        &nbsp;&nbsp;&nbsp;- Extra-curricular<br>
                        &nbsp;&nbsp;&nbsp;- Contact<br><br>
                    
                    ✔ It is completely portable; Data from every section is fetched from a JSON file, where new users can change/add/remove the information.<br><br>
                    
                    ✔ The website is responsive, which creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.<br><br>

                `,
            'outcome': `
                
                    ✔ I can display my work in detail so that the reader will get a complete understanding of my work.<br><br>

                    ✔ People can use the same template, change the information in the JSON file and use it as their portfolio website.<br><br>
                    
                    ✔ People can reach out to me if interested in working on similar and interesting projects. It helps me to connect with new people and allows me to learn new things. <br><br>
                    
                    ✔ It also helps me to develop and grow my network.<br><br>
                
                `,
            'image': 'portfolio.jpg',
            'skills': ['JavaScript', 'Iconscout', 'JOSN', 'Netlify', 'Git', 'VSCode'],
            'github': 'https://github.com/balajibetadur/portfolio'
        }
    ],

    'Achievements': [
        '⚡ Runner up in 2 National-Level AI Competitions held by <b>Indian Institute of Technology, Bombay</b>.',
        '⚡ State-Level winner in collage (painting) at 21st Janani event held bu VTU.',
        '⚡ 6-star in python programming on Hackerrank Platform.',
        '⚡ Top ranker in 17+ challenges/hackathons/competitions on Hackerearth platform (Top 4).',
        '⚡ Winner in App Presentation in Appoloyd held by IEEE.',
        '⚡ Co-ordinator in university student clubs<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Technical Paper Presentation.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Design Thinking.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Fine Arts.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- National Service Scheme'
    ],
    'Certifications': [

        {'name' : 'Neural Networks and Deep Learning', 'link' : 'https://coursera.org/share/f8e14d74a1b26a4bcfdf545baf82468b'},
        {'name' : 'Data Science Methodology', 'link' : 'https://coursera.org/share/ecdbd88b038a686077ee5ca8c89d5526'},
        {'name' : 'Structuring Machine Learning Projects', 'link' : 'https://coursera.org/share/bc6e76ad1c94405a161f14728677c85a'},
        {'name' : 'Sequesnces, Time Series and Prediction', 'link' : 'https://coursera.org/share/0a6bf0931bf5208c0bc98a8954227a9b'},
        {'name' : 'Data Visualization with Python', 'link' : 'https://coursera.org/share/d19597c937d9db03944ebc4a8d7f5508'},
        {'name' : 'Data Analysis with Python', 'link' : 'https://coursera.org/share/f42522475476591a0d9bbf3e6ee355d3'},
        {'name' : 'Databases and SQL for Data Science with Python', 'link' : 'https://coursera.org/share/915a5dce9c56fe4cfb6207c2233ad659'},
        {'name' : 'Pyhton for Data Science, AI & Development', 'link' : 'https://coursera.org/share/ddc3869aa02cd0ec3057cdd6852d03d1'},
    ]


}


let certi = document.getElementById('certi__cards')
data.Certifications.forEach(certi_ => {
    console.log(certi)
    certi.innerHTML += '<a  class="certi__card" href = "'+certi_.link+'" target = "_blank"><div>' + certi_.name + '</div></a>'
})

let ach = document.getElementById('achs')

data.Achievements.forEach(achi => {
    ach.innerHTML += '<p class = "achievement">' + achi + '</p></br>'
})

let header = document.getElementById('header');
data.menu.forEach(option => {
    header.innerHTML += '<span class = "main__option"><a  href = "' + option.to + '">' + option.text + '</a></span>'
})

data.socialMedia.forEach(icon => {
    document.getElementById('social__media').innerHTML += "<a href='" + icon.to + "' target='_blank'><i class='" + icon.class + "'></i></a>"
});

data.socialMedia.forEach(icon => {
    document.getElementById('others').innerHTML += "<a href='" + icon.to + "' target='_blank'><i class='" + icon.class + "t c__icon'></i></a>"
});

data.menu.forEach(icon => {
    document.getElementById('menu').innerHTML += "<div class='icon__text'><a href='" + icon.to + "'> <i class='" + icon.class + "'></i>" + icon.text + "</a></div>"
});

let menuIcon = document.getElementById('open__menu')

if (menuIcon) {

    menuIcon.addEventListener('click', () => {
        document.getElementById('menu').classList.add('menu__show');
    })
}

let closeIcon = document.getElementById('close__menu')

if (closeIcon) {

    closeIcon.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('menu__show');
    })
}

let options = document.querySelectorAll('.icon__text')

options.forEach((option, i) => option.addEventListener('click', () => {

    document.getElementById('menu').classList.remove('menu__show');
})
)

resumeBtn = document.getElementById('resume');

if (resumeBtn) {
    resumeBtn.addEventListener('mouseenter', () => {
        document.getElementById('resume__icon').classList.add('anim');
    })
    resumeBtn.addEventListener('mouseleave', () => {
        document.getElementById('resume__icon').classList.remove('anim');
    })
}


whatIDo = document.getElementById('about__data')

data.whatIdo.forEach(item => {
    temp = '<p class="what__i__do__title" id="what__i__do__title">' + item.title + '</p><div class = "d" id="d">'

    temp += '<img class = "DSAI__img" id ="DSAI__img" src="images/' + item.image + '" alt="" srcset=""><div class="about__desc" id="about__desc">';

    // ele = document.getElementById('about__desc')
    item.description.forEach(desc => {
        temp += '</br><p class ="about__description" >' + desc + '</p>'
    })

    temp += '</div>'
    whatIDo.innerHTML += temp

})

// data.whatIdo.forEach(item => {
//     whatIDo.innerHTML += '<p class="what__i__do__title" id="what__i__do__title">'+item.title+'</p><div class = "d" id="d"></div>'

//     let ele = document.getElementById('d')
//     ele.innerHTML += '<img class = "DSAI__img" id ="DSAI__img" src="images/'+item.image+'" alt="" srcset=""><div clas="about__desc" id="about__desc"></div>';

//     ele = document.getElementById('about__desc')
//     item.description.forEach(desc => {
//         ele.innerHTML += '</br><p class ="description" >'+desc+'</p>'
//     })
// })

skillBars = document.getElementById('skillBars');

data.skills.forEach(skill => {
    skillBars.innerHTML += '<div class = "bars"><div class="fullBar" id="fullBar"><div style = "width: ' + skill.Level * 300 + 'px" class="bar" id="bar"> <p class="skills__text" id="skills__text">' + skill.skill + '</p></div></div></div>'
})


let works = document.getElementById('r__internships')

data.work.Research_Internships.forEach(work => {

    works.innerHTML += '<div class="card" id="card"><div class="card__name" id="card__name">' + work.location + '</div> <img class = "card__img"src="images/' + work.image + '" alt="" srcset=""> <div class="details" id="details"> <p class="location" id="location"> ' + work.name + '</p><p class="duration" id="duration"> ' + work.duration + ' </p> </div><p class ="view__more">view</p></div><div class="modal" id="modal"><div class="modal__content" id="modal-content"> <i class="uil uil-times modal__close close__ind"></i><p class="modal__title" id="modal__title">' + work.name + '</p> </br><div class="modal__set" id="modal__set"> <div class ="dec__sections"><p class="outcome" id="outcome">Description</p><hr>' + work.description + '</div><div class ="dec__sections"> <p class="outcome" id="outcome">Outcome</p><hr>' + work.outcome + '</div></div> </div>'
})

let pubs = document.getElementById('pubs')

data.work.Publications.forEach(work => {

    pubs.innerHTML += '<div class="card__pub" id="card__pub"><div class="card__name__pub" id="card__name">' + work.location + '</div> <div class="details__pub" id="details__pub"> <p class="pub__name" id="pub__name"> ' + work.name + '</p> </div><p class ="pub__more">' + work.progress + '</p></div>'
})

works = document.getElementById('i__internships')

data.work.Industrial_Internships.forEach(work => {

    works.innerHTML += '<div class="card" id="card"><div class="card__name" id="card__name">' + work.location + '</div> <img class = "card__img"src="images/' + work.image + '" alt="" srcset=""> <div class="details" id="details"> <p class="location" id="location"> ' + work.name + '</p><p class="duration" id="duration"> ' + work.duration + ' </p> </div><p class ="view__more">view</p></div><div class="modal" id="modal"><div class="modal__content" id="modal-content"> <i class="uil uil-times modal__close"></i><p class="modal__title" id="modal__title">' + work.name_ + '</p></br> <div class="modal__set" id="modal__set"> <div class ="dec__sections"><p class="outcome" id="outcome">Description</p><hr>' + work.description + ' </div><div class ="dec__sections"><p class="outcome" id="outcome">Outcome</p><hr>' + work.outcome + '</div> </div></div></div>'


})

works = document.getElementById('v__internships')

data.work.Volunteerships.forEach(work => {

    works.innerHTML += '<div class="card" id="card"><div class="card__name" id="card__name">' + work.location + '</div> <img class = "card__img"src="images/' + work.image + '" alt="" srcset=""> <div class="details" id="details"> <p class="location" id="location"> ' + work.name + '</p><p class="duration" id="duration"> ' + work.duration + ' </p> </div><p class ="view__more">view</p></div><div class="modal" id="modal"><div class="modal__content vol__modal" id="modal-content"> <i class="uil uil-times modal__close close__ind"></i><p class="modal__title" id="modal__title">' + work.name + '</p> <hr>' + work.description + '</div> </div>'
})

let modals = document.querySelectorAll('.modal')
let cards = document.querySelectorAll('.card')
let close = document.querySelectorAll('.modal__close')


cards.forEach((card, i) => card.addEventListener('click', () => {
    modals[i].classList.add('block');
}))


document.querySelectorAll('.modal').forEach((card, i) => card.addEventListener('click', () => {
    modals.forEach(modal => {
        modal.classList.remove('block')
    }
    )
}))



close.forEach((card, i) => card.addEventListener('click', () => {
    modals.forEach(modal => {
        modal.classList.remove('block')
    }
    )
}))

let projects_ = document.getElementById('project__cards')

data.projects.forEach(project => {
    projects_.innerHTML += '<div style="background-image: url(images/' + project.image + ');" class="project__card" id="project__card"><p class="project__name" id="project__name">' + project.title + '</p><p class ="more">view more...</p></div><div class="project__modal" id="modal"><div class="modal__content" id="modal-content"> <i class="uil uil-times project__modal__close"></i><p class="modal__title" id="modal__title">' + project.title + '</p><br><div class ="proj__skills" id ="proj__skills ' + project.title + '"></div></br> <div class="modal__set" id=modal__set"><div class = "proj__sections"><p class="outcome" id="outcome">Purpose</p><hr>' + project.purpose + '</div><div class = "proj__sections"><p class="outcome" id="outcome">Description</p><hr>' + project.description + ' </div><div class = "proj__sections"><p class="outcome" id="outcome">Outcome</p><hr>' + project.outcome + '</div></div> <div class="github" id="github"> <a class="aa icon__github" target = "_blank" href="' + project.github + '"><i class="uil uil-github "><span class="github__text">&nbsp;&nbsp; GitHub</span></i></div></div></div>'
})

data.projects.forEach(proj => {
    proj.skills.forEach(skill => {
        document.getElementById('proj__skills ' + proj.title).innerHTML += '<span class = "projects__skills">' + skill + '</span>'
    })
})

let projectCards = document.querySelectorAll('.project__card');
let projectModals = document.querySelectorAll('.project__modal')
let projectClose = document.querySelectorAll('.project__modal__close')

projectCards.forEach((card, i) => card.addEventListener('click', () => {
    console.log('hu', projectCards)
    projectModals[i].classList.add('block');
}))

projectClose.forEach((card, i) => card.addEventListener('click', () => {
    projectModals.forEach(modal => {
        modal.classList.remove('block')
    }
    )
}))

document.querySelectorAll('.project__modal').forEach((card, i) => card.addEventListener('click', () => {
    projectModals.forEach(modal => {
        modal.classList.remove('block')
    }
    )
}))
