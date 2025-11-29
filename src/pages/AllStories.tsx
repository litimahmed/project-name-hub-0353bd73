import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X, Sparkles } from "lucide-react";

// Import book images
import bookEarthGuardian from "@/assets/book-earth-guardian.jpg";
import bookEarthHero from "@/assets/book-earth-hero.jpg";
import bookJungleRecycling from "@/assets/book-jungle-new.jpg";
import bookOceanRescue from "@/assets/book-ocean-new.jpg";
import bookGardenMagic from "@/assets/book-garden-new.jpg";
import bookForestGuardians from "@/assets/book-forest-new.jpg";
import bookRecyclingRacers from "@/assets/book-recycling-racers.jpg";
import bookCompostChampions from "@/assets/book-compost-champions.jpg";
import bookWaterWarriors from "@/assets/book-water-warriors.jpg";
import bookEnergyExplorers from "@/assets/book-energy-explorers.jpg";
import bookPollutionPatrol from "@/assets/book-pollution-patrol.jpg";
import bookClimateCrusaders from "@/assets/book-climate-crusaders.jpg";
import bookBiodiversityBrigade from "@/assets/book-biodiversity-brigade.jpg";
import bookWasteWizards from "@/assets/book-waste-wizards.jpg";

const AllStories = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedAge, setSelectedAge] = useState<string>("all");

  const allBooks = [
    {
      id: 2,
      title: "Captain Earth Saves the Day",
      image: bookEarthHero,
      color: "eco-green",
      readingTime: "4 min",
      category: "Environmental Heroes",
      ageGroup: "5-8",
      description: "Meet Captain Earth, the superhero who protects our planet! Learn how small actions like recycling and saving water can make you an Earth hero too!",
      featured: true,
    },
    {
      id: 1,
      title: "Luna's Earth Guardian Mission",
      image: bookEarthGuardian,
      color: "eco-blue",
      readingTime: "5 min",
      category: "Superhero Adventures",
      ageGroup: "7-10",
      description: "When Luna discovers her magical Earth powers, she must fly through the city transforming trash into beautiful nature! Follow her incredible journey.",
    },
    {
      id: 3,
      title: "Moki's Jungle Recycling Adventure",
      image: bookJungleRecycling,
      color: "eco-yellow",
      readingTime: "5 min",
      category: "Animal Adventures",
      ageGroup: "5-8",
      description: "Follow Moki the monkey on an exciting jungle quest to teach his friends about recycling! A fun adventure with valuable lessons.",
    },
    {
      id: 4,
      title: "Ocean Rescue Mission",
      image: bookOceanRescue,
      color: "eco-blue",
      readingTime: "5 min",
      category: "Ocean Conservation",
      ageGroup: "7-10",
      description: "Dive into an underwater adventure to save marine life from plastic pollution. Meet friendly sea creatures who need our help!",
    },
    {
      id: 5,
      title: "The Garden Guardians",
      image: bookGardenMagic,
      color: "eco-green",
      readingTime: "4 min",
      category: "Nature & Plants",
      ageGroup: "5-8",
      description: "Discover how a group of kids transform a sad empty lot into a thriving community garden, bringing life and joy to their neighborhood.",
    },
    {
      id: 6,
      title: "Forest Protectors",
      image: bookForestGuardians,
      color: "eco-green",
      readingTime: "5 min",
      category: "Forest Conservation",
      ageGroup: "8-12",
      description: "Journey with brave Paper Warriors on a mission to save ancient forests by promoting paper recycling and protecting precious trees.",
    },
    {
      id: 7,
      title: "Recycling Racers",
      image: bookRecyclingRacers,
      color: "eco-yellow",
      readingTime: "3 min",
      category: "Fun & Games",
      ageGroup: "5-7",
      description: "Join the exciting race where speed meets sustainability! Kids compete to sort recyclables correctly while racing through colorful courses.",
    },
    {
      id: 8,
      title: "Compost Champions",
      image: bookCompostChampions,
      color: "eco-green",
      readingTime: "4 min",
      category: "Nature & Plants",
      ageGroup: "6-9",
      description: "Discover the magical world beneath the soil! Meet friendly worms and microbes that turn food scraps into garden gold.",
    },
    {
      id: 9,
      title: "Water Warriors",
      image: bookWaterWarriors,
      color: "eco-blue",
      readingTime: "4 min",
      category: "Water Conservation",
      ageGroup: "6-9",
      description: "Every drop counts! Join brave Water Warriors as they protect precious water resources and become water-saving superheroes!",
    },
    {
      id: 10,
      title: "Energy Explorers",
      image: bookEnergyExplorers,
      color: "eco-yellow",
      readingTime: "5 min",
      category: "Renewable Energy",
      ageGroup: "8-12",
      description: "Explore the amazing power of the sun and wind! Join young explorers discovering renewable energy and clean power.",
    },
    {
      id: 11,
      title: "Pollution Patrol",
      image: bookPollutionPatrol,
      color: "eco-yellow",
      readingTime: "4 min",
      category: "Environmental Heroes",
      ageGroup: "6-9",
      description: "Suit up, Pollution Patrol! Armed with grabbers and determination, kids transform littered parks into clean, green spaces.",
    },
    {
      id: 12,
      title: "Climate Crusaders",
      image: bookClimateCrusaders,
      color: "eco-blue",
      readingTime: "6 min",
      category: "Climate Action",
      ageGroup: "9-12",
      description: "Embark on an epic quest to understand climate change! Young crusaders learn about Earth's temperature and how we can be heroes.",
    },
    {
      id: 13,
      title: "Biodiversity Brigade",
      image: bookBiodiversityBrigade,
      color: "eco-green",
      readingTime: "5 min",
      category: "Wildlife Protection",
      ageGroup: "7-10",
      description: "Protect the amazing variety of life on Earth! Join the Biodiversity Brigade as they safeguard animals, plants, and habitats.",
    },
    {
      id: 14,
      title: "Waste Wizards",
      image: bookWasteWizards,
      color: "eco-blue",
      readingTime: "4 min",
      category: "Fun & Games",
      ageGroup: "6-9",
      description: "Cast powerful reduce, reuse, and recycle spells! Waste Wizards use magic to minimize trash and transform waste into wonders.",
    },
  ];

  const handleBookClick = (bookId: number) => {
    navigate(`/story/${bookId}`);
  };

  const categories = ["all", ...Array.from(new Set(allBooks.map(book => book.category)))];
  const ageGroups = ["all", "5-7", "6-9", "7-10", "8-12", "9-12"];

  const filteredBooks = useMemo(() => {
    return allBooks.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
      const matchesAge = selectedAge === "all" || book.ageGroup === selectedAge;
      
      return matchesSearch && matchesCategory && matchesAge;
    });
  }, [searchQuery, selectedCategory, selectedAge, allBooks]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedAge("all");
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || selectedAge !== "all";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-eco-green/5">
      <Header books={allBooks} onBookClick={handleBookClick} />
      
      {/* Hero Section with Sparkles */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-eco-yellow/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-20 w-40 h-40 bg-eco-blue/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-36 h-36 bg-eco-green/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-eco-green/20 to-eco-blue/20 px-6 py-3 rounded-full mb-6 border border-eco-green/30"
            >
              <Sparkles className="w-5 h-5 text-eco-yellow animate-pulse" />
              <span className="text-sm font-semibold text-foreground">14 Amazing Stories</span>
              <Sparkles className="w-5 h-5 text-eco-yellow animate-pulse" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-eco-green via-eco-blue to-eco-green bg-clip-text text-transparent leading-tight">
              All Stories Collection
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Embark on amazing eco-adventures! Each story teaches important lessons about protecting our beautiful planet. 🌍✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/50"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for stories... 🔍"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-xl border-2 focus:border-eco-green transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-eco-green" />
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Categories</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 ${
                    selectedCategory === category 
                      ? "bg-eco-green text-white shadow-lg" 
                      : "hover:border-eco-green"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "🌟 All Stories" : category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Age Group Filters */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-eco-blue" />
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Age Groups</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {ageGroups.map((age) => (
                <Badge
                  key={age}
                  variant={selectedAge === age ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 ${
                    selectedAge === age 
                      ? "bg-eco-blue text-white shadow-lg" 
                      : "hover:border-eco-blue"
                  }`}
                  onClick={() => setSelectedAge(age)}
                >
                  {age === "all" ? "👶 All Ages" : `Ages ${age}`}
                </Badge>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 pt-6 border-t border-border/50"
            >
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="w-full md:w-auto hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="w-4 h-4 mr-2" />
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Stories Grid */}
      <section className="container mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          {filteredBooks.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BookCard
                    title={book.title}
                    image={book.image}
                    color={book.color}
                    readingTime={book.readingTime}
                    category={book.category}
                    description={book.description}
                    onClick={() => navigate(`/story/${book.id}`)}
                    featured={book.featured}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">No Stories Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms
              </p>
              <Button onClick={clearFilters} className="bg-eco-green hover:bg-eco-green/90">
                Show All Stories
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
};

export default AllStories;