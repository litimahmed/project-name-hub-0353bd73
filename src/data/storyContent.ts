import storyLunaCover from "@/assets/story-luna-cover.jpg";
import storyLunaCh1 from "@/assets/story-luna-ch1.jpg";
import storyLunaCh2 from "@/assets/story-luna-ch2.jpg";
import storyLunaCh3 from "@/assets/story-luna-ch3.jpg";
import storyLunaCh4 from "@/assets/story-luna-ch4.jpg";
import bookEarthHero from "@/assets/book-earth-hero.jpg";
import bookJungleRecycling from "@/assets/book-jungle-new.jpg";
import storyOceanCover from "@/assets/book-ocean-new.jpg";
import storyOceanCh1 from "@/assets/story-ocean-ch1.jpg";
import storyOceanCh2 from "@/assets/story-ocean-ch2.jpg";
import storyOceanCh3 from "@/assets/story-ocean-ch3.jpg";
import storyOceanCh4 from "@/assets/story-ocean-ch4.jpg";
import storyGardenCover from "@/assets/book-garden-new.jpg";
import storyGardenCh1 from "@/assets/story-garden-ch1.jpg";
import storyGardenCh2 from "@/assets/story-garden-ch2.jpg";
import storyGardenCh3 from "@/assets/story-garden-ch3.jpg";
import storyGardenCh4 from "@/assets/story-garden-ch4.jpg";
import storyForestCover from "@/assets/book-forest-new.jpg";
import storyForestCh1 from "@/assets/story-forest-ch1.jpg";
import storyForestCh2 from "@/assets/story-forest-ch2.jpg";
import storyForestCh3 from "@/assets/story-forest-ch3.jpg";
import storyForestCh4 from "@/assets/story-forest-ch4.jpg";
import storyEarthHeroCover from "@/assets/story-earth-hero-cover.jpg";
import storyEarthHeroCh1 from "@/assets/story-earth-hero-ch1.jpg";
import storyEarthHeroCh2 from "@/assets/story-earth-hero-ch2.png";
import storyEarthHeroCh3 from "@/assets/story-earth-hero-ch14.png";
import storyEarthHeroCh4 from "@/assets/story-earth-hero-ch6.jpg";
import storyEarthHeroCh5 from "@/assets/story-jungle-ch5.jpg";
import storyEarthHeroCh6 from "@/assets/story-earth-hero-ch8.jpg";
import storyEarthHeroCh7 from "@/assets/story-earth-hero-ch9.jpg";
import storyEarthHeroCh8 from "@/assets/story-earth-hero-ch13.png";
import storyEarthHeroCh9 from "@/assets/about-us-new.jpg";
import storyEarthHeroCh10 from "@/assets/story-earth-hero-ch3.jpg";
import storyEarthHeroCh11 from "@/assets/story-earth-hero-ch11.jpg";
import storyJungleCover from "@/assets/book-jungle-new.jpg";
import storyJungleCh1 from "@/assets/story-jungle-ch1.jpg";
import storyJungleCh2 from "@/assets/story-jungle-ch2.jpg";
import storyJungleCh3 from "@/assets/story-jungle-ch3.jpg";
import storyJungleCh4 from "@/assets/story-jungle-ch4.jpg";
import storyJungleCh5 from "@/assets/story-jungle-ch5.jpg";
import bookRecyclingRacers from "@/assets/book-recycling-racers.jpg";
import bookCompostChampions from "@/assets/book-compost-champions.jpg";
import bookWaterWarriors from "@/assets/book-water-warriors.jpg";
import bookEnergyExplorers from "@/assets/book-energy-explorers.jpg";
import bookPollutionPatrol from "@/assets/book-pollution-patrol.jpg";
import bookClimateCrusaders from "@/assets/book-climate-crusaders.jpg";
import bookBiodiversityBrigade from "@/assets/book-biodiversity-brigade.jpg";
import bookWasteWizards from "@/assets/book-waste-wizards.jpg";

