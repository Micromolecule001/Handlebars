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

router.get('/program', function(req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('program', {
        layout: 'person',
        program: {
            excursion: {
                name: 'Cultural Tour',
                location: {
                    city: 'Paris',
                    country: 'France',
                },
                date: '2023-06-15',
                program: [{
                        name: 'Museum Visit',
                        type: 'Art',
                        duration: 3,
                        details: {
                            museum: {
                                name: 'The Louvre',
                                location: {
                                    address: 'Rue de Rivoli',
                                    city: 'Paris',
                                    country: 'France',
                                },
                                exhibits: [{
                                        name: 'Mona Lisa',
                                        artist: 'Leonardo da Vinci',
                                        description: 'Iconic portrait painting',
                                        audio_guide: true,
                                    },
                                    {
                                        name: 'Winged Victory of Samothrace',
                                        artist: null,
                                        description: 'Ancient Greek statue of Nike, the goddess of victory',
                                        audio_guide: true,
                                    },
                                ],
                            },
                            guide: {
                                name: 'Francois',
                                language: 'French',
                                rating: 4.8,
                            },
                        },
                    },
                    {
                        name: 'Cultural Show',
                        type: 'Music and Dance',
                        duration: 2,
                        details: {
                            venue: {
                                name: 'Moulin Rouge',
                                location: {
                                    address: '82 Boulevard de Clichy',
                                    city: 'Paris',
                                    country: 'France',
                                },
                            },
                            performers: [{
                                    name: 'Mireille Mathieu',
                                    type: 'Chanson singer',
                                },
                                {
                                    name: "Ballet de l'Opéra National de Paris",
                                    type: 'Classical ballet company',
                                },
                            ],
                            guide: {
                                name: 'Sophie',
                                language: 'English',
                                rating: 4.6,
                            },
                        },
                    },
                ],
            },
        },
    })
})

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

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function(req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('bio', {
        layout: 'bio',
        name: 'Albert Einstein',
        birthdate: 'March 14, 1879',
        birthplace: 'Ulm, Kingdom of Württemberg, German Empire',
        deathdate: 'April 18, 1955',
        deathplace: 'Princeton, New Jersey, United States',
        nationality: 'Swiss, German, American',
        occupation: 'Theoretical Physicist',
        known_for: [
            'Theory of Relativity',
            'E=mc²',
            'Photoelectric Effect',
            'Brownian Motion',
        ],
        education: [{
            degree: 'Doctor of Philosophy',
            field: 'Physics',
            institution: 'University of Zurich',
            year: 1905,
        }, ],
        notable_publications: [{
                title: 'On the Electrodynamics of Moving Bodies',
                year: 1905,
                publisher: 'Annalen der Physik',
            },
            {
                title: 'Does the Inertia of a Body Depend Upon Its Energy Content?',
                year: 1905,
                publisher: 'Annalen der Physik',
            },
        ],
        partners: [{
                name: 'Mileva Marić',
                relationship: 'First wife',
                years: '1903-1919',
            },
            {
                name: 'Elsa Einstein',
                relationship: "Second wife, also Einstein's first cousin",
                years: '1919-1936',
            },
        ],
        awards: [{
            title: 'Nobel Prize in Physics',
            year: 1921,
            description: 'Awarded for his explanation of the photoelectric effect',
        }, ],
        influences: [
            'Isaac Newton',
            'James Clerk Maxwell',
            'Hermann Minkowski',
        ],
        influenced: [
            'Niels Bohr',
            'Erwin Schrödinger',
            'Werner Heisenberg',
            'Richard Feynman',
        ],
        quotes: [
            'Imagination is more important than knowledge.',
            'I have no special talent. I am only passionately curious.',
            'The important thing is not to stop questioning.',
            'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
        ],
        major_discoveries: [{
            title: 'Photoelectric Effect',
            year: 1905,
            description: 'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
        }, ],
        contributions: {
            title: 'Inventions',
            description: 'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
            year: 'Late 15th to early 16th century',
            field: 'Invention',
        },
    })
})

// ================================================================

