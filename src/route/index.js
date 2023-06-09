// Підключаємо технологію express для back-end сервера
const express = require('express')
    // Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//            ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function(req, res) {
    // res.render генерує нам HTML сторінку

    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('index', {
            salary: '600 $ в місяц',
            address: "Золотые ворота 2А",
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function(req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('summary', {
        // ↙ сюди вводимо JSON дані
        salary: '600 $ в місяц',
        summary: {
            text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
            work on a new project I learn the domain and try to understand the idea of the project. Good team
            player, every colleague is a friend to me.`,
            title: {
                big: false,
                name: `Summary`
            },
        },
        experience: {
            text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
                tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                for such events like: money line - first win / draw / second win, totals etc.`,
            title: {
                big: true,
                name: `Other experience`
            },
        },
        address: "Золотые ворота 2А",
        links
    })
})

// ================================================================ 



var main = {
    certificates: {
        university: {
            name: 'university',
            id: 1
        },
        school: {
            name: 'school',
            id: 2
        },
        courses: {
            name: 'courses',
            id: 3
        }
    }
}

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function(req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
        // ↙ сюди вводимо JSON дані
        salary: '600 $ в місяц',
        names,
        main,
        title: {
            big: true,
            name: ['My education', 'My certificates']
        },
        address: "Золотые ворота 2А",
        links
    })
})

// ================================================================ 

var hobbies = {
    university: {
        name: 'HTML',
        isMain: true
    },
    school: {
        name: 'CSS',
        isMain: true
    },
    courses: {
        name: 'JavaScript',
        isMain: false
    }
}



router.get('/skills', function(req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
        // ↙ сюди вводимо JSON дані
        salary: '600 $ в місяц',
        address: "Золотые ворота 2А",
        title: {
            name: 'My hobbies',
            big: true
        },
        hobbies,
        links
    })
})

// ================================================================ 


router.get('/work', function(req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('work', {
        // ↙ сюди вводимо JSON дані
        layout: "big",
        links,
        title: 'My projects',
        salary: '600 $ в місяц',
        address: "Золотые ворота 2А",
        main: {
            works: {
                position: "Junior Fullstack dev",
                company: {
                    url: 'www.com',
                    name: "ItBrains"
                },
                url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
                duration: {
                    from: '12/34/1232',
                    to: "12/34/5412"
                },
                projectAmount: 3,
                projects: {
                    name: 'first',
                    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
                    about: 'There are grammar debates that never die; and the ones highlighted in the questions in this quiz are sure to rile everyone up once again. Do you know how to answer the questions that cause some of the greatest grammar debates?',
                    stackAmount: 3,
                    stack: [{
                            name: 'react,js',
                        },
                        {
                            name: 'HTML / CSS',
                        },
                        {
                            name: 'Nodejs'
                        }
                    ],
                    awardsAmount: 2,
                    awards: [{
                            description: "output hello world"
                        },
                        {
                            description: 'have many issues'
                        }
                    ]
                }

            }
        }
    })
})

var links = {

    1: {
        url: "mailto:dmytro@mail.com",
        title: 'dmytro@mail.com',
        line: true
    },
    2: {
        url: "mailto:dmytro@mail.com",
        title: '+380670000123',
        line: true
    },
    3: {
        url: "https://www.linkedin.com/in/dmytro-test",
        title: 'LinkedIn',
        line: false
    }
}
var names = [{
            name: "university",
            isEnd: true
        },
        {
            name: 'school',
            isEnd: true
        },
        {
            name: 'courses',
            isEnd: false
        }
    ]
    // ================================================================ 

router.get('/person', function(req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('person', {
        layout: "person",
        person: {
            name: 'Emma Johnson',
            age: 32,
            gender: 'Female',
            address: {
                street: '123 Main St',
                city: 'New York',
                state: 'NY',
                zip: '10001',
                country: 'USA',
            },
            education: [{
                degree: 'Bachelor of Science',
                major: 'Computer Science',
                university: 'Massachusetts Institute of Technology',
                graduationYear: 2012,
            }, ],
            workExperience: [{
                company: 'Google',
                title: 'Software Engineer',
                startDate: '2012-06-01',
                endDate: '2016-12-31',
                responsibilities: [
                    'Developed new features for Google Maps',
                    'Worked on improving search algorithms',
                ],
                year_founded: 1990,
                industry: 'Technology',
                employees: [{
                    name: 'John Smith',
                    position: 'CEO',
                    department: 'Executive',
                    projects: [{
                        name: 'Project Alpha',
                        description: 'Developing new software platform',
                        status: 'In Progress',
                        teams: [{
                            team_name: 'Awesome Team',
                            team_leader: {
                                name: 'John Smith',
                                title: 'Team Leader',
                                email: 'john.smith@example.com',
                            },
                            team_members: [{
                                name: 'Alice Johnson',
                                title: 'Software Engineer',
                                email: 'alice.johnson@example.com',
                                skills: ['Java', 'Python', 'SQL'],
                                projects: [{
                                    name: 'Project A',
                                    description: 'Lorem ipsum dolor sit amet',
                                    technologies: [
                                        'Java',
                                        'Spring Framework',
                                    ],
                                    team_members: [{
                                            name: 'Bob Lee',
                                            title: 'Software Engineer',
                                        },
                                        {
                                            name: 'Cindy Chen',
                                            title: 'UI Designer',
                                        },
                                    ],
                                }, ],
                            }, ],
                        }, ],
                    }, ],
                }, ],
            }, ],
        },
    })
})


// Підключаємо роутер до бек-енду
module.exports = router