export interface StoryPage {
  text: string;
  image?: string;
  altText?: string;
  layout?: "default" | "two-column-left" | "two-column-right";
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Story {
  id: number;
  title: string;
  description: string;
  pages: StoryPage[];
  quiz?: QuizQuestion[];
}

export const storyContent: Story[] = [
  {
    id: 1,
    title: "Luna's Earth Guardian Mission",
    description: "When Luna discovers her magical Earth powers, she must fly through the city transforming trash into beautiful nature! Follow her incredible journey as she learns that every small action can create amazing changes for our planet.",
    quiz: [
      {
        question: "What is Luna's superpower?",
        options: ["Super speed", "Transforming trash into nature", "Flying only", "Invisibility"],
        correctAnswer: 1
      },
      {
        question: "What color is Luna's Earth Guardian cape?",
        options: ["Red", "Yellow", "Blue and green", "Purple"],
        correctAnswer: 2
      },
      {
        question: "Where did Luna first discover her powers?",
        options: ["At school", "In the park", "In her bedroom while recycling", "At the beach"],
        correctAnswer: 2
      },
      {
        question: "What did Luna transform trash into?",
        options: ["Toys", "Food", "Beautiful flowers and trees", "Buildings"],
        correctAnswer: 2
      },
      {
        question: "What did Luna teach children at the end?",
        options: ["How to fly", "That everyone has the power to help Earth", "Magic spells", "How to build things"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyLunaCover,
        text: "In a bustling city where skyscrapers touched the clouds, lived a brave and curious girl named Luna. She loved nature, animals, and everything green. But Luna had a secret - a magical secret that would change everything. She was chosen by Earth itself to become its guardian!",
        altText: "Luna flying through vibrant city with magical glowing hands transforming trash to nature"
      },
      {
        text: "One night, while Luna was sorting recyclables in her room (because she always cared about the environment), her hands began to glow with a beautiful green and blue light. The light swirled around her like dancing ribbons, and suddenly, a magnificent cape appeared on her shoulders - shimmering with the colors of Earth itself!",
        image: storyLunaCh1,
        layout: "two-column-right",
        altText: "Luna in her bedroom with glowing hands, magical cape appearing on her shoulders"
      },
      {
        text: "A gentle voice echoed in her mind: 'Luna, you have been chosen as Earth's Guardian. Your mission is to protect nature and teach others the magic of caring for our planet.' Luna's heart raced with excitement! She had superpowers! With a whoosh, she flew out her window, her cape trailing streams of sparkling energy behind her.",
        image: storyLunaCh2,
        layout: "two-column-left",
        altText: "Luna flying out her window with magical cape, city lights below"
      },
      {
        text: "As Luna soared through the city, she noticed something sad - trash and litter everywhere. Plastic bottles, food wrappers, and papers scattered across parks and streets. But Luna knew what to do! She extended her glowing hands, and her Earth Guardian powers activated. Everywhere she pointed, something amazing happened!",
        image: storyLunaCh3,
        layout: "two-column-right",
        altText: "Luna flying over littered city streets, hands glowing with power"
      },
      {
        text: "The plastic bottles transformed into beautiful flowers! Newspaper pages became fluttering butterflies! Aluminum cans turned into chirping birds! Even old tires became small trees with green leaves! The entire neighborhood began to bloom with life and color. Children playing in the park stopped and stared in amazement at the transformation happening before their eyes.",
        image: storyLunaCh4,
        layout: "two-column-left",
        altText: "Trash transforming into nature - flowers, butterflies, birds appearing magically"
      },
      {
        text: "Luna landed in the park, and the children rushed over. 'How did you do that?' they asked, their eyes wide with wonder. Luna smiled warmly and said, 'I have Earth Guardian powers, but guess what? YOU have them too!' The children looked at their hands, confused. 'But our hands don't glow,' said one boy. Luna knelt down to their level. 'Your power isn't in glowing hands - it's in your choices! Every time you recycle, pick up litter, or plant a seed, you're using your Earth Guardian power. Every small action creates magic for our planet!' From that day on, the children became Earth Guardians too, protecting nature in their own special way. And Luna? She continues to fly through the night sky, watching over all the young guardians who are making the world a better place, one recycled bottle at a time!"
      }
    ]
  },
  {
    id: 2,
    title: "Captain Earth Saves the Day",
    description: "Meet Captain Earth, the superhero who protects our planet! Learn how small actions like recycling and saving water can make you an Earth hero too!",
    quiz: [
      {
        question: "What was Captain Earth's superpower?",
        options: ["Flying", "Super strength", "Teaching people about recycling", "Invisibility"],
        correctAnswer: 2
      },
      {
        question: "What color was Captain Earth's cape?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correctAnswer: 1
      },
      {
        question: "What did Captain Earth teach the children?",
        options: ["How to cook", "How to recycle properly", "How to play games", "How to build houses"],
        correctAnswer: 1
      },
      {
        question: "Where did Captain Earth first appear?",
        options: ["At school", "In a park", "At the recycling center", "On the moon"],
        correctAnswer: 2
      },
      {
        question: "What can YOU do to be an Earth hero?",
        options: ["Only pick up trash", "Only save water", "Small actions like recycling and saving water", "Wait for superheroes to help"],
        correctAnswer: 2
      }
    ],
    pages: [
      {
        image: storyEarthHeroCover,
        text: "In a world much like ours, where pollution threatened the beautiful planet, there emerged a hero unlike any other. His name was Captain Earth, and his mission was simple yet powerful: to protect our home and teach everyone how they too could be heroes!",
        altText: "Captain Earth in heroic pose with green cape, Earth globe behind him"
      },
      {
        text: "Captain Earth wore a magnificent green cape that shimmered like fresh leaves in the sunlight. On his chest was the symbol of Earth - a beautiful blue and green planet reminding everyone what we're fighting to protect. He didn't have lasers or super strength. His superpower was knowledge, and he used it to teach people how to save the Earth!",
        image: storyEarthHeroCh1,
        layout: "two-column-right",
        altText: "Close-up of Captain Earth showing his Earth symbol"
      },
      {
        text: "One day, Captain Earth flew over a park and saw a troubling sight. Plastic bottles were scattered everywhere. Aluminum cans rolled in the wind. Paper bags were stuck in trees. The park looked sad and dirty. 'This won't do!' declared Captain Earth as he swooped down. A group of children were playing nearby, not realizing the mess around them.",
        image: storyEarthHeroCh2,
        layout: "two-column-left",
        altText: "Aerial view of littered park with Captain Earth flying down"
      },
      {
        text: "'Hello, young Earth protectors!' Captain Earth called out with a friendly smile. The children ran over, excited to meet a real superhero! 'Do you know that you all have superpowers too?' he asked. The children looked at each other, confused. 'We do?' asked a girl with pigtails. 'Absolutely!' Captain Earth nodded. 'And I'm going to teach you how to use them!'",
        image: storyEarthHeroCh3,
        layout: "two-column-right",
        altText: "Captain Earth talking to excited group of children in the park"
      },
      {
        text: "Captain Earth pulled out three special bins from his utility belt - one blue, one yellow, and one green. 'These are your superhero tools!' he explained. 'The blue bin is for paper and cardboard. The yellow bin is for plastic and aluminum. The green bin is for glass. When you sort your trash correctly, you're using your recycling superpower!' The children's eyes lit up with understanding.",
        image: storyEarthHeroCh4,
        layout: "two-column-left",
        altText: "Captain Earth showing three colorful recycling bins to children"
      },
      {
        text: "'Let me show you something amazing,' Captain Earth continued. He picked up a plastic bottle from the ground. 'When you recycle this bottle, it doesn't disappear - it gets transformed! It can become a new bottle, or part of a playground slide, or even the fleece jacket you wear in winter! Recycling is like magic, but it's real!'",
        image: storyEarthHeroCh5,
        layout: "two-column-right",
        altText: "Captain Earth holding a plastic bottle, showing recycling transformation"
      },
      {
        text: "The children started picking up trash with newfound enthusiasm. 'This newspaper goes in the blue bin!' shouted one boy. 'This soda can goes in yellow!' called another. 'And this glass jar goes in green!' added a third. Captain Earth beamed with pride. 'That's right! You're already being Earth heroes!' Within minutes, the park was cleaner, and the children understood something important.",
        image: storyEarthHeroCh6,
        layout: "two-column-left",
        altText: "Children enthusiastically sorting trash into colorful recycling bins"
      },
      {
        text: "'But wait, there's more!' Captain Earth said, pulling out a small device. 'This is my Earth-o-meter. It measures how much energy and water we save!' He showed them the screen. 'Every time you turn off a light when you leave a room, you save energy. Every time you turn off the tap while brushing your teeth, you save water. These small actions add up to big results!'",
        image: storyEarthHeroCh7,
        layout: "two-column-right",
        altText: "Captain Earth showing device to children, screen displaying energy savings"
      },
      {
        text: "The children were amazed. 'So we don't need capes to be heroes?' asked the girl with pigtails. Captain Earth knelt down to her level and said, 'You don't need a cape to make a difference. Every small action - recycling a bottle, saving water, picking up litter - these are all heroic deeds! Together, millions of small heroes like you can save the entire planet!'",
        image: storyEarthHeroCh8,
        layout: "two-column-left",
        altText: "Captain Earth kneeling and talking to young girl, inspirational moment"
      },
      {
        text: "As the sun began to set, Captain Earth prepared to fly away. But before he left, he had one more surprise. He gave each child a special badge - a green circle with the Earth symbol on it. 'You are now official Junior Earth Heroes!' he announced. 'Wear this badge proudly and remember: you have the power to protect our planet. Use it every day!'",
        image: storyEarthHeroCh9,
        layout: "two-column-right",
        altText: "Captain Earth giving Earth hero badges to smiling children"
      },
      {
        text: "The children watched as Captain Earth soared into the sky, his green cape billowing behind him. They looked at their shiny new badges and felt something wonderful - they felt powerful! They realized that being a hero wasn't about having superpowers or wearing a cape. It was about making good choices every single day.",
        image: storyEarthHeroCh10,
        layout: "two-column-left",
        altText: "Children waving goodbye as Captain Earth flies into sunset"
      },
      {
        text: "From that day forward, the children kept their promise. They recycled their trash, they saved water and energy, and they taught their families to do the same. The park stayed clean and beautiful. And sometimes, when they looked up at the sky, they thought they saw a flash of green - Captain Earth checking on his junior heroes. Because the truth is, every one of us can be Captain Earth. All we need to do is remember that small actions make big differences. Are you ready to be an Earth hero? Your planet needs you!",
        image: storyEarthHeroCh11,
        altText: "Children as Earth heroes in the clean park, Captain Earth silhouette in sky"
      }
    ]
  },
  {
    id: 3,
    title: "Moki's Jungle Recycling Adventure",
    description: "Follow Moki the monkey on an exciting jungle quest to teach his friends about recycling! A fun adventure with valuable lessons about taking care of our environment.",
    quiz: [
      {
        question: "Who is the main character of the story?",
        options: ["A lion", "Moki the monkey", "A parrot", "A snake"],
        correctAnswer: 1
      },
      {
        question: "What problem did Moki notice in the jungle?",
        options: ["Too much rain", "Trash everywhere", "No food", "Too many animals"],
        correctAnswer: 1
      },
      {
        question: "What did Moki teach his friends?",
        options: ["How to climb trees", "How to recycle", "How to swim", "How to sing"],
        correctAnswer: 1
      },
      {
        question: "What color bins did Moki use?",
        options: ["Red and black", "Blue and yellow", "Green and brown", "Purple and pink"],
        correctAnswer: 1
      },
      {
        question: "What happened to the jungle at the end?",
        options: ["It got dirtier", "It became clean and beautiful", "Animals left", "It rained"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyJungleCover,
        text: "Deep in the lush green jungle, where colorful parrots sang and tall trees reached for the sky, lived a clever monkey named Moki. Moki loved his jungle home more than anything. But one day, he noticed something that made his heart sad.",
        altText: "Moki the monkey in vibrant jungle surrounded by tropical plants"
      },
      {
        text: "As Moki swung from vine to vine, he saw plastic wrappers stuck in the branches. Aluminum cans littered the jungle floor. Glass bottles were scattered near the river where his friends drank water. 'This is terrible!' Moki exclaimed. 'Our beautiful jungle is becoming a garbage dump! We need to do something!'",
        image: storyJungleCh1,
        layout: "two-column-right",
        altText: "Moki swinging through jungle, noticing trash in trees"
      },
      {
        text: "Moki gathered all his jungle friends - Ellie the elephant, Polly the parrot, Leo the lion, and Tina the toucan. 'Friends,' Moki announced, 'we have a problem. Our jungle is filling with trash, and we need to fix it!' Ellie trumpeted sadly, 'But what can we do? We don't know how to make the trash go away!' Moki smiled. 'That's why I have a plan! I learned about something called recycling from the humans near the edge of the jungle!'",
        image: storyJungleCh2,
        layout: "two-column-left",
        altText: "Moki addressing group of jungle animals in a clearing"
      },
      {
        text: "Moki showed his friends two big bins - one blue and one yellow. 'The blue bin is for paper and cardboard,' he explained, pointing with his tail. 'The yellow bin is for plastic and metal. When we put things in these bins, they get taken away and made into new things instead of cluttering our beautiful jungle!' The animals looked confused at first, but Moki was patient.",
        image: storyJungleCh3,
        layout: "two-column-right",
        altText: "Moki showing two colorful recycling bins to attentive jungle animals"
      },
      {
        text: "'Let me show you!' Moki jumped around, picking up different items. 'This newspaper? Blue bin! This plastic bottle? Yellow bin! This cardboard box? Blue bin! This aluminum can? Yellow bin!' Soon, all the animals joined in. Ellie used her trunk to pick up large items. Polly flew high to grab trash from tree branches. Leo carried heavy bags, and Tina used her beak to sort small items.",
        image: storyJungleCh4,
        layout: "two-column-left",
        altText: "Animals working together sorting trash, Ellie using trunk, Polly flying"
      },
      {
        text: "Within just one day, the jungle looked completely different! The river sparkled clean and clear. The trees were free from plastic bags. The ground was clear of cans and bottles. All the animals gathered around Moki, cheering! 'You did it, Moki!' they shouted. 'Our jungle is beautiful again!' But Moki shook his head with a wise smile. 'WE did it, together! And now we must promise to keep it this way. Every day, we'll recycle and keep our home clean!'",
        image: storyJungleCh5,
        altText: "Clean jungle with happy celebrating animals, pristine river and trees"
      },
      {
        text: "From that day forward, all the jungle animals became recycling champions. They taught their children about the blue and yellow bins. They made sure no trash was left behind. And whenever a new animal moved to the jungle, the first thing they learned was Moki's important lesson: taking care of your home is everyone's responsibility! And Moki? He became known as Moki the Recycling Hero, and his jungle remained the most beautiful place in the entire world. The end - but remember, YOU can be a recycling hero too, just like Moki!"
      }
    ]
  },
  {
    id: 4,
    title: "Ocean Rescue Mission",
    description: "Dive into an underwater adventure to save marine life from plastic pollution. Meet friendly sea creatures who need our help to keep their ocean home clean and safe!",
    quiz: [
      {
        question: "Who led the Ocean Rescue Mission?",
        options: ["Marina the mermaid", "A dolphin", "A shark", "A crab"],
        correctAnswer: 0
      },
      {
        question: "What was hurting the ocean animals?",
        options: ["Cold water", "Plastic pollution", "Big waves", "Seaweed"],
        correctAnswer: 1
      },
      {
        question: "What did the sea turtle have stuck on its flipper?",
        options: ["Seaweed", "A plastic bag", "A rock", "A shell"],
        correctAnswer: 1
      },
      {
        question: "How can we help the ocean?",
        options: ["Only by swimming", "By using less plastic and recycling", "By staying away from beaches", "By catching fish"],
        correctAnswer: 1
      },
      {
        question: "What did Marina teach the children?",
        options: ["How to swim", "That ocean protection starts with our daily choices", "How to catch fish", "How to build sandcastles"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyOceanCover,
        text: "Beneath the sparkling blue waves, where sunlight dances through the water creating patterns of gold, lived Marina the mermaid. She loved her ocean home - the colorful coral reefs, playful dolphins, and gentle sea turtles. But something was wrong. Very wrong.",
        altText: "Marina the mermaid swimming in beautiful blue ocean with coral reefs"
      },
      {
        text: "One morning, Marina discovered something terrible. Plastic bags floated like jellyfish. Bottles tumbled along the ocean floor. Fishing nets were tangled in the coral. Her friend Shelly the sea turtle swam by with a plastic ring stuck around her flipper! 'This has to stop!' Marina declared. 'Our ocean is in danger, and we need help!'",
        image: storyOceanCh1,
        layout: "two-column-right",
        altText: "Marina discovering plastic pollution underwater, sea turtle with plastic ring"
      },
      {
        text: "Marina swam to the surface and called out to children playing on the beach. 'Please, I need your help!' she said. The children couldn't believe their eyes - a real mermaid! They gathered around as Marina explained the problem. 'The ocean is filling with plastic and trash. It's hurting my friends - the fish, turtles, dolphins, and whales. Will you help us?'",
        image: storyOceanCh2,
        layout: "two-column-left",
        altText: "Marina at ocean surface talking to surprised children on beach"
      },
      {
        text: "The children immediately wanted to help! Marina taught them the Ocean Rescue Rules: Rule 1 - Always throw trash in bins, never on the beach or in the water. Rule 2 - Use reusable water bottles instead of plastic ones. Rule 3 - Say no to plastic straws. Rule 4 - Recycle everything you can. Rule 5 - Pick up trash you see, even if it's not yours. 'These rules can save lives!' Marina explained.",
        image: storyOceanCh3,
        layout: "two-column-right",
        altText: "Children listening intently to Marina explaining the Ocean Rescue Rules"
      },
      {
        text: "The children got to work immediately! They picked up every piece of trash from the beach. They brought reusable bags and bottles. They told their friends and families about the Ocean Rescue Rules. Soon, more and more people joined the mission. Marina watched from the waves with tears of joy as her ocean home became cleaner and safer. Shelly the sea turtle was freed from the plastic ring. The dolphins leaped with happiness. The fish could swim freely again without dodging trash. 'Thank you, Ocean Heroes!' Marina called to the children. 'You've saved our home! Remember, every choice you make on land affects us in the ocean. When you recycle, when you reduce plastic use, when you pick up litter - you're protecting all of us who live beneath the waves!' From that day on, the beach stayed clean, and the ocean thrived. And the children? They became Ocean Guardians, protecting the sea and all its creatures for years to come!",
        image: storyOceanCh4,
        altText: "Clean ocean and beach with celebrating children and happy sea creatures"
      }
    ]
  },
  {
    id: 5,
    title: "The Garden Guardians",
    description: "Discover how a group of kids transform a sad empty lot into a thriving community garden, bringing life and joy to their neighborhood. Learn how composting and caring for plants can change everything!",
    quiz: [
      {
        question: "What was the lot like at the beginning of the story?",
        options: ["Beautiful and green", "Empty and sad", "Full of flowers", "Had a playground"],
        correctAnswer: 1
      },
      {
        question: "What did the children create?",
        options: ["A parking lot", "A community garden", "A store", "A school"],
        correctAnswer: 1
      },
      {
        question: "What is composting?",
        options: ["Throwing trash away", "Turning food scraps into rich soil", "Painting flowers", "Building fences"],
        correctAnswer: 1
      },
      {
        question: "What grew in the garden?",
        options: ["Only grass", "Vegetables, flowers, and herbs", "Just weeds", "Nothing"],
        correctAnswer: 1
      },
      {
        question: "What did the garden teach the neighborhood?",
        options: ["How to drive", "That working together can transform spaces", "How to cook", "How to paint"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyGardenCover,
        text: "At the end of Maple Street stood an empty lot. It was covered with dry dirt, scattered trash, and looked sad and forgotten. Every day, children walked past it on their way to school, wishing it could be something beautiful. Then one day, a girl named Maya had an incredible idea!",
        altText: "Empty dirt lot on Maple Street with sad appearance and scattered trash"
      },
      {
        text: "'What if we turned this empty lot into a garden?' Maya asked her friends at school. Her classmates loved the idea! There was Jamal, who loved digging in dirt. Sophie, who knew everything about flowers. Carlos, who was strong and could move heavy things. And little Emma, who just loved being outside. Together, they formed the Garden Guardians!",
        image: storyGardenCh1,
        layout: "two-column-right",
        altText: "Maya talking excitedly to group of diverse children at school"
      },
      {
        text: "The Garden Guardians asked their teacher, Ms. Green (what a perfect name!), to help. Ms. Green was thrilled! She taught them about composting - turning food scraps into rich, dark soil that plants love. 'Instead of throwing away your apple cores, banana peels, and vegetable scraps, we can turn them into garden gold!' she explained. The children were amazed that 'garbage' could become something so useful!",
        image: storyGardenCh2,
        layout: "two-column-left",
        altText: "Ms. Green teaching children about composting with compost bin"
      },
      {
        text: "Every day after school, the Garden Guardians worked on their lot. They picked up every piece of trash. They built a compost bin from old wooden pallets. They brought food scraps from home to add to the compost. Jamal dug plots for planting. Sophie planned which flowers would grow best together. Carlos built raised beds from recycled wood. Emma watered everything with a bright red watering can.",
        image: storyGardenCh3,
        layout: "two-column-right",
        altText: "Children working together in garden - digging, planting, building"
      },
      {
        text: "Week by week, something magical happened. The compost turned into rich, dark soil. Seeds they planted began to sprout tiny green shoots. Soon, tomatoes hung red and ripe from their vines. Sunflowers stretched tall toward the sky. Carrots grew underground. Zucchini plants spread their big leaves. Butterflies visited the flowers, and bees buzzed happily from blossom to blossom. The entire neighborhood came to see the transformation! The sad empty lot had become a thriving community garden. Neighbors started bringing their food scraps for the compost. Parents helped build more garden beds. Everyone took turns watering and weeding. The Garden Guardians had shown that with teamwork, care, and a little knowledge, you can transform anything! They learned that taking care of the Earth isn't just about big actions - sometimes it's about turning a small empty space into something beautiful and alive. And the best part? They got to eat the delicious vegetables they grew! Nothing tastes better than food you've grown yourself with your own hands.",
        image: storyGardenCh4,
        altText: "Thriving community garden with vegetables, flowers, neighbors working together"
      }
    ]
  },
  {
    id: 6,
    title: "Forest Protectors",
    description: "Journey with brave Paper Warriors on a mission to save ancient forests by promoting paper recycling and protecting precious trees that provide homes for animals and clean air for everyone.",
    quiz: [
      {
        question: "What were the Paper Warriors trying to protect?",
        options: ["Mountains", "Ancient forests", "Rivers", "Cities"],
        correctAnswer: 1
      },
      {
        question: "Who is the main character?",
        options: ["A tree", "Sam the Paper Warrior", "A bird", "A bear"],
        correctAnswer: 1
      },
      {
        question: "What happens when we recycle paper?",
        options: ["Trees get cut down", "Paper disappears", "Trees can keep growing", "Nothing changes"],
        correctAnswer: 2
      },
      {
        question: "What lived in the ancient forest?",
        options: ["Only insects", "Birds, squirrels, deer, and many animals", "Just trees", "Only people"],
        correctAnswer: 1
      },
      {
        question: "How can you become a Paper Warrior?",
        options: ["By wasting paper", "By recycling paper", "By never using paper", "By living in forests"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyForestCover,
        text: "In the heart of the ancient Whispering Woods stood the tallest, oldest trees you could imagine. These trees had been growing for hundreds of years, providing homes for birds, squirrels, deer, and countless other creatures. But these magnificent trees were in danger, and a brave group called the Paper Warriors was determined to save them!",
        altText: "Majestic ancient forest with towering old trees and wildlife"
      },
      {
        text: "Sam was a young Paper Warrior. Every day at school, Sam noticed something troubling. Students would use one side of paper and throw it away. Worksheets would go straight to the trash instead of the recycling bin. Notebooks with empty pages were discarded. 'Every piece of wasted paper means another tree might be cut down in the Whispering Woods!' Sam thought. Something had to change!",
        image: storyForestCh1,
        layout: "two-column-right",
        altText: "Sam at school looking concerned at wastepaper bin full of paper"
      },
      {
        text: "Sam started the Paper Warrior Club at school. The club's mission was simple but powerful: save paper, save trees, save the forest! They taught everyone the Three R's of Paper Protection: REDUCE - Use less paper by writing on both sides. REUSE - Save paper with blank spaces for drawing or scrap paper. RECYCLE - Always put used paper in the blue recycling bin. Soon, students all over the school were joining the Paper Warriors!",
        image: storyForestCh2,
        layout: "two-column-left",
        altText: "Sam leading Paper Warrior Club meeting with enthusiastic students"
      },
      {
        text: "The Paper Warriors made colorful posters showing how recycling works. They explained that when you recycle paper, it goes to a special factory where it's turned into pulp, cleaned, and made into new paper! 'One sheet of recycled paper can become a new notebook, a newspaper, or even cardboard boxes!' Sam explained. 'And every time we recycle paper instead of throwing it away, we save trees in the Whispering Woods from being cut down!'",
        image: storyForestCh3,
        layout: "two-column-right",
        altText: "Children looking at educational poster showing paper recycling process"
      },
      {
        text: "Paige now lived in a school where children wrote stories and drew pictures on her fresh white surface. Every time she looked at their happy faces, she thought about the trees standing tall in the Whispering Woods. Because Paige and her Paper Warrior friends were recycled, those trees got to keep growing, providing homes for animals and clean air for everyone. The ancient forest remained safe and protected, thanks to the brave Paper Warriors and children like Sam who chose to recycle. Every sheet of paper that gets recycled instead of thrown away is a victory for the forests! So remember, young protectors: when you recycle paper, you become a Paper Warrior too. You're not just recycling - you're protecting forests, saving trees, and giving paper new life. Together, we can keep our forests standing tall and strong for generations to come!",
        image: storyForestCh4,
        altText: "Protected ancient forest with children using recycled paper happily"
      }
    ]
  },
  {
    id: 7,
    title: "Recycling Racers",
    description: "Join the exciting race where speed meets sustainability! Kids compete to sort recyclables correctly while racing through colorful courses. Learn that recycling can be fast, fun, and saves the planet!",
    pages: [
      {
        image: bookRecyclingRacers,
        text: "Welcome to the Recycling Racing Championship! Where the fastest sorters become heroes of the Earth.",
        altText: "Children racing with colorful recycling bins",
      }
    ]
  },
  {
    id: 8,
    title: "Compost Champions",
    description: "Discover the magical world beneath the soil! Meet friendly worms and microbes that turn food scraps into garden gold. Learn how composting creates a cycle of life that feeds our planet.",
    pages: [
      {
        image: bookCompostChampions,
        text: "In the garden, something magical happens when we compost. Let's meet the tiny heroes who turn our leftovers into rich, healthy soil!",
        altText: "Happy children learning about composting with worms",
      }
    ]
  },
  {
    id: 9,
    title: "Water Warriors",
    description: "Every drop counts! Join brave Water Warriors as they protect precious water resources. Discover clever ways to save water at home and become a water-saving superhero!",
    pages: [
      {
        image: bookWaterWarriors,
        text: "Water is precious, and Water Warriors know how to protect every single drop. Join the mission to save our blue planet!",
        altText: "Superhero kids protecting water drops",
      }
    ]
  },
  {
    id: 10,
    title: "Energy Explorers",
    description: "Explore the amazing power of the sun and wind! Join young explorers discovering renewable energy and how it lights up our world without harming the planet.",
    pages: [
      {
        image: bookEnergyExplorers,
        text: "The sun shines, the wind blows, and our Energy Explorers are ready to discover clean power that protects our Earth!",
        altText: "Children exploring solar panels and wind turbines",
      }
    ]
  },
  {
    id: 11,
    title: "Pollution Patrol",
    description: "Suit up, Pollution Patrol! Armed with grabbers and determination, kids transform littered parks into clean, green spaces. Every piece of trash collected is a victory for nature!",
    pages: [
      {
        image: bookPollutionPatrol,
        text: "The Pollution Patrol is on duty! With teamwork and dedication, we can clean up our parks and make them beautiful again.",
        altText: "Kids patrol team cleaning up litter in park",
      }
    ]
  },
  {
    id: 12,
    title: "Climate Crusaders",
    description: "Embark on an epic quest to understand climate change! Young crusaders learn about Earth's temperature, weather patterns, and how we can all be climate heroes.",
    pages: [
      {
        image: bookClimateCrusaders,
        text: "Climate Crusaders unite! Together we'll learn about our changing planet and discover how we can protect it for future generations.",
        altText: "Children as climate crusaders with Earth globe",
      }
    ]
  },
  {
    id: 13,
    title: "Biodiversity Brigade",
    description: "Protect the amazing variety of life on Earth! Join the Biodiversity Brigade as they safeguard animals, plants, and habitats. Every creature matters in nature's grand design!",
    pages: [
      {
        image: bookBiodiversityBrigade,
        text: "From tiny insects to majestic trees, the Biodiversity Brigade protects all living things. Nature's diversity is our planet's treasure!",
        altText: "Kids protecting diverse animals in habitats",
      }
    ]
  },
  {
    id: 14,
    title: "Waste Wizards",
    description: "Cast powerful reduce, reuse, and recycle spells! Waste Wizards use magic to minimize trash and transform waste into wonders. Learn the enchanting ways to create less garbage!",
    pages: [
      {
        image: bookWasteWizards,
        text: "With wands of wisdom and spells of sustainability, Waste Wizards make garbage disappear by reducing, reusing, and recycling!",
        altText: "Wizard children reducing waste with magic",
      }
    ]
  }
];
