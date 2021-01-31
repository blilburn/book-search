const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    authors: ["J.K. Rowling"],
    description:
      "A boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.",
    link: "http://books.google.com/books?id=weHxzQEACAAJ&dq=harry+potter&hl=&source=gbs_api"
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    authors: ["J.K. Rowling"],
    description:
      "A mysterious elf tells Harry to expect trouble during his second year at Hogwarts, but nothing can prepare him for trees that fight back, flying cars, spiders that talk and deadly warnings written in blood on the walls of the school.",
    link: "https://play.google.com/store/books/details?id=5iTebBW-w7QC&source=gbs_api"
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    authors: ["J.K. Rowling"],
    description:
      "Harry Potter's third year at Hogwarts starts off badly when he learns deranged killer Sirius Black has escaped from Azkaban prison and is bent on murdering the teenage wizard. While Hermione's cat torments Ron's sickly rat, causing a rift among the trio, a swarm of nasty Dementors is sent to protect the school from Black. A mysterious new teacher helps Harry learn to defend himself, but what is his secret tie to Sirius Black?",
    link: "http://books.google.com/books?id=swJWQ5qq804C&dq=prisoner+of+azkaban&hl=&source=gbs_api"
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    authors: ["J.K. Rowling"],
    description:
      "Harry returns for his fourth year at Hogwarts School of Witchcraft and Wizardry, along with his friends, Ron and Hermione. There is an upcoming tournament between the three major schools of magic, with one participant selected from each school by the Goblet of Fire. When Harry's name is drawn, even though he is not eligible and is a fourth player, he must compete in the dangerous contest.",
    link: "http://books.google.com/books?id=-3rXnAEACAAJ&dq=goblet+of+fire&hl=&source=gbs_api"
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    authors: ["J.K. Rowling"],
    description:
      "Harry learns that many in the wizarding community do not know the truth of his encounter with Lord Voldemort. Cornelius Fudge, minister of Magic, appoints his toady, Dolores Umbridge, as Defense Against the Dark Arts teacher, for he fears that professor Dumbledore will take his job. But her teaching is deficient and her methods, cruel, so Harry prepares a group of students to defend the school against a rising tide of evil.",
    link: "http://books.google.com/books?id=jk87_y-ubE0C&dq=order+of+the+phoenix&hl=&source=gbs_api"
  },
  {
    title: "Harry Potter and the Half Blood Prince",
    authors: ["J.K. Rowling"],
    description:
      "As Death Eaters wreak havoc in both Muggle and Wizard worlds, Hogwarts is no longer a safe haven for students. Though Harry suspects there are new dangers lurking within the castle walls, Dumbledore is more intent than ever on preparing the young wizard for the final battle with Voldemort. Meanwhile, teenage hormones run rampant through Hogwarts, presenting a different sort of danger. Love may be in the air, but tragedy looms, and Hogwarts may never be the same again.",
    link: "https://play.google.com/store/books/details?id=R7YsowJI9-IC&source=gbs_api"
  },
  {
    title: "Harry Potter and the Deathly Hollows",
    authors: ["J.K. Rowling"],
    description:
      "Without the guidance and protection of their professors, Harry, Ron and Hermione begin a mission to destroy the Horcruxes, the sources of Voldemort's immortality. Though they must rely on one another more than ever, dark forces threaten to tear them apart. Voldemort's Death Eaters have seized control of the Ministry of Magic and Hogwarts, and they are searching for Harry -- even as he and his friends prepare for the ultimate showdown.",
    link: "http://books.google.com/books?id=gCtazG4ZXlQC&dq=deathly+hallows&hl=&source=gbs_api"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
