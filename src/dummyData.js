export default (obj) =>{
    if(obj) return obj

    return {db: {
        books: [{
            _id:"BLK_1",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png",
            name:"Crime and Punishment",
            rate:[],
            totalRate: 0,
            author: "Fyodor Dostoevsky",
            publish_date: "	1866",
            genres: ["g1"],
            summary: "Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat. He theorises that with the money he could liberate himself from poverty and go on to perform great deeds, and seeks to convince himself that certain crimes are justifiable if they are committed in order to remove obstacles to the higher goals of 'extraordinary' men. Once the deed is done, however, he finds himself racked with confusion, paranoia, and disgust. His theoretical justifications lose all their power as he struggles with guilt and horror and confronts both the internal and external consequences of his deed.",
            comment: [],
        },{
            _id:"BLK_2",
            img: "https://m.media-amazon.com/images/I/41ZGTreHzXL.jpg",
            name:"The Brothers Karamazov",
            rate:[],
            totalRate: 0,
            author: "Fyodor Dostoevsky",
            publish_date: "	1880",
            genres: ["g1", "g2"],
            summary: "The Brothers Karamasov is a murder mystery, a courtroom drama, and an exploration of erotic rivalry in a series of triangular love affairs involving the “wicked and sentimental” Fyodor Pavlovich Karamazov and his three sons―the impulsive and sensual Dmitri; the coldly rational Ivan; and the healthy, red-cheeked young novice Alyosha. Through the gripping events of their story, Dostoevsky portrays the whole of Russian life, is social and spiritual striving, in what was both the golden age and a tragic turning point in Russian culture.",
            comment: [],
        },{
            _id:"BLK_3",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/The_first_edition_of_Dostoevsky%27s_novel_Demons_Petersburg_1873.JPG/220px-The_first_edition_of_Dostoevsky%27s_novel_Demons_Petersburg_1873.JPG",
            name:"Demons",
            rate:[],
            totalRate: 0,
            author: "Fyodor Dostoevsky",
            publish_date: "	1871",
            genres: ["g1", "g2"],
            summary: "Demons is an allegory of the potentially catastrophic consequences of the political and moral nihilism that were becoming prevalent in Russia in the 1860s.[3] A fictional town descends into chaos as it becomes the focal point of an attempted revolution, orchestrated by master conspirator Pyotr Verkhovensky. The mysterious aristocratic figure of Nikolai Stavrogin—Verkhovensky's counterpart in the moral sphere—dominates the book, exercising an extraordinary influence over the hearts and minds of almost all the other characters. The idealistic, Western-influenced generation of the 1840s, epitomized in the character of Stepan Verkhovensky (who is both Pyotr Verkhovensky's father and Nikolai Stavrogin's childhood teacher), are presented as the unconscious progenitors and helpless accomplices of the demonic forces that take possession of the town.",
            comment: [],
        },{
            _id:"BLK_4",
            img: "https://images-na.ssl-images-amazon.com/images/I/613mEX2EEwL.jpg",
            name:"The Gambler",
            rate:[],
            totalRate: 0,
            author: "Fyodor Dostoevsky",
            publish_date: "	1866",
            genres: ["g1"],
            summary: "The Gambler treated a subject Fyodor Dostoevsky himself was familiar with: gambling. Fyodor Dostoevsky gambled for the first time at the tables at Wiesbaden in 1863.[2] From that time till 1871, when his passion for gambling subsided, he played at Baden-Baden, Homburg, and Saxon-les-Bains frequently, often beginning by winning a small amount of money and losing far more in the end.",
            comment: [],
        },{
            _id:"BLK_5",
            img: "https://upload.wikimedia.org/wikipedia/en/a/ac/ThedoubleDOSTOYEVSKY.jpg.w180h281.jpg",
            name:"The Double",
            rate:[],
            totalRate: 0,
            author: "Fyodor Dostoevsky",
            publish_date: "	1866",
            genres: ["g1"],
            summary: "In Saint Petersburg, Yakov Petrovich Golyadkin works as a titular councillor (rank 9 in the Table of Ranks established by Peter the Great.[3]), a low-level bureaucrat struggling to succeed.Golyadkin has a formative discussion with his Doctor Rutenspitz, who fears for his sanity and tells him that his behaviour is dangerously antisocial. He prescribes cheerful company as the remedy. Golyadkin resolves to try this, and leaves the office. He proceeds to a birthday party for Klara Olsufyevna, the daughter of his office manager. He was uninvited, and a series of faux pas lead to his expulsion from the party. On his way home through a snowstorm, he encounters a man who looks exactly like him, his double. The following two thirds of the novel then deals with their evolving relationship.At first, Golyadkin and his double are friends, but Golyadkin Jr. proceeds to attempt to take over Sr.'s life, and they become bitter enemies. Because Golyadkin Jr. has all the charm, unctuousness and social skills that Golyadkin Sr. lacks, he is very well-liked among the office colleagues. At the story's conclusion, Golyadkin Sr. begins to see many replicas of himself, has a psychotic break, and is dragged off to an asylum by Doctor Rutenspitz.",
            comment: [],
        },
    ],
        users:[{
            _id:"BLU_admin",
            fname:"Admin",
            lname:"Book Look",
            email:"info@booklook.com",
            password: "123456789",
            status: "admin"
     },{
        _id:"BLU_banned",
        fname:"ban",
        lname:"ban ban",
        email:"info@ban.com",
        password: "123456789",
        status: "active"
 },
    ],
        genres:[{
            _id:"g1",
            name: "Action",
            books: ["BLK_1", "BLK_2","BLK_3", "BLK_4", "BLK_5"],
            total: 5
        },{
            _id:"g2",
            name: "Crime",
            books: ["BLK_3", "BLK_4"],
            total: 2
        },{
            _id:"g3",
            name: "Drama",
            books: ["BLK_3", "BLK_4"],
            total: 0
        },{
            _id:"g4",
            name: "Fantasy",
            books: ["BLK_3", "BLK_4"],
            total: 0
            },],
        current_user: null
    
        }}
}