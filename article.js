// const articles = [{'title': ,'subtitle': ,'mainText': }, {'title': ,'subtitle': ,'mainText': }]

// הקוד רץ על האובטייקט וממקם את השדות מהאובייקט בדף לפי הפנוציה בג'אווהסקפירט

const articles = [
    {
        img: 'article1pic.jpg',
        title: 'Deadlines – A Personal Growth Catalyst',
        introduction:
            'Everybody hates deadlines. It’s stressful being told to finish something by a specific date. I’ve met more than a few people, including myself, who have lost sleep waiting eagerly for a critical response needed to continue working on tasks related to the due date. It can also be, under the right conditions, a chance for development. Here I’ll try to explore some of the things we can control when facing a project with a strict deadline down the road, in big and small enterprises alike:',
        sections: [
            {
                title: "Slay the 'Dragon' First, Worry About the 'Goblins' Later",
                content:
                    "We all have our strengths and weaknesses. When faced with a deadline, we get into a 'game time' mindset, trying to get things done as quickly as possible. This often leads us to play to our strengths, clearing tasks one after another—like tackling a horde of goblins in a Dungeons & Dragons game. The unintended result is that we leave the tasks we're hesitant to confront, for whatever reason, until the end. It's understandable; it's much more challenging to face a 'Dragon.' Our 'Dragon' might be a difficult phone call, a confrontation with a colleague, an assignment that highlights a gap in our skills, or a complex sequence of tasks. Whatever it is, approaching a deadline with a focus on 'working on my weaknesses' can be an empowering shift. Not to mention, it’s an opportunity to push our professional boundaries.",
            },
        ],
    },
    {
        img: 'article2pic.jpg',
        title: 'Working on a Project: How Do We Deal with Variables Out of Our Control?',
        introduction:
            "Need information from a slow responder? Have a co-worker on vacation abroad? A client who needs more time to decide. Problem… There’s little we can do about waiting for important information from another party, and it’s frustrating—especially if that information creates a 'bottleneck' that prevents us from moving forward with our own work. What we can do is focus on the things within our control. And there’s no shortage of those.",
        sections: [
            {
                title: "Cast the Line and Wait for a 'Bite'",
                content:
                    "One approach is to cast the line for responses at the start of the day and work on something else until you get a 'bite.'",
            },
            {
                title: 'Set Firm but Reasonable Conditions',
                content:
                    "Another is to set a reasonable but firm set of conditions to encourage a quicker response. Saying something like, 'I understand that you need more time; I’m asking you to prioritize it, as it’s causing a delay in my work,' can make a big difference in response time.",
            },
            {
                title: 'Appreciate the Effort',
                content:
                    'And if they do prioritize your request, make sure to follow up with some appreciation. There’s no reason to miss a chance to strengthen work relationships.',
            },
            {
                title: 'Follow Up the Big Picture',
                content:
                    'Often, the project you are working on is critical for another person down the chain of work, whether it’s a colleague from your firm, an outsource person, or a client. Everyone needs to be able to rely on each other. By now, we all know you have to understand the big picture in order to provide value; we have been told that since our days in high school. What sometimes we lack doing is following up on it. While managing a project, we can get lost in the details, stretching on a single specific thing, while a timely follow-up is a good means to lift your head from the specs and receive much-needed proportion to continue your work. Sometimes it may provide additional benefits such as discovering a task down the line is no longer relevant or has become highly relevant and needs to take priority. It also gives us the opportunity to show our intent and our commitment to the company, keeping us in the good favor of our colleagues and our name known in the company.',
            },
        ],
        closing:
            'Got any more methods I didn’t come up with? Happy to hear in the comments!',
    },
]

const articleContainer = document.getElementById('article-container')
let sectionBuilder = ''

articles.forEach(function (articles) {
    for (let i = 0; i < articles.sections.length; i++) {
        sectionBuilder += `<h4>${articles.sections[i].title}</h4>
        <p class="paragraph">${articles.sections[i].content}</p>`
    }
    articleContainer.innerHTML += `<div class="articleCard">
           <h1>${articles.title}</h1>
            <h2>${articles.introduction}</h2>
            ${sectionBuilder}
             <img src=${articles.img} class='article-image'>
        </div>`
})
// repeatable code
//             <h4>${articles.sections[0].title}</h4>
//             <p class="paragraph">${articles.sections[0].content}</p>

//             <h4>${articles.sections[1].title}</h4>
//              <p class='paragraph'>${articles.sections[1].content}</p>

//              <h4>${articles.sections[2].title}</h4>
//              <p class='paragraph'>${articles.sections[2].content}</p>

//              <h4>${articles.sections[3].title}</h4>
//              <p class='paragraph'>${articles.sections[3].content}</p>

const productDropdown = document.getElementById('products')
