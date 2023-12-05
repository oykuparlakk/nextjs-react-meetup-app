import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "DENEME",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png",
    address: "deneme",
    description: "dummy data",
  },
  {
    id: "m2",
    title: "DENEME2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png",
    address: "deneme",
    description: "dummy data",
  },
  {
    id: "m3",
    title: "DENEME3",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png",
    address: "deneme",
    description: "dummy data",
  },
];

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   TODO fetch data from api
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from api
  return {
    props: {
      meetups:DUMMY_MEETUPS
    },
    revalidate:1
  };
}
export default HomePage;
