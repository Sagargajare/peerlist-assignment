export interface IUser {
  name: string;
  image: string;
  jobTitle: string;
  company: string;
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
  },
  akash: {
    name: "Akash Bhadange",
    image: "/assets/profile/akash.svg",
    jobTitle: "Co-Founder CTO",
    company: "Peerlist",
  },
  ronald: {
    name: "Ronald Richards",
    image: "/assets/profile/ronald.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
  },
  esther: {
    name: "Esther Howard",
    image: "/assets/profile/esther.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
  },
  leslie: {
    name: "Leslie Alexander",
    image: "/assets/profile/leslie.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
  },
  guy: {
    name: "Guy Hawkins",
    image: "/assets/profile/guy.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
  },
  cody: {
    name: "Cody Fisher",
    image: "/assets/profile/cody.svg",
    jobTitle: "Cloud Consultant",
    company: "Rapid Circle",
  },
};

export default Users;
