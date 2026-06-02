import Card from './components/Card'


const App = () => {

const jobOpenings = [
  {
    brandLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1XZ6PYStWbzMUa_3dgXopVPzYnMtaIsPFQ&s",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxKYJk-lyQEXHHCZBWsN20X_iWvzzaYMQbw&s",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2699/PNG/512/amazon_logo_icon_169611.png",
    companyName: "Amazon",
    datePosted: "2 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "7 days ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?_=20210729021049",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/nvidia-7.svg",
    companyName: "NVIDIA",
    datePosted: "1 day ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/openai-new-logo_f252fc.png?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400",
    companyName: "OpenAI",
    datePosted: "8 days ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Adobe_logo.jpg",
    companyName: "Adobe",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.logo.wine/a/logo/Uber/Uber-White-Dark-Background-Logo.wine.svg",
    companyName: "Uber",
    datePosted: "9 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  }
];




  
  return (
    <div className='parent'>
     
     {jobOpenings.map(function(elem,idx){
      return  <div key={idx}> <Card  company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2}
      pay={elem.pay} location={elem.location}  dateposted={elem.datePosted} brandlogo={elem.brandLogo}/>
      </div>
     })}

      </div>
    
  )
}

export default App
