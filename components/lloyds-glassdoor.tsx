"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Star, User } from "lucide-react"

const dummyData = {
  companyInfo: {
    name: "Lloyds Banking Company",
    rating: 3.7,
    description: "A bank that's been around since the dawn of currency... or so they claim.",
  },
  locations: [
    { id: 1, name: "London HQ", address: "25 Gresham St, London EC2V 7HN" },
    { id: 2, name: "Manchester Branch", address: "42 Spring Gardens, Manchester M2 1BS" },
    { id: 3, name: "Edinburgh Office", address: "The Mound, Edinburgh EH1 1YZ" },
    { id: 4, name: "Birmingham Branch", address: "125 Colmore Row, Birmingham B3 3SD" },
    { id: 5, name: "Glasgow Office", address: "110 St Vincent Street, Glasgow G2 5ER" },
    { id: 6, name: "Leeds Branch", address: "8 Park Row, Leeds LS1 5HD" },
    { id: 7, name: "Bristol Office", address: "Wine Street, Bristol BS1 2AN" },
    { id: 8, name: "Cardiff Branch", address: "31 Queen Street, Cardiff CF10 2AG" },
    { id: 9, name: "Belfast Office", address: "4 Queen's Square, Belfast BT1 3DJ" },
    { id: 10, name: "Liverpool Branch", address: "5 India Buildings, Water Street, Liverpool L2 0QS" },
    { id: 11, name: "Newcastle Branch", address: "102 Grey Street, Newcastle upon Tyne NE1 6AG" },
    { id: 12, name: "Southampton Office", address: "24 Above Bar Street, Southampton SO14 7DW" },
    { id: 13, name: "Nottingham Branch", address: "Old Market Square, Nottingham NG1 6FD" },
  ],
  app: {
    rating: 2.5,
    description: "Our app is so secure, even we can't access it sometimes!",
    features: [
      "Mobile check deposit (60% success rate)",
      "Biometric login (works for identical twins too!)",
      "Bill pay (we'll pay your bills... eventually)",
      "Account alerts (spoiler: you're always low on funds)",
      "Cardless ATM access (because who needs cards in a digital age?)",
      "Budgeting tools (to show you where your money would go if you had any)",
      "Instant transfers (instant in geological time)",
      "Virtual assistant (named Lloyd, of course)",
      "Investment tracking (watch your pennies turn into... slightly more pennies)",
      "Branch and ATM locator (for when the app inevitably crashes)",
    ]
  },
  services: [
    { id: 1, name: "Personal Banking", description: "We'll personally ensure your money stays put." },
    { id: 2, name: "Business Banking", description: "Making business complicated since 1765." },
    { id: 3, name: "Mortgages", description: "Own a house in 30 short years!" },
    { id: 4, name: "Credit Cards", description: "Spend money you don't have, with style!" },
    { id: 5, name: "Loans", description: "Because who doesn't want to be in debt?" },
    { id: 6, name: "Savings Accounts", description: "Watch your money grow at the speed of a glacier." },
    { id: 7, name: "Investment Services", description: "Let us gamble with your money, professionally." },
    { id: 8, name: "Insurance", description: "Protecting you from everything except our fees." },
    { id: 9, name: "International Banking", description: "Lose money in multiple currencies!" },
    { id: 10, name: "Student Accounts", description: "Start your adult life with a bang (and an overdraft)." },
    { id: 11, name: "Private Banking", description: "For when you're too rich for regular banking." },
    { id: 12, name: "Wealth Management", description: "We'll manage your wealth... right into our pockets." },
    { id: 13, name: "Retirement Planning", description: "Plan for a future where you can afford instant noodles." },
  ],
  salaries: [
    { id: 1, role: "Teller", salary: "£18,000 - £25,000" },
    { id: 2, role: "Branch Manager", salary: "£35,000 - £50,000" },
    { id: 3, role: "IT Specialist", salary: "£40,000 - £60,000" },
    { id: 4, role: "Financial Advisor", salary: "£30,000 - £45,000" },
    { id: 5, role: "Loan Officer", salary: "£25,000 - £40,000" },
    { id: 6, role: "Investment Banker", salary: "£50,000 - £150,000" },
    { id: 7, role: "Risk Analyst", salary: "£35,000 - £55,000" },
    { id: 8, role: "Compliance Officer", salary: "£40,000 - £65,000" },
    { id: 9, role: "Marketing Specialist", salary: "£30,000 - £50,000" },
    { id: 10, role: "Human Resources Manager", salary: "£45,000 - £70,000" },
    { id: 11, role: "Data Scientist", salary: "£50,000 - £80,000" },
    { id: 12, role: "Cybersecurity Expert", salary: "£55,000 - £90,000" },
    { id: 13, role: "CEO", salary: "£1,000,000 - 'Sky's the limit'" },
  ],
  reviews: [
    {
      id: 1,
      author: "Happy Employee",
      rating: 5,
      title: "Great place to work!",
      content: "I love working here. The free coffee is amazing!",
      comments: [
        { id: 1, author: "Skeptical Steve", content: "Are you sure you work at Lloyds?" },
        { id: 2, author: "HR Rep", content: "We're glad you're enjoying the coffee! Don't forget about our great benefits too!" },
      ],
    },
    {
      id: 2,
      author: "Disgruntled Dan",
      rating: 2,
      title: "Meh, it's a job",
      content: "The pay is okay, but the managers think they're running Gringotts.",
      comments: [
        { id: 3, author: "Manager Mike", content: "We take our security very seriously, Dan." },
        { id: 4, author: "Witty Wendy", content: "At least the goblins at Gringotts were efficient!" },
      ],
    },
    {
      id: 3,
      author: "Overworked Oliver",
      rating: 3,
      title: "Decent job, but stressful",
      content: "The work-life balance is more like work-work balance. But hey, free stress ball!",
      comments: [
        { id: 5, author: "Zen Zoe", content: "Have you tried our mindfulness workshops?" },
        { id: 6, author: "Sarcastic Sam", content: "Perfect! Now you can squeeze the stress ball while working overtime!" },
      ],
    },
    {
      id: 4,
      author: "Tech-Savvy Tina",
      rating: 4,
      title: "Great tech, slow processes",
      content: "Our systems are cutting-edge, but it takes 5 approvals to change a comma in a document.",
      comments: [
        { id: 7, author: "Bureaucrat Bob", content: "Those 5 approvals ensure quality, Tina!" },
        { id: 8, author: "Efficient Emma", content: "I've developed a side hustle just processing approval requests." },
      ],
    },
    {
      id: 5,
      author: "Customer-Focused Cathy",
      rating: 4,
      title: "Love helping customers, hate the scripts",
      content: "I enjoy assisting customers, but our script makes me sound like a robot. Beep boop.",
      comments: [
        { id: 9, author: "Manager Mark", content: "The script ensures consistency, Cathy." },
        { id: 10, author: "Rebel Rachel", content: "I've memorized the script and now perform it as interpretive dance." },
      ],
    },
    {
      id: 6,
      author: "Ambitious Andy",
      rating: 3,
      title: "Good stepping stone",
      content: "Decent place to start, but promotion is slower than our legacy systems.",
      comments: [
        { id: 11, author: "Lifer Larry", content: "I've been here 40 years and I'm almost middle management!" },
        { id: 12, author: "HR Heather", content: "Have you considered our lateral move opportunities?" },
      ],
    },
    {
      id: 7,
      author: "Eco-Warrior Ethan",
      rating: 2,
      title: "Not green enough",
      content: "We use more paper than a origami convention. What happened to digital transformation?",
      comments: [
        { id: 13, author: "Digital Daisy", content: "But we have that one recycling bin by the printer!" },
        { id: 14, author: "Tree-Hugger Tim", content: "I've started bringing my own reusable paper to work." },
      ],
    },
    {
      id: 8,
      author: "Social Butterfly Sarah",
      rating: 5,
      title: "Amazing work culture!",
      content: "The team-building events are fantastic. Last week we had a 'Dress as Your Favorite Currency' day!",
      comments: [
        { id: 15, author: "Introvert Ian", content: "Is it too late to transfer to the work-from-home department?" },
        { id: 16, author: "Party Planner Patty", content: "Wait till you see next week's 'Audit-palooza'!" },
      ],
    },
    {
      id: 9,
      author: "Frustrated Frank",
      rating: 1,
      title: "Outdated everything",
      content: "Our computers are so old, I think I saw 'Atari' written on the back of one.",
      comments: [
        { id: 17, author: "IT Ivy", content: "Have you tried turning it off and on again?" },
        { id: 18, author: "Retro Ron", content: "You should see our abacus collection in the basement!" },
      ],
    },
    {
      id: 10,
      author: "Positive Polly",
      rating: 5,
      title: "Best job ever!",
      content: "Every day is a joy! The customers are always right, and the systems never crash!",
      comments: [
        { id: 19, author: "Realistic Rita", content: "Polly, blink twice if you need help." },
        { id: 20, author: "Concerned Carl", content: "Has anyone checked if Polly's been replaced by an AI?" },
      ],
    },
    {
      id: 11,
      author: "Mediocre Mel",
      rating: 3,
      title: "It's fine, I guess",
      content: "It's a job. It pays the bills. The water cooler is usually full. What more can you ask for?",
      comments: [
        { id: 21, author: "Enthusiastic Eddie", content: "But Mel, have you tried our new flavored water options?" },
        { id: 22, author: "Apathetic Alex", content: "Mel for president. 'It's fine, I guess' should be our new slogan." },
      ],
    },
    {
      id: 12,
      author: "Caffeinated Casey",
      rating: 4,
      title: "Great job, better coffee",
      content: "The work is challenging, but the real perk is the premium coffee. I think I can see sounds now!",
      comments: [
        { id: 23, author: "Health Nut Hannah", content: "Have you considered switching to herbal tea?" },
        { id: 24, author: "Jittery Jake", content: "I've replaced my blood with coffee and now I can predict the stock market." },
      ],
    },
    {
      id: 13,
      author: "Dress Code Rebel Debbie",
      rating: 2,
      title: "Too stuffy",
      content: "They said my 'Money Heist' costume wasn't appropriate for casual Friday. No sense of humor!",
      comments: [
        { id: 25, author: "HR Helen", content: "Debbie, we've been over this. No ski masks in the office." },
        { id: 26, author: "Fashion-Forward Freddie", content: "Next time, try dressing as a piggy bank. It's both cute and on-brand!" },
      ],
    },
  ],
}

