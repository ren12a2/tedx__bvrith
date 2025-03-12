const profiles = {
    2025: [
        {
            name: "Exciting Speakers Coming Soon!",
            role: "Stay Tuned for Big Announcements",
            description: "Our 2025 speaker lineup is currently under wraps, but we promise it's going to be incredible! Expect industry leaders, visionaries, and changemakers who will inspire and challenge the way we think about the future. Keep an eye on this space as we unveil our speakers one by one!",
            image: "img/media/cs.jpg"
        }
    ],
    2024: [
        {
            name: "Dr. Minal Chandra",
            role: "Co-Founder, Epionecenter for Pain Relief",
            description: "Dr. Minal Chandra, a distinguished Pain Physician with over a decade of experience, is a renowned figure in Pain Medicine, advocating for effective healthcare management through lectures, and as an Educator at Essential Pain Management; hailing from Ranchi, she broke societal norms with support from non-conservative parents, embodying the mantras of hard work and punctuality, earning accolades such as the India 100 Women Icon Award and Women of Substance Award.",
            image: "../img/lastyear_speakers/minal chandra.png"
        },
        {
            name: "Mansi Sharma Gupta",
            role: "Career Analyst",
            description: "Mansi Sharma Gupta, a compelling speaker and advocate for self-discovery, conducts impactful seminars and webinars on parenting, career guidance, and uncovering the 'unlived life,' offering enriching experiences with insights and 'aha' moments; leveraging her wit and knowledge, she empowers individuals to holistically transform their lives, emphasizing the importance of scientifically selecting career paths for successful fulfillment of dream aspirations.",
            image: "../img/lastyear_speakers/Mansi.jpg"
        },
        {
            name: "Roopali Yadugiri",
            role: "Director, Suchirindia Group",
            description: "Roopali Kiron Yadugiri, the dynamic Executive Director of Suchirindia Hospitality and Director of Suchirindia Foundation, showcases exceptional leadership and creativity in the leisure and hospitality domains, embodying a passion for industry excellence while actively contributing to state and national endeavors through her commitment to outstanding guest experiences.",
            image: "../img/lastyear_speakers/Roopali.jpg"
        },
        {
            name: "Sai Abhinay Chepuri",
            role: "Serial Entrepreneur",
            description: "Sai Abhinay Chepuri, a seasoned Entrepreneur, Innovation Enabler, and Ecosystem Builder, evolved from a successful serial entrepreneur to a mentor, leveraging diverse sector experience in India and Southeast Asia; with a background in fundraising, M&A, and strategic partnerships, he now contributes to startup innovation at T-Hub, a major startup ecosystem in India in collaboration with government and industry partners.",
            image: "../img/lastyear_speakers/Abhinay.jpeg"
        },
        {
            name: "Sandeep Chatterjee",
            role: "Supply Chain and Sustainability Leader, IBM Consulting",
            description: "Sandeep is a Supply Chain and Sustainability Leader at IBM Consulting, bringing extensive expertise from roles at Deloitte, KPMG, Tata Motors, Lafarge, Infosys, and Oracle Consulting; he excels in supply chain management, business process reengineering, network optimization, sustainability, and ERP advisory globally. Additionally, he serves as a Member of the Board of Governors at IIM Kozhikode, CEO, and Chairman of the International Supply Chain Education Alliance (ISCEA), actively promoting global awareness of supply chain management and holding an executive position on the ISCEA International Standards Board.",
            image: "../img/lastyear_speakers/Sandeep.JPG"
        },
        {
            name: "Sneha Tiwari",
            role: "Sports Physiotherapist",
            description: "Sneha Tiwari, one of India's youngest sports physiotherapists, holds key roles with BCCI for Andhra women’s cricket teams and is the Founder, Clinical Director, and Chief Consultant at Momentum Physio and Rehabilitation Center. A former Under-19 Andhra cricket team player, she brings a multidisciplinary approach to sports injury management with multiple degrees in sports physiotherapy, distinguishing herself as a dedicated and accomplished professional.",
            image: "../img/lastyear_speakers/Sneha.jpg"
        },
        {
            name: "Vanitha Datla",
            role: "Vice Chairperson of Elico",
            description: "Vanitha Datla is the Vice Chairperson of Elico, a prominent player in Hyderabad's Analytical Instrumentation Industry, and the Managing Director of Elico Healthcare Services Ltd. She holds a Chartered Financial Analyst designation and is currently pursuing an executive doctoral program at the Indian School of Business, focusing on the experiences of women in Indian family businesses. With nearly three decades of diverse professional experience, her expertise spans sectors like Financial Services, Insurance, Cement, Power, Security, Instrumentation, and BPO services, with international stints in the USA and India.",
            image: "../img/lastyear_speakers/vanitha.jpg"
        },
        {
            name: "Samantha Reddy",
            role: "Partner, Quartzkraft LLP",
            description: "Samantha Reddy graduated from London Business School in 2011 with a Sloan fellowship, Masters in Strategy and Leadership for Senior Executives. She has 23 years of professional and entrepreneurial experience in for-profit and not-for-profit enterprises, large corporations, and start-up companies in varied roles ranging from Business strategy to Financial management and product management.",
            image: "../img/lastyear_speakers/samantha.jpg"
        },
        {
            name: "Shreemayi Reddy",
            role: "Influencer and Entrepreneur",
            description: "Shreemayi Reddy, a Fashion and Lifestyle influencer with 159K followers, radiates cosmic charm through her captivating posts, creating a space where followers feel seen and understood. Recognized as the Cosmopolitan Emerging Beauty Influencer of 20-21, she transforms the digital landscape, turning the ordinary into the extraordinary in her enchanting world.",
            image: "../img/lastyear_speakers/shreemayi.jpg"
        },
        {
            name: "Vithika Sheru",
            role: "Film Actress",
            description: "Vithika Sheru, born on February 2, 1994, in Bhimavaram, is a versatile Indian actress excelling in Telugu, Tamil, and Kannada cinema. With a diploma in fashion design, she started as a child artist in Telugu TV, making her Kannada debut at 15. Her Tamil debut in 2014, 'Uyir Mozhi,' showcased her commitment, and as a social media influencer with 3.7 million followers, she emphasizes women's empowerment, drawing from her own story of resilience.",
            image: "../img/lastyear_speakers/vithika.JPG"
        }, {
            name: "Moksha Kalyanram Abhiramula",
            role: "Advocate",
            description: "Dr. Moksha Kalyanram Abhiramula, a seasoned legal expert, with over more than two decades of proficiency in corporate, taxation, civil, and ADR laws. Leading La Mintage Legal LLP, a law firm specialized in providing solutions to complex corporate, IBC, Tax, and property matters. Recognized as the 'Entrepreneur of the Year 2022' and a 'Game Changer,' his vision extends to revolutionizing global dispute resolution. As the driving force behind La Mintage Dispute Resolution Hub LLP, he leverages modern technology to offer transparent mediation, conciliation, and arbitration services.",
            image: "../img/lastyear_speakers/Moksha.jpg"
        }
    ]
};

function changeYear(year) {
    document.querySelectorAll(".timeline ul li").forEach(li => li.classList.remove("active"));
    document.getElementById(`y-${year}`).classList.add("active");

    const profileContainer = document.getElementById("profile-container");
    profileContainer.innerHTML = "";

    profiles[year].forEach(person => {
        const profileHTML = `
            <div class="profile">
                <img src="${person.image}" alt="${person.name}">
                <div>
                    <h2>${person.name}</h2>
                    <h4>${person.role}</h4>
                    <br>
                    <p>${person.description}</p>
                </div>
            </div>
        `;
        profileContainer.innerHTML += profileHTML;
    });
}

// Load default year (2025) on page load
changeYear(2025);