router.get('/web', function(req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('web', {
        layout: 'person',
        web: {
            languages: [{
                    name: 'HTML',
                    version: 'HTML5',
                    description: 'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
                    elements: [{
                            name: 'div',
                            description: 'Defines a division or a section in an HTML document.',
                            attributes: [{
                                    name: 'id',
                                    description: 'Specifies a unique id for an HTML element.',
                                },
                                {
                                    name: 'class',
                                    description: 'Specifies one or more class names for an HTML element.',
                                },
                            ],
                        },
                        {
                            name: 'p',
                            description: 'Defines a paragraph in an HTML document.',
                            attributes: [{
                                    name: 'id',
                                    description: 'Specifies a unique id for an HTML element.',
                                },
                                {
                                    name: 'class',
                                    description: 'Specifies one or more class names for an HTML element.',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'CSS',
                    version: 'CSS3',
                    description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
                    properties: [{
                            name: 'color',
                            description: 'Sets the color of the text.',
                            values: [{
                                    value: 'red',
                                    description: 'Sets the text color to red.',
                                },
                                {
                                    value: 'blue',
                                    description: 'Sets the text color to blue.',
                                },
                            ],
                        },
                        {
                            name: 'background-color',
                            description: 'Sets the background color of an element.',
                            values: [{
                                    value: 'white',
                                    description: 'Sets the background color to white.',
                                },
                                {
                                    value: 'black',
                                    description: 'Sets the background color to black.',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'JavaScript',
                    version: 'ES6',
                    description: 'JavaScript is a programming language used to create interactive effects within web browsers.',
                    functions: [{
                            name: 'alert()',
                            description: 'Displays an alert box with a specified message and an OK button.',
                            parameters: [{
                                name: 'message',
                                type: 'string',
                                description: 'The message to display in the alert box.',
                            }, ],
                        },
                        {
                            name: 'getElementById()',
                            description: 'Returns the element with the specified ID.',
                            parameters: [{
                                name: 'id',
                                type: 'string',
                                description: 'The ID of the element to find.',
                            }, ],
                        },
                    ],
                },
            ],
        },
    })
})

// ================================================================


router.get('/js', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('js', {
            layout: 'basic',
            name: 'JavaScript',
            description: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
            history: {
                year: 1995,
                founder: 'Brendan Eich',
            },
            types: [
                'Number',
                'String',
                'Boolean',
                'Null',
                'Undefined',
                'Symbol',
                'Object',
            ],
            syntax: {
                variables: ['var', 'let', 'const'],
                functions: ['function'],
                conditionals: ['if', 'else', 'switch'],
                loops: ['for', 'while', 'do-while'],
                classes: ['class'],
            },
            features: [
                'First-class functions',
                'Closures',
                'Dynamic typing',
                'Prototype-based inheritance',
                'Asynchronous programming with Promises and async/await',
                'Modules with import/export statements',
            ],
            libraries: [
                'jQuery',
                'React',
                'Angular',
                'Vue',
                'Node.js',
                'Express.js',
                'Lodash',
                'Moment.js',
            ],
            tools: [
                'Babel',
                'Webpack',
                'ESLint',
                'Jest',
                'Mocha',
                'Chai',
                'Selenium',
                'Cypress',
            ],
            community: [{
                    name: 'Stack Overflow',
                    type: 'forum',
                },
                {
                    name: 'JavaScript Weekly',
                    type: 'newsletter',
                },
                {
                    name: 'The Changelog',
                    type: 'podcast',
                },
                {
                    name: 'CSS-Tricks',
                    type: 'blog',
                },
            ],
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================


router.get('/car', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('car', {
            layout: 'basic',
            make: 'Toyota',
            model: 'Camry',
            year: 2022,
            color: 'silver',
            features: {
                interior: {
                    seats: {
                        material: 'leather',
                        color: 'black',
                        heated: true,
                        ventilated: true,
                    },
                    dashboard: {
                        material: 'plastic',
                        color: 'black',
                        display: {
                            type: 'LCD',
                            size: 10.1,
                            resolution: '1280x720',
                            touchscreen: true,
                        },
                    },
                    audio: {
                        system: 'JBL',
                        speakers: 8,
                        subwoofer: true,
                        bluetooth: true,
                        USB: true,
                    },
                },
                exterior: {
                    wheels: {
                        size: 18,
                        type: 'alloy',
                        color: 'silver',
                    },
                    headlights: {
                        type: 'LED',
                        brightness: 'high',
                        automatic: true,
                    },
                    sunroof: {
                        type: 'panoramic',
                        size: 'large',
                        automatic: true,
                    },
                },
                safety: {
                    airbags: {
                        front: 2,
                        side: 2,
                        knee: 2,
                        rear: 2,
                    },
                    assistance: {
                        blind_spot_monitoring: true,
                        rear_cross_traffic_alert: true,
                        lane_departure_warning: true,
                        adaptive_cruise_control: true,
                        collision_warning: true,
                    },
                },
            },
            engine: {
                type: 'gasoline',
                displacement: 2.5,
                horsepower: 206,
                torque: 186,
                transmission: {
                    type: 'automatic',
                    gears: 8,
                },
            },
            fuel_economy: {
                city: 28,
                highway: 39,
                combined: 32,
            },
            price: {
                base: 25900,
                destination: 995,
                options: {
                    navigation: 1200,
                    moonroof: 800,
                    premium_paint: 595,
                },
                total: 28990,
            },
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/mac', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('mac', {
            layout: 'basic',
            name: 'Apple MacBook Pro',
            description: 'The ultimate notebook for power users',
            price: 1999.99,
            category: 'Computers & Tablets',
            features: {
                processor: {
                    brand: 'Intel',
                    model: 'Core i9',
                    speed: '2.3 GHz',
                    cores: 8,
                    cache: '16 MB',
                },
                memory: {
                    type: 'DDR4',
                    size: '32 GB',
                    speed: '2666 MHz',
                },
                storage: {
                    type: 'SSD',
                    size: '1 TB',
                },
                display: {
                    size: '16 inches',
                    resolution: '3072x1920',
                    technology: 'Retina',
                    color_space: 'P3',
                    brightness: '500 nits',
                    refresh_rate: '60 Hz',
                },
                graphics: {
                    brand: 'AMD',
                    model: 'Radeon Pro 5500M',
                    memory: '4 GB GDDR6',
                },
                ports: [{
                        type: 'Thunderbolt 3',
                        count: 4,
                        features: [
                            'Charging',
                            'DisplayPort',
                            'Thunderbolt (up to 40 Gbps)',
                            'USB 3.1 Gen 2 (up to 10 Gbps)',
                        ],
                    },
                    {
                        type: 'HDMI',
                        count: 1,
                    },
                ],
                battery: {
                    type: 'Lithium Polymer',
                    capacity: '100 Wh',
                    life: 'Up to 11 hours',
                },
                weight: '4.3 pounds',
                dimensions: {
                    height: '0.64 inch',
                    width: '14.09 inches',
                    depth: '9.68 inches',
                },
                operating_system: 'macOS',
                accessories: [{
                        name: 'Apple Magic Keyboard',
                        price: 99.99,
                    },
                    {
                        name: 'Apple Magic Mouse 2',
                        price: 79.99,
                    },
                    {
                        name: 'USB-C to USB Adapter',
                        price: 19.99,
                    },
                ],
            },
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================


router.get('/facebook', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('facebook', {
            layout: 'basic',
            name: 'Facebook',
            users: [{
                    id: 1,
                    name: 'John Doe',
                    gender: 'Male',
                    age: 30,
                    friends: [{
                            id: 2,
                            name: 'Jane Smith',
                            gender: 'Female',
                            age: 27,
                            mutual_friends: [{
                                id: 4,
                                name: 'Samantha Lee',
                                gender: 'Female',
                                age: 25,
                            }, ],
                        },
                        {
                            id: 5,
                            name: 'Mike Williams',
                            gender: 'Male',
                            age: 28,
                            mutual_friends: [{
                                id: 7,
                                name: 'David Kim',
                                gender: 'Male',
                                age: 29,
                            }, ],
                        },
                    ],
                    groups: [{
                            id: 1,
                            name: 'Hiking Enthusiasts',
                            description: 'A group for people who love hiking and the great outdoors',
                            members: [{
                                id: 8,
                                name: 'Sarah Johnson',
                                gender: 'Female',
                                age: 25,
                            }, ],
                        },
                        {
                            id: 2,
                            name: 'Foodies United',
                            description: 'A group for food lovers to share recipes and restaurant recommendations',
                            members: [{
                                    id: 5,
                                    name: 'Mike Williams',
                                    gender: 'Male',
                                    age: 28,
                                },
                                {
                                    id: 8,
                                    name: 'Sarah Johnson',
                                    gender: 'Female',
                                    age: 25,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 16,
                    name: 'Amy Lee',
                    gender: 'Female',
                    age: 30,
                    friends: [{
                        id: 15,
                        name: 'Peter Kim',
                        gender: 'Male',
                        age: 32,
                        mutual_friends: [{
                                id: 17,
                                name: 'David Chen',
                                gender: 'Male',
                                age: 33,
                            },
                            {
                                id: 19,
                                name: 'Erica Wong',
                                gender: 'Female',
                                age: 29,
                                mutual_friends: [{
                                    id: 20,
                                    name: 'Alex Lee',
                                    gender: 'Male',
                                    age: 31,
                                }, ],
                            },
                        ],
                        groups: [{
                                id: 3,
                                name: 'Travel Addicts',
                                description: 'A group for people who love to travel and explore new places',
                                members: [{
                                    id: 22,
                                    name: 'Jackie Chen',
                                    gender: 'Female',
                                    age: 26,
                                }, ],
                            },
                            {
                                id: 4,
                                name: 'Pet Lovers',
                                description: 'A group for people who love their furry friends',
                                members: [{
                                        id: 16,
                                        name: 'Amy Lee',
                                        gender: 'Female',
                                        age: 30,
                                    },
                                    {
                                        id: 25,
                                        name: 'John Smith',
                                        gender: 'Male',
                                        age: 33,
                                    },
                                ],
                            },
                        ],
                    }, ],
                },
            ],
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/task21', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('task21', {
            layout: 'basic',
            heading: {
                main: {
                    title: 'JavaScript',
                    text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
                    button_text: {
                        solid: 'Open page',
                        outline: 'Add to cart',
                    },
                },
                second: {
                    title: 'Stack Overflow',
                    text: 'First-class functions',
                    button_text: {
                        solid: 'Open page',
                        outline: 'Add to cart',
                    },
                },
                subblock: {
                    title: 'JavaScript Weekly',
                    text: 'Prototype-based inheritance newsletter',
                    button_text: {
                        solid: 'Open page',
                        outline: 'Add to cart',
                    },
                },
            },
            nested_display: {
                title: 'HTML',
                children_display: {
                    title: 'Outdated HTML tags',
                    text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
                    button: {
                        text: 'Орen',
                    },
                },
                header_text: 'Sections',
                button: {
                    text: 'Learn more',
                },
            },
            paragraph: {
                title: 'About modules',
                text: 'Modules with import/export statements',

                button: {
                    text: 'Open link page',
                    url: 'https://google.com',
                },
                list_name: [{
                        text: 'Github',
                        url: 'https://github.com/',
                    },
                    {
                        text: 'Bootstrap',
                        url: 'https://getbootstrap.com/',
                    },
                ],
            },
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task41', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('task41', {
            layout: 'basic',
            navigation: {
                links: [{
                        text: 'Home',
                        href: 'https://github.com/',
                    },
                    {
                        text: 'Contacts',
                        href: 'https://www.google.com/',
                    },
                    {
                        text: 'Help',
                        href: 'https://www.youtube.com/',
                    },
                ],
            },

            newsBlock: {
                title: 'Latest News',
                cards: [{
                        title: 'COVID-19 Vaccinations Begin in Europe',
                        description: 'As the world continues to grapple with the ongoing COVID-19 pandemic, Europe begins its vaccination rollout, with healthcare workers and the elderly among the first to receive the vaccine.',
                        isTop: false,
                        isNew: false,
                    },
                    {
                        title: 'Tesla Stock Surges After Record Sales',
                        description: "Tesla's stock price jumps 10% following the company's announcement of record sales in the last quarter, thanks in part to strong demand for its electric vehicles.",
                        isTop: true,
                        isNew: true,
                    },
                    {
                        title: 'New Study Shows Benefits of Meditation for Mental Health',
                        description: 'A new study published in the Journal of the American Medical Association finds that practicing mindfulness meditation can lead to improved mental health outcomes for people struggling with depression and anxiety.',
                        isTop: false,
                        isNew: false,
                    },
                    {
                        title: 'NASA Launches New Mars Rover',
                        description: "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
                        isTop: false,
                        isNew: true,
                    },
                    {
                        title: 'GameStop Shares Soar as Reddit Traders Rally',
                        description: 'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
                        isTop: false,
                        isNew: false,
                    },
                    {
                        title: 'UK Announces Plan to Ban Sale of Gas-Powered Cars by 2030',
                        description: 'In an effort to combat climate change, the UK government announces a plan to ban the sale of new gas-powered cars and vans by 2030, with hybrid vehicles to follow in 2035.',
                        isTop: true,
                        isNew: false,
                    },
                    {
                        title: 'New Study Shows Link Between Exercise and Longevity',
                        description: 'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
                        isTop: false,
                        isNew: false,
                    },
                    {
                        title: 'Amazon Expands Grocery Delivery Service',
                        description: 'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
                        isTop: false,
                        isNew: true,
                    },
                ],
            },

            goodsBlock: {
                tabs: [{
                        isActive: true,
                        isDisabled: false,
                        text: 'Electronics',
                    },
                    {
                        isActive: false,
                        isDisabled: false,
                        text: 'Home & Kitchen',
                    },
                    {
                        isActive: false,
                        isDisabled: false,
                        text: 'Clothing & Accessories',
                    },
                    {
                        isActive: false,
                        isDisabled: true,
                        text: 'Toys & Games',
                    },
                ],
                cards: [{
                        image: 'https://picsum.photos/400/200',
                        title: 'iPhone 13',
                        description: 'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
                        isHot: false,
                        isNew: false,
                    },
                    {
                        image: 'https://picsum.photos/400/200',
                        title: 'MacBook Pro',
                        description: "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
                        isHot: true,
                        isNew: false,
                    },
                    {
                        image: 'https://picsum.photos/400/200',
                        title: 'AirPods Pro',
                        description: "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
                        isHot: false,
                        isNew: false,
                    },
                    {
                        image: 'https://picsum.photos/400/200',
                        title: 'Sony Bravia XR A90J',
                        description: 'This OLED TV boasts a 4K resolution, HDR support, and a high refresh rate for smooth motion handling.',
                        isHot: false,
                        isNew: true,
                    },
                    {
                        image: 'https://picsum.photos/400/200',
                        title: 'Nintendo Switch OLED Model',
                        description: 'The latest iteration of the popular gaming console features a larger OLED screen and improved audio quality.',
                        isHot: false,
                        isNew: false,
                    },
                    {
                        image: 'https://picsum.photos/400/200',
                        title: 'Bose SoundLink Revolve+',
                        description: 'This portable Bluetooth speaker features 360-degree sound, water-resistant construction, and up to 16 hours of battery life.',
                        isHot: true,
                        isNew: true,
                    },
                ],
            },
            subscribe: {
                header: 'Unlock Premium Content',
                description: 'Subscribe to access exclusive content and features.',
                buttons: [{
                        text: 'Register Now',
                        link: 'https://www.youtube.com/',
                    },
                    {
                        text: 'Buy Subscription',
                        link: 'https://www.youtube.com/',
                    },
                ],
            },
            service: {
                title: 'Our Services',
                description: 'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
                buttons: [{
                    text: 'Show More',
                    link: 'https://www.youtube.com/',
                }, ],
            },

            footer: [
                [{
                        text: 'Home',
                        link: 'https://www.youtube.com/',
                    },
                    {
                        text: 'Trending',
                        link: 'https://www.youtube.com/feed/trending',
                    },
                    {
                        text: 'Subscriptions',
                        link: 'https://www.youtube.com/feed/subscriptions',
                    },
                    {
                        text: 'Library',
                        link: 'https://www.youtube.com/feed/library',
                    },
                ],
                [{
                        text: 'History',
                        link: 'https://www.youtube.com/feed/history',
                    },
                    {
                        text: 'Your Videos',
                        link: 'https://www.youtube.com/feed/my_videos',
                    },
                    {
                        text: 'Live',
                        link: 'https://www.youtube.com/live',
                    },
                    {
                        text: 'Settings',
                        link: 'https://www.youtube.com/account',
                    },
                ],
                [{
                        text: 'Watch Later',
                        link: 'https://www.youtube.com/playlist?list=WL',
                    },
                    {
                        text: 'Liked Videos',
                        link: 'https://www.youtube.com/playlist?list=LL',
                    },
                    {
                        text: 'Music',
                        link: 'https://www.youtube.com/music',
                    },
                    {
                        text: 'Gaming',
                        link: 'https://www.youtube.com/gaming',
                    },
                ],
                [{
                        text: 'Sports',
                        link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
                    },
                    {
                        text: 'News',
                        link: 'https://www.youtube.com/news',
                    },
                    {
                        text: 'Fashion & Beauty',
                        link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
                    },
                    {
                        text: 'Learning',
                        link: 'https://www.youtube.com/learning',
                    },
                ],
                [{
                        text: 'Report History',
                        link: 'https://www.youtube.com/feed/history/report_history',
                    },
                    {
                        text: 'Help',
                        link: 'https://support.google.com/youtube/?hl=en',
                    },
                    {
                        text: 'Send Feedback',
                        link: 'https://support.google.com/youtube/answer/4347644?hl=en',
                    },
                    {
                        text: 'About',
                        link: 'https://www.youtube.com/about/',
                    },
                ],
            ],
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task51', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('task51', {
            layout: 'basic',
            navigation: {
                links: [{
                        text: 'Home',
                        href: 'https://github.com/',
                    },
                    {
                        text: 'Contacts',
                        href: 'https://www.google.com/',
                    },
                    {
                        text: 'Help',
                        href: 'https://www.youtube.com/',
                    },
                    {
                        text: 'Exit',
                        href: null,
                    },
                ],
            },

            header: 'Оформлення замовлення',
            contacts_data: {
                title: 'Контактні дані',

                buttons: [{
                        text: 'Я новий покупець',
                        isPrimary: true,
                    },
                    {
                        text: 'Я постійний покупець',
                        isOutline: true,
                    },
                ],
                form: {
                    input: {
                        surname: {
                            label: 'Прізвище',
                            placeholder: 'Іванов',
                            caption: 'Введіть прізвище',
                        },
                        name: {
                            label: 'Ім’я',
                            placeholder: 'Іван',
                            caption: 'Введіть Ім’я',
                        },
                        phone: {
                            label: 'Мобільний телефон',
                            placeholder: '+38 (XXX) XXX XX XX',
                            caption: 'Введіть телефон',
                        },
                        email: {
                            label: 'Пошта',
                            placeholder: 'ivanivanov@ukr.net',
                            caption: 'Введіть Пошту',
                        },
                    },
                    switch: [{
                            text: 'Отримувати інформацію про новинки',
                            isActive: false,
                        },
                        {
                            text: 'Отримувати інформацію про знижки',
                            isActive: true,
                        },
                    ],
                },
            },
            action_block: [
                { text: 'Швидке замовлення', isSuccess: true },
                { text: 'Видалити', isDanger: true },
                { text: 'Детальніше', isInfo: true },
            ],
            total: {
                title: 'Всього',
                item_list: [
                    { name: 'Ноут', price: '25 000 ₴' },
                    { name: 'Мишка', price: '25 000 ₴' },
                    { name: 'Клава', price: '25 000 ₴' },
                ],
                additional_info: [
                    { text: 'Всього товарів', value: '75 000 ₴' },
                    { text: 'Купони', value: 'Немає' },
                    { text: 'Доставка', value: 'Безкоштовно' },
                ],
                total_price: {
                    text: 'Всього товарів',
                    value: '75 000 ₴',
                },
                button: [{
                        text: 'Підтвердити замовлення',
                        isPrimary: true,
                    },
                    {
                        text: 'Відмінити купони',
                        isOutline: true,
                    },
                ],
            },
            delivery: {
                title: 'Доставка',
                select: [{
                        label: 'Місто доставки',
                        placeholder: 'Оберіть місто доставки',
                        options: [
                            { value: '1', text: 'Київ' },
                            { value: '2', text: 'Харків' },
                            { value: '3', text: 'Одеса' },
                            { value: '4', text: 'Львів' },
                            { value: '5', text: 'Дніпро' },
                            { value: '6', text: 'Донецьк' },
                        ],
                    },
                    {
                        label: 'Район доставки',
                        placeholder: 'Оберіть район доставки',
                        options: [
                            { value: '1', text: 'Голосіївський' },
                            { value: '2', text: 'Оболонський' },
                            { value: '3', text: 'Печерський' },
                            { value: '4', text: 'Дарницький' },
                            { value: '5', text: 'Деснянський' },
                            { value: '6', text: 'Подільський' },
                        ],
                    },
                ],
                delivery_type: [{
                        type: 'Самовивіз з відділення Нової пошти',
                    },
                    {
                        type: 'Кур’єром Нової пошти',
                    },
                    {
                        type: 'Самовивіз з магазину',
                    },
                    {
                        type: 'Доставка закордон',
                    },
                ],
                payment: {
                    title: 'Оплата',
                    list: [{
                            type: 'Оплата при отриманні',
                            description: 'За тарифами перевізника',
                        },
                        {
                            type: 'Оплатити зараз',
                        },
                    ],
                },
                contact: {
                    title: 'Контактні дані отримувача',
                    surname: {
                        label: 'Прізвище',
                        placeholder: 'Іванов',
                        caption: 'Введіть прізвище',
                    },
                    name: {
                        label: 'Ім’я',
                        placeholder: 'Іван',
                        caption: 'Введіть Ім’я',
                    },
                    phone: {
                        label: 'Мобільний телефон',
                        placeholder: '+38 (XXX) XXX XX XX',
                        caption: 'Введіть телефон',
                    },
                    email: {
                        label: 'Пошта',
                        placeholder: 'ivanivanov@ukr.net',
                        caption: 'Введіть Пошту',
                    },
                },
                coment: {
                    label: 'Коментар',
                    placeholder: 'Я хочу, щоб',
                },
            },
            coupon: {
                title: 'Купони',
                select: {
                    availabel_coupon: {
                        label: 'Наявні купони',
                        placeholder: 'Виберіть купон',
                        options: [
                            { value: '1', text: 'SEEYALATER' },
                            { value: '2', text: 'HOTEL10' },
                            { value: '3', text: 'DOWNLOAD25' },
                        ],
                    },
                    friend_coupon: {
                        label: 'Купони за запрошених друзів',
                        placeholder: 'Виберіть купон',
                        options: [
                            { value: '1', text: 'TRAVEL5' },
                            { value: '2', text: '75VACA' },
                            { value: '3', text: '150VACA' },
                        ],
                    },
                },
                add: {
                    friend: {
                        label: 'Запросіть друзів та отримайте ще купонів',
                        placeholder: 'Введіть контактні дані друзів через ;',
                        caption: 'Напишіть електронні адреси/телефон друзів через “;”',
                    },
                    colleague: {
                        label: 'Запросити колег',
                        placeholder: 'Введіть контактні дані колег через ;',
                        caption: 'Напишіть електронні адреси/телефон колег через “;”',
                    },
                },
            },
            quiz: {
                title: 'Домоможи краще нам тебе зрозуміти',
                preference: {
                    title: 'Який тип обладнання ви зацікавлені в придбанні?',
                    options: [
                        'Смартфони',
                        'Ноутбуки',
                        'Планшети',
                        'ПК',
                        'Телевізори',
                    ],
                },
                your_expirience: {
                    label: 'Який у Вас досвід користування ПК',
                },
                purchase_frequency: {
                    label: 'Як часто ви купуєте обладнання?',
                    placeholder: 'Оберіть варіант',
                    options: [
                        { value: '1', text: 'Раз в тиждень' },
                        { value: '2', text: 'Раз в місяць' },
                        { value: '3', text: 'Раз в рік' },
                    ],
                },
                factors: {
                    title: 'Які з наведених нижче факторів є для вас важливими при купівлі обладнання?',
                    options: [
                        'Ціна',
                        'Репутація бренду',
                        'Якість',
                        'Особливості',
                        'Гарантія',
                        'Доступність',
                        'Обслуговування клієнтів',
                    ],
                },
            },
            footer: [
                [{
                        text: 'Home',
                        link: 'https://www.youtube.com/',
                    },
                    {
                        text: 'Trending',
                        link: 'https://www.youtube.com/feed/trending',
                    },
                    {
                        text: 'Subscriptions',
                        link: 'https://www.youtube.com/feed/subscriptions',
                    },
                    {
                        text: 'Library',
                        link: 'https://www.youtube.com/feed/library',
                    },
                ],
                [{
                        text: 'History',
                        link: 'https://www.youtube.com/feed/history',
                    },
                    {
                        text: 'Your Videos',
                        link: 'https://www.youtube.com/feed/my_videos',
                    },
                    {
                        text: 'Live',
                        link: 'https://www.youtube.com/live',
                    },
                    {
                        text: 'Settings',
                        link: 'https://www.youtube.com/account',
                    },
                ],
                [{
                        text: 'Watch Later',
                        link: 'https://www.youtube.com/playlist?list=WL',
                    },
                    {
                        text: 'Liked Videos',
                        link: 'https://www.youtube.com/playlist?list=LL',
                    },
                    {
                        text: 'Music',
                        link: 'https://www.youtube.com/music',
                    },
                    {
                        text: 'Gaming',
                        link: 'https://www.youtube.com/gaming',
                    },
                ],
                [{
                        text: 'Sports',
                        link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
                    },
                    {
                        text: 'News',
                        link: 'https://www.youtube.com/news',
                    },
                    {
                        text: 'Fashion & Beauty',
                        link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
                    },
                    {
                        text: 'Learning',
                        link: 'https://www.youtube.com/learning',
                    },
                ],
                [{
                        text: 'Report History',
                        link: 'https://www.youtube.com/feed/history/report_history',
                    },
                    {
                        text: 'Help',
                        link: 'https://support.google.com/youtube/?hl=en',
                    },
                    {
                        text: 'Send Feedback',
                        link: 'https://support.google.com/youtube/answer/4347644?hl=en',
                    },
                    {
                        text: 'About',
                        link: 'https://www.youtube.com/about/',
                    },
                ],
            ],
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================


// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task61', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('task61', {
            layout: 'basic',
            navigation: {
                links: [{
                        text: 'Home',
                        href: 'https://github.com/',
                    },
                    {
                        text: 'Contacts',
                        href: 'https://www.google.com/',
                    },
                    {
                        text: 'Help',
                        href: 'https://www.youtube.com/',
                    },
                ],
            },

            header: {
                title: 'Кошик',
                button: {
                    text: 'Продовжити покупки',
                    link: 'https://www.youtube.com/',
                },
            },

            goodsBlock: [{
                    image: 'https://picsum.photos/110/110',
                    name: 'Samsung Galaxy S21 Ultra ',
                    description: 'екран 6.8", процесор Exynos 2100/Snapdragon 888, 12 ГБ ОЗУ, камера 108 МП, акумулятор 5000 мАг',
                    price: { title: 'Ціна', value: '25 000 ₴' },
                    amount: '1 шт.',
                    buttons: [
                        { text: 'Додати', isPrimary: true },
                        { text: 'Видалити', isDanger: true },
                    ],
                },
                {
                    image: 'https://picsum.photos/110/110',
                    name: 'Ноутбук Dell XPS 13',
                    description: 'екран 13.3", процесор Intel Core i7-1165G7, 16 ГБ ОЗУ, SSD на 512 ГБ, вага 1.2 кг.',
                    price: { title: 'Ціна', value: '25 000 ₴' },

                    amount: '1 шт.',
                    buttons: [
                        { text: 'Додати', isPrimary: true },
                        { text: 'Видалити', isDanger: true },
                    ],
                },
                {
                    image: 'https://picsum.photos/110/110',
                    name: 'Телевізор LG OLED CX',
                    description: 'екран 55", роздільна здатність 4K, Smart TV, HDR, звук Dolby Atmos, 4 HDMI порти, 3 USB порти.',
                    price: { title: 'Ціна', value: '25 000 ₴' },

                    amount: '1 шт.',
                    buttons: [
                        { text: 'Додати', isPrimary: true },
                        { text: 'Видалити', isDanger: true },
                    ],
                },
                {
                    image: 'https://picsum.photos/110/110',
                    name: 'Навушники Sony WH-1000XM4',
                    description: 'Bluetooth 5.0, активне шумозаглушення, 30 годин автономної роботи, сенсорне управління, вага 254 г.',
                    price: { title: 'Ціна', value: '25 000 ₴' },

                    amount: '1 шт.',
                    buttons: [
                        { text: 'Додати', isPrimary: true },
                        { text: 'Видалити', isDanger: true },
                    ],
                },
            ],

            total: {
                title: 'Сума замовлення',
                amount: '75 000 ₴',
                delivery: 'Без доставки',
                buttons: [{
                        text: 'Оформити замовлення',
                        link: 'https://www.youtube.com/',
                        isSuccess: true,
                    },
                    {
                        text: 'Офрмити кредит',
                        link: 'https://www.youtube.com/',
                        isOutline: true,
                    },
                ],
            },

            goodsOtherBlock: {
                title: 'See other products',
                cards: [{
                        image: 'https://picsum.photos/400/200',
                        title: 'iPhone 13',
                        description: 'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
                        isHot: false,
                        idNew: false,
                    },
                    {
                        image: 'https://picsum.photos/400/200',
                        title: 'MacBook Pro',
                        description: "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
                        isHot: true,
                        idNew: false,
                    },
                    {
                        image: 'https://picsum.photos/400/200',
                        title: 'AirPods Pro',
                        description: "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
                        isHot: false,
                        idNew: false,
                    },
                ],
            },

            subscribe: {
                header: 'Unlock Premium Content',
                description: 'Subscribe to access exclusive content and features.',
                buttons: [{
                        text: 'Register Now',
                        link: 'https://www.youtube.com/',
                    },
                    {
                        text: 'Buy Subscription',
                        link: 'https://www.youtube.com/',
                    },
                ],
            },

            footer: [
                [{
                        text: 'Home',
                        link: 'https://www.youtube.com/',
                    },
                    {
                        text: 'Trending',
                        link: 'https://www.youtube.com/feed/trending',
                    },
                    {
                        text: 'Subscriptions',
                        link: 'https://www.youtube.com/feed/subscriptions',
                    },
                    {
                        text: 'Library',
                        link: 'https://www.youtube.com/feed/library',
                    },
                ],
                [{
                        text: 'History',
                        link: 'https://www.youtube.com/feed/history',
                    },
                    {
                        text: 'Your Videos',
                        link: 'https://www.youtube.com/feed/my_videos',
                    },
                    {
                        text: 'Live',
                        link: 'https://www.youtube.com/live',
                    },
                    {
                        text: 'Settings',
                        link: 'https://www.youtube.com/account',
                    },
                ],
                [{
                        text: 'Watch Later',
                        link: 'https://www.youtube.com/playlist?list=WL',
                    },
                    {
                        text: 'Liked Videos',
                        link: 'https://www.youtube.com/playlist?list=LL',
                    },
                    {
                        text: 'Music',
                        link: 'https://www.youtube.com/music',
                    },
                    {
                        text: 'Gaming',
                        link: 'https://www.youtube.com/gaming',
                    },
                ],
                [{
                        text: 'Sports',
                        link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
                    },
                    {
                        text: 'News',
                        link: 'https://www.youtube.com/news',
                    },
                    {
                        text: 'Fashion & Beauty',
                        link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
                    },
                    {
                        text: 'Learning',
                        link: 'https://www.youtube.com/learning',
                    },
                ],
                [{
                        text: 'Report History',
                        link: 'https://www.youtube.com/feed/history/report_history',
                    },
                    {
                        text: 'Help',
                        link: 'https://support.google.com/youtube/?hl=en',
                    },
                    {
                        text: 'Send Feedback',
                        link: 'https://support.google.com/youtube/answer/4347644?hl=en',
                    },
                    {
                        text: 'About',
                        link: 'https://www.youtube.com/about/',
                    },
                ],
            ],
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task62', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('task62', {
            layout: 'basic',
            navigation: {
                links: [{
                        text: 'Home',
                        href: 'https://github.com/',
                    },
                    {
                        text: 'Contacts',
                        href: 'https://www.google.com/',
                    },
                    {
                        text: 'Help',
                        href: 'https://www.youtube.com/',
                    },
                ],
            },

            header: 'Мої замовлення',

            purchase: {
                tabs: ['Всі замовлення', 'Гарантія та повернення'],
                actionBlock: {
                    input: { placeholder: 'Placeholder' },
                    buttons: [{
                            text: 'Знайти',
                            link: 'https://www.youtube.com/',
                            isSuccess: true,
                        },
                        {
                            text: 'Виділити все',
                            link: 'https://www.youtube.com/',
                            isOutline: true,
                        },
                        {
                            text: 'Очистити все',
                            link: 'https://www.youtube.com/',
                            isDanger: true,
                        },
                    ],
                },
                itemList: [{
                        number: '№12587463 від 01.01.2023',
                        status: 'Виконано',
                        amount: { title: 'Сума', value: '25 000 ₴' },
                        images: ['https://picsum.photos/110/100'],
                        button: {
                            text: 'Детальніше',
                            link: 'https://www.youtube.com/',
                            isPrimary: true,
                        },
                    },
                    {
                        number: '№12587463 від 01.01.2023',
                        status: 'Виконано',
                        amount: { title: 'Сума', value: '25 000 ₴' },
                        images: [
                            'https://picsum.photos/110/100',
                            'https://picsum.photos/110/100',
                            'https://picsum.photos/110/100',
                        ],
                        button: {
                            text: 'Детальніше',
                            link: 'https://www.youtube.com/',
                            isPrimary: true,
                        },
                    },
                    {
                        number: '№12587463 від 01.01.2023',
                        status: 'Виконано',
                        amount: { title: 'Сума', value: '25 000 ₴' },
                        images: [
                            'https://picsum.photos/110/100',
                            'https://picsum.photos/110/100',
                        ],
                        button: {
                            text: 'Детальніше',
                            link: 'https://www.youtube.com/',
                            isPrimary: true,
                        },
                    },
                ],
            },
            userInfo: {
                title: 'Особиста інформація',
                profileData: {
                    title: 'Особисті дані',
                    fullName: {
                        surname: {
                            title: 'Прізвище',
                            value: 'Іванов',
                        },
                        name: {
                            title: 'Ім’я',
                            value: 'Іван',
                        },
                        middleName: {
                            title: 'По-батькові',
                            value: 'Іванович',
                        },
                    },
                    otherInfo: {
                        birthday: {
                            title: 'Дата народження',
                            value: '01.01.2000',
                        },
                        sex: {
                            title: 'Стать',
                            value: 'Чоловіча',
                        },
                        language: {
                            title: 'Мова',
                            value: 'Українська',
                        },
                    },
                },
                buttons: [{
                        text: 'Редагувати',
                        link: 'https://www.youtube.com/',
                        isPrimary: true,
                    },
                    {
                        text: 'Очистити',
                        link: 'https://www.youtube.com/',
                        isSecondary: true,
                    },
                    {
                        text: 'Видалити',
                        link: 'https://www.youtube.com/',
                        isDanger: true,
                    },
                ],
                recipients: {
                    title: 'Отримувачі',
                    users: [{
                            name: 'Іванов Іван Іванович',
                            phone: '+38 (098) 222 22 22',
                            button: {
                                text: 'Редагувати',
                                link: 'https://www.youtube.com/',
                            },
                        },
                        {
                            name: 'Петров Петро Петрович',
                            phone: '+38 (098) 111 11 11',
                            button: {
                                text: 'Редагувати',
                                link: 'https://www.youtube.com/',
                            },
                        },
                    ],
                },
                contacts: {
                    title: 'Контакти',
                    contactData: [{
                            title: 'Номер телефону',
                            value: '+38 (098) 222 22 22',
                            button: {
                                text: 'Редагувати',
                                link: 'https://www.youtube.com/',
                                isPrimary: true,
                            },
                        },
                        {
                            title: 'Додатковий номер телефону',
                            value: '+38 (098) 111 11 11',
                            button: {
                                text: 'Очистити',
                                link: 'https://www.youtube.com/',
                                isSecondary: true,
                            },
                        },
                        {
                            title: 'Електронна адреса',
                            value: 'ivanivanov@ukr.net',
                            button: {
                                text: 'Видалити',
                                link: 'https://www.youtube.com/',
                                isDanger: true,
                            },
                        },
                    ],
                },
            },

            footer: [
                [{
                        text: 'Home',
                        link: 'https://www.youtube.com/',
                    },
                    {
                        text: 'Trending',
                        link: 'https://www.youtube.com/feed/trending',
                    },
                    {
                        text: 'Subscriptions',
                        link: 'https://www.youtube.com/feed/subscriptions',
                    },
                    {
                        text: 'Library',
                        link: 'https://www.youtube.com/feed/library',
                    },
                ],
                [{
                        text: 'History',
                        link: 'https://www.youtube.com/feed/history',
                    },
                    {
                        text: 'Your Videos',
                        link: 'https://www.youtube.com/feed/my_videos',
                    },
                    {
                        text: 'Live',
                        link: 'https://www.youtube.com/live',
                    },
                    {
                        text: 'Settings',
                        link: 'https://www.youtube.com/account',
                    },
                ],
                [{
                        text: 'Watch Later',
                        link: 'https://www.youtube.com/playlist?list=WL',
                    },
                    {
                        text: 'Liked Videos',
                        link: 'https://www.youtube.com/playlist?list=LL',
                    },
                    {
                        text: 'Music',
                        link: 'https://www.youtube.com/music',
                    },
                    {
                        text: 'Gaming',
                        link: 'https://www.youtube.com/gaming',
                    },
                ],
                [{
                        text: 'Sports',
                        link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
                    },
                    {
                        text: 'News',
                        link: 'https://www.youtube.com/news',
                    },
                    {
                        text: 'Fashion & Beauty',
                        link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
                    },
                    {
                        text: 'Learning',
                        link: 'https://www.youtube.com/learning',
                    },
                ],
                [{
                        text: 'Report History',
                        link: 'https://www.youtube.com/feed/history/report_history',
                    },
                    {
                        text: 'Help',
                        link: 'https://support.google.com/youtube/?hl=en',
                    },
                    {
                        text: 'Send Feedback',
                        link: 'https://support.google.com/youtube/answer/4347644?hl=en',
                    },
                    {
                        text: 'About',
                        link: 'https://www.youtube.com/about/',
                    },
                ],
            ],
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task71', function(req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('task71', {
            layout: 'basic',
            navigation: {
                links: [{
                        text: 'Home',
                        href: 'https://github.com/',
                    },
                    {
                        text: 'Contacts',
                        href: 'https://www.google.com/',
                    },
                    {
                        text: 'Help',
                        href: 'https://www.youtube.com/',
                    },
                ],
            },
            formBlock: {
                header: 'Відгуки покупців про Ноут',
                rating: {
                    title: 'Оцінка',
                    value: '4.5/5',
                },
                actionBlock: {
                    tabs: [
                        { text: 'Про товар' },
                        { text: 'Характеристики' },
                        { text: 'Відгуки', isActive: true },
                    ],
                    report: {
                        title: 'Залиште відгук про товар',
                        button: {
                            text: 'Написати відгук',
                            link: 'https://www.youtube.com/',
                        },
                    },
                },
                feedbackBlock: {
                    title: 'Хочете поділитись своєю думкою про наш магазин?',
                    buttons: [{
                            text: 'Додати відгук',
                            isWarning: true,
                            link: 'https://www.youtube.com/',
                        },
                        {
                            text: 'Позитивні відгуки',
                            isSuccess: true,
                            link: 'https://www.youtube.com/',
                        },
                        {
                            text: 'Негативні відгуки',
                            isDanger: true,
                            link: 'https://www.youtube.com/',
                        },
                    ],
                },
                goodsInfo: {
                    photo: 'https://picsum.photos/110/100',
                    name: 'Ноут Asus',
                    price: '25 000 ₴',
                    inMarket: true,
                    buttons: [{
                            text: 'Купити',
                            isPrimary: true,
                            link: 'https://www.youtube.com/',
                        },
                        {
                            text: 'Купити в кредит',
                            isSecondary: true,
                            link: 'https://www.youtube.com/',
                        },
                    ],
                    seller: {
                        title: 'Продавець',
                        value: 'Machinery',
                    },
                },
            },

            reviewList: [{
                    title: {
                        userName: 'Іван Іванов',
                        caption: 'Відгук покупця',
                        date: '1 січня 2023',
                    },
                    reviewBody: {
                        seller: {
                            title: 'Продавець',
                            value: 'Machinery',
                        },
                        rating: {
                            title: 'Оцінка',
                            value: '5/5',
                        },
                        text: [
                            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
                            ' Однак, можливі проблеми з перегрівом під час тривалого використання, та може бути недостатньої ємності жорсткого диска для потреб користувача. Крім того, ціна може бути дещо високою порівняно з аналогічними моделями.',
                        ],
                        advantages: {
                            title: 'Переваги',
                            text: 'Дизайн, швидкість роботи, обсяг пам’яті, акумулятор',
                        },
                        disadvantages: {
                            title: 'Недоліки',
                            text: 'Перегрів, ємкість жосткого диску',
                        },
                        images: [
                            'https://picsum.photos/110/100',
                            'https://picsum.photos/110/100',
                            'https://picsum.photos/110/100',
                        ],
                        coments: [{
                                userName: 'Користувач',
                                date: '1 січня 2023',
                                text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
                            },
                            {
                                userName: 'Користувач',
                                date: '3 січня 2023',
                                text: 'Дякую за корисний відгук! Це допомогло мені зробити вибір щодо покупки ноутбука.',
                            },
                            {
                                userName: 'Користувач',
                                date: '10 січня 2023',
                                text: 'Дякую за відгук, але я хотів би дізнатися більше деталей про проблеми з перегрівом, щоб зробити зважений вибір перед покупкою.',
                            },
                        ],
                    },
                },
                {
                    title: {
                        userName: 'Петро Петров',
                        caption: 'Відгук покупця',
                        date: '1 січня 2023',
                    },
                    reviewBody: {
                        seller: {
                            title: 'Продавець',
                            value: 'Machinery',
                        },
                        rating: {
                            title: 'Оцінка',
                            value: '5/5',
                        },
                        text: [
                            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
                        ],
                        advantages: {
                            title: 'Переваги',
                            text: 'Обсяг пам’яті, акумулятор',
                        },
                        disadvantages: {
                            title: 'Недоліки',
                            text: 'Не виявлено',
                        },
                        images: ['https://picsum.photos/110/100'],
                        coments: [{
                            userName: 'Користувач',
                            date: '1 січня 2023',
                            text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
                        }, ],
                    },
                },
            ],

            service: {
                title: 'Our Services',
                description: 'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
                buttons: [{
                    text: 'Show More',
                    link: 'https://www.youtube.com/',
                }, ],
            },

            footer: [
                [{
                        text: 'Home',
                        link: 'https://www.youtube.com/',
                    },
                    {
                        text: 'Trending',
                        link: 'https://www.youtube.com/feed/trending',
                    },
                    {
                        text: 'Subscriptions',
                        link: 'https://www.youtube.com/feed/subscriptions',
                    },
                    {
                        text: 'Library',
                        link: 'https://www.youtube.com/feed/library',
                    },
                ],
                [{
                        text: 'History',
                        link: 'https://www.youtube.com/feed/history',
                    },
                    {
                        text: 'Your Videos',
                        link: 'https://www.youtube.com/feed/my_videos',
                    },
                    {
                        text: 'Live',
                        link: 'https://www.youtube.com/live',
                    },
                    {
                        text: 'Settings',
                        link: 'https://www.youtube.com/account',
                    },
                ],
                [{
                        text: 'Watch Later',
                        link: 'https://www.youtube.com/playlist?list=WL',
                    },
                    {
                        text: 'Liked Videos',
                        link: 'https://www.youtube.com/playlist?list=LL',
                    },
                    {
                        text: 'Music',
                        link: 'https://www.youtube.com/music',
                    },
                    {
                        text: 'Gaming',
                        link: 'https://www.youtube.com/gaming',
                    },
                ],
                [{
                        text: 'Sports',
                        link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
                    },
                    {
                        text: 'News',
                        link: 'https://www.youtube.com/news',
                    },
                    {
                        text: 'Fashion & Beauty',
                        link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
                    },
                    {
                        text: 'Learning',
                        link: 'https://www.youtube.com/learning',
                    },
                ],
                [{
                        text: 'Report History',
                        link: 'https://www.youtube.com/feed/history/report_history',
                    },
                    {
                        text: 'Help',
                        link: 'https://support.google.com/youtube/?hl=en',
                    },
                    {
                        text: 'Send Feedback',
                        link: 'https://support.google.com/youtube/answer/4347644?hl=en',
                    },
                    {
                        text: 'About',
                        link: 'https://www.youtube.com/about/',
                    },
                ],
            ],
        })
        //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router