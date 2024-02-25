export interface IUser {
  name: string;
  image: string;
  jobTitle: string;
  company: string;
  email: string;
  contactNumber: string;
}

interface IUsers {
  [key: string]: IUser;
}

const Users: IUsers = {
  yogini: {
    name: "Yogini",
    image: "/assets/profile/yogini.svg",
    jobTitle: "Co-Founder CEO",
    company: "Peerlist",
    email: "yogini@example.com",
    contactNumber: "123-456-7890",
  },
  akash: {
    name: "Akash Bhadange",
    image: "/assets/profile/akash.svg",
    jobTitle: "Co-Founder CTO",
    company: "Peerlist",
    email: "akash@example.com",
    contactNumber: "234-567-8901",
  },
  ronald: {
    name: "Ronald Richards",
    image: "/assets/profile/ronald.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
    email: "ronald@example.com",
    contactNumber: "345-678-9012",
  },
  esther: {
    name: "Esther Howard",
    image: "/assets/profile/esther.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
    email: "esther@example.com",
    contactNumber: "456-789-0123",
  },
  leslie: {
    name: "Leslie Alexander",
    image: "/assets/profile/leslie.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
    email: "leslie@example.com",
    contactNumber: "567-890-1234",
  },
  guy: {
    name: "Guy Hawkins",
    image: "/assets/profile/guy.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
    email: "guy@example.com",
    contactNumber: "678-901-2345",
  },
  cody: {
    name: "Cody Fisher",
    image: "/assets/profile/cody.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
    email: "cody@example.com",
    contactNumber: "789-012-3456",
  },
  sagar: {
    name: "Sagar Gajare",
    image: "/assets/profile/esther.svg",
    jobTitle: "Software Engineer I (Frontend)",
    company: "Helpshift Inc.",
    email: "sggajare360@gmail.com",
    contactNumber: "+91 7720889308",
  },
};

export default Users;