export function LloydsGlassdoor() {
  const [newComment, setNewComment] = useState("")
  const [reviews, setReviews] = useState(dummyData.reviews)

  const addComment = (reviewId: number) => {
    if (newComment.trim() === "") return

    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === reviewId
          ? {
              ...review,
              comments: [
                ...review.comments,
                { id: Date.now(), author: "Anonymous", content: newComment },
              ],
            }
          : review
      )
    )
    setNewComment("")
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">{dummyData.companyInfo.name}</CardTitle>
          <CardDescription className="flex items-center">
            <Star className="text-yellow-400 mr-1" />
            {dummyData.companyInfo.rating} out of 5
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{dummyData.companyInfo.description}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="locations" className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="app">App</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="salaries">Salaries</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="locations">
          <Card>
            <CardHeader>
              <CardTitle>Physical Bank Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dummyData.locations.map(location => (
                  <div key={location.id} className="mb-4">
                    <h3 className="text-lg font-semibold">{location.name}</h3>
                    <p className="flex items-center">
                      <MapPin className="mr-2" /> {location.address}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="app">
          <Card>
            <CardHeader>
              <CardTitle>Lloyds Banking App</CardTitle>
              <CardDescription className="flex items-center">
                <Star className="text-yellow-400 mr-1" />
                {dummyData.app.rating} out of 5
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{dummyData.app.description}</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">App Features:</h3>
              <ul className="list-disc pl-5">
                {dummyData.app.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="mt-4 italic">
                "I've never felt so secure knowing that I can't access my own money!" - Anonymous User
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dummyData.services.map(service => (
                  <div key={service.id} className="mb-4">
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="salaries">
          <Card>
            <CardHeader>
              <CardTitle>Salary Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dummyData.salaries.map(salary => (
                  <div key={salary.id} className="mb-4">
                    <h3 className="text-lg font-semibold">{salary.role}</h3>
                    <p>{salary.salary}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 italic">
                "Our CEO's salary is measured in yachts per annum." - Anonymous Insider
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Employee Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              {reviews.map(review => (
                <div key={review.id} className="mb-8 border-b pb-4">
                  <h3 className="text-lg font-semibold">{review.title}</h3>
                  <div className="flex items-center mb-2">
                    <User className="mr-2" />
                    {review.author}
                    <span className="ml-2 flex items-center">
                      <Star className="text-yellow-400 mr-1" />
                      {review.rating}
                    </span>
                  </div>
                  <p>{review.content}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Comments:</h4>
                    {review.comments.map(comment => (
                      <div key={comment.id} className="ml-4 mb-2">
                        <span className="font-semibold">{comment.author}: </span>
                        {comment.content}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Textarea
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={e => setNewComment(e.target.value)}
                      className="mb-2"
                    />
                    <Button onClick={() => addComment(review.id)}>Add Comment</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}